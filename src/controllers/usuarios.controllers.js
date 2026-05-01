let usuarios = [
    {
        "id": 1,
        "nome": "Carlos Henrique",
        "telefone": "27999946514",
        "email": "carlos.henrique@gmail.com",
        "idade": 28,
    },
    {
        "id": 2,
        "nome": "Bruno Henrique",
        "telefone": "28956486452",
        "email": "bruno.henrique@gmail.com",
        "idade": 31,
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

export default { listar, buscarPorId }
