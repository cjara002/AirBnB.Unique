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
            toggle={
              this.props.isEditing
                ? this.props.toggle
                : this.props.toggleAddCleaner
            }
          >
            <div> {this.props.isEditing ? "Update Cleaner" : "Add New Cleaner"} </div>
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.changeHandler}
                ></Input>
              </FormGroup>

              {/* <FormGroup>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.changeHandler}
                ></Input>
              </FormGroup> */}

              <FormGroup>
                <Label>Years in operation</Label>
                <Input
                  type="text"
                  name="yearsinoperation"
                  value={this.state.yearsInOperation}
                  onChange={this.changeHandler}
                ></Input>
              </FormGroup>

              <FormGroup>
                <Label>Photo of cleaner</Label>
                <Input
                  type="url"
                  name="imageUrl"
                  value={this.state.imageUrl}
                  onChange={this.changeHandler}
                ></Input>
              </FormGroup>

              <FormGroup>
                <Label>City</Label>
                <Input
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={this.changeHandler}
                ></Input>
              </FormGroup>

              <FormGroup>
                <Label>Description for your service</Label>
                <Input
                  type="text"
                  name="city"
                  value={this.state.description}
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
              {this.props.isEditing ? "Update" : "Add"}
            {/* Add */}
            </Button>{" "}
            {/* Might be able to take out the cancel button */}
            <Button
              color="secondary"
              onClick={
                this.props.isEditing
                  ? this.props.toggle
                  : this.props.toggleAddCleaner
              }
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
