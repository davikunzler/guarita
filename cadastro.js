document.getElementById('formMorador').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const bloco = document.getElementById('bloco').value;
    const apartamento = document.getElementById('apartamento').value;
    const status = document.getElementById('status').value;

    const morador = {
        nome,
        bloco,
        apartamento,
        status
    };

    fetch('http://localhost:3001/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(morador)
    })
    .then(response => response.json())
    .then(data => {
        alert('Morador cadastrado com sucesso!');
        document.getElementById('formMorador').reset();
    })
    .catch(error => {
        console.error('Erro ao cadastrar morador:', error);
    });
});

// Função para cadastrar Veículo
document.getElementById('formVeiculo').addEventListener('submit', function (e) {
    e.preventDefault();

    const placa = document.getElementById('placa').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;
    const morador_id = document.getElementById('morador_id').value;
    const box = document.getElementById('box').value;

    const veiculo = {
        placa,
        modelo,
        cor,
        morador_id,
        box
    };

    fetch('http://localhost:3001/cadastrar-veiculo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(veiculo)
    })
    .then(response => response.json())
    .then(data => {
        alert('Veículo cadastrado com sucesso!');
        document.getElementById('formVeiculo').reset();
    })
    .catch(error => {
        console.error('Erro ao cadastrar veículo:', error);
    });
});