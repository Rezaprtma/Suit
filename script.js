var tanya = true;
while (tanya) {
  // menangkap pilihan player
  var p = prompt("Pilih: Gajah, Semut, Orang.");

  // menangkap pilihan koomputer
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "semut";
  } else {
    comp = "orang";
  }

  var hasil = "";
  // menentukan rules
  if (p == comp) {
    hasil = "Seri";
  } else if (p == "gajah") {
    // if( comp == 'orang'){
    //     hasil = 'MENANG!';
    // }   else{
    //     hasil = 'KALAH!';
    // }
    hasil = comp == "orang" ? "MENANG!" : "KALAH!";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH!" : "MENANG!";
  } else {
    hasil = "Memasukkan pilihan yang salah!";
  }
  // tampilkan hasilnya

  alert("Kamu memilih : " + p + " dan komputer memilih " + comp + "\nMaka hasilnya : kamu " + hasil);

  tanya = confirm("lagi?");
}
alert("Terima kasih sudah bermain");
