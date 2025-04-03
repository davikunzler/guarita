const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(express.json());
app.use(cors());

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',     // Seu usuário do MySQL
    password: 'root', // Sua senha do MySQL
    database: 'condominio' // Nome do banco de dados
});

// Verifica se a conexão foi estabelecida com sucesso
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.stack);
        return;
    }
    console.log('Conectado ao banco de dados');
});

// Rota para cadastrar Morador
app.post('/cadastrar', (req, res) => {
    const { nome, bloco, apartamento, status } = req.body;

    if (!nome || !bloco || !apartamento || !status) {
        return res.status(400).send({ message: 'Todos os campos são obrigatórios!' });
    }

    const query = 'INSERT INTO moradores (nome, bloco, apartamento, status) VALUES (?, ?, ?, ?)';
    db.query(query, [nome, bloco, apartamento, status], (err, result) => {
        if (err) {
            console.error('Erro ao salvar morador no banco:', err);
            return res.status(500).send({ message: 'Erro ao cadastrar o morador.' });
        }
        res.status(201).send({ message: 'Morador cadastrado com sucesso!' });
    });
});

// Rota para cadastrar Veículo
app.post('/cadastrar-veiculo', (req, res) => {
    const { placa, modelo, cor, morador_id, box } = req.body;

    if (!placa || !modelo || !cor || !morador_id || !box) {
        return res.status(400).send({ message: 'Todos os campos são obrigatórios!' });
    }

    const query = 'INSERT INTO veiculos (placa, modelo, cor, morador_id, box) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [placa, modelo, cor, morador_id, box], (err, result) => {
        if (err) {
            console.error('Erro ao salvar veículo no banco:', err);
            return res.status(500).send({ message: 'Erro ao cadastrar o veículo.' });
        }
        res.status(201).send({ message: 'Veículo cadastrado com sucesso!' });
    });
});

// Inicia o servidor
app.listen(3001, () => console.log('Servidor rodando na porta 3001'));
