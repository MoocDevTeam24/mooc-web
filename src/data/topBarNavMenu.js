export const notificationMenuItems = [
  { key: "1", label: <span>message1</span> },
  { key: "2", label: <span>message2</span> },
  { key: "3", label: <span>message3</span> },
];

export const settingMenuItems = [{ key: "1", label: <span>Setting</span> }];

export const userMenuItems = (handleLogout) => [
  { key: "1", label: <span>Profile</span> },
  {
    key: "2",
    label: <span onClick={handleLogout}>Log Out</span>,
  },
];
