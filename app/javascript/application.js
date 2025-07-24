// app/javascript/application.js
import "@hotwired/turbo-rails"
import "controllers"

// Este código espera o Turbo carregar a página e então adiciona a funcionalidade.
document.addEventListener("turbo:load", () => {
  // Encontra todos os alertas que podem ser fechados.
  const alerts = document.querySelectorAll('.alert-dismissible');
  
  alerts.forEach((alert) => {
    // Para cada alerta, cria uma nova instância do componente Alert do Bootstrap.
    // Isso garante que o JavaScript do Bootstrap saiba sobre este elemento.
    new bootstrap.Alert(alert);
  });
});