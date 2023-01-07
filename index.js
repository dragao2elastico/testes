// const functions = require("./functions");
// const prompt = require('prompt-sync')();
// const wait = require('node:timers/promises').setTimeout;
// const ip = functions.getUserIP(true)

// var start = prompt(`Iniciar? (S/N) `);

// if(start = "s"||"sim") {
//     var num = prompt(ip, `\nDigite o número exibido a cima: `);
// } else if(start = "n"||"nao"||"não") {
    
// } else {
//     return console.log("Responda com Sim (S) ou Não(N)")
// }

// functions.getLocate(num);

const readline = require('readline');
const axios = require('axios');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Bem-vindo ao aplicativo de pesquisa de música!');

const services = [
  {
    name: 'Spotify',
    search: async (query) => {
      try {
        await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track`);
      } catch (error) {
        console.error(error);
      }
    }
  },
  {
    name: 'YouTube',
    search: async (query) => {
      try {
        await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=YOUR_API_KEY`);
      } catch (error) {
        console.error(error);
      }
    }
  }
];

async function searchMusic() {
  console.log('Escolha um serviço de pesquisa:');
  for (let i = 0; i < services.length; i++) {
    console.log(`${i + 1}: ${services[i].name}`);
  }

  rl.question('Opção:', async (input) => {
    const option = parseInt(input) - 1;
    if (option < 0 || option >= services.length) {
      console.log('Opção inválida. Escolha novamente.');
      searchMusic();
      return;
    }

    rl.question('Digite o nome de uma música ou artista para pesquisar:', (query) => {
      services[option].search(query);
    });
  });
}

searchMusic();
