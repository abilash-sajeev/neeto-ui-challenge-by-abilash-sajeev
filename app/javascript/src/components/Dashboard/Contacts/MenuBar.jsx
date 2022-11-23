import React from "react";

import { Search, Plus, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoUIMenuBar } from "neetoui/layouts";

const MenuBar = ({ showMenuBar }) => (
  <NeetoUIMenuBar showMenu={showMenuBar} title="Contacts">
    <NeetoUIMenuBar.Block active count={0} label="All" />
    <NeetoUIMenuBar.Block count={0} label="Archived" />
    <NeetoUIMenuBar.Block count={0} label="Completed" />
    <NeetoUIMenuBar.Block count={0} label="Phase 2" />
    <NeetoUIMenuBar.SubTitle
      iconProps={[
        {
          icon: Search,
        },
      ]}
    >
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Segments
      </Typography>
    </NeetoUIMenuBar.SubTitle>
    <NeetoUIMenuBar.SubTitle
      iconProps={[
        {
          icon: Search,
        },
        {
          icon: Plus,
        },
        {
          icon: Settings,
        },
      ]}
    >
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Tags
      </Typography>
    </NeetoUIMenuBar.SubTitle>
  </NeetoUIMenuBar>
);

export default MenuBar;
