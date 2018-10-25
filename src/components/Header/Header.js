import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import { withRouter } from "react-router-dom";
import LESSON_DATA  from '../../constant/Lesson_data';

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
                        {LESSON_DATA.map((lesson, index) => {
                            return <ListItem onClick={this.changeLesson.bind(this, index)} button>Lesson {lesson.id}</ListItem>
                        })}
                    </List>
                </Drawer>
            </div>
        )
    }
}

export default withRouter(Header);