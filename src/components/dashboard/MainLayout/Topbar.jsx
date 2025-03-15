import React from "react";
import { Box, IconButton } from "@mui/material";
import {
  SettingOutlined,
  UserOutlined,
  BellOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";

import postRequest from "../../../request/postRequest";
import colors from "../../../theme";

export default function Topbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("loginInfo");
    await postRequest("/auth/logout");
    navigate("/login");
  };

  const notificationMenu = (
    <Menu
      items={[
        { key: "1", label: <span>message1</span> },
        { key: "2", label: <span>message2</span> },
        { key: "3", label: <span>message3</span> },
      ]}
    />
  );

  const settingMenu = (
    <Menu items={[{ key: "1", label: <span>Setting</span> }]} />
  );

  const userMenu = (
    <Menu
      items={[
        { key: "1", label: <span>Profile</span> },
        {
          key: "2",
          label: <span onClick={() => handleLogout()}>Log Out</span>,
        },
      ]}
    />
  );

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

        <Dropdown overlay={notificationMenu} trigger={["click"]}>
          <IconButton>
            <BellOutlined style={{ fontSize: "20px" }} />
          </IconButton>
        </Dropdown>

        <Dropdown overlay={settingMenu} trigger={["click"]}>
          <IconButton>
            <SettingOutlined style={{ fontSize: "20px" }} />
          </IconButton>
        </Dropdown>

        <Dropdown overlay={userMenu} trigger={["click"]}>
          <IconButton>
            <UserOutlined style={{ fontSize: "20px" }} />
          </IconButton>
        </Dropdown>
      </Box>
    </Box>
  );
}
