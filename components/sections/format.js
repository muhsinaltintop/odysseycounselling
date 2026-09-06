(function () {
  console.log("APPLICATION JS LOADED");
  const observer = new MutationObserver(function () {
    console.log("Mutation");
    const success = document.querySelector("#MessagePanel.alert-success");
    console.log(success);
    if (!success) return;
    console.log("SUCCESS FOUND");
    window.parent.postMessage({ type: "AdditionalApplicationSaved" }, "*");
    console.log("MESSAGE SENT");
    observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
