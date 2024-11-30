const today = new Date();
const currentDay = today.getDate();

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 1; i <= 24; i++) {
    const link = document.getElementById(`link-${i}`);
    if (i > currentDay) {
      link.classList.add("disabled");
    }
  }
});

