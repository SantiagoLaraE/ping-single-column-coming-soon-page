const form = document.querySelector("form");
const btnSubmit = document.querySelector(".intro__btn");
{
  /* <span class="form__error">Please, provide a valid email</span */
}
const renderMessage = (type, message) => {
  const span = document.createElement("span");
  span.innerHTML = message;
  if(type == 'error'){
    span.classList.add("form__error");
    form["email"].insertAdjacentElement("afterend", span);
  }else{
    span.classList.add("form__congrats");
    form.appendChild(span);
  }
};

const deleteErrors = () => {
  const errors = document.querySelectorAll(".form__error");
  errors.forEach((item) => item.remove());
};

const validateData = () => {
  deleteErrors();

  const value = form["email"].value;

  if (value == "") {
    renderMessage('error', "Please, provide an email");
    return false;
  }
  // RFC2822 Email Validation
  if (
    !value.match(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    )
  ) {
    renderMessage('error', "Please, provide a valid email");
    return false;
  }

  return true;
};

const congrats = () =>{
    form.innerHTML = '';

    renderMessage('congrats', 'Thanks, please check your email')
}

const sendData = (e) => {
  e.preventDefault();
  if (validateData()) {
    congrats();
  }
};

form[0].addEventListener("input", validateData);
form[1].addEventListener("click", sendData);
