export default (form, errors) => {
  const elFormError = document.querySelector(`${form} .errors-form`);
  elFormError.innerHTML = '';

  errors.forEach((error) => {
    const key = Object.keys(error);
    const elP = `<p class="m-0">${key} : ${error[key]}</p>`;

    elFormError.innerHTML += elP;
  });
};
