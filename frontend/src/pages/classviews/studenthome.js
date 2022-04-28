import * as React from 'react';

import Box from '@mui/material/Box';

import '../signinviews/instructorsignin.css'

import { Repository } from '../../api/repository';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;



var repository = new Repository();

export default function StudentHome() {
  // const [myTeam, setStudents] = React.useState([{ first_name: "Josiah", last_name: "Castillo", comments: "fdasjlkdasnfrajkdfn" },
  // { first_name: "Brandon", last_name: "Herman", comments: "" },
  // { first_name: "Ariyan", last_name: "Kumaraswamy", comments: "" },
  // { first_name: "Grant", last_name: "Stoehr", comments: "" },
  // { first_name: "More", last_name: "People", comments: "" },
  // { first_name: "ImSo", last_name: "Stupid", comments: "" },]
  // );


  const [value, setValue] = React.useState(0);


  const ratingArray = [];
  for (let i = 1; i <= 5; i++) {
    ratingArray.push(i);
  }
  

  const [peerReview, showPeerReview] = React.useState(false);
  const [peerReviewLink, showPeerReviewLink] = React.useState('https://www.google.com/');
  //API CALL BELOW TO GRAB THE SHOW
  //showPeerReview(true);

  return (
      // <Grid
      //   container
      //   sx={{ px: 4, py: 2 }}
      //   direction="row"
      //   justifyContent="space-evenly"
      //   alignItems="center"
      // >


       

          <Box component="main" sx={{ minWidth: '90%', p: 3, justifyItems: 'left' }}>
            <h1>Peer Reviews</h1>
            {peerReview === false &&
              <>
                <h2>Your professor has not made this link available to you yet.</h2>
              </>
            }
            {peerReview === true &&
              <>
                <p>Please click the link below to submit a peer review for your project.</p>
                <p>Be the first to add a review!</p>
                <a href={peerReviewLink}>Click here to submit your peer review!</a>
              </>
            }
          </Box>


  );
}
