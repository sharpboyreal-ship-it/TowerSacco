(function () {
  if (document.getElementById("tower-demo-notification")) return;

  const style = document.createElement("style");
  style.textContent = `
    #tower-demo-notification {
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 99999;
      max-width: 360px;
      padding: 16px 20px;
      border-radius: 12px;
      background: #176b45;
      color: white;
      box-shadow: 0 8px 25px rgba(0,0,0,.2);
      font: 15px/1.5 Arial, sans-serif;
      display: none;
    }
    #tower-demo-notification button {
      margin-left: 12px;
      padding: 4px 8px;
      border: 1px solid white;
      border-radius: 5px;
      background: transparent;
      color: white;
      cursor: pointer;
    }
    @media(max-width:480px) {
      #tower-demo-notification {
        left: 12px;
        right: 12px;
        bottom: 12px;
        max-width: none;
      }
    }
  `;
  document.head.appendChild(style);

  const box = document.createElement("div");
  box.id = "tower-demo-notification";
  box.setAttribute("role", "status");
  box.setAttribute("aria-live", "polite");

  const message = document.createElement("span");
  const close = document.createElement("button");
  close.type = "button";
  close.textContent = "Close";
  close.addEventListener("click", () => {
    box.style.display = "none";
  });

  box.append(message, close);
  document.body.appendChild(box);

  let timer;

  window.showDemoNotification = function (text, type = "info") {
    message.textContent = text;

    const backgrounds = {
      success: "#176b45",
      info: "#245a83",
      warning: "#805b08"
    };

    box.style.background = backgrounds[type] || backgrounds.info;
    box.style.display = "block";

    clearTimeout(timer);
    timer = setTimeout(() => {
      box.style.display = "none";
    }, 5000);
  };
})();
