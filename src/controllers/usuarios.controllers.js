let usuarios = [
    {
        id: 1,
        nome: "Carlos Henrique",
        telefone: "27999946514",
        email: "carlos.henrique@gmail.com",
        idade: 28,
        senha: "123456"
    },
    {
        id: 2,
        nome: "Bruno Henrique",
        telefone: "28956486452",
        email: "bruno.henrique@gmail.com",
        idade: 31,
        senha: "654321"
    },
]
const listar = (req, res) => { res.json(usuarios) }


const buscarPorId = (req, res) => {
    const id = parseInt(req.params.id)
    const usuario = usuarios.find(u => u.id === id)

    if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" })
    }

    res.json(usuarios)
}
const criar = (req, res) => {
    const { nome, email, telefone, idade, senha } = req.body;
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: nome,
        email: email,
        telefone: telefone,
        idade: idade || null,
        senha: senha
    };
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
}
export default { listar, buscarPorId }
