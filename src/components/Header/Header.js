import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
    constructor() {
        super();

        this.state = {
            isDrawerOpen: false
        }
    }

    changeLesson(lessonNo){
        this.props.history.push("/", { lessonNo });
        this.setState({isDrawerOpen: false})
    }

    render() {
        return (
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon onClick={() => this.setState({ isDrawerOpen: true })} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    open={this.state.isDrawerOpen}
                    onClose={() => this.setState({ isDrawerOpen: false })}
                    onOpen={() => this.setState({ isDrawerOpen: true })}
                >
                    <List style={{ width: 250 }} component="nav">
                        <ListItem>Lessons</ListItem>
                        <Divider />
                        <ListItem onClick={this.changeLesson.bind(this,0)} button>Lesson 1</ListItem>
                        <ListItem onClick={this.changeLesson.bind(this,1)} button>Lesson 2</ListItem>
                        <ListItem onClick={this.changeLesson.bind(this,2)} button>Lesson 3</ListItem>
                        <ListItem onClick={this.changeLesson.bind(this,3)} button>Lesson 4</ListItem>
                    </List>
                </Drawer>
            </div>
        )
    }
}

export default withRouter(Header);