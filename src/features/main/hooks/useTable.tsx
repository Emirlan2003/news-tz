import { useEffect, useState } from "react";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { INews } from "@models/news";
import { getNews } from "@store/slices/news";

type ReturnType = {
  open: boolean;
  data: INews | undefined;
  handleClose: () => void;
  handleRowClick: (params: any) => void;
};

export const useTable = (): ReturnType => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<INews>();
  const dispatch = useAppDispatch();

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

  return {
    open,
    data,
    handleClose,
    handleRowClick,
  };
};
