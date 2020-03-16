import React from "react";
import {
  FormGroup,
  FormLabel,
  FormControl
} from "react-bootstrap";

export default class FormInput extends React.Component {
  renderInputControl() {
    return(
      <FormControl
        type={this.props.type}
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    )
  }

  render() {
    return(
      <FormGroup controlId={this.props.controlName}>
        <FormLabel>{this.props.title}</FormLabel>
        {this.renderInputControl()}
      </FormGroup>
    )
  }
}
