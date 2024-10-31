/**
 * A webpage for fetching cute pet photos. Puppies or kitties
 * will be populated on the page after the user selects their desired
 * pet type.
 *
 * Important information to complete this assignment:
 * - Service URL: https://courses.cs.washington.edu/courses/cse154/webservices/pets/ajaxpets.php
 * - Query Parameters (required): ?animal=<value>
 *   - Details: animal is the name of the query parameter you need to assign
 *              a value to. This API recognizes either a value of puppy or kitty.
 *
 * Example Request (with puppy as the value):
 * https://courses.cs.washington.edu/courses/cse154/webservices/pets/ajaxpets.php?animal=puppy
 */

"use strict";
(function () {
  window.addEventListener("load", init);

  /**
   * Initializes interactive elements on the page with event listeners.
   */
  function init() {
    //query input radio buttons to add event listener to trigger display of pets.
    const input = qsa("input[name='animal']");
    input.forEach((input) => {
      input.addEventListener("change", makeRequest);
    });
  }

  /**
   * Fetch data from the ajax pets api!
   */
  function makeRequest(input) {
    const animal = getSelectedAnimal();
    const URL = `https://courses.cs.washington.edu/courses/cse154/webservices/pets/ajaxpets.php?animal=${animal}`;

    fetch(URL)
      .then(statusCheck)
      .then((response) => response.text())
      .then(displayPets)
      .catch((error) => {
        throw new Error("Not able to retieve pets images.");
      });
  }

  /**
   * function to display pet content.
   */
  function displayPets(urlList) {
    const pictures = id("pictures");
    pictures.innerHTML = ""; //clear previous pics
    const petArray = urlList.trim().split("\n");

    //create element in a loop to post pictures
    petArray.forEach((picURL) => {
      const img = document.createElement("img");
      img.src = picURL;
      img.alt = "pet picture";
      pictures.appendChild(img);
    });
  }
  /* ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Helper function returns the type of animal that was selected.
   * @returns animal type
   */
  function getSelectedAnimal() {
    const inputs = qsa("input[name='animal']");
    for (let input of inputs) {
      if (input.checked) {
        return input.value;
      }
    }
    return null;
  }

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
