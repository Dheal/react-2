import Product from "./props";
import { useState } from "react";

function ListProduk() {
  const [makanan] = useState([
    { nama: "Soto Ayam", harga: 15000 },
    { nama: "Nasi Pecel", harga: 13000 },
    { nama: "Nasi Rawon", harga: 15000 },
    { nama: "Nasi Babat", harga: 10000 },
    { nama: "Nasi Jagung", harga: 13000 },
  ]);

  const menuMakanan = makanan.map((makanan) => (
    <Product nama={makanan.nama} harga={makanan.harga} />
  ));

  return <div className="row">{menuMakanan}</div>;
}

export default ListProduk;
