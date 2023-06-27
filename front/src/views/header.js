const Header = class Header {
  render(data) {
    const { firstName, lastName, avatarUrl } = data;
    return `
      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand">${lastName} ${firstName}</a>
        <img src="${avatarUrl}" class="rounded-circle" alt="User profile picture" style="width: 40px; height: 40px;">
      </nav>
    `;
  }
};

export default Header;
