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

const dragReducer = (state, action) => {
    return state;
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

    const onDragEnd = useCallback((result) => {}, []);

    const [state, dispatch] = useReducer(dragReducer, {
        items:data
    })

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
                <div>
                    <Grid container>
                        {/* <ul className="stories">
                            <li>Story 1</li>
                            <li>Story 2</li>
                            <li>Story 3</li>
                        </ul> */}
                        <DragDropContext onDragEnd={onDragEnd}>

                        </DragDropContext>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Story 1"></ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Story 2"></ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Story 1"></ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Grid>
                </div>
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