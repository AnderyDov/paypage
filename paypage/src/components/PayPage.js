import React, { useState } from "react";

export default function PaypPage({
  user,
  setUser,
  setAuthed,
  showModal,
  setShowModal,
}) {
  const [tempCold, setTempCold] = useState("");
  const [tempHot, setTempHot] = useState("");
  const [errCold, setErrCold] = useState(false);
  const [errHot, setErrHot] = useState(false);

  function handlerChangeTempCold(e) {
    setErrCold(false);
    setTempCold(e.target.value);
  }

  function handlerChangeTempHot(e) {
    setErrHot(false);
    setTempHot(e.target.value);
  }

  function handlerSubmitData() {
    if (+tempCold < 0) {
      setErrCold(true);
      setShowModal({
        ...showModal,
        show: true,
        text: "нельзя вносить показания меньше нуля",
      });
    }
    if (+setTempHot < 0) {
      setErrHot(true);
      setShowModal({
        ...showModal,
        show: true,
        text: "нельзя вносить показания меньше нуля",
      });
    }
    if (+tempCold > 50) {
      setErrCold(true);
      setShowModal({
        ...showModal,
        show: true,
        text: "Нельзя вносить данные больше пятидесяти кубов",
      });
    }
    if (+setTempHot > 50) {
      setErrHot(true);
      setShowModal({
        ...showModal,
        show: true,
        text: "Нельзя вносить данные больше пятидесяти кубов",
      });
    }
    if (tempCold === "") {
      setErrCold(true);
      setShowModal({
        ...showModal,
        show: true,
        text: "нельзя передать пустые показания",
      });
    }
    if (tempHot === "") {
      setErrHot(true);
      setShowModal({
        ...showModal,
        show: true,
        text: "нельзя передать пустые показания",
      });
    }
    if (tempCold !== "" && tempHot !== "" && +tempCold > 0 && +tempHot > 0) {
      let date = new Date().getTime();
      fetch("/submitdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; chaset=UTF-8",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ls: user.ls,
          cold: tempCold,
          hot: tempHot,
          date: date,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res === "no") {
            setShowModal({
              ...showModal,
              show: true,
              text: "не удалось сохранить показания, попробуйте позже",
            });
          } else {
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
            setTempCold("");
            setTempHot("");
            setShowModal({
              ...showModal,
              show: true,
              text: "Показания успешно переданы",
            });
          }
        });
    }
  }

  function handlerToRecvisivs() {
    setAuthed("recvisits");
    setTempCold("");
    setTempHot("");
    setErrHot(false);
    setErrCold(false);
    setShowModal({
      show: false,
      text: "В демо версии эта опция недоступна",
    });
  }

  let out = (
    <div className="paypage w-full flex flex-col items-center">
      <div className="user w-full flex justify-center bg-base-200 px-11 py-5">
        <div>
          <p>Лицевой счет: {user.ls}</p>
          <p>
            Адрес: {user.street} {user.house} {user.appartment}
          </p>
          <p>Задолженность по оплате ЖКУ</p>
          <p>МУП "Название компании" МО Какой-то район субсчет 12002726999</p>
          <p>Долг: {user.dolg} руб</p>
          <p className="w-full text-center">
            <button className="btn btn-sm" onClick={handlerToRecvisivs}>
              Перейти к оплате
            </button>
          </p>
        </div>
      </div>
      <div className="px-11 w-full overflow-auto">
        <table className="table table-compact w-full border my-3">
          <thead>
            <tr>
              <th>Позицыя</th>
              <th>номер сётчика</th>
              <th>дата следующей поверки</th>
              <th>дата последней передачи </th>
              <th>показания</th>
              <th>ввод данных</th>
              <th>отправить</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>холодное водоснабжение</td>
              <td>47000001</td>
              <td>01.04.2025</td>
              <td>
                {new Date(+user.date).toLocaleDateString()}{" "}
                {new Date(+user.date).toLocaleTimeString()}
              </td>
              <td className="text-center">{user.cold} m³</td>
              <td className="relative">
                {errCold && (
                  <div className="absolute left-[10px] text-red-400">*</div>
                )}
                <input
                  type="number"
                  className="input input-sm input-bordered w-24"
                  value={tempCold}
                  onChange={handlerChangeTempCold}
                />
              </td>
              <td>
                <button className="btn btn-sm" onClick={handlerSubmitData}>
                  отправить
                </button>
              </td>
            </tr>
            <tr>
              <td>горячее водоснабжение</td>
              <td>47000002</td>
              <td>01.04.2025</td>
              <td>
                {new Date(+user.date).toLocaleDateString()}{" "}
                {new Date(+user.date).toLocaleTimeString()}
              </td>
              <td className="text-center">{user.hot} m³</td>
              <td className="relative">
                {errHot && (
                  <div className="absolute left-[10px] text-red-400">*</div>
                )}
                <input
                  type="number"
                  className="input input-sm input-bordered w-24"
                  value={tempHot}
                  onChange={handlerChangeTempHot}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  return out;
}
