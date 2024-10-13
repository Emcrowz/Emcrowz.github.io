let currentLang = document.getElementsByTagName("html")[0].lang;
let btnLangLt = document.getElementById("langLt");
let btnLangEn = document.getElementById("langEn");
//console.log(currentLang);

async function updateContent(langData) {
  document.querySelectorAll("[translation-content]").forEach((el) => {
    const key = el.getAttribute("translation-content");
    el.textContent = langData[key];
  });
}

async function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
  location.reload();
}

async function fetchLanguageData(lang) {
  const response = await fetch(`translation/${lang}.json`);
  return response.json();
}

async function changeLanguage(lang) {
  await setLanguagePreference(lang);
  const langData = await fetchLanguageData(lang);

  if (lang == "en") {
    btnLangEn.style.display = "none";
    btnLangLt.style.display = "inline-block";
  } else {
    btnLangEn.style.display = "inline-block";
    btnLangLt.style.display = "none";
  }
  await updateContent(langData);
}

window.addEventListener("DOMContentLoaded", async () => {
  const userPrefferedLanguage = localStorage.getItem("language") || "en";
  const langData = await fetchLanguageData(userPrefferedLanguage);

  await updateContent(langData);
});
