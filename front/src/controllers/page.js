import ViewPage from '../views/page';

import { apiGetMe } from '../helpers';

const Page = class Page {
  constructor(content) {
    this.content = content;
    this.run();
  }

  run() {
    apiGetMe((me) => {
      const { firstName, lastName, avatarUrl } = me;
      const header = {
        firstName,
        lastName,
        avatarUrl
      };
      const viewPage = new ViewPage({
        header
      });

      document.body.innerHTML = viewPage.render(this.content);
    });
  }
};

export default Page;
