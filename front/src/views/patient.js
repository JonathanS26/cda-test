const Patient = class Patient {
  render() {
    return `
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Formulaire d'Inscription du Patient</h1>
    </div>
    <form id="form-patient">
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
      <div class="form-group">
        <label for="nir">NIR</label>
        <input type="text" class="form-control" id="nir" name="nir" placeholder="NIR" >
      </div>
      <div class="form-group">
        <label for="insuranceRegime">Régime d'assurance</label>
        <select class="form-control" id="insuranceRegime" name="insuranceRegime">
          <option>Régime général</option>
          <option>Régime agricole</option>
          <option>Ampi</option>
          <option>Sncf</option>
          <option>Mgen</option>
          <option>Cmmns</option>
        </select>
      </div>
      <div class="form-group">
        <label for="accidentType">Type d'accident</label>
        <select class="form-control" id="accidentType" name="accidentType">
          <option>Accident de la route</option>
          <option>Accident piéton</option>
          <option>Accident médical</option>
          <option>Accident du travail</option>
          <option>Accident du sport</option>
          <option>Accident de la vie</option>
          <option>Agression</option>
          <option>Maltraitance</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Inscrire</button>
      <div class="errors-form text-danger pt-2"></div>
    </form>
        `;
  }
};

export default Patient;
