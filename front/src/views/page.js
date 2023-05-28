import Nav from './nav';
import Header from './header';
import Footer from './footer';

const Page = class Page {
  constructor(data) {
    const { header } = data;

    this.header = header;
  }

  render(content) {
    return `
      <div id="wrapper">
        ${new Nav().render()}
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            ${new Header().render(this.header)}
            <div class="m-5">
              ${content}
            </div>
            ${new Footer().render()}
          </div>
        </div>
      </div>
    `;
  }
};

export default Page;
