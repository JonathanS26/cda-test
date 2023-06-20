import CookieJS from 'js-cookie';
import 'startbootstrap-sb-admin-2/vendor/bootstrap/js/bootstrap.bundle';

import ViewPage from '../views/page'; // ViewPage = Page
import sbAdmin2 from '../vendor/sb-admin-2';
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

      sbAdmin2();
      this.onHandleClick();
    });
  }
};

export default Page;
