import React, { Component } from 'react';
import '../../App.css';
import Button from '@material-ui/core/Button';
import LESSON_DATA from '../../constant/Lesson_data';

class Lesson extends Component {
    constructor(props) {
        super();

        const lessonNo = parseInt(props.match.params.id);

        this.state = {
            showingFrench: true,
            lessonNo,
            currentLesson: LESSON_DATA[lessonNo],
            html: LESSON_DATA[lessonNo].pages[0].html,
            htmlToRendered: LESSON_DATA[lessonNo].pages[0].html,
            foreignHtml: LESSON_DATA[lessonNo].pages[0].foreignHtml,
            pageNo: 0
        }

        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage() {
        const { html, foreignHtml, showingFrench } = this.state
        if (showingFrench) {
            this.setState({ htmlToRendered: foreignHtml, showingFrench: false })
        }
        else {
            this.setState({ htmlToRendered: html, showingFrench: true })
        }
    }

    changePage(next) {
        let { lessonNo, pageNo } = this.state;

        // if back button pressed and should jump to previous lesson final page
        if (!next && pageNo === 0) {
            const prevLessonNo = lessonNo - 1;
            const prevLesson = LESSON_DATA[prevLessonNo];
            if(prevLesson){
                pageNo = prevLesson.pages.length - 1;
                this.setState({
                    showingFrench: true,
                    pageNo,
                    currentLesson: prevLesson,
                    html: prevLesson.pages[pageNo].html,
                    htmlToRendered: prevLesson.pages[pageNo].html,
                    foreignHtml: prevLesson.pages[pageNo].foreignHtml,
                    lessonNo: prevLessonNo
                })
                this.props.history.push(`/lesson/${prevLessonNo}`)
            }
            return;
        }

        const newPageNo = pageNo + (next ? 1 : -1)
        const lesson = LESSON_DATA[lessonNo].pages[newPageNo];

        if (lesson) {
            this.setState({
                html: lesson.html,
                htmlToRendered: lesson.html,
                foreignHtml: lesson.foreignHtml,
                pageNo: newPageNo
            })
        }

        // if pages are over and should jump to next lesson
        else {
            if (lessonNo || next) {
                lessonNo = lessonNo + 1;
                this.setState({
                    showingFrench: true,
                    lessonNo,
                    currentLesson: LESSON_DATA[lessonNo],
                    html: LESSON_DATA[lessonNo].pages[0].html,
                    htmlToRendered: LESSON_DATA[lessonNo].pages[0].html,
                    foreignHtml: LESSON_DATA[lessonNo].pages[0].foreignHtml,
                    pageNo: 0
                })
                this.props.history.push(`/lesson/${lessonNo}`)
            }
        }
    }

    render() {
        const { currentLesson, htmlToRendered } = this.state;
        return (
            currentLesson &&
            <div>
                <div onDoubleClick={this.changeLanguage}>
                    <div dangerouslySetInnerHTML={{ __html: htmlToRendered }} />
                </div>
                <Button color="primary" onClick={this.changePage.bind(this, false)}>Back</Button>
                <Button color="primary" onClick={this.changePage.bind(this, true)}>Next</Button>
            </div>
        );
    }
}

export default Lesson;
