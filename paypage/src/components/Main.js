import React from "react";
import Home from "./Home";
import PaypPage from "./PayPage";
import Recvisits from "./Recvisits";

export default function Main({
  baseLs,
  setBaseLs,
  authed,
  setAuthed,
  user,
  setUser,
  showModal,
  setShowModal,
}) {
  let showPage;
  switch (authed) {
    case "noauth":
      showPage = (
        <Home
          baseLs={baseLs}
          setBaseLs={setBaseLs}
          authed={authed}
          setAuthed={setAuthed}
          user={user}
          setUser={setUser}
          setShowModal={setShowModal}
        />
      );
      break;
    case "paypage":
      showPage = (
        <PaypPage
          user={user}
          setUser={setUser}
          setAuthed={setAuthed}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      );
      break;
    case "recvisits":
      showPage = (
        <Recvisits
          user={user}
          setUser={setUser}
          setAuthed={setAuthed}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      );
      break;
    default:
      break;
  }
  let out = (
    <div className="main relative w-full pb-24 sm:pb-56  h-fit grow">
      {showPage}
    </div>
  );

  return out;
}
