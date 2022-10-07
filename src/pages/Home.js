import React from "react";

import classes from "./Home.module.css";

const HomePage = () => {
  return (
    <div>
      <div className={classes.quote}>
        <h1 className={classes.phrase}>Tiens Goup Distributor</h1>
        <p className={classes.advertise}>
          Finding TIENS is the initial step to changing your life and that of
          your loved ones. <br /> We all, search for an ideal way of life -
          which includes no cash stresses, no pressure, <br /> and a lot of
          holiday occasions. Accomplishing your fantasies is currently most
          certainly <br /> conceivable in light of the fact that joining TIENS
          will give you a guide to making
          <br /> them a reality! There are many advantages of joining the TIENS
          business.
        </p>
      </div>
      {/* Interesting items in view of 5000 years of Conventional Chinese Medication
      joined with current exploration, <br />
      science, and innovation. Top-notch Schooling and Preparing Framework which
      helps guide you to accomplish <br /> a maintainable, fruitful business
      with us. Optimistic acknowledgment levels. */}
    </div>
  );
};

export default HomePage;
