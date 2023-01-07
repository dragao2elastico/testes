const apiKey = "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";
const dialogId = "c451ae0c-43a9-4484-ae60-887446385677";

document.getElementById("chat-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const message = document.getElementById("message-input").value;

  // Envia a mensagem para a API
  const response = await fetch(
    `https://api.openai.com/v1/chats/${dialogId}/messages`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: message,
      }),
    }
  );

  // Obtém a resposta da API
  const json = await response.json();

  // Exibe a resposta da API na página
  const messageElement = document.createElement("div");
  messageElement.innerText = json.text;
  document.getElementById("chat-messages").appendChild(messageElement);
});
