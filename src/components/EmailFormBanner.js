import EmailFormErrorIcon from "./EmailFormErrorIcon";
import React from "react";
import axios from "axios";

function EmailFormBanner() {
  const [isPolicyCheckboxChecked, setIsPolicyCheckboxChecked] =
    React.useState(false);

  const [isNameDirty, setIsNamelDirty] = React.useState(false);
  const [isPhoneDirty, setIsPhoneDirty] = React.useState(false);
  const [isEmailDirty, setIsEmailDirty] = React.useState(false);

  const [userFullName, setUserFullName] = React.useState("");
  const [userPhoneNumber, setUserPhoneNumber] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");

  const [isNameValid, setIsNameValid] = React.useState(false);
  const [isPhoneValid, setIsPhoneValid] = React.useState(false);
  const [isEmailValid, setIsEmailValid] = React.useState(false);

  const [isUserTriedToSentForm, setIsUserTriedToSentForm] = React.useState();

  const [isFormSent, setIsFormSent] = React.useState();

  const emailRegx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const phoneRegx = /^(8\d{10}$)|(\+7\d{10}$)/;

  const nameRegX = /^[А-я\s]+$/;

  const checkEmailValidation = (emailFromUser) => {
    setIsEmailValid(emailRegx.test(emailFromUser));
  };

  const checkPhoneValidation = (phoneFromUser) => {
    setIsPhoneValid(phoneRegx.test(phoneFromUser));
  };

  const checkNameValidation = (nameFromUser) => {
    setIsNameValid(nameRegX.test(nameFromUser));
  };

  const handleChangeCheckbox = (e) => {
    setIsPolicyCheckboxChecked(e.target.checked);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (isNameValid & isPhoneValid & isEmailValid & isPolicyCheckboxChecked) {
      console.log("Форма отправлена");
      console.log({
        userName: userFullName,
        userPhoneNumber: userPhoneNumber,
        userEmail: userEmail,
      });

      setIsFormSent(true);
    } else {
      console.log("Форма не отправлена");
    }
  };

  return (
    <div id="LisingId">
      <section className="email-form-banner" data-aos="fade-up">
        {isFormSent && (
          <div className="email-form-banner__success-element">
            <h2>
              Уже работаем, <br />
              скоро все отправим
            </h2>
          </div>
        )}
        <div className="email-form-banner__container">
          <form
            onSubmit={(event) => {
              handleFormSubmit(event);
              setIsUserTriedToSentForm(true);
            }}
            className="email-form-banner__container__email-form"
          >
            <h2>пришлём на вашу почту ассортимент из наличия</h2>

            {/* --------------------------------------NAME---------------------------------------------------- */}
            <div className="email-form-banner__container__email-form__input__container">
              <input
                className="email-form-banner__container__email-form__input"
                type="text"
                placeholder="ФИО"
                name="userFullName"
                onChange={(event) => {
                  setUserFullName(event.target.value);
                  setIsNamelDirty(true);
                  checkNameValidation(event.target.value);
                }}
              />

              {isNameDirty & !isNameValid & isUserTriedToSentForm ? (
                <EmailFormErrorIcon
                  errorText={"Кажется, у вас цифра в имени, неужто вы карл 9?"}
                />
              ) : (
                ""
              )}
            </div>

            {/* --------------------------------------PHONE---------------------------------------------------- */}

            <div className="email-form-banner__container__email-form__input__container">
              <input
                required=""
                className="email-form-banner__container__email-form__input"
                type="tel"
                placeholder="Номер телефона"
                name="userPhoneNumber"
                onChange={(event) => {
                  setUserPhoneNumber(event.target.value);
                  setIsPhoneDirty(true);
                  checkPhoneValidation(event.target.value);
                }}
              />

              {isPhoneDirty & !isPhoneValid & isUserTriedToSentForm ? (
                <EmailFormErrorIcon
                  errorText={"Две ошибка и ты ошибся 2 раза"}
                />
              ) : (
                ""
              )}
            </div>
            {/* --------------------------------------EMAIL---------------------------------------------------- */}
            <div className="email-form-banner__container__email-form__input__container">
              <input
                className="email-form-banner__container__email-form__input"
                type="email"
                placeholder="E-mail"
                name="userEmail"
                onChange={(event) => {
                  setUserEmail(event.target.value);
                  setIsEmailDirty(true);
                  checkEmailValidation(event.target.value);
                }}
              />

              {isEmailDirty & !isEmailValid & isUserTriedToSentForm ? (
                <EmailFormErrorIcon
                  errorText={"Возможно вы ввели e-mail без знака @ или домена"}
                />
              ) : (
                ""
              )}
            </div>

            <label
              className="email-form-banner__container__email-form__checkbox-and-text"
              htmlFor="email-form-checkbox__inf-policy"
            >
              <input
                onChange={(e) => handleChangeCheckbox(e)}
                className="email-form-banner__container__email-form__checkbox-and-text__checkbox"
                type="checkbox"
                id="email-form-checkbox__inf-policy"
              />

              <div className="email-form-banner__container__email-form__checkbox-and-text__checkbox-fake centered-element">
                <img
                  src="./images/nav-icons/checkbox-checked-icon.svg"
                  alt=""
                />
              </div>

              <span className="email-form-banner__container__email-form__checkbox-and-text__text">
                Оставляя свои контактные данные, вы даете согласие на обработку
                Ваших персональных данных
                {isUserTriedToSentForm & !isPolicyCheckboxChecked
                  ? " (Обязательно)"
                  : ""}
              </span>
            </label>

            <button
              className={
                isEmailValid &
                isNameValid &
                isPhoneValid &
                isPolicyCheckboxChecked
                  ? "btn btn-dominant "
                  : "btn btn-dominant blocked-button "
              }
            >
              отправить
            </button>
          </form>

          <div className="email-form-banner__container__image-container">
            <img
              className="email-form-banner__container__image-container__truck-photo"
              src="./images/email-form-truck.png"
              alt="фото грузовика"
            />
          </div>

          <span className="email-form-banner__container__shacman-horizontal-text">
            SHACMAN
          </span>
        </div>
      </section>
    </div>
  );
}

export default EmailFormBanner;
