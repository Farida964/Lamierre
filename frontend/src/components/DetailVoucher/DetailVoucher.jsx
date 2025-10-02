import React from 'react';
import styles from './detailvoucher.module.css';

function DetailVoucher({ isOpen, onClose, voucher }) {
  if (!isOpen) return null;

  return (
    <div
      className={`${styles.popupOverlay} ${isOpen ? styles.active : ""}`}
      onClick={onClose}
    >
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>

        <div className={styles.popupHeader}>
          <div className={styles.popupTitle}>{voucher?.title}</div>
        </div>

        <div className={styles.popupContent}>
          <p><strong>Voucher:</strong> {voucher?.value}</p>
          <p>{voucher?.desc}</p>
          <ul>
            {voucher?.terms?.map((term, i) => (
              <li key={i}>{term}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailVoucher;
