function Shipping() {
  return (
    <>
      <style>{`
        body {
          background-color: #fff5f7;
          color: #333;
          font-family: Arial, Helvetica, sans-serif;
          margin: 0;
        }

        .shipping-container {
          max-width: 700px;
          margin: 2rem auto;
          background: #fff;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .shipping-title {
          font-size: 2rem;
          font-weight: 600;
          color: #e91e63;
          margin-bottom: 1.5rem;
        }

        p {
          font-size: 1rem;
          margin-bottom: 0.8rem;
          line-height: 1.6;
        }

        .back-link {
          display: inline-block;
          margin-top: 1rem;
          font-size: 0.95rem;
          color: #e91e63;
          text-decoration: none;
        }

        .back-link:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="shipping-container">
        <h1 className="shipping-title">📦 Pengiriman</h1>
        <p>• Pengiriman dilakukan dari Jakarta setiap hari kerja (Senin–Jumat).</p>
        <p>• Kami menggunakan layanan JNE, SiCepat, atau ekspedisi sesuai permintaan pelanggan.</p>
        <p>• Nomor resi akan dikirim maksimal 1x24 jam setelah pengiriman dilakukan.</p>
        <a href="/" className="back-link">← Kembali ke halaman utama</a>
      </div>
    </>
  );
}

export default Shipping;
