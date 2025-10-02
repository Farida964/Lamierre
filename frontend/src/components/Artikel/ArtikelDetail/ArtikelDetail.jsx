import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ArtikelDetail() {
  const { id } = useParams(); // ambil param id dari url
  const [artikel, setArtikel] = useState(null);

  useEffect(() => {
    const fetchArtikel = async () => {
      try {
        const response = await axios.get("/artikel.json"); 
        const data = response.data;
        const index = parseInt(id) - 1; // id=1 → index=0
        setArtikel(data[index]);
      } catch (error) {
        console.error("Error fetching artikel:", error);
      }
    };
    fetchArtikel();
  }, [id]);

  if (!artikel) {
    return <p>Loading artikel...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{artikel.title}</h1>
      <img src={artikel.img} alt={artikel.title} style={{ width: "100%", maxWidth: "600px" }} />
      <p>{artikel.desc}</p>
      <div>{artikel.content}</div>
    </div>
  );
}

export default ArtikelDetail;
