import React from 'react';
import Reboot from 'material-ui/Reboot';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import List, { ListItem, ListItemText } from 'material-ui/List';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './TodoApp.css';

export default function TodoApp({ task, tasks, addTask, inputTask, redirectToError }) {
  return (
    <div>
      <Reboot/>
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            TODO
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <Input onChange={(e) => inputTask(e.target.value)}/>
        <Button color="primary" onClick={() => addTask(task)}>add</Button>
        <List>
          <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={300}>
            {
              tasks.map(function (item, i) {
                return (
                  <ListItem key={i}>
                    <ListItemText primary={`・${item}`} />
                  </ListItem>
                );
              })
            }
          </ReactCSSTransitionGroup>
        </List>
        <Button onClick={() => redirectToError()}>Error</Button>
      </div>
    </div>
  );
}
