// Change only after verifying the public App Store listing is live.
// This file contains no tracking, requests, or backend configuration.
const release = Object.freeze({ isReleased: false, appStoreURL: "https://apps.apple.com/app/id6829145663" });
if (release.isReleased) {
  const link = document.getElementById("app-store-link");
  link.href = release.appStoreURL;
  link.hidden = false;
  document.getElementById("coming-soon").hidden = true;
  document.getElementById("release-status").textContent = "Available on the App Store.";
}
