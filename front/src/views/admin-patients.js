const AdminPatients = class AdminPatients {
  renderPatient(patients) {
    const {
      id,
      firstname,
      lastName,
      cellPhone,
      address,
      dateofbirth,
      city,
      zip_code,
      gender,
      language
    } = patients;

    return `
      <tr>
        <td>${id}</td>
        <td>${firstname}</td>
        <td>${lastName}</td>
        <td>${cellPhone}</td>
        <td>${address}</td>
        <td>${dateofbirth}</td>
        <td>${city}</td>
        <td>${zip_code}</td>
        <td>${gender}</td>
        <td>${language}</td>
        <td>
          <div class="d-grid gap-2">
            <button class="btn btn-danger" type="button">Supprimer</button>
          </div>
        </td>
        <td>
          <div class="d-grid gap-2">
            <button class="btn btn-warning" type="button">Editer</button>
          </div>
        </td>
      </tr>
    `;
  }

  render(datas) {
    console.log("edd")
    return `
      <div class="row">
      <div class="table-responsive">
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Prénom</th>
              <th scope="col">Nom</th>
              <th scope="col">Numéro de téléphone</th>
              <th scope="col">Adresse</th>
              <th scope="col">Date de naissance</th>
              <th scope="col">Ville</th>
              <th scope="col">Code postal</th>
              <th scope="col">Genre</th>
              <th scope="col">Langue</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${datas.map((patients) => this.renderPatient(patients)).join('')}
          </tbody>
        </table>
        </div>
      </div>
    `;
  }
};

export default AdminPatients;
