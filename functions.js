async function getUserIP(bool) {

  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    var ip = data.ip;
  } catch (error) {
    console.error(error);
  }
  
  if (!bool) {
    return;
  } else if (bool === true) {
    return console.log(ip);
  } else if (bool == false) {
    return ip || data.ip;
  } else {
    return;
  };
}

async function getLocate(str) {
  if(!str) return;
  else {
    try {
      const response = await fetch(`https://ipapi.co/${str}/json/`);
      const location = await response.json();
      console.log(`Cidade: ${location.city}, País: ${location.country_name}`);
    } catch (error) {
      console.error(error);
    }}
  
}



function inverta(str) {
  return str
    .split("") // Divide a string em um array de caracteres
    .reverse() // Inverte a ordem dos elementos no array
    .join(""); // Junta os elementos do array em uma string novamente
}

module.exports = { getUserIP, getLocate, inverta }