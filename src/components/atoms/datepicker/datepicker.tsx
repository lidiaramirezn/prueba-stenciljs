import { Component, h, Prop, State, Event, EventEmitter, Element, Listen } from "@stencil/core/internal";
import dayjs from 'dayjs';

@Component({
  tag: 'date-picker',
  styleUrl: 'datepicker.scss',
  shadow: true
})
export class JanusDatePicker {
  @Element() el: HTMLElement;
  @Prop() placeholder: string= '';
  @Prop({mutable: true}) startview: string  = 'days'; // 'days' | 'multi-year'| 'month' | 'year';
  @Prop({mutable: true}) value: any;
  @Prop({ mutable: true }) disable: boolean = false;
  @Prop({ mutable: true }) lock: boolean = false;
  @Prop({ mutable: true }) maxdatecurrent: boolean = false;
  @Prop({ mutable: true }) error: boolean = false;
  @Prop({ mutable: true }) selectedDate: boolean = false;
  @State() nYearsVisible: number = 12;
  @State() currentYear: any;
  @State() currentMonth: any;
  @State() currentDay: any;
  @State() arrayYears: any[] = [];
  @State() arrayMonths: any[] = [];
  @State() arrayDays: any[] = [];
  @State() arrayDaysOfWeek: any[] = [];
  @State() isDatepickerClosed: boolean = true;
  @State() isPanelMultiYearClosed: boolean = true;
  @State() isPanelYearClosed: boolean = true;
  @State() isPanelMonthClosed: boolean = true;
  @State() isPanelDaysClosed: boolean = true;
  @State() selectMonth;
  @State() selectYear;
  @State() selectDay;
  @State() widthComponent;

  @Event() newValue: EventEmitter;

