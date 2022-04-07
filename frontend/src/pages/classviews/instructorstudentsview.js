import * as React from 'react';
import { withStyles } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//import '.instructorstudentsview.css';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

//import InboxIcon from '@mui/icons-material/MoveToInbox';
//import MailIcon from '@mui/icons-material/Mail';

import Skeleton from '@mui/material/Skeleton';

const drawerWidth = 240;

function ViewStudents() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Students
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {['Students', 'Teams', 'Assignments', 'Files'].map((text, index) => (
                        <ListItem button key={text}>

                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Discussions', 'Messages', 'Zoom'].map((text, index) => (
                        <ListItem button key={text}>

                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><Skeleton variant="circular" width={40} height={40}/></TableCell>
                                <TableCell>{'Josiah'}</TableCell>
                                <TableCell>{'Castillo'}</TableCell>
                                <TableCell>{'jcastillo@mailstuff.com'}</TableCell>
                                <Checkbox />
                            </TableRow>
                            <TableRow>
                                <TableCell><Skeleton variant="circular" width={40} height={40}/></TableCell>
                                <TableCell>{'Brandon'}</TableCell>
                                <TableCell>{'Herman'}</TableCell>
                                <TableCell>{'bherman@mailstuff.com'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Skeleton variant="circular" width={40} height={40}/></TableCell>
                                <TableCell>{'Grant'}</TableCell>
                                <TableCell>{'Stoehr'}</TableCell>
                                <TableCell>{'gstoehro@mailstuff.com'}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Skeleton variant="circular" width={40} height={40}/></TableCell>
                                <TableCell>{'Ariyan'}</TableCell>
                                <TableCell>{'----'}</TableCell>
                                <TableCell>{'ariyan@mailstuff.com'}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </Box>
        </Box>


    );
}

export default ViewStudents;
