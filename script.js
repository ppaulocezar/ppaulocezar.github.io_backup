// Definir a senha correta
const correctPassword = "senha123";

// Função chamada quando o botão de login é clicado
function handleLogin() {
    const inputPassword = document.getElementById("password").value;
    
    if (inputPassword === correctPassword) {
        alert("Senha correta. Bem-vindo!");
        // Aqui você pode redirecionar o usuário para a página protegida.
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
}

// Adicionar um ouvinte de evento ao botão de login
document.getElementById("loginButton").addEventListener("click", handleLogin);
