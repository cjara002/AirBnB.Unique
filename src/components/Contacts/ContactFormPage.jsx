import React from "react";
import { Formik, Field } from "formik";
import ContactFormSchema from "./ContactFormSchema";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Form, FormGroup, Label } from "reactstrap";
import { connect } from "react-redux";
import { addCleaner } from "../../Redux/Actions/Cleaners/cleanerAction";
import Swal from "sweetalert2";

class ContactFormPage extends React.Component {
  state = {
    formData: {
      name: "",
      yearsinoperation: "",
      imageurl: "",
      city: "",
      description: "",
    },
    isEditing: false,
  };

  handleSubmit = (values) => {
      debugger;
      //debugger does not work. .then is not working either.
    this.props.addCleaner(values)
    .then(this.addCleanerSuccess)
    .catch(this.addCleanerError);
    // if (!this.state.isEditing) {
    //   faqsServices.createFaq(values)
    //     
    //     .then(this.onCreateNewFaqSuccess)
    //     .catch(this.onCreateNewFaqError);
    // } else {
    //   faqsServices
    //     .updateSingleFaq(values)
    //     .then(this.onUpdateSuccess)
    //     .catch(this.onUpdateError);
    // }
  };

  addCleanerSuccess = () => {
    //   debugger;
    Swal.fire(
        "New Cleaner Added.",
        "success"
      );
      this.props.history.push("/cleaners");  
  }

  addCleanerError = () => {
    Swal.fire(
        "Something is not right. Please try again.",
         "error"
         );
  }

  onCancel = () => {
    this.props.history.push("/cleaners");
  };

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
              <div className="col-6">
                <Form
                  onSubmit={handleSubmit}
                  // className="containerFaq"
                  // id="faqBox"
                >
                  <FormGroup row>
                    <Col
                      sm={10}
                      //   className="colFaq"
                    >
                      <Label>Name </Label>
                      <Field
                        name="name"
                        type="text"
                        value={values.name}
                        //   placeholder="Please write a questions here.."
                        className={
                          errors.name && touched.name
                            ? "form-control error"
                            : "form-control"
                        }
                      />
                      {errors.name && touched.name && (
                        <span className="input-feedback text-danger">
                          {errors.name}
                        </span>
                      )}
                    </Col>
                  </FormGroup>

                  {/* <FormGroup row>
                      <Col
                        sm={10}
                        //   className="colFaq"
                      >
                            <Label>Years In Operation </Label>
                        <Field
                          name="yearsinoperation"
                          type="text"
                        //   type="number"
                          //   component="select"
                          value={values.yearsinoperation}
                          className={
                            errors.yearsinoperation && touched.yearsinoperation
                              ? "form-control error"
                              : "form-control"
                          }
                        >
                          {errors.yearsinoperation && touched.yearsinoperation && (
                            <span className="input-feedback text-danger">
                              {errors.yearsinoperation}
                            </span>
                          )}
                        </Field>
                      </Col>
                    </FormGroup> */}

                  <FormGroup row>
                    <Col
                      sm={10}
                      //   className="colFaq"
                    >
                      <Label>Years In Operation </Label>
                      <Field
                        name="yearsinoperation"
                        type="number"
                        value={values.yearsinoperation}
                        //   placeholder="Please write a questions here.."
                        className={
                          errors.yearsinoperation && touched.yearsinoperation
                            ? "form-control error"
                            : "form-control"
                        }
                      />
                      {errors.yearsinoperation && touched.yearsinoperation && (
                        <span className="input-feedback text-danger">
                          {errors.yearsinoperation}
                        </span>
                      )}
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col
                      sm={10}
                      //   className="colFaq"
                    >
                      <Label>Image </Label>
                      <Field
                        name="imageurl"
                        type="text"
                        //   component="textarea"
                        //   rows="5"
                        value={values.imageurl}
                        //   placeholder="Please write an answere here..."
                        className={
                          errors.imageurl && touched.imageurl
                            ? "form-control error"
                            : "form-control"
                        }
                      />
                      {errors.imageurl && touched.imageurl && (
                        <span className="input-feedback text-danger">
                          {errors.imageurl}
                        </span>
                      )}
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col
                      sm={10}
                      //   className="colFaq"
                    >
                      <Label>City </Label>
                      <Field
                        name="city"
                        //   component="textarea"
                        //   rows="5"
                        value={values.city}
                        //   placeholder="Please write an answere here..."
                        className={
                          errors.city && touched.city
                            ? "form-control error"
                            : "form-control"
                        }
                      />
                      {errors.city && touched.city && (
                        <span className="input-feedback text-danger">
                          {errors.city}
                        </span>
                      )}
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col
                      sm={10}
                      //   className="colFaq"
                    >
                      <Label>Description </Label>
                      <Field
                        name="description"
                        component="textarea"
                        rows="5"
                        value={values.description}
                        //   placeholder="Please write an descriptione here..."
                        className={
                          errors.description && touched.description
                            ? "form-control error"
                            : "form-control"
                        }
                      />
                      {errors.description && touched.description && (
                        <span className="input-feedback text-danger">
                          {errors.description}
                        </span>
                      )}
                    </Col>
                  </FormGroup>

                  {/* <FormGroup style={{ textAlign: "right", padding: "10px" }}> */}
                  <FormGroup>
                    <button
                      className="btn btn-outline-custom"
                      // id="faqCancel"
                      type="submit"
                      onClick={this.onCancel}
                    >
                      Cancel
                    </button>

                    {this.state.isEditing ? (
                      <button
                        className="btn btn-outline-custom"
                        type="submit"
                        disabled={!isValid || isSubmitting}
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-custom"
                        type="submit"
                        disabled={!isValid || isSubmitting}
                      >
                        Add
                      </button>
                    )}
                  </FormGroup>
                </Form>
              </div>
            );
          }}
        </Formik>
      </React.Fragment>
    );
  }
}

export default connect(null, { addCleaner })(ContactFormPage);
