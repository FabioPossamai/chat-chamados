// Configuração Firebase (igual ao seu projeto)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Pega o ID do chamado da URL
const params = new URLSearchParams(window.location.search);
const chamadoId = params.get("id");

const chatDiv = document.getElementById("chat");
const msgInput = document.getElementById("msgInput");

// Escuta mensagens em tempo real
db.collection("chamados").doc(chamadoId).collection("mensagens")
  .orderBy("timestamp")
  .onSnapshot(snapshot => {
    chatDiv.innerHTML = "";
    snapshot.forEach(doc => {
      const data = doc.data();
      const msg = document.createElement("div");
      msg.textContent = `${data.autor}: ${data.texto}`;
      chatDiv.appendChild(msg);
    });
  });

// Enviar mensagem
function enviarMensagem() {
  const texto = msgInput.value.trim();
  if (texto === "") return;

  db.collection("chamados").doc(chamadoId).collection("mensagens").add({
    texto,
    autor: "usuário", // ou "admin" dependendo de quem está logado
    timestamp: new Date()
  });

  msgInput.value = "";
}
