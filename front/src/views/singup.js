const SingUp = class SingUp {
  renderForm() {
    return `
    <form id="form-singup">
      <div class="form-group">
        <label for="firstName">Prénom</label>
        <input type="text" class="form-control" id="firstName" name="firstName" />
      </div>
      <div class="form-group">
        <label for="lastName">Nom</label>
        <input type="text" class="form-control" id="lastName" name="lastName"/>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" name="email"/>
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" class="form-control" id="password" name="password"/>
      </div>
      <div class="form-group">
        <label for="repeatPassword">Confirmez le mot de passe</label>
        <input type="password" class="form-control"  id="repeatPassword"  name="repeatPassword"/>
      </div>
        <button class="btn btn-primary btn-user btn-block">Inscription</button>
        <div class="errors-form text-danger pt-2"></div>
    </form>
    `;
  }

  render() {
    return `
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <h2 class="text-center">Inscription</h2>
          ${this.renderForm()}
          <hr>
          <div class="text-center">
            <a class="small" href="/signup">Vous avez déjà un compte? Connectez-vous</a>
          </div>
        </div>
      </div>
    </div>
    `;
  }
};

export default SingUp;
