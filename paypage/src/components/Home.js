import React, { useState } from "react";

export default function Home({
  baseLs,
  setBaseLs,
  authed,
  setAuthed,
  user,
  setUser,
  setShowModal,
}) {
  const [variant, setVaiant] = useState(false);
  const [errPass, setErrPass] = useState(false);
  const [placePass, setPlacePass] = useState("введите пароль");
  const [errLs, setErrLs] = useState(false);
  const [placeLs, setPlaceLs] = useState("введите номер лицевого счёта");

  function handlerChangeVariant(attr) {
    setVaiant(attr);
    setShowModal({
      show: false,
      text: "В демо версии эта опция недоступна",
    });
  }

  function handlerChangeStreet(e) {
    setUser({ ...user, street: e.target.value });
    if (e.target.value !== "") {
      console.log(e.target.value);
      fetch("/gethouses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
        body: JSON.stringify({ street: e.target.value }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res === "no") {
            console.log(res);
          } else {
            setBaseLs({ ...baseLs, houses: res.map((el) => el.house) });
          }
        });
    } else {
      setBaseLs({
        ...baseLs,
        houses: [],
        appartments: [],
      });
      setUser({ ...user, street: "", house: "", appartment: "" });
    }
  }

  function handlerChangeHouse(e) {
    setUser({ ...user, house: e.target.value });
    if (e.target.value !== "") {
      console.log(e.target.value);
      fetch("/getappartments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
        body: JSON.stringify({ street: user.street, house: e.target.value }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res === "no") {
            console.log(res);
          } else {
            setBaseLs({
              ...baseLs,
              appartments: res.map((el) => el.appartment),
            });
          }
        });
    } else {
      console.log("empty");
      setBaseLs({
        ...baseLs,
        appartments: [],
      });
      setUser({ ...user, house: "", appartment: "" });
    }
  }

  function handlerChangeAppartment(e) {
    setUser({ ...user, appartment: e.target.value });
  }

  function handlerChangeLS(e) {
    setErrLs(false);
    setPlaceLs("введите номер лицевого счёта");
    setUser({ ...user, ls: e.target.value });
  }

  function handlerChangePass(e) {
    setErrPass(false);
    setPlacePass("введите пароль");
    setUser({ ...user, pass: e.target.value });
  }

  function handlerAuthByAddres() {
    if (user.pass === "") {
      setErrPass(true);
      setPlacePass("это поле обязательно к заполнению");
      setUser({ ...user, pass: "" });
      return false;
    }
    if (user.street === "") {
      setErrPass(true);
      setPlacePass("вы не выбрали улицу");
      setUser({ ...user, pass: "" });
      return false;
    }
    if (user.house === "") {
      setErrPass(true);
      setPlacePass("вы не выбрали дом");
      setUser({ ...user, pass: "" });
      return false;
    }
    if (user.appartment === "") {
      setErrPass(true);
      setPlacePass("вы не выбрали квартиру");
      setUser({ ...user, pass: "" });
      return false;
    }
    if (
      user.pass !== "" &&
      user.street !== "" &&
      user.house !== "" &&
      user.appartment !== ""
    ) {
      fetch("/authaddres", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
        body: JSON.stringify({
          street: user.street,
          house: user.house,
          appartment: user.appartment,
          pass: user.pass,
        }),
      })
        .then((res) => res.json(res))
        .then((res) => {
          if (res === "no") {
            console.log("no!");
            setUser({ ...user, ls: "", pass: "" });
            setPlaceLs("неправильный адрес или пароль");
            setPlacePass("неправильный адрес или пароль");
            setErrLs(true);
            setErrPass(true);
          } else {
            console.log("OK");
            console.log(res);
            setUser({
              ...user,
              ls: res.ls,
              street: res.street,
              house: res.house,
              appartment: res.appartment,
              cold: res.cold,
              hot: res.hot,
              date: res.date,
              dolg: res.dolg,
            });
            setAuthed("paypage");
          }
        });
    }
  }

  function handlerAuthByLs() {
    if (user.pass === "") {
      setErrPass(true);
      setPlacePass("это поле обязательно к заполнению");
    }
    if (user.ls === "") {
      setErrLs(true);
      setPlaceLs("это поле обязательно к заполнению");
    }
    if (user.pass !== "" && user.ls !== "") {
      fetch("/authls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
        body: JSON.stringify({ ls: user.ls, pass: user.pass }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res === "no") {
            console.log("no!");
            setUser({ ...user, ls: "", pass: "" });
            setPlaceLs("неправильный логин или пароль");
            setPlacePass("неправильный логин или пароль");
            setErrLs(true);
            setErrPass(true);
          } else {
            console.log("OK");
            console.log(res);
            setUser({
              ...user,
              ls: res.ls,
              street: res.street,
              house: res.house,
              appartment: res.appartment,
              cold: res.cold,
              hot: res.hot,
              date: res.date,
              dolg: res.dolg,
            });
            setAuthed("paypage");
          }
        });
    }
  }

  let streets = [...[""], ...baseLs.streets].map((el, i) => (
    <option key={i}>{el}</option>
  ));

  let houses = [...[""], ...baseLs.houses].map((el, i) => (
    <option key={i}>{el}</option>
  ));

  let appartments = [...[""], ...baseLs.appartments].map((el, i) => (
    <option key={i}>{el}</option>
  ));

  let passwordInput = (
    <div className="relative w-full">
      {errPass && <div className="absolute right-[10px] text-red-400">*</div>}
      <input
        type="text"
        className={`input input-sm input-bordered w-full mb-3 ${
          errPass && "placeholder:text-red-400"
        }`}
        placeholder={placePass}
        value={user.pass}
        onChange={handlerChangePass}
      />
    </div>
  );

  let searchByLs = (
    <div className="form p-5 rounded-md shadow-md border mt-11 flex flex-col">
      Поиск лицевого счета по адресу или номеру
      <hr />
      <p>Hомер лицевого счёта</p>
      <div className="relative w-full">
        {errLs && <div className="absolute right-[10px] text-red-400">*</div>}
        <input
          type="number"
          className={`input input-sm input-bordered w-full mb-3 ${
            errLs && "placeholder:text-red-400"
          }`}
          placeholder={placeLs}
          value={user.ls}
          onChange={handlerChangeLS}
        />
      </div>
      <p>Пароль</p>
      {passwordInput}
      <div className="flex w-full justify-around sm:flex-col">
        <button className="btn btn-sm sm:mb-2" onClick={handlerAuthByLs}>
          Искать
        </button>
        <button
          className="btn btn-sm"
          onClick={() => handlerChangeVariant(false)}
        >
          Поиск по адресу
        </button>
      </div>
    </div>
  );

  let searchByAddres = (
    <div className="form p-5 sm:w-[90%] rounded-md shadow-md border mt-11 flex flex-col">
      Поиск лицевого счета по адресу или номеру
      <hr />
      <p>Поселение</p>
      <select className="select select-sm select-bordered mb-3 mt-1" disabled>
        <option>Тюмень</option>
      </select>
      <p>Улица</p>
      <select
        className="select select-sm select-bordered mb-3 mt-1"
        value={user.street}
        onChange={handlerChangeStreet}
      >
        {streets}
      </select>
      <p>Дом</p>
      <select
        className="select select-sm select-bordered mb-3 mt-1"
        value={user.house}
        onChange={handlerChangeHouse}
      >
        {houses}
      </select>
      <p>Квартира</p>
      <select
        className="select select-sm select-bordered mb-3 mt-1"
        value={user.appartment}
        onChange={handlerChangeAppartment}
      >
        {appartments}
      </select>
      <p>Пароль</p>
      {passwordInput}
      <div className="flex w-full justify-around sm:flex-col">
        <button className="btn btn-sm sm:mb-2" onClick={handlerAuthByAddres}>
          Искать
        </button>
        <button
          className="btn btn-sm"
          onClick={() => handlerChangeVariant(true)}
        >
          Поиск по номеру счёта
        </button>
      </div>
    </div>
  );

  let out = (
    <div className="home w-full flex flex-col items-center">
      <div className="instruction w-full bg-base-200 px-11 py-5 text-sm indent-2">
        Уважаемые собственники и квартиросъёмщики данный сервис предоставляет
        Вам возможность вносить показания индивидуальных приборов учёта,
        просматривать задолженность и вносить оплату за жилищно-коммунальные
        услуги, воспользуйтесь формой поиска лицевого счёта. Для открытия списка
        Поселений или Улиц нажмите Пробел; используйте клавиши Стрелка
        Вверх/Стрелка Вниз для выбора нужного Посления или Улицы; для
        подтверждения выбора нажмите Enter. Для получения пароля к личному
        кабинету, старнице внесений показаний сётччиков и оплаты счёта
        обратитесь в упарвляющую компанию
        <br />
        <span className="text-red-600">
          Внимание в демо версии сайта у всех пользователей пароль для входа
          "123", так же в демо версии представлены только счета собственников
          города Тюмень
        </span>
      </div>
      {variant ? searchByLs : searchByAddres}
    </div>
  );

  return out;
}
