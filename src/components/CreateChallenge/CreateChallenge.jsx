import React, { Component } from "react";
import { Button, Form, Col } from "react-bootstrap";
import DatePicker from 'react-datepicker';

export default class CreateChallenge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      challengeName: "",
      startDate: new Date(),
      endDate: new Date(),
			challengeCondition: ""
    };
  }

  validateForm() {
    return this.state.challengeName.length > 0 && this.state.challengeCondition.length > 0;
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
	}
	
	handleChangeStart(e) {
    this.setState({
      startDate: e
    });
	}
	
	handleChangeEnd(e) {
    this.setState({
      endDate: e
    });
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render() {
    return (
      <div className="create-challenge">
				<h3>Create a Challenge</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="challenge-name" controlId="challengeName">
            <Form.Label >Challenge Name</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={this.state.challengeName}
              onChange={this.handleChange.bind(this)}
              placeholder="Challenge Name"
            />
          </Form.Group>
					<Form.Row>
						<Form.Group as={Col} className="start_date" controlId="startDate">
							<Form.Label >Start Date</Form.Label>
							<div>
								<DatePicker
									className="start-datepicker"
									id="startDate"
									selected={this.state.startDate}
									selectsStart
									startDate={this.state.startDate}
									endDate={this.state.endDate}
									onChange={this.handleChangeStart.bind(this)}
									showTimeInput
									todayButton={"Today"}
									minDate={new Date()}
									dateFormat="MMMM d, yyyy h:mm aa"
								/>
							</div>
						</Form.Group>
						<Form.Group as={Col} className="end_date" controlId="endDate">
							<Form.Label >End Date</Form.Label>
							<div>
								<DatePicker
									className="end-datepicker"
									id="endDate"
									selected={this.state.endDate}
									selectsEnd
									startDate={this.state.startDate}
									endDate={this.state.endDate}
									onChange={this.handleChangeEnd.bind(this)}
									showTimeInput
									todayButton={"Today"}
									minDate={this.state.startDate}
									dateFormat="MMMM d, yyyy h:mm aa"
								/>
							</div>
						</Form.Group>
					</Form.Row>
          <Form.Group className="challenge-condition" controlId="challengeCondition">
            <Form.Label>Challenge Condition</Form.Label>
            <Form.Control
							as="textarea"
							rows="4"
              value={this.state.challengeCondition}
              onChange={this.handleChange.bind(this)}
              type="text"
              placeholder="Challenge Condition"
            />
          </Form.Group>
					<Form.Label className="lbl-note">Note: The final winner will be decided based on the score and kills</Form.Label>
					<Form.Row>
						<Col>
							<Button
								className="cancel-btn"
								variant="secondary"
								type="cancel"
							>
								Cancel
							</Button>
						</Col>
						<Col>
							<Button
								className="submit"
								disabled={!this.validateForm()}
								type="submit"
							>
								Create Challenge
							</Button>
						</Col>
					</Form.Row>
        </Form>
      </div>
    );
  }
}