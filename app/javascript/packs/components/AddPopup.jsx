import React from "react";
import { Modal, Button } from "react-bootstrap";
import { fetch } from "./Fetch";
import FormIput from "./FormInput";
import ModalWindow from "./ModalWindow"

export default class AddPopup extends React.Component {
  state = {
    name: "",
    description: "",
    state: "new_task",
    assignee: {
      id: null,
      first_name: null,
      last_name: null,
      email: null
    }
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleDecriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  handleCardAdd = () => {
    fetch("POST", window.Routes.api_v1_tasks_path(), {
      task: {
        name: this.state.name,
        description: this.state.description,
        assignee_id: this.state.assignee.id
      }
    }).then(response => {
      if (response.status == 201) {
        this.props.onChange(this.state.state);
      } else {
        alert(`${response.status} - ${response.statusText}`);
      }
    });
  };

  render() {
    return (
      <div>
        <ModalWindow show={this.props.show} onHide={this.props.onClose} title="New task">
          <Modal.Body>
            <form>
              <FormIput
                controlName="formTaskName"
                type="text"
                title="Task name:"
                value={this.state.name}
                placeholder="Set the name for the task"
                onChange={this.handleNameChange}
              />

              <FormIput
                controlName="formDescripptionName"
                type="textarea"
                title="Task description:"
                value={this.state.description}
                placeholder="Set the description for the task"
                onChange={this.handleDecriptionChange}
              />
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.onClose}>Close</Button>
            <Button bsstyle="primary" onClick={this.handleCardAdd}>
              Save changes
            </Button>
          </Modal.Footer>
        </ModalWindow>
      </div>
    );
  }
}
