const chat = document.getElementById("chat");
const form = document.getElementById("chat-form");
const input = document.getElementById("message-input");

function addMessage(text, sender) {
  const message = document.createElement("div");

  message.classList.add("message", sender);
  message.textContent = text;

  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();

  if (!text) return;

  addMessage(text, "user");

  input.value = "";

  setTimeout(() => {
    addMessage(
      "Recebi sua mensagem! Meu núcleo de inteligência artificial ainda está sendo preparado.",
      "assistant"
    );
  }, 500);
});
