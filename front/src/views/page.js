import Nav from './nav';
import Header from './header';
import Footer from './footer';

const Page = class Page {
  constructor(data) {
    this.headerData = data.header;
    this.header = new Header();
    this.nav = new Nav();
    this.footer = new Footer();
  }

  render(content) {
    return `
      <div class="d-flex flex-column min-vh-100">
        ${this.header.render(this.headerData)}
        ${this.nav.render()}
        <main class="container flex-grow-1">
          ${content}
        </main>
        ${this.footer.render()}
      </div>
    `;
  }
};

export default Page;
