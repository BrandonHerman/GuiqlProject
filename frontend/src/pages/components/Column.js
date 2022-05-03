import React from "react";
import { Droppable } from "react-beautiful-dnd";
import RootRef from "@material-ui/core/RootRef";
import List from "@material-ui/core/List";
import ListItemCustom from "./ListItemCustom";
import Typography from "@material-ui/core/Typography";
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';

const Column = ({ column }) => {
  return (
    <div
      style={{
        backgroundColor: "LightGray",
        margin: 0,
        padding: 0,
        color: "blue",
        minWidth: '100%'
      }}
    >
    <Paper variant="elevation" elevation={8}
    sx={{  
        display:'flex', 
        flexDirection:'column',
        justifyContent:'center',
        width:'100%'}}>
      <Typography variant={"h4"}>{column.id}</Typography>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <RootRef rootRef={provided.innerRef}>
            <List>
              {column.list.map((itemObject, index) => {
                return <ListItemCustom index={index} itemObject={itemObject} />
              })}
              {provided.placeholder}
            </List>
          </RootRef>
        )}
      </Droppable>
    </Paper>
    </div>
  );
};

export default Column;
