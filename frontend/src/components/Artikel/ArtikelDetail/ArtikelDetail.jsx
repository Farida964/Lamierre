import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ArtikelDetail() {
  const { id } = useParams(); // ambil param id dari URL
  const [artikel, setArtikel] = useState(null);

  useEffect(() => {
    const fetchArtikel = async () => {
      try {
        const response = await axios.get("/artikel.json", {
          headers: { "Cache-Control": "no-cache" }, // pastikan data paling baru
        });
        const data = response.data;
        const index = parseInt(id, 10) - 1; // pastikan parseInt base 10
        setArtikel(data[index] || null);
      } catch (error) {
        console.error("Error fetching artikel:", error);
      }
    };

    fetchArtikel();
  }, [id]);

  if (!artikel) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading artikel...</p>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>{artikel.title}</h1>

      <img
        src={artikel.img}
        alt={artikel.title}
        style={{
          width: "100%",
          maxWidth: "600px",
          display: "block",
          margin: "0 auto 20px auto",
          borderRadius: "10px",
        }}
        loading="lazy"
      />

      <p style={{ textAlign: "justify", marginBottom: "20px" }}>{artikel.desc}</p>

      {/* Pastikan content tidak menyebabkan XSS */}
      <div
        style={{ lineHeight: "1.8", textAlign: "justify" }}
        dangerouslySetInnerHTML={{ __html: artikel.content }}
      ></div>
    </div>
  );
}

export default ArtikelDetail;
