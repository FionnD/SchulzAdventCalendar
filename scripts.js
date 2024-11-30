document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth(); // Month is zero-based: 0 = January, 11 = December

  for (let i = 1; i <= 24; i++) {
    const link = document.getElementById(`link-${i}`);

    // Disable links if it's not December or if the day has not yet arrived
    if (currentMonth !== 11 || i > currentDay) {
      link.classList.add("disabled");
    }
  }
});

