import React, { Component } from 'react';
import '../../App.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LESSON_DATA  from '../../constant/Lesson_data';

class Home extends Component {

    constructor(props) {
        super();

        this.state = {
            lessonNo: 0,
        }

        this.navigateToLesson = this.navigateToLesson.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            lessonNo: nextProps.location.state ? nextProps.location.state.lessonNo : 0
        }
    }

    navigateToLesson(){
        const { lessonNo } = this.state
        this.props.history.push(`/lesson/${lessonNo}`)
    }

    render() {
        const { lessonNo } = this.state;

        return (
            <div>
                <Card className='card' style={{ textAlign: 'left' }}>
                    <CardContent>
                        <Typography className='title' color="textSecondary" gutterBottom>
                            Word of the Day
                             </Typography>
                        <Typography variant="h5" component="h2">
                            olivier-french-learn
                             </Typography>
                        <Typography className='pos' color="textSecondary">
                            adjective
                             </Typography>
                        <Typography variant="h6">
                            {LESSON_DATA[lessonNo].lesson}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={this.navigateToLesson}>Go to Lesson</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default Home;
