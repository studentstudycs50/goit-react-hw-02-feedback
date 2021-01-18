import React, {Component} from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import Section from '../Section/Section'

class App extends Component {
    state = {
  good: 0,
  neutral: 0,
  bad: 0
    }
    onHandleClick = (event) => {
        const {name} = event.target;
        this.setState((prevState)=>({[name]: prevState[name] + 1}))
        
    }
    totalFeedbackCounter = () => {
        return this.state.good + this.state.neutral +this.state.bad
    }

    countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
        return Math.round((good / this.totalFeedbackCounter()) * 100) || 0;
        
    };
    
    options = Object.keys(this.state);

    render() {
        const { good, neutral, bad } = this.state;
        
        return (
            <div>
                <h2>Please leave feedback</h2>
                <FeedbackOptions
                    options={this.options}
                    onHandleClick={this.onHandleClick} />
                <Section title="Statistics"> 
            {this.totalFeedbackCounter() ? (
                    <Statistics
                title="Statistics"
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.totalFeedbackCounter()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
                ></Statistics>
          ) : (
            <Notification message="No feedback given" />
                        )}
                 </Section> 
                
            </div>  
        );
    }
}

export default App;


