if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("uv/sw.js", { scope: "/service/" });
}
