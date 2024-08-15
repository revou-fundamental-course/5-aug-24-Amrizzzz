let gender = "";
let usia = "";
let tinggi = "";
let berat = "";
let hasil = ""

function genders(selectedGender) {
  //   console.log(selectedGender);

  gender = selectedGender;
  console.log(gender);

  if (selectedGender === "men") {
    document.getElementById("men").classList.add("gender-men-selected");
    document.getElementById("women").classList.remove("gender-women-selected");
  } else {
    document.getElementById("men").classList.remove("gender-men-selected");
    document.getElementById("women").classList.add("gender-women-selected");
  }
}

function submit() {
  const Height = document.getElementById("height").value;
  const Weight = document.getElementById("weight").value;
  const Usia = document.getElementById("usia").value;

  if(!gender) {
    alert("Silahkan pilih gender anda")
  } else if(Usia === ""){
    alert("silahkan masukkan usia anda")
  } else if (Weight === "" || Height === "") {
    alert("Silakan masukkan berat dan tinggi badan Anda.");
  }

  const heightM = Height / 100; // Konversi tinggi dari cm ke meter
  const bmi = Weight / (heightM * heightM); // Rumus BMI
  hasil = bmi

  if (hasil != null){
    document.getElementById("result-show").classList.add("result-show-update")
    document.getElementById("not-result").classList.add("not-result-update")
  }
  // Menampilkan hasil BMI
  console.log(hasil);
  const bmiResult = document.getElementById("show-result");
  bmiResult.innerHTML = `<h2>BMI Anda adalah ${hasil.toFixed(2)}</h2>`;

  // Menampilkan kategori BMI
  if (hasil < 18.5) {
    bmiResult.innerHTML += "<h4>Kategori: Berat badan anda kurus</h4>";
  } else if (hasil >= 18.5 && hasil < 24.9) {
    bmiResult.innerHTML += "<h4>Kategori: Normal (sehat)</h4>";
  } else if (hasil >= 25 && hasil < 29.9) {
    bmiResult.innerHTML += "<h4>Kategori: Berat badan anda gemuk</h4>";
  } else if (hasil >= 30 && hasil < 34.9) {
    bmiResult.innerHTML += "<h4>Kategori: Berat badan anda obesitas tingkat 1</h4>";
  } else {
    bmiResult.innerHTML += "<h4>Kategori: Berat badan anda obesitas tingkat 2</h4>";
  }
}

function reset() {
  const Usia = (document.getElementById("usia").value = "");
  const Height = (document.getElementById("height").value = "");
  const Weight = (document.getElementById("weight").value = "");

  if (gender == "men") {
      document.getElementById("men").classList.remove("gender-men-selected");
      gender = null;
  } else {
      document.getElementById("women").classList.remove("gender-women-selected");
      gender = null;
  }

  if(hasil != null){
    document.getElementById("result-show").classList.remove("result-show-update")
    document.getElementById("not-result").classList.remove("not-result-update")
    hasil = null
  }
  console.log("usia :", { Usia });
  console.log("tinggi :", { Height });
  console.log("berat :", { Weight });
}
