import React from "react";
import { ModalWrapper } from "../style";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Modal } from "react-bootstrap";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  surname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const UserModal = ({ show, action }) => {
  const handleModal = (arg) => {
    action(arg);
  };
  return (
    <Modal show={show}>
      <ModalWrapper>
        <div className="modal">
          <div className="topPart">
            <div className="user">
              <div className="userIconDiv">
                <img
                  src="/assets/images/modal/addUser.svg"
                  className="userIcon"
                />
              </div>
              <div className="details">
                <span className="first">Add New User</span>
                <span className="second">Enter details of users</span>
              </div>
            </div>
            <div className="crossIconDiv">
              <img
                src="/assets/images/modal/cross.svg"
                className="crossIcon"
                onClick={() => handleModal(false)}
              />
            </div>
          </div>

          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              message: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="form_wrapper">
                <div className="field">
                  <label className="fieldLabels">First Name</label>
                  <Field
                    name="name"
                    type="text"
                    className={`text-field form-control mb-2 ${
                      touched.name && !errors.name
                        ? "valid"
                        : touched.name && errors.name
                        ? "error"
                        : ""
                    }`}
                    placeholder="First name"
                  />
                  {errors.name && touched.name ? (
                    <div className="error-text">{errors.name}</div>
                  ) : null}
                </div>
                <div className="field">
                  <span className="fieldLabels">Surname</span>

                  <Field
                    name="surname"
                    type="text"
                    className={`text-field form-control mb-2 ${
                      touched.surname && !errors.surname
                        ? "valid"
                        : touched.surname && errors.surname
                        ? "error"
                        : ""
                    }`}
                    placeholder="Surname"
                  />
                  {errors.surname && touched.surname ? (
                    <div className="error-text">{errors.surname}</div>
                  ) : null}
                </div>

                <div className="field">
                  <span className="fieldLabels">Email</span>

                  <Field
                    name="email"
                    type="email"
                    className={`email-field form-control mb-2 ${
                      touched.email && !errors.email
                        ? "valid"
                        : touched.email && errors.email
                        ? "error"
                        : ""
                    }`}
                    placeholder="Your email"
                  />
                  <div className="emailDiv">
                    <img
                      src="/assets/images/modal/rateOf.svg"
                      className="emailIcon"
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <div className="error-text">{errors.email}</div>
                  ) : null}
                </div>

                <div className="field">
                  <span className="fieldLabels">Role</span>

                  <select
                    className="form-select form-select-sm text-field"
                    // aria-label=".form-select-sm example"
                  >
                    <option selected>Select role</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                  <div className="downArrowDiv">
                    <img
                      src="/assets/images/dashboard/arrow-down.svg"
                      className="downArrowIcon"
                    />
                  </div>
                </div>

                <div className="bottom">
                  <button
                    className="cencel-btn"
                    onClick={() => handleModal(false)}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="submit-btn">
                    Send Invite
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </ModalWrapper>
    </Modal>
  );
};

export default UserModal;
