import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import colors from "../../../theme";

const Header = ({ title, subtitle, url, urltitle }) => {
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {url ? (
          <>
            <Link title={urltitle} to={url}>
              {urltitle}
            </Link>
            <span>-</span>
          </>
        ) : null}
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
