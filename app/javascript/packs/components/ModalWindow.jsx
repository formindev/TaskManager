import React from "react";
import { Modal } from "react-bootstrap";

export default class ModalWindow extends React.Component {
render() {
    return (
      <div>
        <Modal animation={false} show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          {this.props.children}
        </Modal>
      </div>
    );
  }
}