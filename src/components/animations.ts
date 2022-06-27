
const slidein = {
    hidden: {
        x: "-100vh",
        opacity: 0,
    },
    visible: {
        x: "-50%",
        opacity: 1,
        transition: {
            duration: 1,
            type: "spring",
            damping: 20,
            stiffness: 200,
        },
    },
    exit: {
        x: "-100vh",
        opacity: 0,
        transition: { duration: 0.5 }
    },
};
const slideinMenu = {
    hidden: {
      x: "-100vh",
      opacity: 0,
    },
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        damping: 20,
        stiffness: 200,
      },
    },
    exit: {
      x: "-100vh",
      opacity: 0,
      transition: { duration: 0.5 }
    },
  };



export {slidein, slideinMenu};