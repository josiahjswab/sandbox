import React from 'react';
import moment from 'moment';

export default class Moment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '',
      month: '',
      day: '',
      hour: '',
      minute: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }
  changeHandler(obj) {
    this.setState({ [obj.target.name]: obj.target.value })
  }

  clickHandler() {
    
    let dateSelection = `${this.state.year}-${this.state.month}-${this.state.day}T${hour}:${minute}.999Z`
    console.log(dateSelection)
  }

  componentDidMount() {
    let date = moment()
    let year = date.format('Y')
    let month = date.format('MM')
    let day = date.format('DD')
    this.setState({year: year, month: month, day: day})
  }

  render () {
    // console.log(moment().format().replace(/[-,:,T]/ig,'').substring(0,14) + 0)
    let str = '2020-02-01T00:32:30-08:00';
    // console.log(parseInt(str.replace(/[-,:,T]/ig,'').substring(0,14)) + 3) // can add to
    // console.log(moment().format().replace(/[-,:,a-zA-Z]/ig,'').substring(0,14)) // cannot add to it concatinates
    let time = moment().format().substring(0,16)
    let pastTime = moment().format()
    
    let hours = ['06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    let hourOptions = hours.map((i, index) =>
    <option key={index} value={i}>{i}</option>
    );
    let minute = ['05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']
    let minuteOptions = minute.map((i, index) => 
    <option key={index} value={i}>{i}</option>
    );
    
    return(
      <div>

        <section className="some-component flex-center space-evenly block-standard">
          <p>{time}</p>
          <p>{pastTime}</p>
        </section>
        <section className='some-component flex-center block-standard'>


          <div>
            <p>Year</p>
            <input name='year' onChange={this.changeHandler} value={this.state.year} type='number'></input>
          </div>
          <div>
            <p>Month</p>
            <input name='month' onChange={this.changeHandler} value={this.state.month} type='number'></input>
          </div>
          <div>
            <p>Day</p>
            <input name='day' onChange={this.changeHandler} value={this.state.day} type='number'></input>
          </div>
          <div>
            <p>Hours</p>
            <select name='hour' value={this.state.hour} onChange={this.changeHandler}>
              {hourOptions}
            </select>
          </div>
          <div>
            <p>Minute</p>
            <select name='minute' value={this.state.minute} onChange={this.changeHandler}>
              {minuteOptions}
            </select>
          </div>
          <div>
            <p>Button</p>
            <button onClick={this.clickHandler}>Submit</button>
          </div>


        </section>
      </div>
    );
  }
}
