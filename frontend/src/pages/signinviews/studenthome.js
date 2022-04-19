import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './instructorsignin.css'
import { Tabs } from '@mui/material';
import { Tab } from '@mui/material';
import { spacing } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Card } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Column from '../components/Column'
import { useState, useEffect } from 'react';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p:0 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function StudentHome() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const initialColumns = {
        "To Do": {
          id: "To Do",
          list: [
            { id: "1", text: "text1" },
            { id: "2", text: "text2" },
            { id: "3", text: "text3" }
          ]
        },
        "In Progress": {
          id: "In Progress",
          list: [
            { id: "4", text: "text4" },
            { id: "5", text: "text5" },
            { id: "6", text: "text6" }
          ]
        },
        "Done": {
          id: "Done",
          list: []
        }
      };
    
    const [columns, setColumns] = useState(initialColumns);

    const onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    // Set start and end variables
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      console.log(start);
      const newList = start.list.filter((_, idx) => idx !== source.index);

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList
      };

      // Update the state
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter((_, idx) => idx !== source.index);

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList
      };

      // Make a new end list array
      const newEndList = end.list;

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);

      // Create a new end column
      const newEndCol = {
        id: end.id,
        list: newEndList
      };

      // Update the state
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol
      }));
      return null;
    }
};

    return (
        <Grid container component="main">
            <CssBaseline></CssBaseline>
            <Tabs value={value} onChange={handleChange} aria-label="student page tabs">
                <Tab label="User Stories" {...a11yProps(0)}></Tab>
                <Tab label="Meetings" {...a11yProps(1)}></Tab>
                <Tab label="Progress Reports" {...a11yProps(2)}></Tab>
                <Tab label="Peer Reviews" {...a11yProps(3)}></Tab>
            </Tabs>

            <Grid container>
            <TabPanel value={value} index={0}>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Grid container direction={"row"} justify={"center"}>
                        {Object.values(columns).map((column) => {
                            console.log(column);
                            return (
                                <Grid item>
                                <Column column={column} key={column.id} />
                                </Grid>
                        );
                        })}
                    </Grid>
                </DragDropContext>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div>
                    <Typography>Hello again!</Typography>

                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div>
                    <Typography>Hello again again!</Typography>
                </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div>
                    <Typography>Hello again again again!</Typography>
                </div>
            </TabPanel>
            </Grid>
            
        </Grid>
    )
}