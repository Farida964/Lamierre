function Privacy() {
  return (
    <>
      <style>{`
        body {
          background-color: #fff5f7;
          color: #333;
          font-family: Arial, Helvetica, sans-serif;
          margin: 0;
        }

        .privacy-container {
          max-width: 700px;
          margin: 2rem auto;
          background: #fff;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .privacy-title {
          font-size: 2rem;
          font-weight: 600;
          color: #e91e63;
          margin-bottom: 1.5rem;
        }

        p {
          font-size: 1rem;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .back-link {
          display: inline-block;
          margin-top: 1.5rem;
          font-size: 0.95rem;
          color: #e91e63;
          text-decoration: none;
        }

        .back-link:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="privacy-container">
        <h1 className="privacy-title">🔒 Kebijakan Privasi</h1>
        <p>
          L@mierrè berkomitmen untuk menjaga dan melindungi data pribadi pelanggan kami.
          Informasi seperti nama, alamat, dan nomor telepon hanya digunakan untuk kebutuhan pengiriman & komunikasi transaksi.
        </p>
        <p>
          Kami tidak akan membagikan data Anda kepada pihak ketiga tanpa izin.
        </p>
        <a href="/" className="back-link">← Kembali ke halaman utama</a>
      </div>
    </>
  );
}

export default Privacy;
