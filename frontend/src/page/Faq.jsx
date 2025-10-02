function Faq() {
  return (
    <>
      <style>{`
        body {
          background-color: #fff5f7;
          color: #333;
          font-family: Arial, Helvetica, sans-serif;
          margin: 0;
        }

        .faq-container {
          max-width: 700px;
          margin: 2rem auto;
          background: #fff;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .faq-title {
          font-size: 2rem;
          font-weight: 600;
          color: #e91e63;
          margin-bottom: 1.5rem;
        }

        .faq-question {
          font-weight: 600;
          margin-top: 1.2rem;
          font-size: 1.1rem;
        }

        .faq-answer {
          margin-bottom: 0.8rem;
          color: #444;
          font-size: 1rem;
          line-height: 1.6;
        }

        .back-link {
          display: block;
          margin-top: 1.5rem;
          font-size: 0.95rem;
          color: #e91e63;
          text-decoration: none;
        }

        .back-link:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="faq-container">
        <h1 className="faq-title">❓ Pertanyaan Umum (FAQ)</h1>

        <h2 className="faq-question">Q: Apakah produk L@mierrè ready stock?</h2>
        <p className="faq-answer">
          A: Ya, semua produk di Shopee kami ready dan bisa langsung dipesan.
        </p>

        <h2 className="faq-question">Q: Apakah bisa bayar via COD?</h2>
        <p className="faq-answer">
          A: Bisa! Pembayaran COD tersedia melalui Shopee.
        </p>

        <h2 className="faq-question">Q: Kapan produk dikirim?</h2>
        <p className="faq-answer">
          A: Produk dikirim dalam waktu 1x24 jam setelah pembayaran dikonfirmasi.
        </p>

        <a href="/" className="back-link">
          ← Kembali ke halaman utama
        </a>
      </div>
    </>
  );
}

export default Faq;
