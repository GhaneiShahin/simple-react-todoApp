import React, { Component } from 'react';

import {Modal, Button, FormControl} from 'react-bootstrap';

class Todo extends Component {
      state = {
            showEdit: false
      }

      handleShow = () => {
            this.setState({showEdit: !this.state.showEdit});
      }
      render() {
            const {showEdit} = this.state;
            const {todos, deleted, edited} = this.props;
            const btnIcon = showEdit ? "fa fa-save" : "fa fa-edit";
            return (
                  <Modal.Dialog>
                        <Modal.Header className="d-flex justify-content-center">
                              <Modal.Title>
                                    {todos}
                              </Modal.Title>
                        </Modal.Header>
                        <Modal.Footer className="d-flex justify-content-center">
                              <Button className={`${btnIcon}`} onClick={this.handleShow}/>
                              {showEdit ?
                                    <FormControl type="text"
                                          className="w-50"
                                          placeholder={todos}
                                          onChange={edited}/>
                              : null
                              }
                              <Button variant="danger"
                                    className="fa fa-trash"
                                    onClick={deleted} />
                        </Modal.Footer>

                  </Modal.Dialog>
            );
      }
}

export default Todo;