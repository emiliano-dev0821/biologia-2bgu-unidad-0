/* Bio·U0 — interacciones (Chispa) */
(function () {
  "use strict";

  // Menú móvil
  var burger = document.querySelector("[data-burger]");
  var mobile = document.querySelector("[data-mobile]");
  if (burger && mobile) {
    burger.addEventListener("click", function () {
      var open = mobile.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
  }

  // Scroll suave con offset para anclas internas
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href").slice(1);
      if (!id) return;
      var el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      var y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });

  // Reloj en vivo — Hora en Ecuador
  var clock = document.querySelector("[data-clock]");
  if (clock) {
    var fmt;
    try {
      fmt = new Intl.DateTimeFormat("es-EC", { timeZone: "America/Guayaquil", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
    } catch (e) { fmt = null; }
    var tick = function () {
      if (fmt) clock.textContent = fmt.format(new Date());
    };
    tick();
    setInterval(tick, 1000);
  }
})();
