const messagesDiv = document.getElementById("messages");
const inputMessage = document.getElementById("inputMessage");

function sendMessage() {
  const text = inputMessage.value.trim();
  if (text === "") return;

  // Mensagem do usuário
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = "Você: " + text;
  messagesDiv.appendChild(userMsg);

  // Resposta automática simulando sistema de chamados
  const systemMsg = document.createElement("div");
  systemMsg.className = "message system";
  systemMsg.textContent = "Sistema: Chamado registrado - " + text;
  messagesDiv.appendChild(systemMsg);

  // Limpar input
  inputMessage.value = "";
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
