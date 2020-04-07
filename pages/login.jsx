import React from "react";
import { Typography, Box, Button, Avatar, Input } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import { Formik } from "formik";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderRadius: "5px",
    width: "350px",
    height: "340px",
    backgroundColor: "#F7F7F7",
    padding: "20px",
    margin: "80px", 
  },
  inputStyle: {
    backgroundColor: "#ffffff",
    border: "1px solid #CCCCCC",
    borderBottom: "1px solid #CCCCCC",
    borderRadius: "4px",
    padding: "0px 10px",
  },
});

const initialValues = {
  email: "",
  password: "",
};

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Box className={classes.card}>
        <Box
          style={{
            paddingTop: "25px",
            marginBottom: "10 px",
            textAlign: "center",
          }}
        >
          <Typography style={{ fontSize: "35px", textAlign: "center" }}>
            Log in
          </Typography>
        </Box>

        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
          }}
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
              <Box>
                <Box style={{ marginLeft: "65px  " }}>
                  <Typography>Email:</Typography>
                  <Box className={classes.inputStyle}>
                    <Input
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Enter your Email"
                    />
                  </Box>
                </Box>
                <Box style={{ marginLeft: "65px ", marginTop: "15px" }}>
                  <Typography type="password">Password:</Typography>
                  <Box className={classes.inputStyle}>
                    <Input
                      name="password"
                      type="password"
                      value={values.password}   
                      onChange={handleChange}
                      placeholder="Enter your Password "
                    />
                  </Box>
                </Box>
                <Box style={{ marginLeft: "65px" }}>
                  <Button
                    style={{
                      marginTop: "50px",
                      backgroundColor: "#347AB7",
                      color: "white",
                      width: "80%",
                    }}
                    variant="contained"
                  >
                    Log in
                  </Button>
                </Box>
              </Box>
            );
          }}
        </Formik>
      </Box>
    </div>
  );
};
export default Index;
 