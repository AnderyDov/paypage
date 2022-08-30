import React from "react";

export default function SvgComponent({ name, themes }) {
  let themesColor = themes
    ? "hover:hover:fill-sky-700"
    : "hover:fill-amber-300";

  switch (name) {
    case "sun":
      return (
        <svg
          className="cursor-pointer stroke-grey-600 hover:stroke-sky-700 hover:fill-sky-700"
          height="24"
          width="24"
          enablbackground="new 0 0 32 32"
          id="Outline"
          version="1.1"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <desc />
          <g>
            <path d="M16,26c-5.514,0-10-4.486-10-10S10.486,6,16,6s10,4.486,10,10S21.514,26,16,26z M16,8c-4.411,0-8,3.589-8,8s3.589,8,8,8   s8-3.589,8-8S20.411,8,16,8z" />
            <rect height="4" width="2" x="15" />
            <rect
              height="4"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.5269 6.1006)"
              width="2"
              x="5.101"
              y="4.101"
            />
            <rect height="2" width="4" y="15" />
            <rect
              height="2"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.5268 11.8995)"
              width="4"
              x="4.101"
              y="24.9"
            />
            <rect height="4" width="2" x="15" y="28" />
            <rect
              height="4"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -10.7279 25.8994)"
              width="2"
              x="24.9"
              y="23.9"
            />
            <rect height="2" width="4" x="28" y="15" />
            <rect
              height="2"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 3.272 20.1005)"
              width="4"
              x="23.9"
              y="5.101"
            />
          </g>
        </svg>
      );

    case "moon":
      return (
        <svg
          className="bi bi-moon cursor-pointer stroke-[1px] stroke-black hover:stroke-amber-300 hover:fill-amber-300 "
          fill="currentColor"
          height="20"
          width="20"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
        </svg>
      );

    case "eye":
      return (
        <svg
          viewBox="0 0 576 512"
          xmlns="http://www.w3.org/2000/svg"
          className={"stroke-greey-600 " + themesColor}
        >
          <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
        </svg>
      );

    case "visa":
      return (
        <svg
          version="1.1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g enablbackground="new 0 0 32 32">
            <g>
              <g>
                <path
                  d="M211.328,184.445l-23.465,144.208h37.542l23.468-144.208     H211.328z M156.276,184.445l-35.794,99.185l-4.234-21.358l0.003,0.007l-0.933-4.787c-4.332-9.336-14.365-27.08-33.31-42.223     c-5.601-4.476-11.247-8.296-16.705-11.559l32.531,124.943h39.116l59.733-144.208H156.276z M302.797,224.48     c0-16.304,36.563-14.209,52.629-5.356l5.357-30.972c0,0-16.534-6.288-33.768-6.288c-18.632,0-62.875,8.148-62.875,47.739     c0,37.26,51.928,37.723,51.928,57.285c0,19.562-46.574,16.066-61.944,3.726l-5.586,32.373c0,0,16.763,8.148,42.382,8.148     c25.616,0,64.272-13.271,64.272-49.37C355.192,244.272,302.797,240.78,302.797,224.48z M455.997,184.445h-30.185     c-13.938,0-17.332,10.747-17.332,10.747l-55.988,133.461h39.131l7.828-21.419h47.728l4.403,21.419h34.472L455.997,184.445z      M410.27,277.641l19.728-53.966l11.098,53.966H410.27z"
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#005BAC",
                  }}
                />
              </g>
            </g>
          </g>
          <g>
            <g>
              <g>
                <path
                  d="M104.132,198.022c0,0-1.554-13.015-18.144-13.015H25.715     l-0.706,2.446c0,0,28.972,5.906,56.767,28.033c26.562,21.148,35.227,47.51,35.227,47.51L104.132,198.022z"
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#F6AC1D",
                  }}
                />
              </g>
            </g>
          </g>
        </svg>
      );

    case "mastercard":
      return (
        <svg
          id="Layer_1"
          version="1.1"
          viewBox="2 -12 82 68"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
              <g>
                <g>
                  <circle cx="27.434" cy="28.001" fill="#ED1C2E" r="23.934" />
                  <g>
                    <path
                      d="M59.566,4.066c-6.187,0-11.82,2.346-16.068,6.196c-0.863,0.784-1.671,1.632-2.415,2.533h4.835       c0.661,0.804,1.27,1.649,1.825,2.535h-8.485c-0.508,0.814-0.97,1.66-1.379,2.535h11.242c0.384,0.821,0.723,1.666,1.014,2.533       h-13.27c-0.277,0.826-0.509,1.671-0.695,2.534h14.659c0.353,1.634,0.538,3.329,0.538,5.069c0,2.657-0.434,5.215-1.232,7.603       h-13.27c0.291,0.869,0.629,1.715,1.013,2.535h11.243c-0.41,0.875-0.87,1.721-1.38,2.534h-8.483       c0.553,0.884,1.163,1.729,1.825,2.533h4.834c-0.743,0.901-1.551,1.75-2.418,2.534c4.248,3.849,9.882,6.193,16.067,6.193       C72.784,51.934,83.5,41.218,83.5,28C83.5,14.784,72.784,4.066,59.566,4.066z"
                      fill="#FCB131"
                    />
                  </g>
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M21.845,30.621c-0.272-0.031-0.393-0.041-0.58-0.041c-1.473,0-2.217,0.506-2.217,1.504      c0,0.614,0.363,1.005,0.931,1.005C21.037,33.089,21.8,32.082,21.845,30.621z M23.735,35.02c-0.347,0-2.153,0-2.153,0      l0.049-1.021c-0.657,0.809-1.533,1.193-2.723,1.193c-1.408,0-2.374-1.101-2.374-2.696c0-2.404,1.679-3.808,4.562-3.808      c0.295,0,0.672,0.027,1.059,0.076c0.081-0.326,0.102-0.465,0.102-0.641c0-0.653-0.452-0.898-1.666-0.898      c-1.272-0.013-2.32,0.304-2.751,0.445c0.027-0.164,0.36-2.22,0.36-2.22c1.294-0.381,2.148-0.523,3.109-0.523      c2.231,0,3.414,1.001,3.411,2.895c0.004,0.508-0.08,1.133-0.21,1.958C24.285,31.207,23.8,34.273,23.735,35.02z"
                    fill="#003473"
                  />
                  <polygon
                    fill="#003473"
                    points="15.447,35.02 12.848,35.02 14.337,25.688 11.013,35.02 9.243,35.02 9.024,25.74 7.459,35.02       5.027,35.02 7.059,22.88 10.795,22.88 11.021,29.675 13.301,22.88 17.457,22.88     "
                  />
                  <path
                    d="M62.775,30.621c-0.271-0.031-0.392-0.041-0.577-0.041c-1.474,0-2.218,0.506-2.218,1.504      c0,0.614,0.361,1.005,0.931,1.005C61.971,33.089,62.732,32.082,62.775,30.621z M64.668,35.02c-0.348,0-2.152,0-2.152,0      l0.049-1.021c-0.656,0.809-1.533,1.193-2.723,1.193c-1.41,0-2.374-1.101-2.374-2.696c0-2.404,1.681-3.808,4.562-3.808      c0.296,0,0.672,0.027,1.06,0.076c0.08-0.326,0.101-0.465,0.101-0.641c0-0.653-0.451-0.898-1.664-0.898      c-1.271-0.013-2.32,0.304-2.752,0.445c0.027-0.164,0.361-2.22,0.361-2.22c1.295-0.381,2.148-0.523,3.107-0.523      c2.232,0,3.414,1.001,3.412,2.895c0.004,0.508-0.079,1.133-0.211,1.958C65.218,31.207,64.732,34.273,64.668,35.02z"
                    fill="#003473"
                  />
                  <path
                    d="M35.282,34.87c-0.711,0.224-1.266,0.319-1.867,0.319c-1.328,0-2.053-0.763-2.053-2.168      c-0.019-0.438,0.191-1.584,0.356-2.633c0.15-0.922,1.127-6.737,1.127-6.737h2.583l-0.301,1.494h1.56l-0.352,2.373H34.77      c-0.3,1.877-0.728,4.217-0.732,4.527c0,0.509,0.271,0.731,0.89,0.731c0.296,0,0.525-0.03,0.7-0.094L35.282,34.87z"
                    fill="#003473"
                  />
                  <path
                    d="M43.201,34.79c-0.888,0.271-1.743,0.403-2.65,0.399c-2.892-0.002-4.399-1.513-4.399-4.403      c0-3.375,1.917-5.859,4.521-5.859c2.129,0,3.489,1.391,3.489,3.572c0,0.726-0.094,1.431-0.318,2.428H38.7      c-0.174,1.433,0.742,2.029,2.246,2.029c0.923,0,1.758-0.19,2.685-0.62L43.201,34.79z M41.749,28.938      c0.015-0.207,0.273-1.763-1.202-1.763c-0.822,0-1.411,0.627-1.649,1.763H41.749z"
                    fill="#003473"
                  />
                  <path
                    d="M25.293,28.269c0,1.249,0.605,2.109,1.979,2.756c1.052,0.494,1.215,0.642,1.215,1.09      c0,0.615-0.464,0.894-1.492,0.894c-0.776,0-1.497-0.12-2.329-0.391c0,0-0.341,2.177-0.357,2.28      c0.59,0.129,1.117,0.248,2.704,0.293c2.742,0,4.008-1.045,4.008-3.301c0-1.355-0.529-2.151-1.832-2.752      c-1.089-0.498-1.215-0.611-1.215-1.072c0-0.533,0.433-0.806,1.272-0.806c0.51,0,1.207,0.054,1.867,0.147l0.37-2.29      c-0.673-0.107-1.693-0.192-2.287-0.192C26.29,24.927,25.284,26.445,25.293,28.269z"
                    fill="#003473"
                  />
                  <path
                    d="M55.838,25.187c0.723,0,1.396,0.188,2.322,0.655l0.425-2.635c-0.382-0.15-1.721-1.027-2.854-1.027      c-1.738,0-3.211,0.863-4.244,2.287c-1.508-0.5-2.129,0.51-2.889,1.516l-0.675,0.157c0.052-0.331,0.099-0.66,0.083-0.993h-2.388      c-0.325,3.056-0.902,6.151-1.354,9.208l-0.119,0.664h2.602c0.434-2.818,0.67-4.623,0.814-5.847l0.979-0.543      c0.146-0.545,0.604-0.728,1.521-0.705c-0.119,0.644-0.185,1.321-0.185,2.023c0,3.229,1.745,5.241,4.541,5.241      c0.722,0,1.339-0.096,2.298-0.354l0.455-2.769c-0.861,0.425-1.566,0.623-2.207,0.623c-1.51,0-2.424-1.114-2.424-2.957      C52.539,27.06,53.896,25.187,55.838,25.187z"
                    fill="#003473"
                  />
                  <path
                    d="M77.836,22.88l-0.577,3.507c-0.709-0.934-1.473-1.611-2.479-1.611c-1.312,0-2.504,0.994-3.285,2.458      c-1.09-0.226-2.213-0.61-2.213-0.61l-0.002,0.01c0.088-0.818,0.125-1.316,0.115-1.486h-2.388      c-0.323,3.056-0.901,6.151-1.354,9.208l-0.118,0.664h2.6c0.353-2.277,0.619-4.172,0.816-5.672      c0.889-0.804,1.334-1.501,2.229-1.457c-0.396,0.962-0.63,2.068-0.63,3.203c0,2.469,1.248,4.098,3.138,4.098      c0.953,0,1.684-0.33,2.396-1.09l-0.123,0.918h2.459l1.979-12.14H77.836z M74.587,32.739c-0.885,0-1.332-0.655-1.332-1.946      c0-1.939,0.837-3.316,2.017-3.316c0.893,0,1.377,0.68,1.377,1.934C76.646,31.367,75.796,32.739,74.587,32.739z"
                    fill="#003473"
                  />
                </g>
                <g>
                  <polygon
                    fill="#FFFFFF"
                    points="16.194,34.3 13.596,34.3 15.085,24.968 11.761,34.3 9.991,34.3 9.772,25.022 8.208,34.3       5.775,34.3 7.807,22.16 11.543,22.16 11.647,29.675 14.168,22.16 18.204,22.16     "
                  />
                  <path
                    d="M22.593,29.9c-0.272-0.03-0.393-0.039-0.58-0.039c-1.473,0-2.218,0.505-2.218,1.502      c0,0.613,0.364,1.007,0.931,1.007C21.785,32.37,22.548,31.361,22.593,29.9z M24.482,34.3c-0.346,0-2.153,0-2.153,0l0.049-1.022      c-0.656,0.809-1.533,1.193-2.723,1.193c-1.408,0-2.374-1.1-2.374-2.697c0-2.403,1.679-3.806,4.562-3.806      c0.294,0,0.672,0.027,1.059,0.077c0.08-0.326,0.101-0.465,0.101-0.643c0-0.653-0.452-0.896-1.666-0.896      c-1.272-0.015-2.319,0.302-2.751,0.443c0.028-0.164,0.361-2.22,0.361-2.22c1.294-0.379,2.148-0.523,3.11-0.523      c2.231,0,3.413,1.003,3.411,2.895c0.004,0.508-0.08,1.135-0.21,1.958C25.033,30.486,24.549,33.555,24.482,34.3z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M59.333,22.487l-0.426,2.635c-0.929-0.467-1.601-0.655-2.321-0.655c-1.939,0-3.301,1.875-3.301,4.549      c0,1.842,0.915,2.955,2.426,2.955c0.641,0,1.348-0.197,2.207-0.623l-0.457,2.769c-0.957,0.26-1.575,0.354-2.296,0.354      c-2.798,0-4.54-2.012-4.54-5.24c0-4.34,2.409-7.374,5.852-7.374C57.611,21.856,58.952,22.338,59.333,22.487z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M63.523,29.9c-0.271-0.03-0.392-0.039-0.578-0.039c-1.473,0-2.219,0.505-2.219,1.502      c0,0.613,0.364,1.007,0.933,1.007C62.717,32.37,63.48,31.361,63.523,29.9z M65.415,34.3c-0.347,0-2.151,0-2.151,0l0.049-1.022      c-0.656,0.809-1.533,1.193-2.724,1.193c-1.409,0-2.373-1.1-2.373-2.697c0-2.403,1.679-3.806,4.562-3.806      c0.295,0,0.672,0.027,1.059,0.077c0.08-0.326,0.102-0.465,0.102-0.643c0-0.653-0.451-0.896-1.666-0.896      c-1.271-0.015-2.317,0.302-2.75,0.443c0.027-0.164,0.36-2.22,0.36-2.22c1.295-0.379,2.147-0.523,3.109-0.523      c2.231,0,3.413,1.003,3.409,2.895c0.007,0.508-0.078,1.135-0.209,1.958C65.966,30.486,65.48,33.555,65.415,34.3z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M36.03,34.148c-0.711,0.225-1.265,0.322-1.866,0.322c-1.328,0-2.054-0.765-2.054-2.169      c-0.019-0.438,0.191-1.584,0.356-2.632c0.15-0.924,1.127-6.738,1.127-6.738h2.583l-0.302,1.495h1.325l-0.353,2.372h-1.33      c-0.3,1.879-0.728,4.217-0.733,4.527c0,0.51,0.272,0.73,0.89,0.73c0.296,0,0.525-0.029,0.7-0.093L36.03,34.148z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M43.949,34.07c-0.887,0.271-1.744,0.4-2.65,0.4c-2.892-0.003-4.398-1.514-4.398-4.404      c0-3.375,1.917-5.86,4.519-5.86c2.131,0,3.491,1.391,3.491,3.574c0,0.724-0.095,1.431-0.318,2.428H39.45      c-0.175,1.433,0.742,2.03,2.244,2.03c0.924,0,1.758-0.191,2.686-0.623L43.949,34.07z M42.498,28.217      c0.014-0.206,0.273-1.762-1.203-1.762c-0.822,0-1.411,0.628-1.65,1.762H42.498z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M26.041,27.548c0,1.25,0.606,2.109,1.979,2.759c1.052,0.493,1.214,0.641,1.214,1.088      c0,0.615-0.464,0.895-1.492,0.895c-0.775,0-1.497-0.121-2.329-0.389c0,0-0.341,2.176-0.356,2.277      c0.59,0.129,1.117,0.248,2.704,0.293c2.742,0,4.008-1.044,4.008-3.3c0-1.356-0.53-2.151-1.832-2.75      c-1.089-0.502-1.214-0.612-1.214-1.073c0-0.534,0.432-0.809,1.271-0.809c0.509,0,1.207,0.057,1.867,0.15l0.37-2.29      c-0.673-0.106-1.693-0.193-2.287-0.193C27.038,24.206,26.032,25.724,26.041,27.548z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M79.168,34.3H76.71l0.121-0.919c-0.713,0.762-1.442,1.09-2.396,1.09c-1.889,0-3.138-1.627-3.138-4.097      c0-3.284,1.937-6.052,4.228-6.052c1.009,0,1.771,0.411,2.481,1.347l0.576-3.509h2.563L79.168,34.3z M75.334,32.02      c1.211,0,2.061-1.371,2.061-3.328c0-1.253-0.482-1.936-1.377-1.936c-1.179,0-2.015,1.376-2.015,3.317      C74.003,31.365,74.451,32.02,75.334,32.02z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M67.756,24.428c-0.324,3.056-0.902,6.15-1.355,9.208L66.282,34.3h2.599      c0.932-6.038,1.153-7.216,2.612-7.068c0.231-1.236,0.664-2.318,0.985-2.864c-1.088-0.227-1.695,0.389-2.492,1.557      c0.063-0.505,0.179-0.996,0.156-1.497H67.756z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M46.367,24.428c-0.326,3.056-0.905,6.15-1.356,9.208L44.893,34.3h2.601      c0.93-6.038,1.153-7.216,2.608-7.068c0.233-1.236,0.668-2.318,0.988-2.864c-1.088-0.227-1.695,0.389-2.492,1.557      c0.063-0.505,0.18-0.996,0.155-1.497H46.367z"
                    fill="#FFFFFF"
                  />
                  <g>
                    <path
                      d="M80.309,33.527c0-0.43,0.349-0.774,0.772-0.774c0.428,0,0.772,0.347,0.772,0.774       c0,0.425-0.346,0.771-0.772,0.771C80.656,34.3,80.309,33.952,80.309,33.527z M81.081,34.114c0.325,0,0.588-0.265,0.588-0.587       c0-0.325-0.263-0.59-0.588-0.59c-0.324,0-0.587,0.265-0.587,0.59C80.494,33.852,80.757,34.114,81.081,34.114z M80.977,33.864       h-0.158v-0.679h0.289c0.06,0,0.119,0.002,0.172,0.035c0.057,0.036,0.087,0.103,0.087,0.17c0,0.075-0.044,0.147-0.117,0.176       l0.125,0.297h-0.176l-0.104-0.268h-0.115v0.269H80.977z M80.977,33.48h0.088c0.033,0,0.068,0.002,0.098-0.015       c0.025-0.016,0.039-0.049,0.039-0.077c0-0.025-0.016-0.056-0.038-0.07c-0.026-0.016-0.071-0.012-0.101-0.012h-0.086V33.48z"
                      fill="#FFFFFF"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      );

    case "mir":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -16 49 28"
          id="Layer_1"
          version="1.1"
          style={{ scale: "1.3" }}
        >
          <defs id="defs20" />
          <linearGradient
            y2="3"
            x2="48.5"
            y1="3"
            x1="34.1742"
            gradientUnits="userSpaceOnUse"
            id="SVGID_1_"
          ></linearGradient>
          <path
            id="path10"
            d="M43.5,0h-9.3c0.5,3.1,3.5,6,6.8,6h7.4c0.1-0.3,0.1-0.7,0.1-1C48.5,2.2,46.3,0,43.5,0z"
            className="st0"
            style={{
              clipRule: "evenodd",
              fill: "rgb(50, 63, 247)",
              fillRule: "evenodd",
            }}
          />
          <path
            style={{
              clipRule: "evenodd",
              fill: "#4db45f",
              fillRule: "evenodd",
            }}
            id="path12"
            d="m 35,6.5 0,7.5 4.5,0 0,-4 4,0 c 2.2,0 4.1,-1.5 4.7,-3.5 z"
            className="st1"
          />
          <path
            id="path14"
            d="M19,0v14h4c0,0,1,0,1.5-1C27.2,7.6,28,6,28,6h0.5v8H33V0h-4c0,0-1,0.1-1.5,1C25.2,5.6,24,8,24,8h-0.5V0H19z"
            className="st1"
            style={{
              clipRule: "evenodd",
              fill: "#4db45f",
              fillRule: "evenodd",
            }}
          />
          <path
            id="path16"
            d="M0,14V0h4.5c0,0,1.3,0,2,2c1.8,5.3,2,6,2,6s0.4-1.3,2-6c0.7-2,2-2,2-2H17v14h-4.5V6.5H12L9.5,14h-2L5,6.5H4.5  V14H0z"
            className="st1"
            style={{
              clipRule: "evenodd",
              fill: "#4db45f",
              fillRule: "evenodd",
            }}
          />
        </svg>
      );

    case "close":
      return (
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
      );

    case "burger":
      return (
        <svg
          version="1.1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
        >
          <g id="info" />
          <g id="icons">
            <g id="menu">
              <path d="M20,10H4c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2C22,10.9,21.1,10,20,10z" />
              <path d="M4,8h12c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6C2,7.1,2.9,8,4,8z" />
              <path d="M16,16H4c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2C18,16.9,17.1,16,16,16z" />
            </g>
          </g>
        </svg>
      );

    default:
      return <svg></svg>;
  }
}
if (module && module.hot) module.hot.accept();
