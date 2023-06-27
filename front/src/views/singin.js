const SignIn = class SignIn {
  renderForm() {
    return `
    <form id="form-singin">
      <div class="form-group">
        <label for="inputEmail">Email</label>
        <input type="email" name="email" class="form-control form-control-user" id="inputEmail">
      </div>
      <div class="form-group">
        <label for="inputPassword">Mot de passe</label>
        <input type="password" name="password" class="form-control form-control-user" id="inputPassword">
      </div>
      <button class="btn btn-primary btn-user btn-block">Connexion</button>
      <div class="errors-form text-danger pt-2"></div>
    </form>
    `;
  }

  render() {
    return `
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4">
            <h2 class="text-center">Connexion</h2>
            ${this.renderForm()}
            <hr>
            <div class="text-center">
              <a class="small" href="/signup">Vous n'avez pas de compte? Inscrivez-vous</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

export default SignIn;
