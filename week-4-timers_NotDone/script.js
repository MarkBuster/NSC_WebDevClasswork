/**
 * AD 320
 * stopwatch timer
 */

'use strict';
(function() {

  // introduce any module global variables necessary here

  window.addEventListener('load', init);

  /**
   * initiates page upon load
   */
  function init() {
    id('stopwatch').addEventListener('click', toggleStopwatch);
    id('reset').addEventListener('click', resetStopwatch);
  }

  /**
   * toggles the stop watch time
   */
  function toggleStopwatch() {
    // TODO: complete this function
  }

  /**
   * resets the stop watch
   */
  function resetStopwatch() {
    // TODO: complete this function (hint: it's a super short one)
  }

  /* -------------------- Helper Function -------------------- */
  /**
   * id helper function
   * @param {String} idName name of id
   * @return {Object} element with id name
   */
  function id(idName) {
    return document.getElementById(idName);
  }
})();
