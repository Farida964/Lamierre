function Payment() {
  return (
    <>
      <style>{`
        body {
          background-color: #fff5f7;
          color: #333;
          font-family: Arial, Helvetica, sans-serif;
          margin: 0;
        }

        .payment-container {
          max-width: 700px;
          margin: 2rem auto;
          background: #fff;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .payment-title {
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

        ul {
          margin: 1rem 0 1.5rem 1.2rem;
          padding: 0;
        }

        ul li {
          margin-bottom: 0.5rem;
          font-size: 1rem;
          line-height: 1.5;
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

      <div className="payment-container">
        <h1 className="payment-title">💳 Informasi Pembayaran</h1>
        <p>Kami menerima metode pembayaran melalui:</p>
        <ul>
          <li>Transfer Bank (BCA, Mandiri, BNI)</li>
          <li>ShopeePay, GoPay, OVO</li>
          <li>Kartu Kredit melalui platform Shopee</li>
        </ul>
        <p>Pastikan untuk menyimpan bukti pembayaran agar proses verifikasi lebih cepat.</p>
        <a href="/" className="back-link">← Kembali ke halaman utama</a>
      </div>
    </>
  );
}

export default Payment;
