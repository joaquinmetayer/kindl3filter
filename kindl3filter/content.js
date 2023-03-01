let filterEnabled = false;

chrome.storage.local.get("filterEnabled", ({ filterEnabled: storedFilterEnabled }) => {
  filterEnabled = storedFilterEnabled;
  applyFilter();
});

chrome.runtime.onMessage.addListener(({ filterEnabled: messageFilterEnabled }) => {
  filterEnabled = messageFilterEnabled;
  applyFilter();
});

function applyFilter() {
  const filterValue = filterEnabled ? "grayscale(100%) brightness(50%)" : "none";
  document.documentElement.style.filter = filterValue;
}
