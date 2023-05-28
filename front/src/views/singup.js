const SingUp = class SingUp {
  renderForm() {
    return `
      <form id="form-singup">
        <div class="form-group">
          <input type="text" class="form-control form-control-user" id="firstName" name="firstName" placeholder="Prénom" />
        </div>
        <div class="form-group">
         <input type="text" class="form-control form-control-user" id="lastName" name="lastName" placeholder="Nom"/>
        </div>
        <div class="form-group">
         <input type="email" class="form-control form-control-user" id="email" name="email" placeholder="Email"/>
        </div>
        <div class="form-group">
         <input type="password" class="form-control form-control-user" id="password" name="password" placeholder="Mot de passe"/>
        </div>
        <div class="form-group">
         <input type="password" lass="form-control form-control-user" class="form-control form-control-user"  name="repeatPassword" id="repeatPassword" placeholder="Confirmez le mot de passe"/>
        </div>
         <button class="btn btn-primary btn-user btn-block">Signin</button>
        <div class="errors-form text-danger pt-2"></div>
      </form>
    `;
  }

  render() {
    return `
      <div class="container">
        <!-- Outer Row -->
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div class="col-lg-6">
                      <div class="p-5">
                        <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Sign-Up</h1>
                        </div>
                        ${this.renderForm()}
                        <hr>
                        <div class="text-center">
                          <a class="small" href="forgot-password.html">Forgot Password?</a>
                        </div>
                        <div class="text-center">
                          <a class="small" href="register.html">Create an Account!</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

export default SingUp;
