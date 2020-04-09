import React from "react";
import {
  Typography,
  Box,
  Button,
  Avatar,
  Input,
  Checkbox,
  Link,
  Divider,
} from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";

const signupValidationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("First name  is required"),
  lastname: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")

    .required("Last name is required"),
  email: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")

    .required("Email is required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .min(6, "Password has to be longer than 6 characters!")
    .required("Valid password  is required"),
  cpassword: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .min(6, "Password has to be longer than 6 characters!")
    .required("Confirm  password  is required"),
});

const initialValues = {
  firstname: " ",
  lastname: "   ",
  email: " ",
  passsword: "   ",
  cpassword: " ",
};

const signUp = () => {
  return (
    <div style={{ backgroundColor: "#3598DC", paddingBottom: "40px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
          }}
          validationSchema={signupValidationSchema}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
          }) => {
            console.log(values);
            return (
              <Box
                style={{
                  borderRadius: "2px",
                  width: "380px",
                  height: "500px",
                  backgroundColor: "#FFFFFF ",
                  padding: "20px",
                  margin: "30px",
                }}
                boxShadow={1}
              >
                <Typography
                  style={{
                    color: "333333",
                    textAlign: "left",
                    fontSize: "30px ",
                    fontWeight: "bold",
                    paddingBottom: "15px",
                  }}
                >
                  Sign Up{" "}
                </Typography>
                <Typography style={{ color: "#9C9C9C", padding: "5px" }}>
                  Please fill in this form to create an account!
                </Typography>
                <Divider style={{ width: "100%", marginBottom: "20px" }} />
                <Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: "25px",
                    }}
                  >
                    <Input
                      style={{
                        width: "100%",
                        backgroundColor: "#F2F2F2",
                        //   border: "1px solid #CCCCCC",
                        outline: "none",
                        marginRight: "5px",
                        borderRadius: "4px",
                        padding: "5px 10px",
                      }}
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      placeholder="First Name"
                      border="1px"
                      disableUnderline={true}
                    />
                    <Typography style={{ fontSize: 12, color: "red" }}>
                      {touched.firstname && errors.firstname}
                    </Typography>

                    <Input
                      style={{
                        width: "100%",
                        backgroundColor: "#F2F2F2",
                        //   border: "1px solid #CCCCCC",
                        outline: "none",
                        marginLeft: "5px",
                        borderRadius: "4px",
                        padding: "0px 10px",
                      }}
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      placeholder="Last Name"
                      border="1px"
                      disableUnderline={true}
                    />
                    <Typography style={{ fontSize: 12, color: "red" }}>
                      {touched.lastname && errors.lastname}
                    </Typography>
                  </Box>
                  <Input
                    style={{
                      width: "100%",
                      backgroundColor: "#F2F2F2",
                      //   border: "1px solid #CCCCCC",
                      outline: "none",
                      marginRight: "5px",
                      borderRadius: "4px",
                      padding: "5px 10px",
                    }}
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Email"
                    border="1px"
                    disableUnderline={true}
                  />
                  <Typography style={{ fontSize: 12, color: "red" }}>
                    {touched.email && errors.email}
                  </Typography>
                  <Input
                    style={{
                      width: "100%",
                      backgroundColor: "#F2F2F2",
                      //   border: "1px solid #CCCCCC",
                      outline: "none",
                      marginTop: "25px",
                      marginRight: "5px",
                      marginBottom: "25px",
                      borderRadius: "4px",
                      padding: "5px 10px",
                    }}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Password"
                    border="1px"
                    disableUnderline={true}
                  />
                  <Typography style={{ fontSize: 12, color: "red" }}>
                    {touched.password && errors.password}
                  </Typography>
                  <Input
                    style={{
                      width: "100%",
                      backgroundColor: "#F2F2F2",
                      //   border: "1px solid #CCCCCC",
                      outline: "none",
                      marginTop: "25 px",
                      marginRight: "5px",
                      borderRadius: "4px",
                      padding: "5px 10px",
                    }}
                    name="cpassword"
                    value={values.cpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Confirm Password"
                    border="1px"
                    disableUnderline={true}
                  />
                  <Typography style={{ fontSize: 12, color: "red" }}>
                    {touched.cpassword && errors.cpassword}
                  </Typography>
                  <Typography style={{ marginTop: "25px", color: "#9C9C9C" }}>
                    <Checkbox
                      style={{ color: "#A8A19C" }}
                      size="small"
                      inputProps={{ "aria-label": "checkbox with small size" }}
                    />
                    I Accept the Term and Condition
                  </Typography>
                </Box>
                <Button
                  style={{
                    borderRadius: "5px",
                    width: "40%",
                    backgroundColor: "#3598DC",
                    color: "#FFFFFF",
                    marginTop: "25px",

                    padding: "10px",
                  }}
                  variant="contained"
                  color="#337AB7"
                >
                  Sign up
                </Button>
              </Box>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default signUp;
