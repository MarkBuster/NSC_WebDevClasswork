/**
 * JS for blog post exercise
 * You will be writing JavaScript to add the functionality of adding a new blog post to the blog.
 
  addEntry function specification:
  - An article should be appended to the #posts container. Inside should be a third level heading followed by a paragraph. The article should have the class .post added to it
  - The third level heading text content should be the text "Date: " followed by the date submitted. The paragraph's text content should be the text "Entry: " followed by the entry submitted
    - Hint: to grab the text from a form element use .value
  - If a user double clicks on any of the blog posts, the post that was clicked should be removed from the page
  The content in #date and #entry should be cleared

 */

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * sets up necessary functionality when page loads
   */
  function init() {
    qs("button").addEventListener("click", addEntry);
    let h5 = document.createElement("h5");
    h5.textContent = "- double click to delete -";
    qs("#posts").append(h5, ":)");
  }

  /**
   * adds a blog entry to the blog post page
   */
  function addEntry() {

    //making article class
    let article = document.createElement("article");
    article.classList.add("post");

    //vars to hold each input
    let dateVal = id("date").value;
    let inputVal = id("entry").value;
    
    //making new elements
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    h3.textContent = "Date: " + dateVal;
    p.textContent = "Entry: " + inputVal;
    
    //add the post to My posts
    article.appendChild(h3);
    article.appendChild(p);
    id("posts").appendChild(article);

    //clear original input boxes
    id("date").value = "";
    id("entry").value = "";

    article.addEventListener("dblclick", function() {
      article.remove();
    });
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }
})();