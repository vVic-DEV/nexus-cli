document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const code = btn.previousElementSibling.innerText;
    navigator.clipboard.writeText(code)
      .then(() => {
        btn.innerText = "Copied!";
        setTimeout(() => btn.innerText = "Copy", 1500);
      })
      .catch(() => {
        btn.innerText = "Failed!";
        setTimeout(() => btn.innerText = "Copy", 1500);
      });
  });
});
