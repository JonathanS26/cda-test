// views/admin-patient.js
const AdminPatients = class AdminPatients {
  render(patients) {
    return `
      <div class="container my-5">
        <div class="d-flex justify-content-between align-items-center">
          <h1 class="h3 mb-3 text-gray-800">Liste des patients</h1>
          <a href="patient.php" class="btn btn-primary">Ajouter un patient</a>
        </div>
        <table class="table table-striped mt-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Prénom</th>
              <th scope="col">Nom</th>
              <th scope="col">Email</th>
              <th scope="col">Téléphone</th>
              <th scope="col">Adresse</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${patients.map((patient, index) => `
              <tr>
                <th scope="row">${index + 1}</th>
                <td>${patient.firstname}</td>
                <td>${patient.lastname}</td>
                <td>${patient.email}</td>
                <td>${patient.cellphone}</td>
                <td>${patient.address}</td>
                <td>
                  <a href="#" class="btn btn-success btn-sm">Voir</a>
                  <a href="#" class="btn btn-info btn-sm">Modifier</a>
                  <a href="#" class="btn btn-danger btn-sm">Supprimer</a>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
};

export default AdminPatients;
