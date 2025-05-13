import { Box } from "@mui/material";
import { useParams } from "react-router";

const SingleUser = () => {
  let params = useParams();

  return <Box>Hello Single User number {params.id}</Box>;
};

export default SingleUser;
