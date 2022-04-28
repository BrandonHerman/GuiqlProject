import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { IconButton } from '@mui/material';
import DeleteIcon from "@material-ui/icons/Delete";
import { Draggable } from "react-beautiful-dnd";
import { Card } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useState, useEffect } from 'react';

const ListItemCustom = ({ itemObject, index }) => {
  const [clicked, setClicked] = useState(false);

  const handleIconClick = () => {
    setClicked(!clicked);
  }
  return (
      <Draggable draggableId={itemObject.id} key={itemObject.id} index={index}>
      {(provided) => (
        <Card sx={{my:1.3, mx:1}}>
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
            <IconButton
              edge="end"
              aria-label="comments"
              question-uid={itemObject.id}
              sx={{ borderRadius: 0, color: 'blue', maxWidth:'50%', maxHeight:'50%'}}
              onClick={handleIconClick}
            >
              {clicked ? <StarIcon /> : <StarBorderIcon />}
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        </Card>
      )}
    </Draggable>
  );
};

export default ListItemCustom;