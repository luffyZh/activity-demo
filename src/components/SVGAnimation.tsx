import { CSSProperties, useState } from "react";

const svgStyle = {
  padding: "10px",
  overflow: 'visible'
}

const svgContainerStyle: CSSProperties = {
  position: 'relative',
  color: '#fff',
  fontSize: '20px',
  fontWeight: 600,
}

export default function SVGAnimation() {
  const [showSvg, setShowSvg] = useState(false);
  const [cur, setCur] = useState(0);
  const offset = [800, 500, 308, 2][cur];
  const repeatCount = (800 - offset) / 800;
  const time = 500 / repeatCount;

  function animate(cur: number) {
    if (cur !== 0) {
      setShowSvg(false);
      setTimeout(() => {
        setCur(cur);
        setShowSvg(true);
      }, 500)
      return;
    }
    setCur(cur);
    setShowSvg(true);
  }

  return (
    <div className="svg-container" style={svgContainerStyle}>
      <div className="btn-container">
        <button onClick={() => animate(1)}>
          点我到达第二个点
        </button>
        <button onClick={() => animate(2)}>
          点我到达第三个点
        </button>
        <button onClick={() => animate(3)}>
          点我到达第四个点
        </button>
      </div>
      <div className="row1">
        <span>1</span>
        <span>2</span>
      </div>
      <div className="row2">
        <span>3</span>
        <span>4</span>
      </div>
      {
        showSvg && <svg
        style={svgStyle}
        className="map"
        width="300px"
        height="202px"
        viewBox="-2 0 302 202"
        version="1.1"
        xmlns="http://www.w3.org/2020/svg"
      >
        <defs>
          <linearGradient id="line_1" x1="0%" x2="95.616%" y1="100%" y2="100%">
            <stop offset="0%" stopColor="#9396FF" />
            <stop offset="50.831%" stopColor="#A685FF" />
            <stop offset="100%" stopColor="#E695FC" />
          </linearGradient>
          <linearGradient id="line_2" x1="11.042%" x2="79.574%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#E094FC" />
            <stop offset="100%" stopColor="#E371FF" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path
            d="M 2 3 L 300 3 L 300 202 L 2 202"
            strokeWidth="4"
            stroke="#fff"
            opacity=".1"
            strokeLinecap="round"
          />
          <path
            d="M 2 3 L 300 3 L 300 202 L 2 202"
            strokeOpacity="1"
            strokeDasharray="800"
            strokeDashoffset="800"
            stroke="url(#line_1)"
            strokeWidth="4"
            strokeLinecap="round"
          >
            <animate
              id="mapAnimate"
              attributeName="stroke-dashoffset"
              begin="1s"
              dur="500ms"
              from="800"
              to={offset}
              fill="freeze"
              calcMode="linear"
            />
          </path>
          <g transform="translate(1)">
            <circle fill="#E294FC" opacity=".201" cx="-1" cy="2" r="6">
              <animateMotion
                begin="1s"
                dur={time + "ms"}
                repeatCount={repeatCount}
                fill="freeze"
                calcMode="linear"
                path="M 2 3 L 300 3 L 300 202 L 2 202"
              />
            </circle>
            <circle fill="url(#line_2)" cx="-1" cy="2" r="5">
              <animateMotion
                begin="1s"
                dur={time + "ms"}
                repeatCount={repeatCount}
                fill="freeze"
                calcMode="linear"
                path="M 2 3 L 300 3 L 300 202 L 2 202"
              />
            </circle>
          </g>
        </g>
      </svg>
      }
    </div>
  );
}