  render() {
    return(
      <div>
        <div class={this.getClassMain()} id="janus-datepicker">
          <input type="text" class="janus-datepicker__input"
            value={this.value}
            readOnly
            placeholder={ this.placeholder }
            disabled={this.disable || this.lock}
            onFocus={(e) => this.handleFocus(e)} />
          <div class="janus-datepicker__wrapper-icon">
            <p-janus-svg name="CALENDAR" viewbox="0 0 16 18" width="16" height="18"></p-janus-svg>
          </div>
          <div class={this.getClassPanel()} tabindex="10">
            <div class={this.getClassPanelMultiYear()}>
              <div class="janus-datepicker__panel-header">
                <div class="content-center">
                  <p-janus-svg name="ARROW_LEFT" viewbox="0 0 13 12" width="13" height="12"
                    onClick={(ev: any) => this.resetPanelYearsLeft(ev)}>
                  </p-janus-svg>
                </div>
                <div>
                  {this.arrayYears[0]} - {this.arrayYears[this.arrayYears.length - 1]}
                </div>
                <div class="content-center">
                  <p-janus-svg name="ARROW_RIGTH" viewbox="0 0 13 12" width="13" height="12"
                    onClick={(ev: any) => this.resetPanelYearsRigth(ev)}>
                  </p-janus-svg>
                </div>
              </div>
              <div class="janus-datepicker__panel-body">
                { this.arrayYears.map((item) =>
                    <div class="janus-datepicker__item-wrapper">
                      {
                        this.yearAfterNow(item) ?
                        <a class="janus-datepicker__item janus-datepicker__item--disable">{item}</a> :
                        this.selectYear == item && this.selectedDate ?
                        <a class="janus-datepicker__item janus-datepicker__item--active" onClick= { e => this.clickMultiYear(e, item)}>{item}</a> :
                        <a class="janus-datepicker__item" onClick= { e => this.clickMultiYear(e, item)}>{item}</a>
                      }
                    </div>)
                }
              </div>
            </div>
            <div class={this.getClassPanelMonths()}>
              <div class="janus-datepicker__panel-header--center">
                <div class="janus-datepicker__button" onClick={(ev: any) => this.createMultiYear(ev)}>
                  {this.selectYear}
                </div>
              </div>
              <div class="janus-datepicker__panel-body">
                { this.arrayMonths.map((item) =>
                    <div class="janus-datepicker__item-wrapper">
                      {
                        this.monthAfterNow(item.id) ?
                        <a class="janus-datepicker__item janus-datepicker__item--disable">{item.description}</a> :
                        this.selectMonth == item.value && this.selectedDate ?
                        <a class="janus-datepicker__item janus-datepicker__item--active" onClick= { e => this.clickMonth(e, item)}>{item.description}</a> :
                        <a class="janus-datepicker__item" onClick= { e => this.clickMonth(e, item)}>{item.description}</a>
                      }
                    </div>)
                }
              </div>
            </div>
            <div class={this.getClassPanelDays()}>
              <div class="janus-datepicker__panel-header">
                <div class="content-center">
                  <p-janus-svg name="ARROW_LEFT" viewbox="0 0 13 12" width="13" height="12"
                    onClick={(ev: any) => this.resetPanelDaysLeft(ev)}>
                  </p-janus-svg>
                </div>
                <div>
                  <a class="janus-datepicker__button" onClick={() => this.createMonths()}>{ this.arrayMonths[this.selectMonth-1].description  }</a> -
                  <a class="janus-datepicker__button" onClick={(ev: any) => this.createMultiYear(ev)}>{ this.selectYear }</a>
                </div>
                <div class="content-center">
                  { this.selectMonth == this.currentMonth && this.selectYear == this.currentYear ?
                      <p-janus-svg name="ARROW_RIGTH" viewbox="0 0 13 12" width="13" height="12">
                      </p-janus-svg> :
                      <p-janus-svg name="ARROW_RIGTH" viewbox="0 0 13 12" width="13" height="12"
                        onClick={(ev: any) => this.resetPanelDaysRigth(ev)}>
                      </p-janus-svg>
                  }
                </div>
              </div>
              <div class="janus-datepicker__panel-header-week">
                {
                  this.arrayDaysOfWeek.map((item) =>
                  <div>
                    {item.description}
                  </div>)
                }
              </div>
              <div class="janus-datepicker__panel-body-days">
                {
                  this.arrayDays.map((item) =>
                    <div class="janus-datepicker__item-day-wrapper">
                      {
                        this.dayAfterNow(item) ?
                        <a class="janus-datepicker__item-day janus-datepicker__item-day--disable">{item}</a> :
                        this.value && this.selectDay == item && this.selectedDate ?
                        <a class="janus-datepicker__item-day janus-datepicker__item-day--active" onClick= { e => this.clickDay(e, item)}>{item}</a> :
                        <a class="janus-datepicker__item-day" onClick= { e => this.clickDay(e, item)}>{item}</a>
                      }
                      {/* {
                        this.maxdatecurrent &&
                        this.currentDay < item && (this.selectMonth === this.currentMonth || this.selectMonth > this.currentMonth) ?
                        <a class="janus-datepicker__item-day janus-datepicker__item-day--disable" >{item}</a> :
                        <a class="janus-datepicker__item-day" onClick= { e => this.clickDay(e, item)}>{item}</a>
                      } */}
                      {/* { this.selectDay === item ?
                        <a class="janus-datepicker__item-day janus-datepicker__item-day--active" onClick= { e => this.clickDay(e, item)}>{item}</a> :
                        <a class="janus-datepicker__item-day" onClick= { e => this.clickDay(e, item)}>{item}</a>
                      } */}
                    </div>)
                }
              </div>
            </div>
          </div>
        </div>
        <div id="area" class="area">area</div>
      </div>
    )
  }

