import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Container } from "react-bootstrap";
import { ContactFormWrapper } from "./styles";

const SignupSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function ContactForm() {
  return (
    <ContactFormWrapper>
      <Container>
        <h2 className="title">SEND US MESSAGE</h2>
        <p className="contact-text">
          Vestibulum consequat luctus magna. Praesent fringilla vestibulum
          congue. Cras id tempor magna, et ultricies metus. Duis nisi magna.
        </p>

        <Formik
          initialValues={{
            Name: "",
            email: "",
            message: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="form_wrapper">
              <div className="field">
                <Field name="Name" className="text-field mb-2" placeholder="Your name"/>
                {errors.Name && touched.Name ? <div className="error-text">{errors.Name}</div> : null}
              </div>

              <div className="field">
                <Field name="email" type="email" className="email-field mb-2" placeholder="Your email"/>
                {errors.email && touched.email ? <div className="error-text">{errors.email}</div> : null}
              </div>

              <div className="field">
                <Field name="message" as="textarea" className="textarea mb-1" placeholder="Your message"/>
                {errors.message && touched.message ? (<div className="error-text">{errors.message}</div>) : null}
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </Form>
          )}
        </Formik>
      </Container>
    </ContactFormWrapper>
  );
}

export default ContactForm;
