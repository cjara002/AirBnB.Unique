import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class ContactForm extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Modal isOpen={this.props.isModal}>
          <ModalHeader
            // toggle={
            //   this.props.isEditing
            //     ? this.props.toggle
            //     : this.props.toggleAddQuestion
            // }
          >
            {/* <div> {this.props.isEditing ? "Update Task" : "Add New Task"}</div> */}
            <div> New Contact </div>
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>First Name</Label>
                <Input
                  type="text"
                  name="task"
                  value={this.state.firstName}
                  onChange={this.changeHandler}
                ></Input>
              </FormGroup>

              <FormGroup>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  name="task"
                  value={this.state.firstName}
                  onChange={this.changeHandler}
                ></Input>
              </FormGroup>

              {/* <FormGroup>
                <Label>Priority</Label>
                <Input
                  type="select"
                  name="priority"
                  value={this.state.priority}
                  onChange={this.changeHandler}
                >
                  <option>----</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </Input>
              </FormGroup> */}
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>
              {/* {this.props.isEditing ? "Update" : "Add"} */}
            Add
            </Button>{" "}
            <Button
              color="secondary"
              // onClick={
              //   this.props.isEditing
              //     ? this.props.toggle
              //     : this.props.toggleAddQuestion
              // }
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ContactForm;
