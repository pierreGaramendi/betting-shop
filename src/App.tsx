import './App.css';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import EventList from './components/EventList/EventList';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from "react-redux";
import { deleteTask } from './redux/TaskSlice'
import { useDispatch } from "react-redux";

function App() {

  const selections = useSelector((state: any) => {
    return state.tasks;
  });

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const dispatch = useDispatch();
  const removeTask = (index: any) => {
    dispatch(
      deleteTask(index)
    )
}

const toggleDrawer = (anchor: any, open: any) => (event: any) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

const list = () => (
  <Box
    sx={{ width: 250 }}
    role="presentation"
  >
    <List>
      {selections.map((item: any, index: any) => (
        <div key={index}>
          <ListItem>
            <ListItemText primary={item.name} />
            <ListItemText primary={item.price} />
            <IconButton aria-label="delete" onClick={() => { removeTask(index); }}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  </Box>
);


return (
  <div className="App">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    <EventList />
    <Drawer
      anchor={'left'}
      open={state['left']}
      onClose={toggleDrawer('left', false)}
    >
      {list()}
    </Drawer>
  </div>
);
}

export default App;
