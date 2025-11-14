export const About = () => {
  return (
    <div className="uppercase text-4xl text-white flex justify-around items-center absolute inset-0 w-full h-full bg-transparent backdrop-blur-xl z-98">

      <div className="relative w-[400px] h-[400px]">
        <svg
          className="shape-svg"
          width="500"
          height="500"
          viewBox="0 0 500 500"
        >
          <path
            d="M 250 0 L 300 60 L 500 60 L 500 500 L 70 500 L 0 430 L 0 0 Z"
            fill="transparent"
            stroke="#fff"
            strokeWidth="2"
          />

          <path
            d="M 250 0 L 300 60 L 500 60 L 500 500 L 70 500 L 0 430 L 0 0 Z"
            fill="transparent"
            stroke="#fff"
            strokeWidth="2"
            transform="translate(10, 10) scale(0.96)"
          />

        </svg>

        <div className="shape-text">
          hello
        </div>
      </div>

    </div>
  );
};