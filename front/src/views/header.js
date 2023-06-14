const Header = class Header {
  render(data) {
    const {
      firstName,
      lastName,
      avatarUrl
    } = data;
    return `
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
      <i class="fa fa-bars"></i>
    </button>
    <ul class="navbar-nav ml-auto">
        <div class="topbar-divider d-none d-sm-block"></div>

        <!-- Nav Item - User Information -->
        <li class="nav-item dropdown no-arrow">
            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">${lastName} ${firstName}</span>
                <img class="img-profile rounded-circle" src="${avatarUrl}">
            </a>
        </li>
    </ul>
    
    </nav>`;
  }
};

export default Header;
