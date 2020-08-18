'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8cb17de4.js');

const JanusInputGroupDatepicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.placeholder = '';
        this.disable = false;
        this.lock = false;
        this.error = false;
        this.errortext = '';
        this.startview = 'days';
    }
    render() {
        return (index.h("div", { class: "janus-inputgroup-datepicker" }, index.h("date-picker", { startview: this.startview, value: this.value, disable: this.disable, lock: this.lock, error: this.error }), index.h("div", { id: "data" })));
    }
};

exports.m_datepicker = JanusInputGroupDatepicker;
