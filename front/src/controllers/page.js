import CookieJS from 'js-cookie';

import ViewPage from '../views/page';

import { apiGetMe } from '../helpers';

const Page = class Page {
  constructor(content, router) {
    this.router = router;
    this.content = content;
    this.run();
  }

  // pour se deconecter
  onHandleClick() {
    const elButton = document.querySelector('exit-button');
    elButton.addEventListener('click', () => {
      CookieJS.remove('token');
      this.router.navigateTo('/signin');
    });
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
      this.onHandleClick();
    });
  }
};

export default Page;
