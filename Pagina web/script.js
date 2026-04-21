function openLogin() {
    const modal = document.getElementById('loginModal');
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('opacity-100');
    }, 10);
}

function closeLogin() {
    const modal = document.getElementById('loginModal');
    modal.classList.remove('opacity-100');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Función principal de Autenticación
function handleLogin(event) {
    event.preventDefault();
    const user = document.getElementById('userInput').value;
    const pass = document.getElementById('passInput').value;

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        activarModoAdmin();
        closeLogin();
        alert("SISTEMA AUTENTICADO: Modo Administrador Activo");
    } else {
        alert("ACCESO DENEGADO: Credenciales incorrectas");
    }
}

function activarModoAdmin() {
    // 1. Hacer que todos los textos sean editables
    const textos = document.querySelectorAll('h1, p, h3, span.actual-text');
    textos.forEach(el => {
        el.contentEditable = "true";
        el.classList.add('border', 'border-dashed', 'border-purple-500', 'p-1');
    });

    // 2. Cambiar visualmente el botón de login para indicar que eres admin
    const loginBtnContainer = document.querySelector('.btn-login').parentElement;
    loginBtnContainer.innerHTML = `
        <div class="bg-purple-900/50 p-4 rounded-xl border border-purple-400">
            <h3 class="text-purple-400 font-bold">PANEL ADMIN</h3>
            <input type="file" id="fileUpload" class="mt-2 text-xs" multiple>
            <button onclick="location.reload()" class="mt-4 bg-red-600 text-[10px] px-2 py-1 rounded">SALIR</button>
        </div>
    `;

    // 3. Mostrar un indicador de "Modo Edición"
    document.querySelector('.scan-line').style.background = "linear-gradient(90deg, transparent, #a855f7, transparent)";
}

function openPortfolio() {
    const modal = document.getElementById('portfolioModal');
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('opacity-100'), 10);
}

function closePortfolio() {
    const modal = document.getElementById('portfolioModal');
    modal.classList.remove('opacity-100');
    setTimeout(() => modal.classList.add('hidden'), 300);
}