const filterEnabledCheckbox = document.getElementById("filter-enabled");

chrome.storage.local.get("filterEnabled", ({ filterEnabled }) => {
  filterEnabledCheckbox.checked = filterEnabled;
});

filterEnabledCheckbox.addEventListener("change", ({ target: { checked } }) => {
  chrome.storage.local.set({ filterEnabled: checked });
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    chrome.tabs.sendMessage(tab.id, { filterEnabled: checked });
  });
});
