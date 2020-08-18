import { Component, h, Prop, State, Event, Element, Listen } from "@stencil/core/internal";
import dayjs from 'dayjs';
export class JanusDatePicker {
    constructor() {
        this.placeholder = '';
        this.startview = 'days'; // 'days' | 'multi-year'| 'month' | 'year';
        this.disable = false;
        this.lock = false;
        this.maxdatecurrent = false;
        this.error = false;
        this.selectedDate = false;
        this.nYearsVisible = 12;
        this.arrayYears = [];
        this.arrayMonths = [];
        this.arrayDays = [];
        this.arrayDaysOfWeek = [];
        this.isDatepickerClosed = true;
        this.isPanelMultiYearClosed = true;
        this.isPanelYearClosed = true;
        this.isPanelMonthClosed = true;
        this.isPanelDaysClosed = true;
    }
    render() {
        return (h("div", null,
            h("div", { class: this.getClassMain(), id: "janus-datepicker" },
                h("input", { type: "text", class: "janus-datepicker__input", value: this.value, readOnly: true, placeholder: this.placeholder, disabled: this.disable || this.lock, onFocus: (e) => this.handleFocus(e) }),
                h("div", { class: "janus-datepicker__wrapper-icon" },
                    h("p-janus-svg", { name: "CALENDAR", viewbox: "0 0 16 18", width: "16", height: "18" })),
                h("div", { class: this.getClassPanel(), tabindex: "10" },
                    h("div", { class: this.getClassPanelMultiYear() },
                        h("div", { class: "janus-datepicker__panel-header" },
                            h("div", { class: "content-center" },
                                h("p-janus-svg", { name: "ARROW_LEFT", viewbox: "0 0 13 12", width: "13", height: "12", onClick: (ev) => this.resetPanelYearsLeft(ev) })),
                            h("div", null,
                                this.arrayYears[0],
                                " - ",
                                this.arrayYears[this.arrayYears.length - 1]),
                            h("div", { class: "content-center" },
                                h("p-janus-svg", { name: "ARROW_RIGTH", viewbox: "0 0 13 12", width: "13", height: "12", onClick: (ev) => this.resetPanelYearsRigth(ev) }))),
                        h("div", { class: "janus-datepicker__panel-body" }, this.arrayYears.map((item) => h("div", { class: "janus-datepicker__item-wrapper" }, this.yearAfterNow(item) ?
                            h("a", { class: "janus-datepicker__item janus-datepicker__item--disable" }, item) :
                            this.selectYear == item && this.selectedDate ?
                                h("a", { class: "janus-datepicker__item janus-datepicker__item--active", onClick: e => this.clickMultiYear(e, item) }, item) :
                                h("a", { class: "janus-datepicker__item", onClick: e => this.clickMultiYear(e, item) }, item))))),
                    h("div", { class: this.getClassPanelMonths() },
                        h("div", { class: "janus-datepicker__panel-header--center" },
                            h("div", { class: "janus-datepicker__button", onClick: (ev) => this.createMultiYear(ev) }, this.selectYear)),
                        h("div", { class: "janus-datepicker__panel-body" }, this.arrayMonths.map((item) => h("div", { class: "janus-datepicker__item-wrapper" }, this.monthAfterNow(item.id) ?
                            h("a", { class: "janus-datepicker__item janus-datepicker__item--disable" }, item.description) :
                            this.selectMonth == item.value && this.selectedDate ?
                                h("a", { class: "janus-datepicker__item janus-datepicker__item--active", onClick: e => this.clickMonth(e, item) }, item.description) :
                                h("a", { class: "janus-datepicker__item", onClick: e => this.clickMonth(e, item) }, item.description))))),
                    h("div", { class: this.getClassPanelDays() },
                        h("div", { class: "janus-datepicker__panel-header" },
                            h("div", { class: "content-center" },
                                h("p-janus-svg", { name: "ARROW_LEFT", viewbox: "0 0 13 12", width: "13", height: "12", onClick: (ev) => this.resetPanelDaysLeft(ev) })),
                            h("div", null,
                                h("a", { class: "janus-datepicker__button", onClick: () => this.createMonths() }, this.arrayMonths[this.selectMonth - 1].description),
                                " -",
                                h("a", { class: "janus-datepicker__button", onClick: (ev) => this.createMultiYear(ev) }, this.selectYear)),
                            h("div", { class: "content-center" }, this.selectMonth == this.currentMonth && this.selectYear == this.currentYear ?
                                h("p-janus-svg", { name: "ARROW_RIGTH", viewbox: "0 0 13 12", width: "13", height: "12" }) :
                                h("p-janus-svg", { name: "ARROW_RIGTH", viewbox: "0 0 13 12", width: "13", height: "12", onClick: (ev) => this.resetPanelDaysRigth(ev) }))),
                        h("div", { class: "janus-datepicker__panel-header-week" }, this.arrayDaysOfWeek.map((item) => h("div", null, item.description))),
                        h("div", { class: "janus-datepicker__panel-body-days" }, this.arrayDays.map((item) => h("div", { class: "janus-datepicker__item-day-wrapper" }, this.dayAfterNow(item) ?
                            h("a", { class: "janus-datepicker__item-day janus-datepicker__item-day--disable" }, item) :
                            this.value && this.selectDay == item && this.selectedDate ?
                                h("a", { class: "janus-datepicker__item-day janus-datepicker__item-day--active", onClick: e => this.clickDay(e, item) }, item) :
                                h("a", { class: "janus-datepicker__item-day", onClick: e => this.clickDay(e, item) }, item))))))),
            h("div", { id: "area", class: "area" }, "area")));
    }
    componentWillLoad() {
        this.currentYear = dayjs().year();
        this.currentMonth = dayjs().month() + 1;
        this.currentDay = dayjs().date();
        this.arrayMonths = [
            { id: 1, value: '01', description: 'Ene' },
            { id: 2, value: '02', description: 'Feb' },
            { id: 3, value: '03', description: 'Mar' },
            { id: 4, value: '04', description: 'Abr' },
            { id: 5, value: '05', description: 'May' },
            { id: 6, value: '06', description: 'Jun' },
            { id: 7, value: '07', description: 'Jul' },
            { id: 8, value: '08', description: 'Ago' },
            { id: 9, value: '09', description: 'Sep' },
            { id: 10, value: '10', description: 'Oct' },
            { id: 11, value: '11', description: 'Nov' },
            { id: 12, value: '12', description: 'Dic' },
        ];
        this.arrayDaysOfWeek = [
            { id: 0, description: 'Do' },
            { id: 1, description: 'Lu' },
            { id: 2, description: 'Ma' },
            { id: 3, description: 'Mi' },
            { id: 4, description: 'Ju' },
            { id: 5, description: 'Vi' },
            { id: 6, description: 'Sa' },
        ];
        this.selectMonth = this.currentMonth;
        this.selectYear = this.currentYear;
        this.selectDay = this.currentDay;
        if (this.value)
            this.selectedDate = true;
    }
    componentDidRender() {
        if ((this.startview === 'days' || this.startview === 'year') && this.isPanelMonthClosed) {
            this.widthComponent = this.el.shadowRoot.querySelector('#janus-datepicker').clientWidth;
            this.resetViewDaysOfMoth();
        }
        if (this.value)
            this.selectedDate = true;
    }
    resetViewDaysOfMoth() {
        // Obtener día de la semana siendo Dom = 0
        let weekday = new Date(`${this.selectYear}, ${this.selectMonth}, 1`).getDay();
        let marginLeft = Math.floor(this.widthComponent / 7 * weekday - 2);
        let dayInitial = this.el.shadowRoot.querySelector('.janus-datepicker__item-day-wrapper:first-child');
        if (dayInitial)
            dayInitial.setAttribute('style', `margin-left: ${marginLeft}px`);
    }
    getClassMain() {
        return {
            [`janus-datepicker`]: true,
            [`janus-datepicker--disable`]: this.disable || this.lock,
            [`janus-datepicker--error`]: this.error
        };
    }
    getClassPanel() {
        return {
            [`janus-datepicker__panel`]: true,
            [`janus-datepicker__panel--hidden`]: this.isDatepickerClosed
        };
    }
    getClassPanelMultiYear() {
        return {
            [`janus-datepicker__panel-content`]: true,
            [`janus-datepicker__panel--hidden`]: this.isPanelMultiYearClosed && !this.isDatepickerClosed,
        };
    }
    getClassPanelMonths() {
        return {
            [`janus-datepicker__panel-content`]: true,
            [`janus-datepicker__panel--hidden`]: this.isPanelMonthClosed && !this.isDatepickerClosed,
        };
    }
    getClassPanelDays() {
        return {
            [`janus-datepicker__panel-content`]: true,
            [`janus-datepicker__panel--hidden`]: this.isPanelDaysClosed && !this.isDatepickerClosed,
        };
    }
    createMultiYear(direction) {
        this.isPanelMultiYearClosed = false;
        this.isPanelMonthClosed = true;
        this.isPanelDaysClosed = true;
        let year;
        switch (direction) {
            case 'back':
                year = this.arrayYears[0] - this.nYearsVisible;
                break;
            case 'next':
                year = this.arrayYears[this.arrayYears.length - 1] + 1;
                break;
            default:
                year = this.selectYear - this.nYearsVisible + 3;
                break;
        }
        this.arrayYears = [];
        for (let i = 0; i < this.nYearsVisible; i++) {
            this.arrayYears.push(year);
            year++;
        }
        this.el.shadowRoot.querySelector('#area').innerHTML = `createMultiYear ${year} arrayYears ${this.arrayYears}`;
    }
    createMonths() {
        this.isPanelDaysClosed = true;
        this.isPanelMultiYearClosed = true;
        this.isPanelMonthClosed = false;
    }
    createDays(direction) {
        this.isPanelDaysClosed = false;
        let nDays;
        switch (direction) {
            case 'back':
                if (this.selectMonth === 1) {
                    this.selectMonth = 12;
                    this.selectYear = this.selectYear - 1;
                }
                else
                    this.selectMonth = this.selectMonth - 1;
                break;
            case 'next':
                if (this.selectMonth === 12) {
                    this.selectMonth = 1;
                    this.selectYear = this.selectYear + 1;
                }
                else
                    this.selectMonth = this.selectMonth + 1;
                break;
            default: break;
        }
        nDays = new Date(this.selectYear, this.selectMonth, 0).getDate(); // Obtener la cantidad de dias según año y mes
        this.arrayDays = [];
        for (let i = 1; i < nDays + 1; i++) {
            this.arrayDays.push(i);
        }
        this.resetViewDaysOfMoth();
    }
    clickMultiYear(e, item) {
        e.stopPropagation();
        this.selectYear = item;
        this.el.shadowRoot.querySelector('#area').innerHTML = `selectYear ${this.selectYear}`;
        this.createMonths();
    }
    clickMonth(e, item) {
        e.stopPropagation();
        this.selectMonth = item.id;
        this.el.shadowRoot.querySelector('#area').innerHTML = `this.selectMonth ${this.selectMonth}`;
        this.isPanelMonthClosed = true;
        switch (this.startview) {
            case 'multi-year':
                this.isDatepickerClosed = true;
                this.value = dayjs(`${this.selectYear}-${this.selectMonth}`).format('MM/YYYY');
                this.el.shadowRoot.querySelector('#area').innerHTML = `this.value sin dayjs ${this.selectYear}-${this.selectMonth} <br/> this.value ${this.value}`;
                this.newValue.emit(this.value);
                break;
            case 'days':
                this.isPanelDaysClosed = false;
                break;
            case 'year':
                this.isPanelDaysClosed = false;
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
        this.createMultiYear('back');
    }
    resetPanelYearsRigth(e) {
        e.stopPropagation();
        this.createMultiYear('next');
    }
    resetPanelDaysLeft(e) {
        e.stopPropagation();
        this.createDays('back');
    }
    resetPanelDaysRigth(e) {
        e.stopPropagation();
        this.createDays('next');
    }
    evaluateView() {
        if (this.value) {
            this.formatManual(this.value);
        }
        switch (this.startview) {
            case 'multi-year':
                this.createMultiYear();
                break;
            case 'days':
                this.createDays();
                break;
            case 'year':
                this.createMultiYear();
                break;
            default: break;
        }
    }
    formatManual(value) {
        let dateParts = value.split("/");
        switch (this.startview) {
            case 'multi-year':
                this.selectYear = dateParts[1];
                this.selectMonth = dateParts[0];
                break;
            case 'days':
                this.selectDay = dateParts[0];
                this.selectYear = dateParts[2];
                this.selectMonth = parseInt(dateParts[1]);
                break;
            case 'year':
                this.startview = 'days';
                break;
            default: break;
        }
    }
    yearAfterNow(year) {
        return year > this.currentYear;
    }
    monthAfterNow(month) {
        return month > this.currentMonth && this.selectYear >= this.currentYear;
    }
    dayAfterNow(day) {
        return day > this.currentDay && this.selectYear >= this.currentYear && this.selectMonth >= this.currentMonth;
    }
    handleBlur(event) {
        const panel = this.el.shadowRoot.querySelector('.janus-datepicker__panel:hover');
        if (!panel) {
            this.isDatepickerClosed = true;
            event.preventDefault();
            event.stopPropagation();
        }
    }
    handleKeyDown(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    }
    static get is() { return "date-picker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["datepicker.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["datepicker.css"]
    }; }
    static get properties() { return {
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "placeholder",
            "reflect": false,
            "defaultValue": "''"
        },
        "startview": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "startview",
            "reflect": false,
            "defaultValue": "'days'"
        },
        "value": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "value",
            "reflect": false
        },
        "disable": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "disable",
            "reflect": false,
            "defaultValue": "false"
        },
        "lock": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "lock",
            "reflect": false,
            "defaultValue": "false"
        },
        "maxdatecurrent": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "maxdatecurrent",
            "reflect": false,
            "defaultValue": "false"
        },
        "error": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "error",
            "reflect": false,
            "defaultValue": "false"
        },
        "selectedDate": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "selected-date",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "nYearsVisible": {},
        "currentYear": {},
        "currentMonth": {},
        "currentDay": {},
        "arrayYears": {},
        "arrayMonths": {},
        "arrayDays": {},
        "arrayDaysOfWeek": {},
        "isDatepickerClosed": {},
        "isPanelMultiYearClosed": {},
        "isPanelYearClosed": {},
        "isPanelMonthClosed": {},
        "isPanelDaysClosed": {},
        "selectMonth": {},
        "selectYear": {},
        "selectDay": {},
        "widthComponent": {}
    }; }
    static get events() { return [{
            "method": "newValue",
            "name": "newValue",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "blur",
            "method": "handleBlur",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "keydown",
            "method": "handleKeyDown",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
