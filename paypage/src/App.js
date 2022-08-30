import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import DemoModal from "./components/DemoModal";
import Main from "./components/Main";

export default function App() {
  const [themes, setThemes] = useState(true);
  const [showModal, setShowModal] = useState({
    show: false,
    text: "В демо версии эта опция недоступна",
  });
  const [baseLs, setBaseLs] = useState({
    streets: [],
    houses: [],
    appartments: [],
  });
  const [authed, setAuthed] = useState("noauth");
  const [user, setUser] = useState({
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

  useEffect(() => {
    fetch("/getstreets")
      .then((res) => res.json())
      .then((res) =>
        setBaseLs({ ...baseLs, streets: res.map((el) => el.street) })
      )
      .catch((err) => console.log(err));
  }, []);

  let out = (
    <div
      className="app relative flex flex-col  h-fit min-h-full  w-full items-center font-mono"
      data-theme={themes ? "fantasy" : "night"}
    >
      {showModal.show && (
        <DemoModal
          showModal={showModal}
          setShowModal={setShowModal}
          themes={themes}
        />
      )}
      <Header
        themes={themes}
        setThemes={setThemes}
        showModal={showModal}
        setShowModal={setShowModal}
        baseLs={baseLs}
        setBaseLs={setBaseLs}
        setAuthed={setAuthed}
        setUser={setUser}
      />
      <Main
        baseLs={baseLs}
        setBaseLs={setBaseLs}
        authed={authed}
        setAuthed={setAuthed}
        user={user}
        setUser={setUser}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );

  return out;
}
