import React from "react";
import { ModalWrapper } from "../style";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { BotModalWrapper } from "../style2";

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

const AssignRobootModal = () => {
  return (
    <BotModalWrapper>
      <div className="modal">
        <div className="topPart">
          <div className="user">
            <div className="userIconDiv">
              <img src="/assets/images/modal/tick.svg" className="userIcon" />
            </div>
            <div className="details">
              <span className="first">Assign Robot</span>
              <span className="second">Enter details of users</span>
            </div>
          </div>
          <div className="crossIconDiv">
            <img src="/assets/images/modal/cross.svg" className="crossIcon" />
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
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="form_wrapper">
              <div className="field">
                <span className="fieldLabels">Assign to</span>

                <select
                  className="form-select form-select-sm text-field"
                  aria-label=".form-select-sm example"
              
                >
                  <option selected>Select user</option>
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
                <button className="cencel-btn">Cancel</button>

                <button type="submit" className="submit-btn">
                  Assign Robot
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </BotModalWrapper>
  );
};

export default AssignRobootModal;
