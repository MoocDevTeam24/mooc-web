import { Box, IconButton } from "@mui/material";
import {
  SettingOutlined,
  UserOutlined,
  BellOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import DropdownIconButton from "../shared/DropdownIconButton";
import {
  notificationMenuItems,
  settingMenuItems,
  userMenuItems,
} from "../../../data/topBarNavMenu";
import postRequest from "../../../request/postRequest";
import colors from "../../../theme";

export default function Topbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("loginInfo");
    await postRequest("/auth/logout");
    navigate("/login");
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[900]}
        borderRadius="3px"
      />

      <Box display="flex">
        <IconButton>
          <SunOutlined style={{ fontSize: "20px" }} />
        </IconButton>

        <DropdownIconButton
          icon={<BellOutlined style={{ fontSize: "20px" }} />}
          menuItems={notificationMenuItems}
        />

        <DropdownIconButton
          icon={<SettingOutlined style={{ fontSize: "20px" }} />}
          menuItems={settingMenuItems}
        />

        <DropdownIconButton
          icon={<UserOutlined style={{ fontSize: "20px" }} />}
          menuItems={userMenuItems(handleLogout)}
        />
      </Box>
    </Box>
  );
}
