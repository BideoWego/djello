import React, { Component } from 'react';
import { Input } from 'reactstrap';

class EditableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      isEditing: false
    };
  }

  onFocus = e => {
    this.setState({ isEditing: true });
  }

  onBlur = e => {
    this.setState({ isEditing: false });
  }

  onChangeText = e => {
    this.setState({ value: e.target.value });
  }

  onKeyPress = e => {
    if (e.key === 'Enter') {
      this.setState({
        value: e.target.value,
        isEditing: false
      });
    }
  }

  render() {
    return (
      <span className="EditableContainer" onClick={this.onFocus}>
        {this.state.isEditing ? (
          <Input
            autoFocus
            type={this.props.type ? this.props.type : 'text'}
            value={this.state.value}
            onChange={this.onChangeText}
            onKeyPress={this.onKeyPress}
            onBlur={this.onBlur} />
        ) : this.props.children ? this.props.children : this.props.value }
      </span>
    );
  }
}

export default EditableContainer;
