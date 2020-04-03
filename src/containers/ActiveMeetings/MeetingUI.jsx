import React from "react";
import { Label, Menu, Tab } from "semantic-ui-react";

const MeetingsUI = props => {
  const panes = [
    {
      menuItem: { key: "Active", icon: "video", content: "Active" },
      render: () => <Tab.Pane>{props.activeContent}</Tab.Pane>
    },
    {
      menuItem: {
        key: "Inactive",
        icon: "calendar check",
        content: "Inactive"
      },
      render: () => <Tab.Pane>{props.inactiveContent}</Tab.Pane>
    }
  ];
  return <Tab panes={panes} />;
};

export default MeetingsUI;
