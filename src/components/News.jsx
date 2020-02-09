import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {Title: '', Description: '', AmountRequired: '', Deadline: ''};


        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescripChange = this.handleDescripChange.bind(this);
        this.handleAmtChange = this.handleAmtChange.bind(this);
        this.handleDeadChange = this.handleDeadChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleTitleChange(event){
        this.setState({Title: event.target.value});
      }

      handleDescripChange(event){
        this.setState({Description : event.target.value});
      }

      handleAmtChange(event){
              this.setState({AmountRequired : event.target.value});
       }
        handleDeadChange(event){
                this.setState({Deadline : event.target.value});
        }

    handleSubmit(event){

    }




  render() {
    return (
      <div>
        <Image src="assets/mountain-man.jpg" className="header-image" />

        <form onSubmit={this.handleSubmit}>
                      <label>
                        Title:
                        <input type="text" value={this.state.Title} onChange={this.handleTitleChange} />
                      </label>
                      <label>
                         Description:
                         <input type="textarea" value={this.state.Description} onChange={this.handleDescripChange} />
                      </label>
                      <label>
                      Amount Required:
                      <input type="number" value={this.state.AmountRequired} onChange={this.handleAmtChange} />
                      </label>
                      <label>
                      Deadline:
                       <input type="date" value={this.state.Deadline} onChange={this.handleDeadChange} />
                       </label>
                      <input type="submit" value="Submit" />
                    </form>
      </div>
    )
  }
}
