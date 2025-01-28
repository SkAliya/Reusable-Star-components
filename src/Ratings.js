import { useState } from "react";
import PropTypes from "prop-types";

// const container = {
//   display: "flex",
//   gap: "20px",
//   alignItems: "center",
//   backgroundColor: "red",
//   padding: "10px",
//   //   color: "#fff",
// };

const starContainer = {
  display: "flex",
  gap: "5px",
};

const star = {
  margin: 0,
  lineHeight: "1",
};

// proptypes setting
Ratings.propTypes = {
  maxStars: PropTypes.number,
  color: PropTypes.string,
  starSize: PropTypes.number,
  messages: PropTypes.array,
  defaultRating: PropTypes.number,
};

export default function Ratings({
  maxStars = 5,
  color = "black",
  starSize = 35,
  messages = [],
  defaultRating = 0,
}) {
  const [starNum, setStarNum] = useState(defaultRating);
  const [starHover, setStarHover] = useState(0);
  return (
    <div>
      <div style={starContainer}>
        {Array.from({ length: maxStars }, (_, i) => (
          <Star
            key={i}
            color={color}
            size={starSize}
            onClick={() => setStarNum(i + 1)}
            onHoverIn={() => setStarHover(i + 1)}
            onHoverOut={() => setStarHover(0)}
            full={starHover ? starHover >= i + 1 : starNum >= i + 1}
          />
        ))}
      </div>
      <p>
        {(messages.length === maxStars && messages[starHover - 1]) ||
          starHover ||
          starNum ||
          ""}
      </p>
    </div>
  );
}

function Star({ onClick, full, onHoverIn, onHoverOut, color, size }) {
  const styleStar = {
    width: `${size}px`,
    height: `${size}px`,
  };
  return (
    <span
      style={styleStar}
      onClick={onClick}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
          fill={color}
        >
          <path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
            fill="none"
            stroke={color}
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>
      )}
    </span>
  );
}
