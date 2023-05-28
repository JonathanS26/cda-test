import Footer from './footer';
import Header from './header';

const Employee = class Employee {
  render() {
    return `
    ${new Header().render()}
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Formulaire d'Inscription d'Employé</h1>
      </div>
      <form id="form-employee">
        <div class="form-group">
          <label for="lastName">Nom</label>
          <input type="text" class="form-control" id="lastName" name="lastName">
        </div>
        <div class="form-group">
          <label for="firstName">Prénom</label>
          <input type="text" class="form-control" id="firstName" name="firstName">
        </div>        
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" name="email">
        </div>
        <div class="form-group">
          <label for="phone">Téléphone fixe</label>
          <input type="tel" class="form-control" id="phone" name="phone">
        </div>
        <div class="form-group">
          <label for="phone">Téléphone portable</label>
          <input type="tel" class="form-control" id="cellphone" name="cellphone">
        </div
        <div class="form-group">
          <label for="address">Adresse</label>
          <input type="text" class="form-control" id="address" name="address">
        </div>
        <div class="form-group">
          <label for="city">Ville</label>
          <input type="text" class="form-control" id="city" name="city">
        </div>
        <div class="form-group">
          <label for="zip">Code postal</label>
          <input type="text" class="form-control" id="zip" name="zip">
        </div>
        <div class="form-group">
          <label for="role">Rôle</label>
          <select class="form-control" id="role" name="role">
            <option>Admin</option>
            <option>Non Admin</option>
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
    </div>
    ${new Footer().render()}
        `;
  }
};

export default Employee;
