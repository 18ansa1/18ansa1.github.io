// sessionHandler.js

import { clearCart } from "./buttonScript.js";

// Set a flag to indicate a new session
if (!sessionStorage.getItem("sessionActive")) {
  sessionStorage.setItem("sessionActive", "true");
  // Register an event to clear the cart when the session ends
  window.addEventListener("beforeunload", () => {
    clearCart();
  });
}
