let funcaoDoFormulario = () => {
    // Dados padrões para reserva
const reservaDefault = {
    nome: "Visitante",
    email: "email@example.com",
    tel: "(00) 00000-0000",
};

// Elementos do formulário
const form = document.getElementById("reserva-form");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const telInput = document.getElementById("tel");
const unidadeInput = document.getElementById("unidades");
const horarioInput = document.getElementById("time");
const dataInput = document.getElementById("date");
}

if (document.getElementById('reserva-form')) {
        funcaoDoFormulario
    } else {
        console.log("Essa não é uma página de reservas!")
    }


// Função para salvar no localStorage
function salvarReserva(reserva) {
    console.log('This is the beginning of me trying to save this fucking reserva.')
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.push(reserva);
    localStorage.setItem("reservas", JSON.stringify(reservas));
    console.log('This is the end of me trying to save this fucking reserva.' + reserva + 'and all the existing reservas' + reservas)
}

// Função para carregar reservas salvas
function carregarReservas() {
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    const reservasContainer = document.createElement("div");
    reservasContainer.classList.add("reservas-lista");

    reservas.forEach((reserva) => {
        const reservaItem = document.createElement("p");
        reservaItem.textContent = `${reserva.nome} - ${reserva.unidade} - ${reserva.data} às ${reserva.horario}`;
        reservasContainer.appendChild(reservaItem);
    });

    document.body.appendChild(reservasContainer);
}

// Manipulador do evento de submissão
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obter valores dos campos
    const reserva = {
        nome: nomeInput.value || reservaDefault.nome,
        email: emailInput.value || reservaDefault.email,
        tel: telInput.value || reservaDefault.tel,
        unidade: unidadeInput.value,
        horario: horarioInput.value,
        data: dataInput.value,
    };

    // Validar campos obrigatórios
    if (!reserva.nome || !reserva.email || !reserva.tel || !reserva.data || !reserva.horario) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Salvar e exibir a reserva
    salvarReserva(reserva);
    alert(`Reserva feita para ${reserva.nome} na unidade ${reserva.unidade}.`);
    form.reset();
});

// Carregar reservas ao iniciar a página
document.addEventListener("DOMContentLoaded", carregarReservas);


// Seleciona elementos do carousel

let funcaoDoCarrossel = () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');

    let currentIndex = 0;

// Atualiza a posição do carousel com base no índice atual
    function updateCarousel(index) {
        const slideWidth = slides[0].offsetWidth;
        track.style.transform = `translateX(-${index * slideWidth}px)`;
    }

// Adiciona funcionalidade aos botões
    prevButton.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
        updateCarousel(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
        updateCarousel(currentIndex);
    });

    // Ajusta o carousel automaticamente a cada 3 segundos
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel(currentIndex);
    }, 3000);

    // Ajusta o carousel ao redimensionar a janela
    window.addEventListener('resize', () => {
        updateCarousel(currentIndex);
    });
}

setTimeout(funcaoDoCarrossel,1000)








