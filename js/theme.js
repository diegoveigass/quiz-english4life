// Alternância entre tema claro e escuro.
// O tema mora na classe "dark" do <html> (as cores em si estão no <style> do index.html) e é
// lembrado no localStorage. Enquanto não houver escolha salva, o app segue a preferência do
// sistema operacional. O tema inicial já é aplicado por um script inline no <head>, antes da
// primeira pintura; aqui a gente só liga o botão e mantém tudo em sincronia.
(function () {
  var STORAGE_KEY = "quizEnglish4Life.theme.v1";

  function readSaved() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function save(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // localStorage indisponível (ex.: modo privado) — o tema vale só para esta sessão.
    }
  }

  function systemPrefersDark() {
    return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  }

  function current() {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  }

  function renderButton() {
    var btn = document.getElementById("theme-btn");
    if (!btn) return;
    var dark = current() === "dark";
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    // O botão mostra para onde o clique leva, não onde você está.
    var icon = document.getElementById("theme-icon");
    var label = document.getElementById("theme-label");
    if (icon) icon.textContent = dark ? "☀️" : "🌙";
    if (label) label.textContent = dark ? "Modo claro" : "Modo escuro";
  }

  function apply(theme) {
    var root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    renderButton();
  }

  apply(readSaved() || (systemPrefersDark() ? "dark" : "light"));

  var btn = document.getElementById("theme-btn");
  if (btn) {
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      save(next);
      apply(next);
    });
  }

  // Se o Diego nunca clicou no botão, acompanhar o sistema quando ele mudar (ex.: tema
  // automático do Windows ao anoitecer).
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var onSystemChange = function () {
      if (!readSaved()) apply(mq.matches ? "dark" : "light");
    };
    if (mq.addEventListener) mq.addEventListener("change", onSystemChange);
    else if (mq.addListener) mq.addListener(onSystemChange);
  }

  window.ThemeToggle = { apply: apply, current: current };
})();
