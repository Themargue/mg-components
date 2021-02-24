import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'mg-tooltip',
  styleUrl: './mg-tooltip.css',
  shadow: true,
})
export class Tooltip {
  @State() showInfo = false;
  @Prop() tooltipInfo = 'This is a descriptive text';

  toggleTooltip() {
    this.showInfo = !this.showInfo;
    console.log(this.showInfo);
  }

  render() {
    return (
      <div class="wrapper">
        <slot />
        <div id="icon" onClick={this.toggleTooltip.bind(this)}>
          ?
        </div>
        {this.showInfo && <div class="infobox">{this.tooltipInfo}</div>}
      </div>
    );
  }
}
