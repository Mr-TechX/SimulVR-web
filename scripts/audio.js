const overlay = document.getElementById("overlay");
    const modal = document.getElementById("modalBienvenida");
    const btnEntrar = document.getElementById("btnEntrar");
    const audio = document.getElementById("audio-bg");

    // Mostrar modal con animación
    window.addEventListener("DOMContentLoaded", () => {
      overlay.classList.add("active");
      modal.classList.add("active");
    });

    // Al hacer clic en Entrar
    btnEntrar.addEventListener("click", () => {
      // Animación de salida
      modal.classList.remove("active");
      overlay.classList.remove("active");

      // Reproducir audio al 4%
      audio.muted = false;
      audio.volume = 0.04;
      audio.play().catch(err => console.warn("Error al reproducir audio:", err));
    });