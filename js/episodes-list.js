// Import
import logicFunction from "./logic.js";

// Init CSS style
const currentPage = window.location.pathname;
console.log(logicFunction.loadCSSstyle(currentPage));



// Create episodes list
const episodesContainer = document.getElementById('episodes-container');
logicFunction.showEpisodesList();