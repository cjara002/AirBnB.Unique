import * as Yup from "yup";

const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
    .min(1, "Your name is too short.")
    .max(100,"Your name cannot be over 100 characters.")
    .required("Name is required."),

    yearsinoperation: Yup.string().required("Number of years is required."),

    // imageurl: Yup.string()
    // .min(1, "The link is too short." )
    // .max(255, "The image URL should be less than 255 charcters.")
    // .required("A photo is required."),
    imageurl: Yup.mixed()
    .required("A photo is required."),
    
    city: Yup.string()
    .min(1, "Your city name is too short.")
    .max(50, "Your city name cannot be over 50 charcters.")
    .required("A city is required"),

    description: Yup.string()
    .min(1, "Your description is too short.")
    .max(250, "Your description cannot exceed 250 characters.")
    .required("A description is required."),

});

export default ContactFormSchema;