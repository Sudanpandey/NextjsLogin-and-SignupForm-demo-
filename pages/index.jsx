import React, { useEffect, useState } from "react";
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
import Router from "next/router";

const logInValidationSchema = Yup.object().shape({
  username: Yup.string()

    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Email is required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .min(6, "Password has to be longer than 6 characters!")
    .required("Valid password  is required"),
});

const initialValues = {
  username: "",
  password: "",
};

const Index = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      Router.push("/home");
    } else {
      setLoading(false);
    }
  });
  const login = (values) => {
    localStorage.setItem("token", values.username);
    Router.push("/home");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? (
        <h1>Loading.............</h1>
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            login(values);
          }}
          validationSchema={logInValidationSchema}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
          }) => {
            return (
              <Box
                style={{
                  borderRadius: "5px",
                  width: "310px",
                  height: "440px",
                  backgroundColor: "#F7F7F7",
                  padding: "20px",
                  margin: "60px",
                }}
                boxShadow={1}
              >
                <Typography
                  style={{
                    color: "333333",
                    textAlign: "center",
                    fontSize: "30px ",
                  }}
                >
                  Sign in{" "}
                </Typography>
                <Box style={{ padding: "20px" }}>
                  <Button
                    style={{
                      borderRadius: "5px",
                      width: "100%",
                      margin: "0px",
                      backgroundColor: "#337AB7",
                      color: "#FFFFFF",
                    }}
                    variant="contained"
                    color="#337AB7"
                  >
                    Sign in with . <strong>facebook</strong>
                  </Button>
                  <Box style={{ marginTop: "12px" }}>
                    <Button
                      style={{
                        borderRadius: "5px",
                        width: "100%",
                        margin: "0px",
                        backgroundColor: "#5BC0DE",
                        color: "#FFFFFF",
                      }}
                      variant="contained"
                      color="#337AB7"
                    >
                      Sign in with . <strong> Twitter</strong>
                    </Button>
                  </Box>
                  <Box style={{ marginTop: "12px" }}>
                    <Button
                      style={{
                        borderRadius: "5px",
                        width: "100%",
                        margin: "0px",
                        backgroundColor: "#D9534F",
                        color: "#FFFFFF",
                      }}
                      variant="contained"
                      color="#337AB7"
                    >
                      Sign in with . <strong> Twitter</strong>
                    </Button>
                  </Box>

                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "115px",
                    }}
                  >
                    <Divider style={{ width: "100%" }} />
                    <Typography
                      style={{ padding: "10px", textAlign: "center" }}
                    >
                      or
                    </Typography>
                    <Divider style={{ width: "100%" }} />
                  </Box>
                  <form onSubmit={handleSubmit}>
                    <Box>
                      <Input
                        style={{
                          width: "100%",
                          backgroundColor: "#ffffff",
                          border: "1px solid #CCCCCC",
                          outline: "none",
                          borderRadius: "4px",
                          padding: "0px 10px",
                        }}
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="User name"
                        border="1px"
                        disableUnderline={true}
                      />
                    </Box>
                    <Typography style={{ fontSize: 12, color: "red" }}>
                      {touched.username && errors.username}
                    </Typography>

                    <Box>
                      <Input
                        style={{
                          marginTop: "15px",
                          width: "100%",
                          backgroundColor: "#ffffff",
                          border: "1px solid #CCCCCC",
                          outline: "none",
                          borderRadius: "4px",
                          padding: "0px 10px",
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
                    </Box>
                    <Typography style={{ fontSize: 12, color: "red" }}>
                      {touched.password && errors.password}
                    </Typography>

                    <Button
                      style={{
                        borderRadius: "5px",
                        width: "100%",
                        backgroundColor: "#5BB85C",
                        color: "#FFFFFF",
                        marginTop: "35px",
                      }}
                      variant="contained"
                      color="#337AB7"
                      type="submit"
                    >
                      Sign in
                    </Button>
                  </form>
                </Box>
                <Typography>
                  <Checkbox
                    size="small"
                    inputProps={{ "aria-label": "checkbox with small size" }}
                  />
                  Remember me
                </Typography>
              </Box>
            );
          }}
        </Formik>
      )}
    </div>
  );
};
export default Index;
