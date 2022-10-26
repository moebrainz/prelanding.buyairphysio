let advertLinks = document.querySelectorAll(
  "#presell-container a, #barebones-wrapper a"
);
for (let i = 0; i < advertLinks.length; i++) {
  if (promoScript.link_overwrite && advertLinks[i].target !== "_blank") {
    advertLinks[i].href = promoScript.destination_url;
  } else {
    if (!advertLinks[i].href) {
      advertLinks[i].href = promoScript.destination_url;
    }
  }
}
let advertImages = document.querySelectorAll(".single-presell img");
for (let i = 0; i < advertImages.length; i++) {
  if (!advertImages[i].closest("a") && promoScript.link_overwrite) {
    let wrappedImg =
      "<a href='" +
      promoScript.destination_url +
      "'>" +
      advertImages[i].outerHTML +
      "</a>";
    advertImages[i].outerHTML = wrappedImg;
  }
}
if (window.gu_qs && window.gu_qs.gutheme) {
  let themeIndex = gu_qs["gutheme"];
  let selectedTheme = JSON.parse(promoScript.themes)[themeIndex - 1];
  if (selectedTheme) {
    console.log(selectedTheme);
    document.body.style.backgroundColor = selectedTheme.bgColor;
    let header = document.getElementById("header");
    header.style.backgroundColor = selectedTheme.bgColor;
    header.style.color = selectedTheme.textColor;
    let footer = document.getElementById("footer");
    footer.style.backgroundColor = selectedTheme.bgColor;
    footer.style.color = selectedTheme.textColor;
    let innerContainer = document
      .getElementById("presell-container")
      .getElementsByClassName("container")[0];
    innerContainer.className = "container";
    innerContainer.classList.add("heading-" + selectedTheme.headingFont);
    innerContainer.classList.add("base-" + selectedTheme.baseFont);
    innerContainer.style.backgroundColor = selectedTheme.contentBgColor;
    innerContainer.style.color = selectedTheme.textColor;
    innerContainer.style.maxWidth = selectedTheme.contentWidth;
  } else {
    console.log("Theme index is invalid");
  }
}
