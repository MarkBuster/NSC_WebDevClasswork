/*
 * AD 320 Exercise 3 - Whack a Bug
 * Handles whacking bugs.

  whackBug function specifications:
  - Changes the image of the bug that was clicked from bug.png to bug-whacked.png 
  - Add the whacked class to the image that was clicked
  - Increment the whack count by 1 -  each bug should only be counted once even if clicked multiple times
  - If all 24 bugs have been whacked, change the text in the #game p tag to say "all bugs have been whacked"
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * Sets up event listeners for the start button and the bugs.
   */
  function init() {
    let bugs = qsa("#bug-container img");
    for (let i = 0; i < bugs.length; i++) {
      bugs[i].addEventListener("click", whackBug);
    }
  }

  /**
   * TODO
   * whacks the clicked bug and increments the score. The bug cannot be whacked again afterwards.
   */
  function whackBug() {
    if(!this.classList.contains("whacked")){
      this.classList.add("whacked");
      this.src = "bug-whacked.png";
  
      let currentScore = parseInt(id("score").textContent);
      id("score").textContent = currentScore + 1;
  
      let totalBugs = qsa("#bug-container img").length;
      let whackedBugs = qsa("#bug-container img.whacked").length;
  
      if (whackedBugs === totalBugs) {
        qs("#game p").textContent = "All bugs have been whacked!";
      }
    }
  }

  /* --- AD 320 HELPER FUNCTIONS --- */

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns an array of elements matching the given query.
   * @param {string} query - CSS query selector.
   * @returns {array} - Array of DOM objects matching the given query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

})();
