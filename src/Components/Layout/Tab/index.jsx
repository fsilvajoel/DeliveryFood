import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import CarrrouselCategories from '../../CarouselCategories/CarouselCategories'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};



export default function TabCategories(props) {
  const food = props.food
  const drink = props.drink
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      // centered
      >
        <Tab label="Comidas" />
        <Tab label="Bebidas" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <CarrrouselCategories data={food} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CarrrouselCategories data={drink} />
      </TabPanel>
    </>
  );
}
