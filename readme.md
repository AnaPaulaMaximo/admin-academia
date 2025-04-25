# 🧑‍💻 IronPulse | Painel Admin

Painel administrativo para gerenciar os dados dos alunos da academia **IronPulse**. Aqui é possível cadastrar novos alunos, editar informações, excluir cadastros, buscar por CPF ou nome e visualizar todos os dados de forma organizada.

## Link do vercel
[Clique aqui](https://admin-academia.vercel.app/)

## 🚀 Tecnologias utilizadas

- **React.js**
- **Tailwind CSS**
- **Firebase Firestore**
- **Lucide Icons**
- **SweetAlert2**

---

## 📲 Funcionalidades

✅ Cadastro de novos alunos com CPF, nome, status e plano  
✅ Listagem completa dos alunos  
✅ Edição de dados em tempo real  
✅ Exclusão com confirmação  
✅ Busca por nome ou CPF  
✅ Feedback visual com ícones e alertas  
✅ Integração total com a API da IronPulse

---

## 🎯 Objetivo

📌 Fornecer aos administradores da IronPulse uma plataforma segura, rápida e eficiente para gerenciar os alunos da academia.

---

## 🖼️ Interface

### 🧾 Tela de Cadastro
- Campos: Nome, CPF, Status (Ativo/Inativo), Plano
- Validação de CPF
- Feedback visual com SweetAlert2

### 📋 Listagem
- Exibe todos os cadastros
- Ícones de editar e excluir em cada linha
- Busca em tempo real
- Badge com status do aluno (ativo/inativo)

---

## 🔌 Integração com API

API usada:


Rotas principais:

| Método | Rota              | Descrição                  |
|--------|-------------------|----------------------------|
| GET    | /clientes         | Listar todos os clientes   |
| GET    | /clientes/:cpf    | Buscar cliente por CPF     |
| POST   | /clientes         | Cadastrar novo cliente     |
| PUT    | /clientes/:cpf    | Editar dados do cliente    |
| DELETE | /clientes/:cpf    | Excluir cliente do sistema |

---

## 🛠️ Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/ironpulse-admin.git
