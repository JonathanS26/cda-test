const AdminPartners = class AdminPartners {
  renderPartner(partners) {
    const {
      id,
      firstName,
      lastName,
      cellPhone,
      email,
      job
    } = partners;

    return `
      <tr>
        <td>${id}</td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${cellPhone}</td>
        <td>${email}</td>
        <td>${job}</td>
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
              <th scope="col">Métier</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${datas.map((partners) => this.renderPartner(partners)).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
};

export default AdminPartners;
