import React from "react";

export default function DemoModal({ showModal, setShowModal, themes }) {
  let show = showModal ? "block" : "hidden";

  let shadowModalStyle = themes
    ? "shadow-md shadow-sky-700"
    : "shadow-md shadow-amber-300";

  function hideDemoModal() {
    setShowModal({
      show: false,
      text: "В демо версии эта опция недоступна",
    });
  }

  let out = (
    <div
      className={
        "demo-modal z-30 card w-96 h-fit max-w-full bg-base-100 shadow-xl fixed inset-x-1/4 top-5 sm:left-0 " +
        show +
        " " +
        shadowModalStyle
      }
    >
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn btn-square btn-sm" onClick={hideDemoModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h4>{showModal.text}</h4>
      </div>
    </div>
  );

  return out;
}
