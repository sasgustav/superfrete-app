# 🚀 SuperFrete App

![React](https://img.shields.io/badge/React-17.0.2-61DAFB?logo=react) ![Firebase](https://img.shields.io/badge/Firebase-9.6.1-FFCA28?logo=firebase) ![Capacitor](https://img.shields.io/badge/Capacitor-3.0.2-1195E3?logo=capacitor) ![Android](https://img.shields.io/badge/Android-API%2030-3DDC84?logo=android)

Aplicativo desenvolvido como parte de um teste técnico para uma vaga de Desenvolvedor React Sênior. Este projeto utiliza React.js para a interface do usuário, Firebase Firestore como banco de dados em tempo real e Capacitor para empacotamento e execução no Android.

## 📋 Funcionalidades

- **Envio de Mensagens**: Insira uma mensagem no campo de texto e envie-a para o Firestore.
- **Listagem em Tempo Real**: Exibição das mensagens enviadas em tempo real diretamente da base de dados do Firestore.
- **Empacotamento para Android**: Aplicação empacotada e executada em dispositivos Android utilizando Capacitor.

## 🛠️ Tecnologias Utilizadas

- [React.js](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
- [Firebase Firestore](https://firebase.google.com/docs/firestore) - Banco de dados NoSQL em tempo real.
- [Capacitor](https://capacitorjs.com/) - Plataforma para criação de aplicações nativas usando tecnologias web.
- [Android Studio](https://developer.android.com/studio) - IDE oficial para desenvolvimento Android.

## 🗂️ Estrutura de Pastas

```plaintext
superfrete-app/
│
├── public/                 # Arquivos públicos, como index.html
├── src/                    # Código-fonte principal
│   ├── assets/             # Arquivos de imagem e ícones
│   ├── components/         # Componentes React reutilizáveis
│   ├── firebase/           # Configuração e lógica do Firebase
│   ├── App.js              # Componente principal
│   ├── App.css             # Estilos globais
│   └── index.js            # Ponto de entrada da aplicação
├── .gitignore              # Arquivos e pastas a serem ignorados pelo Git
├── package.json            # Dependências e scripts do projeto
└── README.md               # Documentação do projeto
```

## 🔧 Pré-requisitos

- [Node.js](https://nodejs.org/en/download/) - Recomendado: versão 14.x ou superior
- [NPM](https://www.npmjs.com/get-npm) - Normalmente instalado com o Node.js
- [Android Studio](https://developer.android.com/studio) - Para empacotamento e execução no Android
- [Firebase Console](https://console.firebase.google.com/) - Para configurar o Firestore

## 🚀 Como Executar o Projeto

### 1. Clone o Repositório

```bash
git clone https://github.com/sasgustav/superfrete-app.git
cd superfrete-app
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Configuração do Firebase

- Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
- Adicione o Firebase ao seu projeto React.
- Configure as credenciais do Firebase no arquivo `src/firebase/config.js`.

### 4. Execute a Aplicação

Para rodar a aplicação no modo de desenvolvimento:

```bash
npm start
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o aplicativo.

### 5. Build para Produção

Para criar uma versão otimizada do aplicativo:

```bash
npm run build
```

### 6. Empacotamento para Android

Para empacotar a aplicação para Android usando Capacitor:

```bash
npx cap sync
npx cap open android
```

No Android Studio, você pode compilar e rodar o APK no emulador ou em um dispositivo físico.

## 🧪 Testes

Este projeto inclui testes automatizados para garantir a funcionalidade correta dos componentes.

### Executar Testes

```bash
npm test
```

Os testes são executados no modo interativo, permitindo uma depuração rápida e eficiente.

## 🌐 Deploy

Para fazer o deploy da aplicação:

1. Configure o serviço de hospedagem desejado (por exemplo, Firebase Hosting).
2. Siga as instruções específicas do serviço para implantar o conteúdo da pasta `build/`.

## 🚧 Melhorias Futuras

- Implementar autenticação de usuário com Firebase Authentication.
- Adicionar notificações push usando Firebase Cloud Messaging.
- Melhorar a responsividade para diferentes tamanhos de tela.

## 📚 Referências

- [Documentação do React](https://reactjs.org/docs/getting-started.html)
- [Documentação do Firebase](https://firebase.google.com/docs)
- [Documentação do Capacitor](https://capacitorjs.com/docs)
- [Documentação do Android Studio](https://developer.android.com/studio/intro)

## 👤 Autor

Desenvolvido por [Gustavo Vasconcelos](https://www.linkedin.com/in/gustavo-vasconcelos-software-engineer/), [GitHub](https://github.com/sasgustav).

## 📄 Licença

Este projeto é de uso livre para fins de avaliação técnica.