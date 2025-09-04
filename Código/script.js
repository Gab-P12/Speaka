const form = document.getElementById("contactForm");
const msgStatus = document.getElementById("msgStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    msgStatus.innerText = "✅ Mensagem enviada com sucesso!";
    form.reset();
  } else {
    msgStatus.innerText = "❌ Ocorreu um erro. Tente novamente.";
  }
});
