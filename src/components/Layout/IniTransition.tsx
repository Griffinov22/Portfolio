import { motion } from "framer-motion";

const boxTransition = {
  initial: {
    height: "100svh",
  },
  exit: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textTransition = {
  exit: {
    opacity: [0.4, 1, 1, 0.2],
    transition: { times: [0, 0.4, 0.7, 1], duration: 2 },
  },
};

const IniTransition = () => {
  if (typeof window != "undefined") {
    window.scrollTo(0, 0);
  }

  const movingKeys: Array<number> = [37, 38, 39, 40];
  const preventDefaultForScrollKeys = (e: KeyboardEvent): false | void => {
    if (movingKeys.includes(e.keyCode)) {
      e.preventDefault();
      return false;
    }
  };
  const preventDefault = (e: Event): void => {
    e.preventDefault();
  };

  const wheelEvent: string =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  const disableScroll = () => {
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, { passive: false }); // modern desktop
    window.addEventListener("touchmove", preventDefault, { passive: false }); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  };

  const enableScroll = () => {
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault);
    window.removeEventListener("touchmove", preventDefault);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  };

  return (
    <motion.div
      variants={boxTransition}
      initial="initial"
      exit="exit"
      className="position-absolute d-grid bottom-0 w-100 bg-black"
      style={{ placeItems: "center", zIndex: 9999 }}
      onAnimationStart={() => {
        // prevent scrolling
        window.scrollTo(0, 0);
        disableScroll();
      }}
      onAnimationComplete={() => {
        // allow scrolling
        enableScroll();
      }}>
      <motion.h2
        variants={textTransition}
        style={{ fontSize: "2rem" }}>
        Griffin Overmyer
      </motion.h2>
    </motion.div>
  );
};
export default IniTransition;

// const BlackBox = styled(motion.div)`
//   position: absolute;
//   z-index: 2;
//   display: grid;
//   bottom: 0;
//   place-items: center;
//   width: 100%;
//   background: black;
// `;

// const BlackBoxText = styled(motion.h2)`
//   font-size: 2rem;
// `;
