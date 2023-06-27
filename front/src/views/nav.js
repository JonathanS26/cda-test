const Nav = class Nav {
  render() {
    return `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/dashboard">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/patient">Patients</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Employés</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Partenaires</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Se déconnecter</a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
};

export default Nav;
