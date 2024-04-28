import { DataGrid } from "@mui/x-data-grid";
import { useAppSelector } from "@hooks/useAppSelector";
import { getNewsSelector } from "@store/selectors/news";
import { useColumn, useTable } from "../hooks";
import { TableModal } from "./Modal";

export const Table = () => {
  const { handleRowClick } = useTable();
  const news = useAppSelector(getNewsSelector);
  const { columns } = useColumn();

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
      <TableModal />
    </div>
  );
};
