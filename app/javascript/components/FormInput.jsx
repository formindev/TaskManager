import React from "react";
import {
  FormGroup,
  FormLabel,
  FormControl
} from "react-bootstrap";
import UserSelect from "./UserSelect";

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
  
  renderSelectControl() {
    return(
      <UserSelect
        id={this.props.selectId}
        isDisabled={this.props.isDisabled}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }

  renderSelectControl() {
    return(
      <UserSelect
        id={this.props.selectId}
        isDisabled={this.props.isDisabled}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }

  render() {
    const isSelect = this.props.isSelect ? this.props.isSelect : false;
    return(
      <FormGroup controlId={this.props.controlName}>
        <FormLabel>{this.props.title}</FormLabel>
          {isSelect ? (
            this.renderSelectControl()
          ) : (
            this.renderInputControl()
          )}
      </FormGroup>
    )
  }
}
