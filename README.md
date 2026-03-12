# 🛗 SkyLine Residence - Elevador Digital

App mobile moderno desenvolvido em **React Native** com **Expo SDK 54**. O projeto apresenta um painel de notícias para moradores, com suporte a modo noturno reativo e atualizações em tempo real via OTA (Over-the-Air).

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
