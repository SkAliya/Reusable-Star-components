import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";

import Ratings from "./Ratings.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <Ratings maxStatrs={10} /> */}
    <Ratings
      maxStars={5}
      color="yellow"
      starSize={35}
      messages={["poor", "ok ok", "gud", "excellent", "marvelous"]}
      defaultRating={0}
    />
    <Ratings maxStars={8} color="blue" starSize={48} defaultRating={4} />
  </StrictMode>
);
