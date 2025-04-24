// Array de habilidades como um banco de dados em memória
let habilidades = [
    { id: 1, nome: "Culinária", oferecedor: "Maria" },
    { id: 2, nome: "Programação", oferecedor: "João" },
    { id: 3, nome: "Música", oferecedor: "Ana" }
];

// Controlador para obter todas as habilidades
export const getHabilidades = (req, res) => {
    // Retorna a lista de habilidades em formato JSON
    res.json(habilidades);
};

// Controlador para obter todos os oferecedores
export const getOferecedores = (req, res) => {
    // Mapeia as habilidades para obter os nomes dos oferecedores
    const oferecedores = habilidades.map(h => h.oferecedor);
    // Retorna apenas os nomes únicos dos oferecedores
    res.json([...new Set(oferecedores)]);
};

// Controlador para procurar uma habilidade específica
export const procurarHabilidade = (req, res) => {
    // Obtém a habilidade a partir dos parâmetros de consulta
    const { habilidade } = req.query;
    // Filtra as habilidades que correspondem ao nome fornecido
    const resultados = habilidades.filter(h => h.nome.toLowerCase() === habilidade.toLowerCase());
    // Retorna os resultados encontrados
    res.json(resultados);
};

// Controlador para obter uma habilidade específica por ID
export const getHabilidadePorId = (req, res) => {
    // Obtém o ID da habilidade a partir dos parâmetros da URL
    const { id } = req.params;
    // Busca a habilidade correspondente ao ID fornecido
    const habilidadeEncontrada = habilidades.find(h => h.id == id);
    // Se a habilidade for encontrada, retorna em formato JSON
    if (habilidadeEncontrada) {
        res.json(habilidadeEncontrada);
    } else {
        // Se não for encontrada, retorna um erro 404
        res.status(404).json({ mensagem: "Habilidade não encontrada." });
    }
};