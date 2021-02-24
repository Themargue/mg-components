import { Component, h, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'mg-drawer',
  styleUrl: './side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @Prop() drawerTitle: string;
  @Prop({ reflect: true, mutable: true }) opened: boolean;
  @State() showContactInfo = false;

  onContentChange(content: string) {
    this.showContactInfo = content === 'contact';
  }

  @Method()
  open() {
    this.opened = true;
  }

  render() {
    let mainContent = <slot />;
    if (this.showContactInfo) {
      mainContent = (
        <div>
          <p>You can reach us via:</p>
          <ul>
            <li>Phone: 19398244</li>
            <li>
              email: <a href="mailto:something@something.com">something@something.com</a>
            </li>
          </ul>
        </div>
      );
    }
    return [
      <div class="backdrop"></div>,
      <aside>
        <header>
          <h1>{this.drawerTitle}</h1>
          <button
            onClick={() => {
              this.opened = false;
            }}
          >
            X
          </button>
        </header>
        <section id="tabs">
          <button class={!this.showContactInfo && 'active'} onClick={this.onContentChange.bind(this, 'nav')}>
            Navigation
          </button>
          <button class={this.showContactInfo && 'active'} onClick={this.onContentChange.bind(this, 'contact')}>
            Contact
          </button>
        </section>
        <main>{mainContent}</main>
      </aside>,
    ];
  }
}
