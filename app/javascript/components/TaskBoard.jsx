import { hot } from 'react-hot-loader/root';
import React from 'react'
import Board from 'react-trello'
import { fetch } from "components/Fetch";
import LaneHeader from 'components/LaneHeader';
import { Button } from 'react-bootstrap';
import AddPopup from 'components/AddPopup';
import EditPopup from 'components/EditPopup';

const components = {
  LaneHeader: LaneHeader
};

const eventMap = {
  'in_development': 'develop',
  'in_qa': 'check',
  'in_code_review': 'review',
  'ready_for_release': 'prepare',
  'released': 'release',
  'archived': 'archive'
};

export class TasksBoard extends React.Component {
  state = {
    board: {
      new_task: null,
      in_development: null,
      in_qa: null,
      in_code_review: null,
      ready_for_release: null,
      released: null,
      archived: null
    },
    addPopupShow: false,
    editPopupShow: false,
    editCardId: null
  }

  generateLane(id, title) {
    const tasks = this.state[id];

    return {
      id,
      title,
      total_count: (tasks) ? tasks.meta.total_count : 'None',
      cards: (tasks) ? tasks.items.map((task) => {
        return {
          ...task,
          label: task.state,
          title: task.name
        };
      }) : []
    }
  }

  getBoard() {
    return {
      lanes: [
        this.generateLane('new_task', 'New'),
        this.generateLane('in_development', 'In Dev'),
        this.generateLane('in_qa', 'In QA'),
        this.generateLane('in_code_review', 'in CR'),
        this.generateLane('ready_for_release', 'Ready for release'),
        this.generateLane('released', 'Released'),
        this.generateLane('archived', 'Archived'),
      ],
    };
  }

  loadLines() {
    this.loadLine('new_task');
    this.loadLine('in_development');
    this.loadLine('in_qa');
    this.loadLine('in_code_review');
    this.loadLine('ready_for_release');
    this.loadLine('released');
    this.loadLine('archived');
  }

  componentDidMount() {
    this.loadLines();
  }

  loadLine(state, page = 1) {
    this.fetchLine(state, page).then(( response ) => {
      this.setState({
        [state]: response.data
      });
    });
  }

  fetchLine(state, page = 1) {
    return fetch('GET', window.Routes.api_v1_tasks_path({ q: { state_eq: state }, page: page, per_page: 10 }))
  }

  onLaneScroll = (requestedPage, state) => {
    return this.fetchLine(state, requestedPage).then(({items}) => {
      return items.map((task) => {
        return {
          ...task,
          label: task.state,
          title: task.name
        };
      });
    })
  }

  handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
   fetch('PUT', window.Routes.api_v1_task_path(cardId), { task: { state_event: eventMap[targetLaneId] } })
    .then(() => {
      this.loadLine(sourceLaneId);
      this.loadLine(targetLaneId);
    })
    .catch((e) => {
      this.loadLine(sourceLaneId);
      this.loadLine(targetLaneId);
    });
  }

  handleAddShow = () => {
    this.setState({ addPopupShow: true });
  }

  handleChangeClose = (edited) => {
    this.handleClose();
    this.loadLine(edited);
  }

  handleClose = () => {
    this.setState({ editPopupShow: false, editCardId: null, addPopupShow: false });
  }

  onCardClick = (cardId) => {
    this.setState({editCardId: cardId});
    this.handleEditShow();
  }

  handleEditShow = () => {
    this.setState({ editPopupShow: true });
  }

  renderEditPopup() {
    if (!this.state.editPopupShow) {
      return null;
    }

    return (
      <EditPopup
        show = {this.state.editPopupShow}
        onClose={this.handleClose}
        onChange={this.handleChangeClose}
        cardId ={this.state.editCardId}
        key = {this.state.editCardId}
      />
    )
  }

  renderAddPopup() {
    if (!this.state.addPopupShow) {
      return null;
    }

    return (
      <AddPopup
        show = {this.state.addPopupShow}
        onClose={this.handleClose}
        onChange={this.handleChangeClose}
      />
    )
  }

  render() {
    return (
      <div>
        <h1>Your tasks:</h1>
        <Button bsstyle="primary" onClick={this.handleAddShow}>Create new task</Button>
        {this.renderEditPopup()}
        {this.renderAddPopup()}
        <Board
          components={components}
          onLaneScroll={this.onLaneScroll}
          cardsMeta={this.state}
          draggable
          laneDraggable={false}
          handleDragEnd={this.handleDragEnd}
          onCardClick={this.onCardClick}
          data={this.getBoard()}
        />
      </div>
    );
  }
}

export default hot(TasksBoard);
