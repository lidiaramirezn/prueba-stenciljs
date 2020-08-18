import { r as registerInstance, h } from './index-32d0536e.js';
var JanusInputGroupDatepicker = /** @class */ (function () {
    function JanusInputGroupDatepicker(hostRef) {
        registerInstance(this, hostRef);
        this.placeholder = '';
        this.disable = false;
        this.lock = false;
        this.error = false;
        this.errortext = '';
        this.startview = 'days';
    }
    JanusInputGroupDatepicker.prototype.render = function () {
        return (h("div", { class: "janus-inputgroup-datepicker" }, h("date-picker", { startview: this.startview, value: this.value, disable: this.disable, lock: this.lock, error: this.error }), h("div", { id: "data" })));
    };
    return JanusInputGroupDatepicker;
}());
export { JanusInputGroupDatepicker as m_datepicker };
