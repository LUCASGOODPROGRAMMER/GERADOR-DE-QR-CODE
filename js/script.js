const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;
  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "QR CODE GERADO";
    qrCodeInput.addEventListener("keydown", () => {
      container.classList.remove("active");
      qrCodeBtn.innerText = "Gerar QR Code";
    });
  });
}

qrCodeBtn.addEventListener("click", () => {
  qrCodeBtn.innerText = "AGUARDE UM POUCO...";
  setTimeout(() => {
    generateQrCode();
  }, 2000);
});

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    qrCodeBtn.innerText = "AGUARDE UM POUCO...";
    setTimeout(() => {
      generateQrCode();
    }, 2000);
  }
});


