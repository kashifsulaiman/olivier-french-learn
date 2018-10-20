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

    changePage(next) {
        const { pageNo } = this.state;
        const newPageNo = pageNo + (next ? 1 : -1)
        const lessonNo = +this.props.match.params.id;
        const lesson = LESSON_DATA[lessonNo].pages[newPageNo];

        if(lesson) {
            this.setState({
                title: lesson.title.text,
                paragraph: lesson.paragraph.text,
                pageNo: newPageNo
            })
        } else {
            if(lessonNo || next) {
                this.props.history.push(`/lesson/${lessonNo + (next ? 1 : -1)}`)
            }
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
                <Button onClick={ this.changePage.bind(this, false) } color="primary">Back</Button>
                <Button onClick={ this.changePage.bind(this, true) } color="primary">Next</Button>
            </div>
        );
    }
}

export default Lesson;
