import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Pagination } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";

export default function Paginate(): JSX.Element {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  return (
    <>
      <Box className="my-4 py-2">
        <Pagination color="primary" />
      </Box>
    </>
  );
}
