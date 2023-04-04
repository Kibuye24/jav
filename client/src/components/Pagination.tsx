import { useState } from "react";
import { Box, Pagination } from "@mui/material";

interface Paginate {
  totalPages: number;
  pageNumber: number;
  change: () => void;
}

export default function Paginate({
  totalPages,
  change,
}: Paginate): JSX.Element {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNumber(value);
  };

  return (
    <>
      <Box className="my-4 py-2">
        <Pagination
          color="primary"
          page={pageNumber}
          count={totalPages}
          onChange={change}
        />
      </Box>
    </>
  );
}
