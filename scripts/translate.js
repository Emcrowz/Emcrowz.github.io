let currentLang = document.getElementsByTagName("html")[0].lang;
//console.log(currentLang);

function updateContent(langData)
{
  document.querySelectorAll("[translation-content]").forEach(el => {
    const key = el.getAttribute("translation-content");
    el.textContent = langData[key];
  });
};

function setLanguagePreference(lang)
{
  localStorage.setItem('language', lang);
  location.reload();
}

async function fetchLanguageData(lang) 
{
  const response = await fetch(`translation/${lang}.json`);
  return response.json();
}

async function changeLanguage(lang)
{
  await setLanguagePreference(lang);

  const langData = await fetchLanguageData(lang);
  updateContent(langData);
}

window.addEventListener("DOMContentLoaded", async () => {
  const userPrefferedLanguage = localStorage.getItem('language') || 'en';
  const langData = await fetchLanguageData(userPrefferedLanguage);

  updateContent(langData);
});

