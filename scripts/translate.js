function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "en,lt",
    },
    "g_translate_element"
  );

  setTimeout(function () {
    // Set the default language to Lithuanian
    var selectElement = document.querySelectorAll(
      ".g_translate_element select"
    );
    selectElement.value = "lt";
    selectElement.dispatchEvent(new Event("change"));
  }, 1000);
}
