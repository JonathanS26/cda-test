const Nav = class Nav {
  render() {
    return `
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled" id="accordionSidebar">
  <!-- Divider -->
  <hr class="sidebar-divider my-0">
  <!-- Dashboard -->
  <li class="nav-item active">
    <a class="nav-link" href="dashboard.php"> <i class="fas fa-fw fa-tachometer-alt"></i> <span>Dashboard</span> </a>
  </li>
  <!-- Divider -->
  <hr class="sidebar-divider">
  <!-- Heading -->
  <div class="sidebar-heading">Action(s)</div>
  <!-- Patients -->
  <li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#patientsTwo" aria-expanded="true" aria-controls="patientsTwo"> <i class="fas fa-fw fa-user-circle"></i> <span>Patients</span> </a>
    <div id="patientsTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
        <h6 class="collapse-header">Options:</h6> <a class="collapse-item" href="patient.php">Liste</a> <a class="collapse-item" href="consultation.php">Consultation</a> </div>
    </div>
  </li>
  <!-- Employees -->
  <li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#employesTwo" aria-expanded="true" aria-controls="employesTwo"> <i class="fas fa-fw fa-address-card"></i> <span>Employés</span> </a>
    <div id="employesTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
        <h6 class="collapse-header">Options:</h6> <a class="collapse-item" href="employee.php">Liste</a> </div>
    </div>
  </li>
  <!-- Partners -->
  <li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#partenairesTwo" aria-expanded="true" aria-controls="partenairesTwo"> <i class="fas fa-fw fa-handshake"></i> <span>Partenaires</span> </a>
    <div id="partenairesTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
        <h6 class="collapse-header">Options:</h6> <a class="collapse-item" href="partenaire.php">Liste</a> </div>
    </div>
  </li>
  <!-- Divider -->
  <hr class="sidebar-divider">
  <!-- Logout -->
  <li class="nav-item">
    <a class="nav-link" href="logout.php"> <i class="fas fa-fw fa-sign-out-alt"></i> <span>Se déconnecter</span> </a>
  </li>
  <!-- Sidebar Toggler (Sidebar) -->
  <div class="text-center d-none d-md-inline">
    <button class="rounded-circle border-0" id="sidebarToggle"></button>
  </div>
</ul>
    `;
  }
};

export default Nav;
