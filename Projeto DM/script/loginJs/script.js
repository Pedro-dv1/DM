function go() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === '' || password.trim() === '') {
     
  } else if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido!");
  } else {
      window.location.href = "main.html"
  }
}

function cadastro() {
    const loginContainer = document.getElementById('login');
    const cadastroContainer = document.getElementById('cadastro');

    loginContainer.classList.add('mover-esquerda');

    setTimeout(() => {
        loginContainer.style.display = 'none';
        cadastroContainer.style.display = 'block';
        cadastroContainer.classList.add('visible');
        cadastroContainer.classList.add('mover-direita');
    }, 500);
}

function voltarParaLogin() {
    const loginContainer = document.getElementById('login');
    const cadastroContainer = document.getElementById('cadastro');

    cadastroContainer.classList.remove('mover-direita');
    cadastroContainer.classList.add('voltar-esquerda');

    setTimeout(() => {
        cadastroContainer.style.display = 'none';
        loginContainer.style.display = 'block';
        loginContainer.classList.remove('mover-esquerda');
        loginContainer.classList.add('voltar-direita');
    }, 500);

    setTimeout(() => {
        cadastroContainer.classList.remove('voltar-esquerda');
        loginContainer.classList.remove('voltar-direita');
    }, 1000);
}

function back() {
    const email = document.getElementById('email2').value;
    const password = document.getElementById('password2').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === '' || password.trim() === '') {
     
  } else if (!emailRegex.test(email)) {
      
  } else {
      window.location.href = "index.html"
  }
}