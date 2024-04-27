import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Modal } from "@mui/material";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { getNews } from "@store/slices/news";
import { useAppSelector } from "@hooks/useAppSelector";
import { getNewsSelector } from "@store/selectors/news";
import { INews } from "@models/news";
import styles from "./Table.module.scss";

const columns = [
  {
    field: "id",
    headerName: "Id",
    width: 400,
    sortable: false,
    filterable: false,
    renderCell: (params: any) => (
      <div className={styles.id}>{params.value}</div>
    ),
  },
  {
    field: "fields",
    headerName: "Photo",
    width: 200,
    renderCell: (params: any) => (
      // eslint-disable-next-line jsx-a11y/img-redundant-alt
      <img
        src={params.value.thumbnail}
        alt="Photo"
        className={styles.tableImage}
      />
    ),
  },
  {
    field: "sectionName",
    headerName: "Name",
    width: 120,
    renderCell: (params: any) => (
      <div className={styles.name}>{params.value}</div>
    ),
  },
  {
    field: "pillarName",
    headerName: "Description",
    width: 120,
    renderCell: (params: any) => (
      <div className={styles.desc2}>{params.value}</div>
    ),
  },
  {
    field: "webPublicationDate",
    headerName: "Date",
    width: 200,
    renderCell: (params: any) => (
      <div className={styles.date}>{params.value}</div>
    ),
  },
];

export const Table = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<INews>();
  const dispatch = useAppDispatch();
  const news = useAppSelector(getNewsSelector);

  useEffect(() => {
    dispatch(getNews(""));
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleRowClick = (params: any) => {
    setData(params.row);
    setOpen(true);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={news.items}
        columns={columns}
        checkboxSelection={false}
        onRowClick={handleRowClick}
        autoHeight
        rowHeight={100}
        loading={news.loading}
      />
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
          <img src={data && data.fields.thumbnail} alt="error" />
        </div>
      </Modal>
    </div>
  );
};
