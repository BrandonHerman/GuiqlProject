import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Draggable } from "react-beautiful-dnd";
import Card from "@material-ui/core/Card";

const ListItemCustom = ({ itemObject, index }) => {
  return (
    <Draggable draggableId={itemObject.id} key={itemObject.id} index={index}>
      {(provided) => (
        <ListItem
          key={itemObject.id}
          role={undefined}
          dense
          button
          ContainerComponent="li"
          ContainerProps={{ ref: provided.innerRef }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ListItemText
            sx={{ fontFamily: "Quicksand", color: 'blue'  }}
            primary={`${itemObject.text}`}
          />
          <ListItemSecondaryAction>
            {/* <IconButton
              edge="end"
              aria-label="comments"
              question-uid={itemObject.id}
              sx={{ borderRadius: 0, color: 'blue' }}
            >
            </IconButton> */}
          </ListItemSecondaryAction>
        </ListItem>
      )}
    </Draggable>
  );
};

export default ListItemCustom;