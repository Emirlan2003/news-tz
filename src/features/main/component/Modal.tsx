import { Modal } from "@mui/material";
import { useTable } from "../hooks";
import styles from "./Table.module.scss";

export const TableModal = () => {
  const { open, handleClose, data } = useTable();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={styles.modal}
    >
      <div className={styles.modalContent}>
        <div className={styles.title}>{data && data.pillarName}</div>
        <div className={styles.name}>{data && data.sectionName}</div>
        <div className={styles.desc}>{data && data.webTitle}</div>
        <img src={data && data.fields && data.fields.thumbnail} alt="error" />
      </div>
    </Modal>
  );
};
