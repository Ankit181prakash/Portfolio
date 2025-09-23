// Auto-update footer year
document.addEventListener("DOMContentLoaded", () => {
    const year = document.querySelector("footer p");
    if (year) {
      year.innerHTML = `&copy; ${new Date().getFullYear()} Your Name | IT Professional`;
    }
  });
  