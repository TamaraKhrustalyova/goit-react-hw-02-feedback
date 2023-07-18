import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './App.styled';

export class App extends Component {

    state = {
      good: 0,
      neutral: 0,
      bad: 0
    };

    leaveFeedback = e => {
      this.setState({ [e]: this.state[e] + 1 });
    };

    countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

    countPositiveFeedbackPercentage = total => {
      return `${Math.round((this.state.good / total) * 100)}%`
    };

 render() {
  const { good, neutral, bad } = this.state;
  const total = this.countTotalFeedback(this.state);
  const positive = this.countPositiveFeedbackPercentage(total);

  return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
          <Statistics
            Good={good}
            Neutral={neutral}
            Bad={bad}
            Total={total}
            PositivePercentage={positive}
          ></Statistics>
          ) : (
          <Notification>There is no feedback yet.</Notification>
          )}
        </Section>
      </>
  )
 }
};
