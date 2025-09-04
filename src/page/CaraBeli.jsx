function CaraBeli() {
  return (
    <div style={{
      fontFamily: "Arial, Helvetica, sans-serif",
      backgroundColor: "#fff5f7",
      color: "#333",
      margin: 0,
      padding: "20px",
      minHeight: "100vh"
    }}>
      <div style={{
        maxWidth: "700px",
        margin: "40px auto",
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{
          fontSize: "28px",
          fontWeight: "bold",
          color: "#d6336c",
          marginBottom: "20px"
        }}>🛍️ Cara Beli</h1>

        <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "12px" }}>
          1. Kunjungi{" "}
          <a href="https://shopee.co.id/lamierre" target="_blank" rel="noreferrer" style={{ color: "#d6336c", fontWeight: 500 }}>
            Shopee Lamierre
          </a>{" "}
          atau hubungi{" "}
          <a href="https://wa.me/628xxxxxx" target="_blank" rel="noreferrer" style={{ color: "#1da851", fontWeight: "bold" }}>
            WhatsApp kami
          </a>.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "12px" }}>
          2. Pilih produk yang kamu suka dan klik <b>"Beli Sekarang"</b>.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "12px" }}>
          3. Ikuti langkah checkout seperti biasa sesuai platform pilihanmu.
        </p>
        <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "12px" }}>
          4. Selesaikan pembayaran dan tunggu konfirmasi pengiriman dari tim L@mierrè.
        </p>

        <a href="/" style={{ display: "inline-block", marginTop: "20px", fontSize: "16px", color: "#d6336c", textDecoration: "none" }}>
          ← Kembali ke halaman utama
        </a>
      </div>
    </div>
  );
}

export default CaraBeli;
