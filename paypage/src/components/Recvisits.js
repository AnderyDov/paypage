import React, { useState } from "react";
import SvgComponent from "./SvgComponent";

export default function Recvisits({
  user,
  setUser,
  setAuthed,
  showModal,
  setShowModal,
}) {
  const [emailInp, setEmailInp] = useState("");
  const [errEmail, setErrEmail] = useState(false);
  const [placeEmail, setPlaceEmail] = useState("email");

  function handlerChangeEmail(e) {
    if (e.target.value !== "") {
      setErrEmail(false);
      setPlaceEmail("email");
    }
    setEmailInp(e.target.value);
  }

  function handlerBackToPay() {
    setAuthed("paypage");
    setShowModal({
      show: false,
      text: "В демо версии эта опция недоступна",
    });
    setEmailInp(false);
    setErrEmail(false);
    setPlaceEmail(false);
  }

  function handlerGiveMeMoney() {
    if (emailInp === "") {
      setErrEmail(true);
      setPlaceEmail("его надо заполнить");
      setShowModal({
        ...showModal,
        show: true,
        text: "поле для email обязательно для заполнения",
      });
    } else {
      setEmailInp("");
      setErrEmail(false);
      setShowModal({
        show: true,
        text: "В демо версии эта опция недоступна",
      });
    }
  }

  let out = (
    <div className="recvisits flex w-full h-fit min-h-hull flex-col items-center">
      <div className="user w-full flex justify-center bg-base-200 px-11 py-5">
        <div>
          <p>Лицевой счет: {user.ls}</p>
          <p>
            Адрес: {user.street} {user.house} {user.appartment}
          </p>
          <p>Оплата жилищно-коммунальных услуг</p>
          <p className="font-extralight text-sm indent-2">
            Для отмены ошибочно совершенных операций Вам следует обратиться в
            офис МУП "Название компании" по адресу: какой-то адрес и написать
            заявление о возврате средств. При себе необходимо иметь паспорт и
            копию платежного поручения отменяемой операции.
          </p>
          <p>Дополнительная информация:</p>
          <p>тел: 123456789</p>
          <p>e-mail: support@qqqqqq.ru</p>
          <p className="text-red-600">
            Внимание: при оплате картами возврат возможен только безналичным
            способом (переводом на карточный счет, с которого была проведена
            оплата).
          </p>
          <p className="w-full">
            <button className="btn btn-sm m-2" onClick={handlerBackToPay}>
              Вернуться к внеснеию показаний
            </button>
          </p>
        </div>
      </div>
      <div className="logotips bg-base-300 w-full h-[80px] flex items-center justify-center">
        <div className="h-full w-[80px] ">
          <SvgComponent name="visa" />
        </div>
        <div className="h-full w-[80px] mx-5">
          <SvgComponent name="mastercard" />
        </div>
        <div className="h-full w-[80px] mx-5">
          <SvgComponent name="mir" />
        </div>
      </div>
      <div className="pay w-full py-5">
        <div className="border rounded-md w-fit p-5 mx-auto flex flex-col">
          <p>МУП "Название компании" МО Какой-то район</p>
          <p>
            <span>субсчет:</span> 13000700000
          </p>
          <p className="my-3">
            <input
              className="input input-sm"
              type="text"
              disabled
              value={user.dolg + " руб."}
            />{" "}
            долг
          </p>
          <p className="mb-3">
            <input
              className="input input-sm input-bordered"
              defaultValue={user.dolg}
              type="number"
            />{" "}
            оплатить
          </p>
          <p>
            <button className="btn btn-sm mx-auto" onClick={handlerGiveMeMoney}>
              оплатить
            </button>
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 bg-base-300 flex h-24 sm:h-56 justify-center items-center px-8 py-5 sm:flex sm:flex-col sm:justify-around sm:px-3 ">
        <div className="relative flex flex-col m-2">
          {errEmail && (
            <div className="absolute right-[20px] bottom-[10px] text-red-400">
              *
            </div>
          )}
          Введите Ваш E-mail:
          <input
            className={`input input-sm input-bordered ${
              errEmail && "placeholder:text-red-400"
            }`}
            type="email"
            placeholder={placeEmail}
            value={emailInp}
            onChange={handlerChangeEmail}
          />
        </div>
        <div className="text-xs">
          * По указанным Вами реквизитам будет предоставлен электронный чек.
          Поле является обязательным для заполнения, согласно Федеральному
          Закону от 22.05.2003 № 54-ФЗ "О применении контрольно-кассовой техники
          при осуществлении наличных денежных расчетов и (или) расчетов с
          использованием электронных средств платежа"
        </div>
      </div>
    </div>
  );

  return out;
}
