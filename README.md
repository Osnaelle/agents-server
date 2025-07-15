
# Let Me Ask

Aplicação web para criação de salas de perguntas e respostas com suporte a gravação de áudio, utilizando inteligência artificial para respostas.

---

## 🚀 **Tecnologias**

- **Node.js com TypeScript nativo** (experimental strip types)  
- **Fastify** — Framework web rápido e eficiente  
- **PostgreSQL com extensão pgvector** para vetores  
- **Drizzle ORM** — Type-safe database operations  
- **Zod** — Schema validation  
- **Docker** — Containerização do banco de dados  
- **Biome** — Linting e formatação de código  

---

## 🏗️ **Arquitetura**

O projeto segue uma arquitetura modular com:  

- Separação de responsabilidades entre rotas, schemas e conexão com banco  
- Validação de schemas com Zod para type safety  
- ORM type-safe com Drizzle para operações de banco de dados  
- Validação de variáveis de ambiente centralizadas  

---

## ⚙️ **Setup e Configuração**

### **Pré-requisitos**
- Node.js (versão com suporte a `--experimental-strip-types`)  
- Docker e Docker Compose  

### **Passos**

1️⃣ **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd server
```

2️⃣ **Configure o banco de dados**
```bash
docker-compose up -d
```

3️⃣ **Configure as variáveis de ambiente**  
Crie um arquivo `.env` na raiz do projeto:

```
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

4️⃣ **Instale as dependências**
```bash
npm install
```

5️⃣ **Execute as migrações do banco**
```bash
npx drizzle-kit migrate
```

6️⃣ **(Opcional) Popule o banco com dados de exemplo**
```bash
npm run db:seed
```

7️⃣ **Execute o projeto**  

**Desenvolvimento:**
```bash
npm run dev
```

**Produção:**
```bash
npm start
```

---

## 📚 **Scripts Disponíveis**

| Comando          | Descrição                                          |
|------------------|----------------------------------------------------|
| `npm run dev`    | Executa o servidor em modo de desenvolvimento com hot reload |
| `npm start`      | Executa o servidor em modo de produção             |
| `npm run db:seed`| Popula o banco de dados com dados de exemplo       |

---

## 🌐 **Endpoints**

A API estará disponível em: [http://localhost:3333](http://localhost:3333)

| Método | Rota     | Descrição                      |
|--------|----------|--------------------------------|
| GET    | `/health`| Health check da aplicação       |
| GET    | `/rooms` | Lista as salas disponíveis       |

---

Desenvolvido com ❤️ durante o NLW da Rocketseat
