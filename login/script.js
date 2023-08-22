function checkCode() {
  const codeInput = document.getElementById("codeInput").value;
  const correctCode = "codigo123"; // Substitua pelo código correto

  if (codeInput === correctCode) {
    window.location.href = "index2.html";
  } else {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "Código incorreto. Você precisa ter o código para acessar o conteúdo.";
  }
}
