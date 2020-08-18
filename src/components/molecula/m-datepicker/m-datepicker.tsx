import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: 'm-datepicker',
})
export class JanusInputGroupDatepicker {
  @Prop() readonly label: string;
  @Prop() readonly placeholder: string = '';
  @Prop({ mutable: true }) value: string;
  @Prop({ mutable: true }) disable: boolean = false;
  @Prop({ mutable: true }) lock: boolean = false;
  @Prop({ mutable: true }) error: boolean = false;
  @Prop() readonly errortext: string = '';
  @Prop({mutable: true}) startview: string  = 'days';

  render() {
    return (
      <div class="janus-inputgroup-datepicker">
        <date-picker
          startview={this.startview}
          value={this.value}
          disable={this.disable}
          lock={this.lock}
          error={this.error}>
        </date-picker>
        <div id="data"></div>
      </div>
    )
  }
}
