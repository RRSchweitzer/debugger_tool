
  (() => {
    console.log('shady script loaded')
    window.adthrive = window.adthrive || {};
    window.adthrive.cmd = window.adthrive.cmd || [];
    let cmParams = new URLSearchParams(document.location.search.substring(1));
    let cmAbParam = cmParams.get("cmabEnabled");

    if (cmAbParam && ["on", "off"].indexOf(cmAbParam) >= 0) {
      window.cm_adthrive_AB_enabled = cmAbParam;
      if (window.localStorage) {
        window.localStorage.setItem(
          "cm_adthrive_AB_enabled",
          window.cm_adthrive_AB_enabled
        );
      }
    } else {
      window.cm_adthrive_AB_enabled = window.localStorage
        ? window.localStorage.getItem("cm_adthrive_AB_enabled")
        : undefined;
      if (!window.cm_adthrive_AB_enabled) {
        window.cm_adthrive_AB_enabled =
          Math.random() < 0.50 ? "on" : "off";
        if (window.localStorage) {
          window.localStorage.setItem(
            "cm_adthrive_AB_enabled",
            window.cm_adthrive_AB_enabled
          );
        }
      }
    }
    adthrive.cmd.push(() => {
      adthrive.config.abGroup.set(
        "gadefer",
        window.cm_adthrive_AB_enabled
      );
    });
  })();
  if (window.cm_adthrive_AB_enabled === "on") {
    let gtagScriptEl = document.createElement("script");
    GA_TRACKING_ID = "idHere";
    gtagScriptEl.setAttribute(
      "src",
      `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
    );

    window.onload = event => {
      document.body.appendChild(gtagScriptEl);
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "GA_TRACKING_ID");
    };
  } else {
    
  }

  