  public componentWillLoad() {
    this.currentYear = dayjs().year();
    this.currentMonth = dayjs().month()+1;
    this.currentDay = dayjs().date();
    this.arrayMonths = [
      { id: 1, value: '01', description: 'Ene'},
      { id: 2, value: '02', description: 'Feb'},
      { id: 3, value: '03', description: 'Mar'},
      { id: 4, value: '04', description: 'Abr'},
      { id: 5, value: '05', description: 'May'},
      { id: 6, value: '06', description: 'Jun'},
      { id: 7, value: '07', description: 'Jul'},
      { id: 8, value: '08', description: 'Ago'},
      { id: 9, value: '09', description: 'Sep'},
      { id: 10, value: '10', description: 'Oct'},
      { id: 11, value: '11', description: 'Nov'},
      { id: 12, value: '12', description: 'Dic'},
    ];

    this.arrayDaysOfWeek = [
      { id: 0, description: 'Do'},
      { id: 1, description: 'Lu'},
      { id: 2, description: 'Ma'},
      { id: 3, description: 'Mi'},
      { id: 4, description: 'Ju'},
      { id: 5, description: 'Vi'},
      { id: 6, description: 'Sa'},
    ];

    this.selectMonth = this.currentMonth;
    this.selectYear = this.currentYear;
    this.selectDay = this.currentDay
    if(this.value) this.selectedDate = true;
  }

  public componentDidRender() {
    if((this.startview === 'days'  || this.startview === 'year' )  && this.isPanelMonthClosed) {
      this.widthComponent = this.el.shadowRoot.querySelector('#janus-datepicker').clientWidth;
      this.resetViewDaysOfMoth();
    }
    if(this.value) this.selectedDate = true;
  }

  public resetViewDaysOfMoth() {
    // Obtener día de la semana siendo Dom = 0
    let weekday = new Date(`${this.selectYear}, ${this.selectMonth}, 1`).getDay();
    let marginLeft = Math.floor(this.widthComponent/7  * weekday - 2);
    let dayInitial = this.el.shadowRoot.querySelector('.janus-datepicker__item-day-wrapper:first-child');
    if(dayInitial) dayInitial.setAttribute('style', `margin-left: ${marginLeft}px`);
  }

  private getClassMain() {
    return {
      [`janus-datepicker`]: true,
      [`janus-datepicker--disable`]: this.disable || this.lock,
      [`janus-datepicker--error`]: this.error
    }
  }

  private getClassPanel() {
    return {
      [`janus-datepicker__panel`]: true,
      [`janus-datepicker__panel--hidden`]: this.isDatepickerClosed
    }
  }

  private getClassPanelMultiYear() {
    return {
      [`janus-datepicker__panel-content`]: true,
      [`janus-datepicker__panel--hidden`]: this.isPanelMultiYearClosed && !this.isDatepickerClosed,
    }
  }

  private getClassPanelMonths() {
    return {
      [`janus-datepicker__panel-content`]: true,
      [`janus-datepicker__panel--hidden`]: this.isPanelMonthClosed && !this.isDatepickerClosed,
    }
  }

  private getClassPanelDays() {
    return {
      [`janus-datepicker__panel-content`]: true,
      [`janus-datepicker__panel--hidden`]: this.isPanelDaysClosed && !this.isDatepickerClosed,
    }
  }

  private createMultiYear(direction?: string) {
    this.isPanelMultiYearClosed = false;
    this.isPanelMonthClosed = true;
    this.isPanelDaysClosed = true;
    let year;
    switch(direction) {
      case 'back' : year = this.arrayYears[0] - this.nYearsVisible;
                    break;
      case 'next' : year = this.arrayYears[this.arrayYears.length-1] + 1
                    break;
      default     : year = this.selectYear - this.nYearsVisible + 3;
                    break;
    }

    this.arrayYears = []
    for(let i=0; i < this.nYearsVisible; i++) {
      this.arrayYears.push(year);
      year++;
    }
    this.el.shadowRoot.querySelector('#area').innerHTML = `createMultiYear ${year} arrayYears ${this.arrayYears}`;
  }

  private createMonths() {
    this.isPanelDaysClosed = true;
    this.isPanelMultiYearClosed = true;
    this.isPanelMonthClosed = false;
  }

