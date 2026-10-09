(function () {
  'use strict';

  var storageKey = 'theme';
  var preference = null;
  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  var button;

  try {
    var savedTheme = window.localStorage.getItem(storageKey);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      preference = savedTheme;
    }
  } catch (error) {
    // The toggle still works when browser storage is unavailable.
  }

  function applyTheme() {
    var dark = preference === 'dark' || (preference === null && systemTheme.matches);
    document.body.classList.toggle('dark', dark);
    if (button) {
      button.setAttribute('aria-pressed', String(dark));
      button.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    }
  }

  applyTheme();
  systemTheme.addEventListener('change', applyTheme);

  document.addEventListener('DOMContentLoaded', function () {
    button = document.querySelector('.theme-toggle');
    if (!button) return;

    button.addEventListener('click', function () {
      preference = document.body.classList.contains('dark') ? 'light' : 'dark';
      applyTheme();
      try {
        window.localStorage.setItem(storageKey, preference);
      } catch (error) {
        // Keep the selection in memory for this page.
      }
    });

    applyTheme();
    button.hidden = false;
  });
}());
