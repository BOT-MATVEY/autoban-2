function EmailFormErrorIcon({ errorText }) {
  return (
    <div className="email-form-banner__container__email-form__input__error-icon centered-element nav-text">
      <div>!</div>
      <div className="email-form-banner__container__email-form__input__error-icon__hover-message">
        {errorText}
      </div>
    </div>
  );
}

export default EmailFormErrorIcon;
