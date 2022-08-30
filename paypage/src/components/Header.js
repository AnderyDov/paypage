import React, { useState } from "react";
import SvgComponent from "./SvgComponent";

export default function Header({
  themes,
  setThemes,
  showModal,
  baseLs,
  setBaseLs,
  setShowModal,
  setAuthed,
  setUser,
}) {
  const [hideMenu, setHideMenu] = useState(false);

  function handlerShowMenu() {
    setHideMenu(!hideMenu);
  }

  function handlerAddHiddenEye() {
    document.querySelector(".eye").classList.add("hidden");
  }

  function handlerRemHiddenEye() {
    document.querySelector(".eye").classList.remove("hidden");
  }

  function handlerShowNodal() {
    setShowModal({ ...showModal, show: true });
  }

  function handlerOut() {
    setAuthed("noauth");
    setUser({
      ls: "",
      pass: "",
      sity: "",
      street: "",
      house: "",
      appartment: "",
      cold: "",
      hot: "",
      date: "",
      dolg: "",
    });
    setBaseLs({
      ...baseLs,
      houses: [],
      appartments: [],
    });
    setShowModal({
      show: false,
      text: "В демо версии эта опция недоступна",
    });
  }

  let navHoverStyle = themes
    ? "px-3 py-1 rounded-tl-lg rounded-br-lg cursor-pointer hover:text-sky-700 hover:shadow-md hover:shadow-sky-700"
    : "px-3 py-1 rounded-tl-lg rounded-br-lg cursor-pointer hover:text-amber-300 hover:shadow-md hover:shadow-amber-300";

  let shadowModalStyle = themes
    ? "shadow-md shadow-sky-700"
    : "shadow-md shadow-amber-300";

  let hiddenStyle = hideMenu ? "hidden" : "";

  let out = (
    <div className="relative flex w-full flex-row justify-between items-center h-24 bg-base-300 px-11 sm:justify-end">
      <div
        className={
          "flex justify-around items-center sm:flex-col  sm:items-start sm:fixed sm:z-10 sm:p-3 sm:top-5 sm:left-5 sm:bg-base-200 sm:shadow-md " +
          hiddenStyle
        }
      >
        <div className={navHoverStyle} onClick={handlerOut}>
          Начало
        </div>
        <div className={navHoverStyle} onClick={handlerShowNodal}>
          Здатать вопрос
        </div>
        <div className={navHoverStyle} onClick={handlerShowNodal}>
          Сайт МУП "Название компании"
        </div>
        <div className={navHoverStyle} onClick={handlerShowNodal}>
          Личный кабинет
        </div>
      </div>
      <button
        className="fixed z-20 top-7 left-[270px] s:left-56 btn btn-square btn-sm hidden sm:inline-flex"
        onClick={handlerShowMenu}
      >
        {hideMenu ? (
          <SvgComponent name="burger" />
        ) : (
          <SvgComponent name="close" />
        )}
      </button>

      <div className="relative flex justify-between items-center px-5">
        <div
          className={
            "eye z-30 absolute top-[40px] right-[40px] rounded-tl-lg rounded-br-lg p-5 bg-base-200 hidden " +
            shadowModalStyle
          }
        >
          Весия сайта для людей сограниченными возможностями
        </div>
        <button
          className={
            "btn btn-sm btn-circle glass text-neutral mx-3 hover:border"
          }
          onClick={handlerShowNodal}
          onMouseOver={handlerRemHiddenEye}
          onMouseOut={handlerAddHiddenEye}
        >
          <SvgComponent name="eye" themes={themes} />
        </button>
        <button
          className={
            "btn btn-sm btn-circle glass text-neutral mx-3 hover:border"
          }
          onClick={() => setThemes(!themes)}
        >
          {themes ? <SvgComponent name="sun" /> : <SvgComponent name="moon" />}
        </button>
      </div>
    </div>
  );

  return out;
}
