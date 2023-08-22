// Função para verificar se o acesso é permitido
function checkAccess() {
  // Verifica se o cookie accessGranted está definido
  const accessCookie = document.cookie.split(";").find(cookie => cookie.trim().startsWith("accessGranted="));
  
  if (!accessCookie || accessCookie.split("=")[1] !== "true") {
    window.location.href = "index.html"; // Redireciona de volta para a página de verificação
  }
}

// Chama a função de verificação quando a página carrega
window.onload = checkAccess;
