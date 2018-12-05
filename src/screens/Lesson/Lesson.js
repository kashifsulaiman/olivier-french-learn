import React, { Component } from 'react';
import '../../App.css';
import Button from '@material-ui/core/Button';
import LESSON_DATA from '../../constant/Lesson_data';
import _ from 'underscore'
import Snackbar from '@material-ui/core/Snackbar';
import SwipeableViews from 'react-swipeable-views';

const styles = {
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
    },
    slide1: {
        background: '#FEA900',
    },
    slide2: {
        background: '#B3DC4A',
    },
    slide3: {
        background: '#6AC0FF',
    },
};


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
            currentIndex: 0,
            review: false,
        }
        this.changePage = this.changePage.bind(this);
        this.startReviewing = this.startReviewing.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    componentDidMount(){

    }

    changeLanguage() {
        const { html, foreignHtml, showingFrench} = this.state
        if (showingFrench) {
            this.setState({ htmlToRendered: foreignHtml, showingFrench: false }, () => {
                const target = document.getElementsByClassName('element123');
                if(target){
                    console.log(target)
                    for(let i = 0; i< target.length; i++){
                        target[i].addEventListener('click', ()=>{
                            var aAudio = new Audio(target[i].id);
                            aAudio.play();
                        })
                    }

                }
            })
        }
        else {
            this.setState({ htmlToRendered: html, showingFrench: true }, () => {
                const target = document.getElementsByClassName('element123');
                if(target){
                    console.log(target)
                    for(let i = 0; i< target.length; i++){
                        target[i].addEventListener('click', ()=>{
                            var aAudio = new Audio(target[i].id);
                            aAudio.play();
                        })
                    }

                }
            })
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
                },() => {
                    const target = document.getElementsByClassName('element123');
                    if(target){
                        console.log(target)
                        for(let i = 0; i< target.length; i++){
                            target[i].addEventListener('click', ()=>{
                                var aAudio = new Audio(target[i].id);
                                aAudio.play();
                            })
                        }

                    }
                })
                if(isReviewing) {
                    if(LESSON_DATA[lessonNo].groupId == prevLesson.groupId) {
                        this.props.history.push(`/review/lesson/${prevLessonNo}`)
                    }
                } else {
                    this.props.history.push(`/lesson/${prevLessonNo}`)
                }
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
            },() => {
                const target = document.getElementsByClassName('element123');
                if(target){
                    console.log(target)
                    for(let i = 0; i< target.length; i++){
                        target[i].addEventListener('click', ()=>{
                            console.log(target[i].src,'imageeeeeeeeeeeeeee')
                            var aAudio = new Audio(target[i].id);
                            aAudio.play();
                        })
                    }

                }
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
                },() => {
                    const target = document.getElementsByClassName('element123');
                    if(target){
                        console.log(target)
                        for(let i = 0; i< target.length; i++){
                            target[i].addEventListener('click', ()=>{
                                var aAudio = new Audio(target[i].id);
                                aAudio.play();
                            })
                        }

                    }
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
        const { currentLesson, htmlToRendered, review, reviewLessons, vertical, horizontal, currentIndex} = this.state;
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
                            <div style = {{flexDirection: 'row', marginTop: "20%", position: 'absolute', width: "100%"}}>
                                <img src= {require('./../../assets/images/leftArrow.png')} onClick={() => this.changePage(false)}/>
                                <img src= {require('./../../assets/images/rightArrow.png')} style= {{marginLeft: '90%'}} onClick={() => this.changePage(true)}/>
                            </div>



                            <SwipeableViews
                                style = {{width: "80%", marginLeft: "10%"}}
                                enableMouseEvents
                                onSwitching={index => {
                                    if(currentIndex + 1 == index){
                                        this.changePage(true)
                                        this.setState({currentIndex: index})
                                    }
                                    if(currentIndex - 1 == index){
                                        this.changePage(false)
                                        this.setState({currentIndex: index})
                                    }
                                  }}
                            >
                                {LESSON_DATA.map((lesson) => {
                                    return(
                                        lesson.pages.map((page) => {
                                            return(
                                                <div dangerouslySetInnerHTML={{ __html: htmlToRendered }} style = {{width: "80%", marginLeft: "10%"}}/>
                                            )
                                            console.log(page,'ooooooooooooooooooooooooooooooooooo')
                                        })
                                    )
                                })}
                            </SwipeableViews>

                            <br /><br /><br /><br />

                        </div>


                    </div>}
            </div>
        );
    }
}

export default Lesson;
