# 👤 Perfil Rápido - Protótipo Social

Um aplicativo mobile intuitivo e elegante desenvolvido para capturar e exibir perfis de usuários de forma visualmente atraente. Este projeto foca em uma experiência de usuário (UX) limpa, com layouts responsivos e componentes modulares.

## ✨ Funcionalidades

- **Edição de Perfil:** Campo de texto dinâmico para inserção de nome com sincronização de estado em tempo real.
- **Visualização de Avatar:** Imagem de perfil circular com suporte a redimensionamento inteligente (`resizeMode`).
- **Toggle de Foto:** Funcionalidade de alternância entre diferentes fotos de perfil para testes de visualização.
- **Design Moderno:** Interface baseada em cartões (cards), sombras suaves e paleta de cores focada em legibilidade.
- **Feedback Instantâneo:** Sistema de alertas para confirmação de salvamento de dados.


## 🚀 Tecnologias Utilizadas
* **React Native / Expo** (Framework)
* **TypeScript** (Tipagem)
* **EAS Build & Update** (Infraestrutura e Deploy)
* **Lucide React Native / Core Components** (Interface)

---

## 🛠️ Como Rodar o Projeto (Desenvolvimento)

Se for a primeira vez rodando em uma nova máquina, instale as dependências:

   ```powershell
   npm install --force
   ```

Sempre que você abrir o projeto no Windows, siga estes passos:

1. **Abra o Terminal** na pasta do projeto:
   ```powershell
   cd %USERPROFILE%\Desktop\elevador-news
   ```

2. **Inicie o Servidor Expo:**
   ```powershell
   npx expo start
   ```
   
3. **Como Atualizar via OTA**
   ```powershell
   eas update --channel production --message "Descreve aqui sua mudança"
   ```
