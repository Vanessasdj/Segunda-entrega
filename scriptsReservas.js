// Função para salvar no localStorage
function salvarReserva(reserva) {
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.push(reserva);
    localStorage.setItem("reservas", JSON.stringify(reservas));
}

window.addEventListener('DOMContentLoaded', () => {
    // Elementos do formulário
    const form = document.getElementById("reserva-form");
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const telInput = document.getElementById("tel");
    const unidadeInput = document.getElementById("unidades");
    const horarioInput = document.getElementById("time");
    const dataInput = document.getElementById("date");


    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        // Obter valores dos campos
        const reserva = {
            nome: nomeInput.value,
            email: emailInput.value,
            tel: telInput.value,
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
})