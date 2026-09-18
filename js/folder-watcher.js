// Detecta pastas de aula novas (ex.: aula_4_07_09_26) na pasta do curso, comparando com as
// aulas que o app já conhece (window.QUIZ_AULAS). Usa a File System Access API (Chrome/Edge) —
// se o navegador não suportar, o app avisa e segue funcionando normalmente sem essa checagem.
(function () {
  var DB_NAME = "quiz-english4life";
  var STORE_NAME = "handles";
  var HANDLE_KEY = "courseFolder";

  function isSupported() {
    return typeof window.showDirectoryPicker === "function" && "indexedDB" in window;
  }

  function openDb() {
    return new Promise(function (resolve, reject) {
      var req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = function () {
        req.result.createObjectStore(STORE_NAME);
      };
      req.onsuccess = function () {
        resolve(req.result);
      };
      req.onerror = function () {
        reject(req.error);
      };
    });
  }

  function idbSet(key, value) {
    return openDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(STORE_NAME, "readwrite");
        tx.objectStore(STORE_NAME).put(value, key);
        tx.oncomplete = function () {
          resolve();
        };
        tx.onerror = function () {
          reject(tx.error);
        };
      });
    });
  }

  function idbGet(key) {
    return openDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(STORE_NAME, "readonly");
        var req = tx.objectStore(STORE_NAME).get(key);
        req.onsuccess = function () {
          resolve(req.result || null);
        };
        req.onerror = function () {
          reject(req.error);
        };
      });
    });
  }

  function getSavedHandle() {
    return idbGet(HANDLE_KEY).catch(function () {
      return null;
    });
  }

  function pickCourseFolder() {
    return window
      .showDirectoryPicker({ id: "english4life-course", mode: "read" })
      .then(function (handle) {
        return idbSet(HANDLE_KEY, handle).then(function () {
          return handle;
        });
      });
  }

  function ensurePermission(handle) {
    var opts = { mode: "read" };
    return handle.queryPermission(opts).then(function (state) {
      if (state === "granted") return true;
      return handle.requestPermission(opts).then(function (result) {
        return result === "granted";
      });
    });
  }

  function sleep(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }

  // Varre as subpastas do curso, ignorando a própria pasta do app. onProgress é chamado a cada
  // pasta processada, para a UI mostrar o andamento em vez de tudo aparecer de uma vez.
  function scanCourseFolder(rootHandle, knownFolderNames, onProgress) {
    var pending = [];
    return (async function () {
      for await (var pair of rootHandle.entries()) {
        var name = pair[0];
        var entry = pair[1];
        if (entry.kind !== "directory") continue;
        if (name.toLowerCase() === "quiz-app") continue;
        if (!/^aula[_-]/i.test(name)) continue;

        await sleep(180); // ritmo perceptível — cada pasta é checada de forma real, uma por vez
        if (knownFolderNames.indexOf(name) !== -1) {
          onProgress && onProgress({ status: "known", name: name });
          continue;
        }

        var files = [];
        for await (var filePair of entry.entries()) {
          if (filePair[1].kind === "file") files.push(filePair[0]);
        }
        pending.push({ name: name, files: files });
        onProgress && onProgress({ status: "pending", name: name, files: files });
      }
      return pending;
    })();
  }

  window.FolderWatcher = {
    isSupported: isSupported,
    getSavedHandle: getSavedHandle,
    pickCourseFolder: pickCourseFolder,
    ensurePermission: ensurePermission,
    scanCourseFolder: scanCourseFolder
  };
})();
