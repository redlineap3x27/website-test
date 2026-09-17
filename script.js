console.log("script javascript berhasil terhubung!");

// pesan sapaan di console browser saat web dibuka
document.addEventListener("DOMContentLoaded", function () {
  console.log("halaman portofolio juone siap!");
});


const tombolSapa = document.getElementById("btn-sapa");

tombolSapa.addEventListener("click", function () {
  alert("halo juone! semangat terus belajar kodenya ya!");
});