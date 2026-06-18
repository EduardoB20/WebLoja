document.addEventListener("DOMContentLoaded", function() {
    
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    const menuLogin = document.getElementById("menu-login");
    const telaInicio = document.getElementById("tela-inicio"); 

    if (usuarioLogado) {
        const usuario = JSON.parse(usuarioLogado);

        if (menuLogin) {
            menuLogin.innerHTML = `<a href="" id="btn-sair" style="color: var(--erro); font-weight: bold;">Sair</a>`;
            
            document.getElementById("btn-sair").addEventListener("click", function(e) {
                e.preventDefault(); 
                localStorage.removeItem("usuarioLogado"); 
                window.location.href = "index.html"; 
            });
        }


        if (telaInicio) {
            telaInicio.innerHTML = `
                <h1 style="font-size: 2.5rem; color: var(--text-dark);">Olá, <span style="color: var(--accent);">${usuario.nome}</span>!</h1>
                <p style="color: var(--text-light); font-size: 1.1rem;">Bem-vindo a Web Loja. Pronto para escolher seu próximo site?</p>
                <div style="margin-top: 1.5rem;">
                    <a href="produtos.html" class="btn btn-primary">Ver Tudo</a>
                </div>
            `;
        }
    }

    const formCadastro = document.getElementById("formCadastro");
    const mensagemDiv = document.getElementById("mensagem");

    if (formCadastro) {
        formCadastro.addEventListener("submit", function(event) {
            event.preventDefault(); 

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            mensagemDiv.textContent = "";

            if (senha.length < 6) {
                mensagemDiv.style.color = "var(--erro)";
                mensagemDiv.textContent = "Erro: A senha deve ter pelo menos 6 caracteres";
                return;
            }


            const usuario = { nome: nome, email: email, senha: senha };
            localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

            mensagemDiv.style.color = "var(--conseguiu)";
            mensagemDiv.textContent = "Login realizado com sucesso, voce vai ser redirecionado...";
            
            formCadastro.reset();

            setTimeout(() => {
                window.location.href = "index.html";
            }, 100);
        });
    }
});