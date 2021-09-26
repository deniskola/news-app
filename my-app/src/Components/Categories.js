import {Box, Tab, Tabs} from "@material-ui/core";
import React, {useState} from "react";

export default function Categories({setCategoryFilter, setNoFilter}) {
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
        <Tab
          label="All"
          onClick={() => {
            setNoFilter(true);
          }}
        />
        <Tab
          label="Culture"
          onClick={() => {
            setCategoryFilter("Culture");
            setNoFilter(false);
          }}
        />
        <Tab
          label="Economy"
          onClick={() => {
            setCategoryFilter("Economy");
            setNoFilter(false);
          }}
        />
        <Tab
          label="Sports"
          onClick={() => {
            setCategoryFilter("Sports");
            setNoFilter(false);
          }}
        />
        <Tab
          label="Business"
          onClick={() => {
            setCategoryFilter("Business");
            setNoFilter(false);
          }}
        />
        <Tab
          label="Technology"
          onClick={() => {
            setCategoryFilter("Technology");
            setNoFilter(false);
          }}
        />
        <Tab
          label="Entertainment"
          onClick={() => {
            setCategoryFilter("Entertainment");
            setNoFilter(false);
          }}
        />
        <Tab
          label="Health"
          onClick={() => {
            setCategoryFilter("Health");
            setNoFilter(false);
          }}
        />
      </Tabs>
    </Box>
  );
}
