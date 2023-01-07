const Discord = require("discord.js");
const fs = require("fs");

const client = new Discord.Client();
client.intents.set(Discord.Intents.ALL);

client.on("ready", () => {
  console.log("Bot iniciado!");
});

client.on("message", async message => {
  // Verifica se a mensagem começa com o caractere de barra (/)
  if (message.content.startsWith("/")) {
    // Divide o comando em um array usando o espaço como separador (ignorando o caractere de barra)
    const args = message.content.slice(1).split(" ");
    // Obtém o nome do comando
    const command = args.shift().toLowerCase();

    // Verifica se o arquivo de comando existe
    if (fs.existsSync(`./commands/${command}.js`)) {
      // Carrega o arquivo de comando
      const commandFile = require(`./commands/${command}.js`);
      // Executa o arquivo de comando
      commandFile.run(client, message, args);
    }
  }
});

client.login("seu-token-aqui");
