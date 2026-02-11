function getAccounts() {
  return JSON.parse(localStorage.getItem("accounts")) || [];
}

function saveAccounts(accounts) {
  localStorage.setItem("accounts", JSON.stringify(accounts));
}

function addAccount() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (username === "" || password === "") {
    message.textContent = "Erreur. Recommencez";
    message.className = "error";
    return;
  }

  const accounts = getAccounts();
  accounts.push({ username, password });
  saveAccounts(accounts);

  message.textContent = "Compte ajouté";
  message.className = "success";
  resetForm();
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  const accounts = getAccounts();

  const found = accounts.find(
    acc => acc.username === username && acc.password === password
  );

  if (found) {
    message.textContent = "Vous êtes connecté";
    message.className = "success";
  } else {
    message.textContent = "Erreur. Recommencez";
    message.className = "error";
  }
  if (username === "" || password === "") {
  message.textContent = "Champs obligatoires";
  message.className = "error";
  return;
}
}

function resetForm() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}