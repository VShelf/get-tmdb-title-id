# get‑tmdb‑title‑id
Projeto simples para buscar o ID de títulos no TMDb (The Movie Database) — útil se você quer usar a API do TMDb e precisa do ID de filmes ou séries.

## 📦 Visão Geral
Este módulo/script permite que você informe o nome de um título (filme ou série) e retorne o seu ID correspondente no TMDb. A partir desse ID, você poderá usar outras chamadas da API do TMDb para buscar detalhes, imagens, créditos, etc.

## 🔍 Funcionalidades Principais
- Busca por título (filme ou série) no TMDb.
- Obtém o ID único do título encontrado.
- Possibilita integração com outros endpoints da API do TMDb usando esse ID.
- Código simples em JavaScript (Node.js) — fácil de entender e adaptar.

## 🚀 Como usar
1. Clone o repositório:
   ```bash
   git clone https://github.com/VShelf/get-tmdb-title-id.git
   cd get-tmdb-title-id
   ```
2. Instale as dependências (se houver):
   ```bash
   npm install
   ```
3. Configure sua chave de API do TMDb:
   - Crie uma conta no TMDb e obtenha uma “API Key”.
   - Defina a variável de ambiente `TMDB_API_KEY` ou ajuste diretamente no código conforme instruções.
4. Execute o script, passando o título que deseja buscar:
   ```bash
   node index.js "Nome do Filme ou Série"
   ```
   Ou importe o módulo em outro código JS:
   ```js
   const getTitleId = require('get-tmdb-title-id');
   (async () => {
     const id = await getTitleId('Nome do Título');
     console.log('ID encontrado:', id);
   })();
   ```
5. Uma vez que você tem o ID, use-o para outras chamadas da API do TMDb (por exemplo `/movie/{id}`, `/tv/{id}`, etc).

## 🧠 Motivação
Quando estamos integrando com a API da TMDb, muitas vezes precisamos do ID numérico de um título — e em vez de ter que buscar manualmente via painel ou via endpoint de busca toda vez, este script automatiza essa etapa. Pode facilitar workflows de ingestão de dados, bots, aplicações que mostram metadados, etc.

## ✅ Requisitos
- Node.js (versão compatível)
- Chave de API válida da TMDb
- Conexão com a Internet para realizar a busca na API

## 🛠️ Estrutura do Projeto
- `index.js` — código principal que faz a busca e retorna o ID.
- Outras pastas ou arquivos conforme configuração (se existirem).
- (Opcional) Exemplo de uso, testes, etc.

## 🎯 Boas Práticas & Dicas
- Verifique se o título passado está escrito corretamente — erros de digitação afetarão os resultados.
- Considere usar tratamento de erros para casos em que o título não for encontrado ou a API da TMDb estiver indisponível.
- Para múltiplas buscas em lote, pense em adicionar suporte para arrays de títulos e paralelizar as requisições (com limites para não exceder rate-limit da TMDb).
- Mantenha sua chave de API segura — **não** a compartilhe em repositórios públicos se ela for privada.

## 📄 Licença
Este projeto está licenciado sob a licença MIT — veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos
- À comunidade do TMDb por manter uma base de dados rica em filmes e séries.
- A qualquer colaborador ou usuário que ajudar a melhorar este script com sugestões, issues ou pull requests.
