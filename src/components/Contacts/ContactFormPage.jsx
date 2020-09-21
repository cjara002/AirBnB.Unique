import React from "react";
import { Formik, Field } from "formik";
import ContactFormSchema from "./ContactFormSchema";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
   Form, FormGroup, Label } from "reactstrap";
import { connect } from "react-redux";
import {
  addCleaner,
  GetSingleCleaner,
  updateCleaner
} from "../../Redux/Actions/Cleaners/cleanerAction";
import Swal from "sweetalert2";
import "./ContactStyles.css"

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

  componentDidMount() {
    if (this.props.match.params && this.props.match.params.id) {
      this.props.GetSingleCleaner(this.props.match.params.id);
      this.setState(( ) => {
        return {
          formData: {
            name: this.props.singleCleaner[0].name,
            yearsinoperation: this.props.singleCleaner[0].yearsInOperation,
            imageurl: this.props.singleCleaner[0].imageUrl,
            city: this.props.singleCleaner[0].city,
            description: this.props.singleCleaner[0].description,
            id: this.props.singleCleaner[0].id,
          },
          isEditing: true
        };
      });
    }
  }

  handleSubmit = (values) => {
    if (!this.state.isEditing) {
      this.props
      .addCleaner(values)
      .then(this.addCleanerSuccess)
      .catch(this.addCleanerError);
    } else {
      this.props
        .updateCleaner(values)
        .then(this.onUpdateSuccess)
        .catch(this.onUpdateError);
    }
  };

  addCleanerSuccess = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Cleaner Added", 
      showConfirmButton: false,
      timer: 1500,
      backdrop: `
      rgb(234, 162, 32, .5)
      left top
      no-repeat
    `
    });
    this.props.history.push("/cleaners");
  };

  addCleanerError = () => {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Cleaner not added. Please try again...", 
      showConfirmButton: false,
      timer: 1500,
      backdrop: `
      rgb(234, 162, 32, .5)
      left top
      no-repeat
    `
    });
  };

  onUpdateSuccess = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Cleaner Updated", 
      showConfirmButton: false,
      timer: 1500,
      backdrop: `
      rgb(234, 162, 32, .5)
      left top
      no-repeat
    `
    });
    this.props.history.push("/cleaners");
  };

  onUpdateError = () => {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Cleaner not updated. Please try again...", 
      showConfirmButton: false,
      timer: 1500,
      backdrop: `
      rgb(234, 162, 32, .5)
      left top
      no-repeat
    `
    });
  };

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
              <div className="content-wrapper">
                <h1 id="formCleanerTitle">{this.isEditing? "Update Cleaner" : "Add Cleaner" }</h1>
                <div className="col-6">
                  <Form
                    onSubmit={handleSubmit}
                    id="cleanerFormAddnUpdate"
                  >
                    <FormGroup row>
                        <Label className="labelContainer">Name </Label>
                        <Field
                          name="name"
                          type="text"
                          value={values.name}
                          className={
                            errors.name && touched.name
                              ? "form-control error"
                              : "form-control"
                          }
                        />
                        {errors.name && touched.name && (
                          <span className="input-feedback text-danger" id="feedbackFormat">
                            {errors.name}
                          </span>
                        )}
                    </FormGroup>

                    <FormGroup row>
                        <Label className="labelContainer">Years In Operation </Label>
                        <Field
                          name="yearsinoperation"
                          type="number"
                          value={values.yearsinoperation}
                        
                          className={
                            errors.yearsinoperation && touched.yearsinoperation
                              ? "form-control error"
                              : "form-control"
                          }
                        />
                        {errors.yearsinoperation && touched.yearsinoperation && (
                          <span className="input-feedback text-danger" id="feedbackFormat">
                            {errors.yearsinoperation}
                          </span>
                        )}
                    </FormGroup>
  
                    <FormGroup row>
                        <Label className="labelContainer">Image </Label>
                        <Field
                        // id="fieldContainer"
                          name="imageurl"
                          type="text"
                          value={values.imageurl}
                          className={
                            errors.imageurl && touched.imageurl
                              ? "form-control error"
                              : "form-control"
                          }
                        />
                        {errors.imageurl && touched.imageurl && (
                          <span className="input-feedback text-danger " id="feedbackFormat">
                            {errors.imageurl}
                          </span>
                        )}
                    </FormGroup>
  
                    <FormGroup row>
                        <Label className="labelContainer">City </Label>
                        <Field
                          name="city"
                          value={values.city}
                          className={
                            errors.city && touched.city
                              ? "form-control error"
                              : "form-control"
                          }
                        />
                        {errors.city && touched.city && (
                          <span className="input-feedback text-danger" id="feedbackFormat">
                            {errors.city}
                          </span>
                        )}
                    </FormGroup>
  
                    <FormGroup row>
                        <Label className="labelContainer">Description </Label>
                        <Field
                          name="description"
                          component="textarea"
                          rows="5"
                          value={values.description}
                          className={
                            errors.description && touched.description
                              ? "form-control error"
                              : "form-control"
                          }
                        />
                        {errors.description && touched.description && (
                          <span className="input-feedback text-danger" id="feedbackFormat">
                            {errors.description}
                          </span>
                        )}
                    </FormGroup>
  
                    {/* <FormGroup style={{ textAlign: "right", padding: "10px" }}> */}
                    <FormGroup>
                      <button
                        className="btn btn-outline-custom text-white"
                        // id="faqCancel"
                        type="submit"
                        onClick={this.onCancel}
                      >
                        Cancel
                      </button>
  
                      {this.state.isEditing ? (
                        <button
                          className="btn btn-outline-custom text-white"
                          type="submit"
                          disabled={!isValid || isSubmitting}
                        >
                          Update
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-custom text-white"
                          type="submit"
                          disabled={!isValid || isSubmitting}
                        >
                          Add
                        </button>
                      )}
                    </FormGroup>
                  </Form>
                </div>
              </div>
            );
          }}
        </Formik>
      </React.Fragment>
    );
  }
}

function mapStateToPros(store) {
  return {
    singleCleaner: store.singleCleaner
  };
}

export default connect(mapStateToPros, { addCleaner, GetSingleCleaner, updateCleaner })(ContactFormPage);
// export default connect(null, { addCleaner, GetSingleCleaner })(ContactFormPage);
