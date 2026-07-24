// Configuração do Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "NUMERO",
  appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Função para enviar chamado
function sendMessage() {
  const text = document.getElementById("inputMessage").value.trim();
  if (text === "") return;

  db.collection("chamados").add({
    descricao: text,
    timestamp: new Date()
  });

  document.getElementById("inputMessage").value = "";
}

// Escuta em tempo real
db.collection("chamados").orderBy("timestamp").onSnapshot(snapshot => {
  const messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML = "";
  snapshot.forEach(doc => {
    const msg = document.createElement("div");
    msg.textContent = doc.data().descricao;
    messagesDiv.appendChild(msg);
  });
});


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Função para enviar chamado
function sendMessage() {
  const text = document.getElementById("inputMessage").value.trim();
  if (text === "") return;

  db.collection("chamados").add({
    descricao: text,
    timestamp: new Date()
  });

  document.getElementById("inputMessage").value = "";
}

// Escuta em tempo real
db.collection("chamados").orderBy("timestamp").onSnapshot(snapshot => {
  const messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML = "";
  snapshot.forEach(doc => {
    const msg = document.createElement("div");
    msg.textContent = doc.data().descricao;
    messagesDiv.appendChild(msg);
  });
});
