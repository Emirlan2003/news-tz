import { formatDate } from "@mappers/index";
import styles from "../component/Table.module.scss";

type ColumnType = {
  field: string;
  headerName: string;
  width: number;
  sortable?: boolean;
  filterable?: boolean;
  renderCell: (params: any) => JSX.Element;
};

type ReturnType = {
  columns: ColumnType[];
};

export const useColumn = (): ReturnType => {
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
          src={params.value ? params.value.thumbnail : ""}
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
        <div className={styles.date}>{formatDate(params.value)}</div>
      ),
    },
  ];

  return {
    columns,
  };
};
