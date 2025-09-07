function showHome() {
    console.log("Switching to Home");
    document.querySelector('.home-page').style.display = 'block';
    document.querySelector('.metodo-page').style.display = 'none';
    document.querySelector('.planos-page').style.display = 'none';
    document.querySelector('.contato-page').style.display = 'none';
}

function showMetodo() {
    console.log("Switching to Metodo");
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.metodo-page').style.display = 'block';
    document.querySelector('.planos-page').style.display = 'none';
    document.querySelector('.contact-page').style.display = 'none';
}

function showPlanos() {
    console.log("Switching to Planos");
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.metodo-page').style.display = 'none';
    document.querySelector('.planos-page').style.display = 'block';
    document.querySelector('.contato-page').style.display = 'none';

}
  
function showContato() {
    console.log("Switching to Contato");
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.metodo-page').style.display = 'none';
    document.querySelector('.planos-page').style.display = 'none';
    document.querySelector('.contato-page').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const artItems = document.querySelectorAll(".art-item");


    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;

            artItems.forEach(item => {
              
                if (filter === "all" || item.dataset.category === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });


    const modal = document.getElementById("popup-modal");
    const modalImg = document.getElementById("popup-image");
    const closePopup = document.getElementById("close-popup");

    artItems.forEach(item => {
        item.addEventListener("click", () => {
            modalImg.src = item.querySelector("img").src;
            modal.classList.remove("hidden");
        });
    });

    closePopup.addEventListener("click", () => {
        modal.classList.add("hidden");
    });
});

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
