import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, kondisi, jumlah, kodeAlat } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
       Kategori: {kategori} 
      </p>
       <p>
        Kode Alat : {kodeAlat}
      </p>
       <p>
        Jumlah : {jumlah}
      </p>
       <p>
        Kondisi : {kondisi}
      </p>
    </article>
  )
}