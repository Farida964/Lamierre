function Payment() {
  const styles = {
    container: {
      padding: "40px",
      textAlign: "center",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    options: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
    },
    button: {
      backgroundColor: "#CB6E68",
      color: "#fff",
      border: "none",
      borderRadius: "30px",
      padding: "10px 25px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "0.3s",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Choose Your Payment Method</h2>

      <div style={styles.options}>
        {/* WhatsApp */}
        <a
          href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20beli%20produk"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          WhatsApp
        </a>

        {/* Shopee */}
        <a
          href="https://shopee.co.id/lamierre"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Shopee
        </a>

        {/* Tokopedia */}
        <a
          href="https://tokopedia.com/lamierre"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Tokopedia
        </a>
      </div>
    </div>
  );
}

export default Payment;
