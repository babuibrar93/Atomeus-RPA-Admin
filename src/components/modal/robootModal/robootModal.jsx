import React from "react";
import { ModalWrapper } from "../style";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Modal from "react-bootstrap/Modal";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  manual: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  FAQUrl: Yup.string().required("Required"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const RobootModal = ({ show, action }) => {
  const handleModal = (arg) => {
    action(arg);
  };
  return (
    <Modal show={show} >
      <ModalWrapper>
        <div className="modal">
          <div className="topPart">
            <div className="user">
              <div className="userIconDiv">
                <img
                  src="/assets/images/modal/robootIcon.svg"
                  className="userIcon"
                />
              </div>
              <div className="details">
                <span className="first">Add New Robot</span>
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
              manual: "",
              FAQUrl: "",
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
                  <span className="fieldLabels">Upload file</span>
                  <input
                    type="file"
                    name="file-input"
                    id="file-input"
                    class="file-input__input"
                  />
                  <label for="file-input">
                    <span
                      name="manual"
                      for="file-input"
                      className="file-field form-control mb-2"
                    >
                      Source file
                    </span>
                  </label>
                  <div className="fileDiv">
                    <img
                      src="/assets/images/modal/file.svg"
                      className="fileIcon"
                    />
                  </div>
                </div>

                <div className="field">
                  <span className="fieldLabels">Manual</span>

                  <Field
                    name="manual"
                    type="text"
                    className={`text-field form-control mb-2 ${
                      touched.manual && !errors.manual
                        ? "valid"
                        : touched.manual && errors.manual
                        ? "error"
                        : ""
                    }`}
                    placeholder="Paste url"
                  />
                  {errors.manual && touched.manual ? (
                    <div className="error-text">{errors.manual}</div>
                  ) : null}
                </div>

                <div className="field">
                  <span className="fieldLabels">FAQ url</span>

                  <Field
                    name="FAQUrl"
                    type="text"
                    className={`text-field form-control mb-2 ${
                      touched.FAQUrl && !errors.FAQUrl
                        ? "valid"
                        : touched.FAQUrl && errors.FAQUrl
                        ? "error"
                        : ""
                    }`}
                    placeholder="Paste url"
                  />
                  {errors.FAQUrl && touched.FAQUrl ? (
                    <div className="error-text">{errors.FAQUrl}</div>
                  ) : null}
                </div>

                <div className="field">
                  <span className="fieldLabels">Description</span>

                  <Field
                    name="message"
                    as="textarea"
                    className={`textarea form-control mb-1 ${
                      touched.message && !errors.message
                        ? "valid"
                        : touched.message && errors.message
                        ? "error"
                        : ""
                    }`}
                    placeholder="Type here..."
                  />
                  {errors.message && touched.message ? (
                    <div className="error-text">{errors.message}</div>
                  ) : null}
                </div>

                <div className="bottom">
                  <button
                    className="cencel-btn"
                    onClick={() => handleModal(false)}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="submit-btn">
                    Add Roboot
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

export default RobootModal;
