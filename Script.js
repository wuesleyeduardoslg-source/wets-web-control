// Substitua pelo IP do celular corpo que está rodando Flask
const servidor = "http://192.168.1.10:5000";

function enviarComando(modulo) {
  fetch(`${servidor}/comando?cmd=${modulo}`)
    .then(resp => resp.text())
    .then(data => {
      document.getElementById("status").innerText = "Status: " + data;
    })
    .catch(err => {
      document.getElementById("status").innerText = "Erro: " + err;
    });
}

function enviarTexto() {
  const cmd = document.getElementById("txtComando").value;
  if(cmd.trim() === "") return;
  fetch(`${servidor}/comando?cmd=${encodeURIComponent(cmd)}`)
    .then(resp => resp.text())
    .then(data => {
      document.getElementById("status").innerText = "Status: " + data;
      document.getElementById("txtComando").value = "";
    })
    .catch(err => {
      document.getElementById("status").innerText = "Erro: " + err;
    });
    }
