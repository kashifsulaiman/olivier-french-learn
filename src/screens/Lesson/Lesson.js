import React, { Component } from 'react';
import '../../App.css';
import Button from '@material-ui/core/Button';
import LESSON_DATA from '../../constant/Lesson_data';
import _ from 'underscore'
import Snackbar from '@material-ui/core/Snackbar';

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
            pageNo: 0,
            review: false,
        }

        this.startReviewing = this.startReviewing.bind(this);
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
        let isReviewing = this.props.match.path.includes('review');

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
            if ((lessonNo || next) && LESSON_DATA[lessonNo + 1]) {
                if(LESSON_DATA[lessonNo].groupId != LESSON_DATA[lessonNo + 1].groupId) {
                    if(!isReviewing) {
                        const lessons = _.pluck(_.where(LESSON_DATA, {groupId: LESSON_DATA[lessonNo].groupId}), 'id')

                        this.setState({review: true, reviewLessons: lessons});
                        return
                    } else {
                        isReviewing = false;
                        this.props.history.push(`/`, {lessonNo: lessonNo + 1})
                        return;
                    }
                } else {
                    lessonNo = lessonNo + 1;
                }
                this.setState({
                    showingFrench: true,
                    lessonNo,
                    currentLesson: LESSON_DATA[lessonNo],
                    html: LESSON_DATA[lessonNo].pages[0].html,
                    htmlToRendered: LESSON_DATA[lessonNo].pages[0].html,
                    foreignHtml: LESSON_DATA[lessonNo].pages[0].foreignHtml,
                    pageNo: 0
                })

                if(isReviewing) {
                    this.props.history.push(`/review/lesson/${lessonNo}`)
                } else {
                    this.props.history.push(`/lesson/${lessonNo}`)
                }
            } else {
                this.props.history.push(`/`, {lessonNo: 0})
            }
        }
    }

    startReviewing() {
        const {reviewLessons} = this.state;
        const lessonNo = reviewLessons[0] - 1;

        this.setState({
            review: false,
            showingFrench: true,
            lessonNo: lessonNo,
            currentLesson: LESSON_DATA[lessonNo],
            html: LESSON_DATA[lessonNo].pages[0].html,
            htmlToRendered: LESSON_DATA[lessonNo].pages[0].html,
            foreignHtml: LESSON_DATA[lessonNo].pages[0].foreignHtml,
            pageNo: 0}
        )
        this.props.history.push(`/review/lesson/${lessonNo}`)
    }

    render() {
        const { currentLesson, htmlToRendered, review, reviewLessons, vertical, horizontal } = this.state;
        const isReviewing = this.props.match.path.includes('review');

        return (
            currentLesson &&
            <div>
                {review ?
                    <div>
                        <Button variant="contained"  color="secondary" onClick={this.startReviewing}>Start Reviewing Lesson {reviewLessons.join(', ')}</Button>
                    </div> :
                    <div>
                        <Snackbar
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={isReviewing}
                            ContentProps={{'aria-describedby': 'message-id'}}
                            message={<span id="message-id">Reviewing</span>}
                        />
                        <div onDoubleClick={this.changeLanguage}>
                            <h1>Lesson No. {currentLesson.id}</h1>
                            <div dangerouslySetInnerHTML={{ __html: htmlToRendered }} />
                            <br /><br /><br /><br />
                        </div>
                        <div style={{position: 'fixed', bottom: 24, width: '100%', display: 'flex', justifyContent: 'space-around'}}>
                            <Button variant="contained"  color="primary" onClick={this.changePage.bind(this, false)}>Back</Button>
                            <Button variant="contained"  color="primary" onClick={this.changePage.bind(this, true)}>Next</Button>
                        </div>
                    </div>}
            </div>
        );
    }
}

export default Lesson;