  private createDays(direction?: string) {
    this.isPanelDaysClosed = false;

    let nDays;
    switch(direction) {
      case 'back' : if(this.selectMonth === 1) {
                      this.selectMonth = 12;
                      this.selectYear = this.selectYear - 1 }
                    else this.selectMonth = this.selectMonth - 1;
                    break;
      case 'next' : if(this.selectMonth === 12) {
                      this.selectMonth = 1;
                      this.selectYear = this.selectYear + 1
                    }
                    else this.selectMonth = this.selectMonth + 1;
                    break;
      default     : break;
    }

    nDays = new Date(this.selectYear, this.selectMonth, 0).getDate(); // Obtener la cantidad de dias según año y mes
    this.arrayDays = [];
    for(let i=1; i < nDays+1; i++) {
      this.arrayDays.push(i);
    }
    this.resetViewDaysOfMoth();
  }

  clickMultiYear(e, item) {
    e.stopPropagation();
    this.selectYear = item;
    this.createMonths();
  }

  clickMonth(e, item) {
    e.stopPropagation();
    this.selectMonth = item.id;
    this.isPanelMonthClosed = true;

    switch(this.startview) {
      case 'multi-year' : this.isDatepickerClosed = true;
                          this.value = dayjs(`${this.selectYear}/${this.selectMonth}`).format('MM/YYYY');
                          this.el.shadowRoot.querySelector('#area').innerHTML = `this.value ${this.value}`;
                          this.newValue.emit(this.value);
                          break;
      case 'days': this.isPanelDaysClosed = false;
                   break;
      case 'year' : this.isPanelDaysClosed = false;
                    this.createDays();
                    break;
      default: break;
    }
  }

  clickDay(e, item) {
    e.stopPropagation();
    this.isDatepickerClosed = true;
    this.selectDay = item;
    this.value = dayjs(`${this.selectMonth}/${this.selectDay}/${this.selectYear}`).format('DD/MM/YYYY');
    this.newValue.emit(this.value);
  }

  handleFocus(e) {
    e.stopPropagation();
    this.isDatepickerClosed = false;
    this.evaluateView();
  }

  resetPanelYearsLeft(e) {
    e.stopPropagation();
    this.createMultiYear('back')
  }

  resetPanelYearsRigth(e) {
    e.stopPropagation();
    this.createMultiYear('next')
  }

  resetPanelDaysLeft(e) {
    e.stopPropagation();
    this.createDays('back')
  }

  resetPanelDaysRigth(e) {
    e.stopPropagation();
    this.createDays('next')
  }

  evaluateView() {
    if(this.value) { this.formatManual(this.value); }
    switch(this.startview) {
      case 'multi-year' : this.createMultiYear();
                          break;
      case 'days'       : this.createDays();
                          break;

      case 'year'       : this.createMultiYear();
                          break;
      default: break;
    }
  }

  private formatManual(value) {
    let dateParts = value.split("/");

    switch(this.startview) {
      case 'multi-year':  this.selectYear = dateParts[1];
                          this.selectMonth = dateParts[0];
                          break;
      case 'days':  this.selectDay = dateParts[0];
                    this.selectYear = dateParts[2];
                    this.selectMonth = parseInt(dateParts[1]);
                    break;
      case 'year':  this.startview = 'days';
                    break;

      default: break;
    }
  }

  private yearAfterNow(year): boolean {

    return year > this.currentYear;
  }

  private monthAfterNow(month): boolean {

    return month > this.currentMonth && this.selectYear >= this.currentYear;
  }

  private dayAfterNow(day): boolean {

    return day > this.currentDay && this.selectYear >= this.currentYear && this.selectMonth >= this.currentMonth;
  }

  @Listen('blur')
  handleBlur(event) {
    const panel = this.el.shadowRoot.querySelector('.janus-datepicker__panel:hover');
    if(!panel) {
      this.isDatepickerClosed = true;
      event.preventDefault();
      event.stopPropagation();
    }
  }

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    ev.preventDefault();
    ev.stopPropagation();
  }
}
