const express = require('express');
const habilidadesRoutes = require('./routes/habilidadesRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', habilidadesRoutes); // Prefixo para as rotas

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
