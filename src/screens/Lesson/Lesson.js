import React, { Component } from 'react';
import '../../App.css';
import Button from '@material-ui/core/Button';
import LESSON_DATA from '../../constant/Lesson_data';

class Lesson extends Component {

    constructor(props) {
        super();

        this.state = {
            currentLesson: LESSON_DATA[props.match.params.id],
            title: LESSON_DATA[props.match.params.id].pages[0].title.text,
            paragraph: LESSON_DATA[props.match.params.id].pages[0].paragraph.text,
            pageNo: 0
        }
    }

    render() {
        const { currentLesson, pageNo, title, paragraph } = this.state;
        const page = currentLesson.pages[pageNo];

        return (
            currentLesson &&
            <div>
                <h2>Page { page.id }</h2>
                <h3> { title } </h3>
                <p> { paragraph } </p>
                <Button color="primary">Back</Button>
                <Button color="primary">Next</Button>
            </div>
        );
    }
}

export default Lesson;
