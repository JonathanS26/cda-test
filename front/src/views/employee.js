const Employee = class Employee {
  render() {
    return `
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Formulaire d'Inscription du Employee</h1>
    </div>
    <form id="form-employee">
      <div class="form-group">
        <label for="lastName">Nom</label>
        <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Nom" >
      </div>
      <div class="form-group">
        <label for="firstName">Prénom</label>
        <input type="text" class="form-control" id="firstName" name="firstName" placeholder="Prénom">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="Email" >
      </div>
      <div class="form-group">
        <label for="phone">Téléphone fixe</label>
        <input type="tel" class="form-control" id="phone" name="phone" placeholder="Téléphone fixe" >
      </div>
      <div class="form-group">
        <label for="cellphone">Téléphone portable</label>
        <input type="tel" class="form-control" id="cellphone" name="cellphone" placeholder="Téléphone portable" >
      </div>
      <div class="form-group">
        <label for="address1">Adresse</label>
        <input type="text" class="form-control" id="address" name="address" placeholder="Adresse" >
      </div>
      <div class="form-group">
        <label for="city">Ville</label>
        <input type="text" class="form-control" id="city" name="city" placeholder="Ville" >
      </div>
      <div class="form-group">
        <label for="zip">Code postal</label>
        <input type="text" class="form-control" id="zip" name="zip" placeholder="Code postal" >
      </div>
      <div class="form-group">
        <label for="role">Rôle</label>
        <select class="form-control" id="role" name="role">
          <option value="1">Admin</option>
          <option value="0">Non Admin</option>
        </select>
      </div>
      <div class="form-group">
        <label for="level">Niveau</label>
        <select class="form-control" id="level" name="level">
          <option>Acquisition</option>
          <option>Conversion</option>
          <option>Rétention</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Inscrire</button>
      <div class="errors-form text-danger pt-2"></div>
    </form>
        `;
  }
};

export default Employee;
