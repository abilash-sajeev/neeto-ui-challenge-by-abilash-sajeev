import React from "react";

import { Search, Plus, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoUIMenuBar } from "neetoui/layouts";

const MenuBar = ({ showMenuBar }) => (
  <NeetoUIMenuBar showMenu={showMenuBar} title="Notes">
    <NeetoUIMenuBar.Block active count={200} label="All" />
    <NeetoUIMenuBar.Block count={80} label="Users" />
    <NeetoUIMenuBar.Block count={60} label="Leads" />
    <NeetoUIMenuBar.Block count={60} label="Visitors" />
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
    <NeetoUIMenuBar.Block count={80} label="Europe" />
    <NeetoUIMenuBar.Block count={60} label="Middle-East" />
    <NeetoUIMenuBar.Block count={60} label="Asia" />
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
    <NeetoUIMenuBar.Block count={80} label="Sales" />
    <NeetoUIMenuBar.Block count={60} label="Finance" />
    <NeetoUIMenuBar.Block count={60} label="User Experience" />
  </NeetoUIMenuBar>
);

export default MenuBar;
