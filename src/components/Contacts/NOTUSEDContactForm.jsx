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
} from "reactstrap";
import { Formik, Field } from "formik";
import ContactFormSchema from "./ContactFormSchema";

class ContactForm extends React.Component {
  state = {
    formData: {
      name: "",
      yearsInOperation: "",
      imageUrl: "",
      city: "",
      description: "",
    },
  };

  //need handle submit function
  handleSubmit = values => {
    console.log("handleSubmit:", this.state.form)
  }

  render() {
    return (
      <React.Fragment>
        <Formik
          enableReinitialize={true}
          validationSchema={ContactFormSchema}
          initialValues={this.state.formData}
          onSubmit={this.handleSubmit}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              handleSubmit,
              isValid,
              isSubmitting,
            } = props;

            return (
              <Modal isOpen={this.props.isModal}>
                <ModalHeader
                  toggle={
                    this.props.isEditing
                      ? this.props.toggle
                      : this.props.toggleAddCleaner
                  }
                
                >
                  <div>
                    {" "}
                    {this.props.isEditing
                      ? "Update Cleaner"
                      : "Add New Cleaner"}{" "}
                  </div>
                </ModalHeader>
                <ModalBody>
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <Label>Name</Label>
                      <Field
                        type="text"
                        name="name"
                        value={values.name}
                        placeholder="please enter a name..."
                      />
                        
                      {errors.name && touched.name && (
                        <span className="input-feedback text-danger">
                          {errors.name}
                        </span>
                      )}
                    </FormGroup>

                    <FormGroup>
                      <Label>Years In Operation</Label>
                      <Field
                        type="number"
                        name="yearsInOperation"
                        value={values.yearsInOperation}
                        placeholder="Put 0 is you have less than 1 year..."
                      />
                      {errors.yearsInOperation && touched.yearsInOperation && (
                        <span className="input-feedback text-danger">
                          {errors.yearsInOperation}
                        </span>
                      )}
                    </FormGroup>

                    <FormGroup>
                      <Label>Profile Photo</Label>
                      <Field
                        type="text"
                        name="imageURL"
                        value={values.imageURL}
                        placeholder="Please use a good photo..."
                      />
                      {errors.imageURL && touched.imageURL && (
                        <span className="input-feedback text-danger">
                          {errors.imageURL}
                        </span>
                      )}
                    </FormGroup>

                    <FormGroup>
                      <Label>City</Label>
                      <Field
                        type="text"
                        name="city"
                        value={values.city}
                        placeholder="full city name..."
                      />
                      {errors.city && touched.city && (
                        <span className="input-feedback text-danger">
                          {errors.city}
                        </span>
                      )}
                    </FormGroup>

                    <FormGroup>
                      <Label>Description</Label>
                      <Field
                        type="text"
                        name="description"
                        value={values.description}
                        placeholder="What services do you provide?"
                      />
                      {errors.description && touched.description && (
                        <span className="input-feedback text-danger">
                          {errors.description}
                        </span>
                      )}
                    </FormGroup>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" type="submit" disabled={!isValid || isSubmitting}>
                  {/* <Button color="primary" type="submit" > */}
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
            );
          }}
        </Formik>
      </React.Fragment>
    );
  }
}

export default ContactForm;
