// Conditional Variable (Ternary)

let short = (data) => {
  let x = -Infinity;
  let output = "";
  for (let i in data) {
    // let tertinggi = data[i] < x && x = data[i]
    // console.log(tertinggi);
    const hasil = data[i] >= 80 ? `Siswa ke-${Number(i) + 1} "lulus"` : `Siswa ke-${Number(i) + 1} tidak lulus`
    output += hasil + "<_____>";
  }
  return output;
}

let nilai = [100, 80, 70, 50, 30];
console.log(short(nilai));

// MAP & FILTER

const friendsList = [
  {
    nama: "Ikhor",
    umur: 23,
    asal: "Blitar",
    domisili: "Jakarta",
  },
  {
    nama: "Nudew",
    umur: 23,
    asal: "Sengkang",
    domisili: "Jakarta",
  },
  {
    nama: "Randi",
    umur: 25,
    asal: "Bukittinggi",
    domisili: "Padang",
  },
  {
    nama: "Kamil",
    umur: 23,
    asal: "Amuntai",
    domisili: "Jakarta",
  },
  {
    nama: "Syafa",
    umur: 24,
    asal: "Ponorogo",
    domisili: "Ponorogo",
  },
  {
    nama: "Rizky",
    umur: 24,
    asal: "Majalengka",
    domisili: "Majalengka",
  },
  {
    nama: "Fahri",
    umur: 23,
    asal: "Karawang",
    domisili: "Bogor",
  },
  {
    nama: "Rahma",
    umur: 24,
    asla: "Bandung",
    domisili: "Bandung",
  }
]

const listNama = friendsList.map((teman) => teman.nama);
console.log(listNama);

const diJakarta = friendsList.filter((jak) => jak.domisili === "Jakarta");
console.log(diJakarta);