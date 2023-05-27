import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ContactFormWrapper } from "./styles";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
});

const InputFeilds = ({ type, name, placeholder }) => {
  return (
    <ContactFormWrapper>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form_wrapper">
            <div className="field">
              <Field
                name={name}
                type={type}
                style={type === "password" ? { backgroundImage: "none" } : null}
                className={`email-field form-control mb-2 ${
                  type === "email"
                    ? touched.email && !errors.email
                      ? "valid"
                      : touched.email && errors.email
                      ? "error"
                      : ""
                    : touched.password && !errors.password
                    ? "valid"
                    : touched.password && errors.password
                    ? "error"
                    : ""
                } `}
                placeholder={placeholder}
              />
            </div>
              {type === "email" && errors.email && touched.email ? (
                <div className="error-text">{errors.email}</div>
              ) : type === "password" && errors.password && touched.password ? (
                <div className="error-text">{errors.password}</div>
              ) : null}
          </Form>
        )}
      </Formik>
    </ContactFormWrapper>
  );
};

export default InputFeilds;
