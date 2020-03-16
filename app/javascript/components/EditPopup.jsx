import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { fetch } from 'components/Fetch';
import FormInput from 'components/FormInput';
import ModalWindow from "components/ModalWindow"

export default class EditPopup extends React.Component {
  state = {
    task: {
      id: null,
      name: '',
      description: '',
      state: null,
      author: {
        id: null,
        first_name: null,
        last_name: null,
        email: null
      },
      assignee: {
        id: null,
        first_name: null,
        last_name:  null,
        email: null
      }
    },
    isLoading: true,
  }

  loadCard = (cardId) => {
    this.setState({ isLoading: true });
    fetch('GET', window.Routes.api_v1_task_path(cardId)).then(({data}) => {
      this.setState({ task: data});
      this.setState({ isLoading: false });
    });
  }

  componentDidMount () {
    this.loadCard(this.props.cardId);
  }

  handleNameChange = (e) => {
    this.setState({ task: { ...this.state.task, name: e.target.value }});
  }

  handleDecriptionChange = (e) => {
    this.setState({ task: { ...this.state.task, description: e.target.value }});
  }

  handleCardEdit = () => {
    fetch('PUT', window.Routes.api_v1_task_path(this.props.cardId), {
      name: this.state.task.name,
      description: this.state.task.description,
      author_id: this.state.task.author.id,
      state: this.state.task.state
    }).then( response => {
      if (response.status == 200) {
        this.props.onChange(this.state.task.state);
      }
      else {
        alert(`Update failed! ${response.status} - ${response.statusText}`);
      }
    });
  }

  handleCardDelete = () => {
    fetch('DELETE', window.Routes.api_v1_task_path(this.props.cardId))
      .then( response => {
        if (response.status == 200) {
          this.props.onChange(this.state.task.state);
        }
        else {
          alert(`DELETE failed! ${response.status} - ${response.statusText}`);
        }
      });
  }

  render () {
    if (this.state.isLoading) {
      return (
        <ModalWindow show={this.props.show} onHide={this.props.onClose} title="Info">
           <Modal.Body>
            Your task is loading. Please be patient.
          </Modal.Body>
           <Modal.Footer>
            <Button onClick={this.props.onClose}>Close</Button>
          </Modal.Footer>
        </ModalWindow>
      )
    }
    return (
      <div>
        <ModalWindow show={this.props.show} onHide={this.props.onClose} title={`Task # ${this.state.task.id} [${this.state.task.state}]`}>
          <Modal.Body>
            <form>
              <FormInput
                controlName="formTaskName"
                type="text"
                title="Task name:"
                value={this.state.task.name}
                placeholder='Set the name for the task'
                onChange={this.handleNameChange}
              />

              <FormInput
                controlName="formDescriptionName"
                type="textarea"
                title="Task description:"
                value={this.state.task.description}
                placeholder='Set the description for the task'
                onChange={this.handleDecriptionChange}
              />
            </form>
            Author: {this.state.task.author.first_name} {this.state.task.author.last_name}
          </Modal.Body>

          <Modal.Footer>
            <Button bsstyle="danger" onClick={this.handleCardDelete}>Delete</Button>
            <Button onClick={this.props.onClose}>Close</Button>
            <Button bsstyle="primary" onClick={this.handleCardEdit}>Save changes</Button>
          </Modal.Footer>
        </ModalWindow>
      </div>
    );
  }
}
