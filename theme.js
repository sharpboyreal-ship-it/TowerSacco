(function () {
  const savedTheme = (() => {
    try {
      return localStorage.getItem("tower-demo-theme");
    } catch (error) {
      return null;
    }
  })();

  const style = document.createElement("style");
  style.textContent = `
    body.dark-mode {
      background: #111b17 !important;
      color: #edf5ef !important;
    }

    body.dark-mode main,
    body.dark-mode section,
    body.dark-mode article,
    body.dark-mode .card,
    body.dark-mode .profile-card,
    body.dark-mode .loan-panel,
    body.dark-mode .goal-panel,
    body.dark-mode .contact-card,
    body.dark-mode .overview-card,
    body.dark-mode .transaction-card,
    body.dark-mode .admin-summary article {
      background-color: #1b2922 !important;
      color: #edf5ef !important;
      border-color: #35483c !important;
    }

    body.dark-mode p,
    body.dark-mode label,
    body.dark-mode span,
    body.dark-mode h1,
    body.dark-mode h2,
    body.dark-mode h3,
    body.dark-mode h4 {
      color: #edf5ef;
    }

    body.dark-mode input,
    body.dark-mode select,
    body.dark-mode textarea {
      background: #26372d !important;
      color: #ffffff !important;
      border-color: #52675a !important;
    }

    body.dark-mode a {
      color: #9de2b7;
    }

    body.dark-mode .transaction-table,
    body.dark-mode .admin-members-table {
      background: #1b2922;
      color: #edf5ef;
    }

    body.dark-mode .transaction-table th,
    body.dark-mode .admin-members-table th {
      background: #176b45;
      color: #ffffff;
    }

    #tower-theme-toggle {
      position: fixed;
      right: 18px;
      top: 18px;
      z-index: 99998;
      border: 0;
      border-radius: 30px;
      padding: 11px 15px;
      background: #176b45;
      color: #ffffff;
      cursor: pointer;
      font: 600 14px Arial, sans-serif;
      box-shadow: 0 4px 12px rgba(0,0,0,.15);
    }

    @media(max-width:600px) {
      #tower-theme-toggle {
        top: auto;
        bottom: 18px;
        right: 15px;
      }
    }
  `;
  document.head.appendChild(style);

  function applyTheme(dark) {
    document.body.classList.toggle("dark-mode", dark);
    button.textContent = dark ? "☀️ Light Mode" : "🌙 Dark Mode";
    button.setAttribute("aria-pressed", String(dark));
  }

  const button = document.createElement("button");
  button.id = "tower-theme-toggle";
  button.type = "button";
  button.setAttribute("aria-label", "Switch website theme");
  button.addEventListener("click", function () {
    const dark = !document.body.classList.contains("dark-mode");
    applyTheme(dark);

    try {
      localStorage.setItem("tower-demo-theme", dark ? "dark" : "light");
    } catch (error) {}
  });

  document.body.appendChild(button);
  applyTheme(savedTheme === "dark");
})();
