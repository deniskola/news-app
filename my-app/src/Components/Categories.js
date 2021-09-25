import {Box, Tab, Tabs} from "@material-ui/core";
import React, {useState} from "react";

export default function Categories() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      className="categories-container"
      display="flex"
      justifyContent="center"
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="All" />
        <Tab label="Culture" />
        <Tab label="Economy" />
        <Tab label="Sports" />
        <Tab label="Business" />
        <Tab label="Technology" />
        <Tab label="Entertainment" />
        <Tab label="Health" />
      </Tabs>
    </Box>
  );
}
