const form = document.getElementById("reservationForm");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // گرفتن دیتا (اختیاری برای آینده)
  const name = document.getElementById("name").value;
  const time = document.getElementById("time").value;
  const message = document.getElementById("message").value;

  console.log(name, time, message);

  // نمایش modal
  modal.style.display = "flex";
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});
