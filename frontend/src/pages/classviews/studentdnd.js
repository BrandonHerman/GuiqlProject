import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../signinviews/instructorsignin.css'
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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Skeleton from '@mui/material/Skeleton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { Repository } from '../../api/repository';


export default function StudentDND() {

    const [open, setOpen] = React.useState(false);
    const [verify, setVerify] = React.useState(false);
    const [edit, setEdit] = React.useState(false);

    const [value, setValue] = React.useState(0);


    const handleClickOpen = () => {
        console.log("open boolean = " + open);
        setOpen(true);
    }
    const handleDeleteOpen = () => {
        console.log("setVerify boolean = " + verify);
        setVerify(true);
    }
    const handleClickClose = () => {
        console.log("open boolean = " + open);
        console.log("setVerify boolean = " + verify);
        setVerify(false);
        setOpen(false);
    }

    const deleteStories = () => {
        columns["Delete"].list = [];
        setColumns(columns);
        console.log(columns["Delete"]);
        handleClickClose();
    }
    const addStory = () => {
        handleClickOpen();
    }
    const submitStory = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log("Title field: " + data.get('title'));
        columns["To Do"].list.push(
            /* {id: "7", text: "text7", desc:"", favorite:false, teamId:0} */
            {
                id: (columns["Delete"].list.length + columns["To Do"].list.length + columns["In Progress"].list.length + 1).toString(),
                text: data.get('title'),
                desc: data.get('description')
            }
        )
        handleClickClose();
    }

    const initialColumns = {
        "To Do": {
            id: "To Do",
            list: [
                { id: "1", text: "text1", desc: "", favorite: false, teamId: 0 },
                { id: "2", text: "text2", desc: "", favorite: false, teamId: 0 },
                { id: "3", text: "text3", desc: "", favorite: false, teamId: 0 }
            ]
        },
        "In Progress": {
            id: "In Progress",
            list: [
                { id: "4", text: "text4", desc: "", favorite: false, teamId: 0 },
                { id: "5", text: "text5", desc: "", favorite: false, teamId: 0 },
                { id: "6", text: "text6", desc: "", favorite: false, teamId: 0 }
            ]
        },
        "Done": {
            id: "Done",
            list: []
        },
        "Delete": {
            id: "Delete",
            list: []
        }
    }

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
        }
    }




        return (
            <>
                <Grid sx={{ minWidth: '100%', maxHeight: '75%' }}>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Grid container spacing={0} direction={"row"} justifyContent={"center"}>
                            {Object.values(columns).map((column) => {
                                console.log(column);
                                return (
                                    <Grid item sx={{ mx: 2, minWidth: '21%', maxWidth: '21%' }}>
                                        <Column column={column} key={column.id} />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </DragDropContext>
                </Grid>

                <Grid sx={{ display: '', mb: '3', py:'3' }} item justifyContent={"center"}>
                    <br/>
                    <br/>
                    <Button variant="contained" sx={{p:'5'}} onClick={addStory}>Add Story</Button>
                </Grid>
                <br></br>
                <Grid sx={{ display: 'flex', mb: '3' }} item justifyContent={"center"}>
                    <Button variant="outlined" color="error" onClick={handleDeleteOpen}>Delete</Button>
                </Grid>
                <Grid sx={{ display: 'flex', mb: '3' }} item justifyContent={"center"}>
                </Grid>
                <Dialog fullWidth maxWidth="md" open={open} onClose={handleClickClose}>
                    <DialogContent>
                        <Box container component="form" noValidate onSubmit={submitStory}>
                            <Typography variant="h5">Add a User Story</Typography>
                            <FormControl sx={{ m: 1, width: '100%' }} justify="center" align="left">
                                <Grid item>
                                    <TextField label="Title" id="title" name='title' sx={{ my: 2 }}></TextField>
                                </Grid>
                                <Grid item>
                                    <TextField label="Description" id="description" name='description' multiline rows={4} fullWidth></TextField>
                                </Grid>
                                <Grid item sx={{ mt: 2 }}>
                                    <Button variant="contained" type="submit">Add Story</Button>
                                </Grid>
                            </FormControl>
                        </Box>
                    </DialogContent>
                </Dialog>
                <Dialog maxWidth="sm" open={verify} onClose={handleClickClose}>
                    <DialogContent>
                        <Typography variant="h6">Are you sure you want to delete these user stories?</Typography>
                        <br></br>
                        <Button variant="outlined" color="error" onClick={deleteStories}>Delete</Button>
                    </DialogContent>
                </Dialog>

            </>);
}