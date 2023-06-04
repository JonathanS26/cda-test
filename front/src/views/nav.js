const Nav = class Nav {
  render() {
    return `
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="dashboard.php">
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas"></i>
          </div>
          <div class="sidebar-brand-text">
            <img class="logo" style="max-width: auto; max-height: 85px;" src="img/recoureopro.png">
          </div>
        </a>
        <hr class="sidebar-divider my-0">
          <li class="nav-item active">
            <a class="nav-link" href="dashboard.php">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <hr class="sidebar-divider">
          <div class="sidebar-heading">Action(s)</div>
          <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#patientsTwo" aria-expanded="true" aria-controls="patientsTwo">
                  <i class="fas fa-fw fa-user-circle"></i>
                  <span>Patients</span>
              </a>
              <div id="patientsTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                      <h6 class="collapse-header">Options:</h6>
                      <a class="collapse-item" href="patient.php">Liste</a>
                      <a class="collapse-item" href="consultation.php">Consultation</a>
                  </div>
              </div>
          </li>

          <!-- Nav Item - Pages Partenaires -->
          <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#partenairesTwo" aria-expanded="true" aria-controls="partenairesTwo">
                  <i class="fas fa-fw fa-handshake"></i>
                  <span>Employés</span>
              </a>
              <div id="partenairesTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                      <h6 class="collapse-header">Options:</h6>
                      <a class="collapse-item" href="employee.php">Liste</a>
                  </div>
              </div>
          </li>

          <!-- Nav Item - Pages Employés -->
          <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#employesTwo" aria-expanded="true" aria-controls="employesTwo">
                  <i class="fas fa-fw fa-address-card"></i>
                  <span>Partenaires</span>
              </a>
              <div id="employesTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                      <h6 class="collapse-header">Options:</h6>
                      <a class="collapse-item" href="partenaire.php">Liste</a>
                  </div>
              </div>
          </li>

          <!-- Nav Item - Pages Gestion des droits -->
          <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  <i class="fas fa-fw fa-cog"></i>
                  <span>Gestion des droits</span>
              </a>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                      <h6 class="collapse-header">Custom Components:</h6>
                      <a class="collapse-item" href="buttons.html">Buttons</a>
                      <a class="collapse-item" href="cards.html">Cards</a>
                  </div>
              </div>
          </li>

          <!-- Divider -->
          <hr class="sidebar-divider">

          <!-- Nav Item - Pages Gestion des droits -->
          <li class="nav-item">
              <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  <i class="fas fa-fw fa-cog"></i>
                  <span class="exit-button">Se déconnecter</span>
              </a>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                      <h6 class="collapse-header">Custom Components:</h6>
                      <a class="collapse-item" href="buttons.html">Buttons</a>
                      <a class="collapse-item" href="cards.html">Cards</a>
                  </div>
              </div>
          </li>
          <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
      </ul>
    `;
  }
};

export default Nav;
