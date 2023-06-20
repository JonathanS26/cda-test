const Patient = class Patient {
  render() {
    return `
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Formulaire d'Inscription du Patient</h1>
    </div>
    <form id="form-patient">
      <div class="form-group">
        <label for="firstName">Prénom</label>
        <input type="text" class="form-control" id="firstName" name="firstName" placeholder="Prénom">
      </div>
      <div class="form-group">
        <label for="lastName">Nom</label>
        <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Nom" >
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="Email" >
      </div>
      <div class="form-group">
        <label for="cellphone">Téléphone portable</label>
        <input type="tel" class="form-control" id="cellphone" name="cellphone" placeholder="Téléphone portable" >
      </div>
      <div class="form-group">
        <label for="address">Adresse</label>
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
        <label for="language">Langue parlée</label>
        <input type="text" class="form-control" id="language" name="language" placeholder="Langue parlée" >
      </div>      
      <div class="form-group">
        <label for="dob">Date de naissance</label>
        <input type="date" class="form-control" id="dob" name="dob" >
      </div>
      <div class="form-group">
        <label for="gender">Genre</label>
        <select class="form-control" id="gender" name="gender">
          <option>Homme</option>
          <option>Femme</option>
          <option>Autre</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Inscrire</button>
      <div class="errors-form text-danger pt-2"></div>
    </form>
        `;
  }
};

export default Patient;
