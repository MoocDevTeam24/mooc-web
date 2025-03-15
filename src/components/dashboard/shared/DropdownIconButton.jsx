import { IconButton } from "@mui/material";
import { Dropdown, Menu } from "antd";

export default function DropdownIconButton({
  icon,
  menuItems,
  onClick,
  trigger = ["click"],
}) {
  return (
    <Dropdown
      overlay={<Menu items={menuItems} onClick={onClick} />}
      trigger={trigger}
    >
      <IconButton>{icon}</IconButton>
    </Dropdown>
  );
}
