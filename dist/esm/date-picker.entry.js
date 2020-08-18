import { r as registerInstance, c as createEvent, h, g as getElement } from './index-32d0536e.js';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},d={s:c,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,u),i=e-r<0,s=t.clone().add(n+(i?-1:1),u);return Number(-(n+(e-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return {M:u,y:a,w:s,d:i,D:"date",h:r,m:n,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,e,n){var r;if(!t)return l;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var i=t.name;m[i]=t,r=i;}return !n&&r&&(l=r),r||!n&&l},g=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new v(n)},D=d;D.l=M,D.i=y,D.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t);}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init();},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},d.$utils=function(){return D},d.isValid=function(){return !("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return g(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<g(t)},d.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",n)},d.second=function(t){return this.$g(t,"$s",e)},d.millisecond=function(e){return this.$g(e,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,e){var n=D.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return f?n:n.endOf(i)},$=function(t,e){return D.w(h.toDate()[t].apply(h.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case n:return $(M+"Seconds",2);case e:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[n]=c+"Minutes",h[e]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate();}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(e){var n=g(f);return D.w(n.date(n.date()+Math.round(e*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[n]=6e4,h[r]=36e5,h[e]=1e3,h)[c]||1,l=this.$d.getTime()+t*$;return D.w(l,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return "Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:c(h,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return n.replace(f,function(t,e){return e||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[n]=m/6e4,c[e]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},d.clone=function(){return D.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,e){return t(e,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});
});

const datepickerCss = ".janus-datepicker{border:1px solid #EDEEEE;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;height:48px;position:relative}.janus-datepicker:hover{border-color:gray}.janus-datepicker--error{border:1px solid red}.janus-datepicker__input{line-height:20px;width:calc(100% - 40px);padding:13px 20px;border:none;outline:none;border-radius:4px}.janus-datepicker__input:disabled{background-color:gray;border:1px solid gray;color:darkgray;cursor:auto}.janus-datepicker__input:disabled:hover{border-color:gray}.janus-datepicker__wrapper-icon{-ms-flex-align:center;align-items:center;background:#EDEEEE;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:40px;border-top-right-radius:4px;border-bottom-right-radius:4px}.janus-datepicker__panel{position:absolute;z-index:10;top:46px;width:100%;height:270px;background-color:#ffffff;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:fadeIn;animation-name:fadeIn;border:1px solid #C4C4C4;border-radius:10px}.janus-datepicker__panel--hidden{display:none}.janus-datepicker__panel-content{height:100%}.janus-datepicker__panel-header,.janus-datepicker__panel-header--center{height:50px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.janus-datepicker__panel-header{-ms-flex-pack:distribute;justify-content:space-around}.janus-datepicker__panel-header--center{-ms-flex-pack:center;justify-content:center}.janus-datepicker__panel-body,.janus-datepicker__panel-body-days{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.janus-datepicker__panel-body{height:calc(100% - 50px)}.janus-datepicker__panel-body-days{height:calc(100% - 70px)}.janus-datepicker__item-wrapper{width:25%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.janus-datepicker__item-day-wrapper{width:14.2857142857%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.janus-datepicker__panel-header-week{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:20px}.janus-datepicker__panel-header-week>div{width:14.2857142857%;text-align:center}.janus-datepicker__item{padding:8px 14px;border-radius:10px}.janus-datepicker__item:hover{color:#ffffff;background-color:#335CB4}.janus-datepicker__item--disable{color:gray;cursor:default}.janus-datepicker__item--disable:hover{color:gray;background-color:initial}.janus-datepicker__item--active{color:#ffffff;background-color:#335CB4}.janus-datepicker__item-day{height:30px;width:30px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:50%}.janus-datepicker__item-day:hover{color:darkslategray;background-color:lightgray}.janus-datepicker__item-day--active{color:#ffffff;background-color:#335CB4}.janus-datepicker__item-day--disable{border-radius:none;color:gray;cursor:default}.janus-datepicker__item-day--disable:hover{color:gray;background-color:white}.janus-datepicker__button{padding:8px 12px;cursor:pointer}.janus-datepicker__button:hover{border-radius:4px;background-color:gray}.area{margin-top:300px;background-color:darkseagreen}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}";

const JanusDatePicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.newValue = createEvent(this, "newValue", 7);
    }
    render() {
        return (h("div", null, h("div", { class: this.getClassMain(), id: "janus-datepicker" }, h("input", { type: "text", class: "janus-datepicker__input", value: this.value, readOnly: true, placeholder: this.placeholder, disabled: this.disable || this.lock, onFocus: (e) => this.handleFocus(e) }), h("div", { class: "janus-datepicker__wrapper-icon" }, h("p-janus-svg", { name: "CALENDAR", viewbox: "0 0 16 18", width: "16", height: "18" })), h("div", { class: this.getClassPanel(), tabindex: "10" }, h("div", { class: this.getClassPanelMultiYear() }, h("div", { class: "janus-datepicker__panel-header" }, h("div", { class: "content-center" }, h("p-janus-svg", { name: "ARROW_LEFT", viewbox: "0 0 13 12", width: "13", height: "12", onClick: (ev) => this.resetPanelYearsLeft(ev) })), h("div", null, this.arrayYears[0], " - ", this.arrayYears[this.arrayYears.length - 1]), h("div", { class: "content-center" }, h("p-janus-svg", { name: "ARROW_RIGTH", viewbox: "0 0 13 12", width: "13", height: "12", onClick: (ev) => this.resetPanelYearsRigth(ev) }))), h("div", { class: "janus-datepicker__panel-body" }, this.arrayYears.map((item) => h("div", { class: "janus-datepicker__item-wrapper" }, this.yearAfterNow(item) ?
            h("a", { class: "janus-datepicker__item janus-datepicker__item--disable" }, item) :
            this.selectYear == item && this.selectedDate ?
                h("a", { class: "janus-datepicker__item janus-datepicker__item--active", onClick: e => this.clickMultiYear(e, item) }, item) :
                h("a", { class: "janus-datepicker__item", onClick: e => this.clickMultiYear(e, item) }, item))))), h("div", { class: this.getClassPanelMonths() }, h("div", { class: "janus-datepicker__panel-header--center" }, h("div", { class: "janus-datepicker__button", onClick: (ev) => this.createMultiYear(ev) }, this.selectYear)), h("div", { class: "janus-datepicker__panel-body" }, this.arrayMonths.map((item) => h("div", { class: "janus-datepicker__item-wrapper" }, this.monthAfterNow(item.id) ?
            h("a", { class: "janus-datepicker__item janus-datepicker__item--disable" }, item.description) :
            this.selectMonth == item.value && this.selectedDate ?
                h("a", { class: "janus-datepicker__item janus-datepicker__item--active", onClick: e => this.clickMonth(e, item) }, item.description) :
                h("a", { class: "janus-datepicker__item", onClick: e => this.clickMonth(e, item) }, item.description))))), h("div", { class: this.getClassPanelDays() }, h("div", { class: "janus-datepicker__panel-header" }, h("div", { class: "content-center" }, h("p-janus-svg", { name: "ARROW_LEFT", viewbox: "0 0 13 12", width: "13", height: "12", onClick: (ev) => this.resetPanelDaysLeft(ev) })), h("div", null, h("a", { class: "janus-datepicker__button", onClick: () => this.createMonths() }, this.arrayMonths[this.selectMonth - 1].description), " -", h("a", { class: "janus-datepicker__button", onClick: (ev) => this.createMultiYear(ev) }, this.selectYear)), h("div", { class: "content-center" }, this.selectMonth == this.currentMonth && this.selectYear == this.currentYear ?
            h("p-janus-svg", { name: "ARROW_RIGTH", viewbox: "0 0 13 12", width: "13", height: "12" }) :
            h("p-janus-svg", { name: "ARROW_RIGTH", viewbox: "0 0 13 12", width: "13", height: "12", onClick: (ev) => this.resetPanelDaysRigth(ev) }))), h("div", { class: "janus-datepicker__panel-header-week" }, this.arrayDaysOfWeek.map((item) => h("div", null, item.description))), h("div", { class: "janus-datepicker__panel-body-days" }, this.arrayDays.map((item) => h("div", { class: "janus-datepicker__item-day-wrapper" }, this.dayAfterNow(item) ?
            h("a", { class: "janus-datepicker__item-day janus-datepicker__item-day--disable" }, item) :
            this.value && this.selectDay == item && this.selectedDate ?
                h("a", { class: "janus-datepicker__item-day janus-datepicker__item-day--active", onClick: e => this.clickDay(e, item) }, item) :
                h("a", { class: "janus-datepicker__item-day", onClick: e => this.clickDay(e, item) }, item))))))), h("div", { id: "area", class: "area" }, "area")));
    }
    componentWillLoad() {
        this.currentYear = dayjs_min().year();
        this.currentMonth = dayjs_min().month() + 1;
        this.currentDay = dayjs_min().date();
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
        this.createMonths();
    }
    clickMonth(e, item) {
        e.stopPropagation();
        this.selectMonth = item.id;
        this.isPanelMonthClosed = true;
        switch (this.startview) {
            case 'multi-year':
                this.isDatepickerClosed = true;
                this.value = dayjs_min(`${this.selectYear}/${this.selectMonth}`).format('MM/YYYY');
                this.el.shadowRoot.querySelector('#area').innerHTML = `this.value ${this.value}`;
                this.newValue.emit(this.value);
                break;
            case 'days':
                this.isPanelDaysClosed = false;
                break;
            case 'year':
                this.isPanelDaysClosed = false;
                this.createDays();
                break;
        }
    }
    clickDay(e, item) {
        e.stopPropagation();
        this.isDatepickerClosed = true;
        this.selectDay = item;
        this.value = dayjs_min(`${this.selectMonth}/${this.selectDay}/${this.selectYear}`).format('DD/MM/YYYY');
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
    get el() { return getElement(this); }
};
JanusDatePicker.style = datepickerCss;

export { JanusDatePicker as date_picker };
