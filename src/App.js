import React from 'react';
import './style.css';

// Допишите код так, чтобы DatePicker был контролируемым компонентом.
// При выборе даты в input'е, текст на ним должен обновляться и показывать выбранную дату
// При нажатии на кнопку Reset date, input должен очищаться, а надпись становаиться 'Select date'
// Документация по JQuery UI
// https://jqueryui.com/datepicker
// https://api.jqueryui.com/datepicker

class DatePicker extends React.Component {
  inputRef = null;

  componentDidMount() {
    $(this.inputRef).datepicker({
      dateFormat: 'dd/mm/yy',
      onSelect: this.handleSelect,
    });
    $(this.inputRef).datepicker('setDate', this.props.value || '');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      $(this.inputRef).datepicker('setDate', this.props.value || '');
    }
  }

  handleSelect = (date) => {
    this.props.onSelect(date);
  };

  render() {
    return (
      <input
        ref={(domElement) => {
          this.inputRef = domElement;
        }}
        value={this.props.value || ''}
        onChange={(event) => this.props.onSelect(event.target.value)}
      />
    );
  }
}

export default class App extends React.Component {
  state = {
    date: '',
  };

  handleSelect = (date) => {
    this.setState({ date });
  };

  handleReset = () => {
    this.setState({ date: '' });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.date ? `Date: ${this.state.date}` : 'Select date'}
        </div>
        <div>
          <DatePicker value={this.state.date} onSelect={this.handleSelect} />
        </div>
        <div>
          <button onClick={this.handleReset}>Reset date</button>
        </div>
      </React.Fragment>
    );
  }
}
