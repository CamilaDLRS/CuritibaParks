function login(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email === 'emailcadastrado@hotmail.com' && senha === '123456abc') {
      window.location.href = 'http://127.0.0.1:5500/home/index.html';
      return true;
  } else {
      // Se o Login for Invalido, mostre um mensagem de Erro
      alert('Email ou Senha Inválida');
      return false;
  }
}