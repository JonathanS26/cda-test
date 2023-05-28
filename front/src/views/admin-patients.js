const AdminPatients = class AdminPatients {
  renderPatient(patient) {
    const {
      id,
      firstName,
      lastName,
      cellPhone,
      email,
      accidentType
    } = patient;

    return `
      <tr>
        <td>${id}</td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${cellPhone}</td>
        <td>${email}</td>
        <td>${accidentType}</td>
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

  render(data) {
    const { patients } = data;

    return `
      <div class="row">
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nom</th>
              <th scope="col">Prénom</th>
              <th scope="col">Téléphone</th>
              <th scope="col">Email</th>
              <th scope="col">Accident Type</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${patients.map((patient) => this.renderPatient(patient)).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
};

export default AdminPatients;
