/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

window.MOJFrontend.initAll()


new MOJFrontend.ButtonMenu({
  container: $(".moj-button-menu"),
  mq: "(min-width: 200em)",
  buttonText: "Actions",
  menuClasses: "moj-button-menu__wrapper--right",
});

