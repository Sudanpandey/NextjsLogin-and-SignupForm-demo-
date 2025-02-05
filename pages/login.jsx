import React, { useEffect, useState } from "react";
import Router from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";

import { Typography, Box, Button,  Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
   
const loginschema = Yup.object().shape({    
  email: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Email is required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .min(6, "Password has to be longer than 6 characters!")
    .required("password  is required"),
});

// #External Css define

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
  // #local stoarage login

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      Router.push("/mform");
    } else {
      setLoading(false);
    }
  });
  
	const login = async (values) => {
		try {
			const {
				data: {
					data: { token },
				},
			} = await axios.post("http://localhost:3000/login", values);
			if (token) {
				localStorage.setItem("token", token);
				Router.push("/");
			}
		} catch (error) {
			const {
				response: {
					data: { message },
				}, 
			} = error;
			setMessage(message);
		}
	};




  // #local storage login method define end

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
 
        {loading ? (
          <h2>Loading.........</h2>
        ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            login(values);
          }}
          validationSchema={loginschema}
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
                <form onSubmit={handleSubmit}>
                  <Box style={{ marginLeft: "65px  " }}>
                    <Typography>Email:</Typography>
                    <Box className={classes.inputStyle}>
                      <Input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your Email"
                        disableUnderline={true}
                      />
                    </Box>
                    <Typography style={{ fontSize: 12, color: "red" }}>
                      {touched.email && errors.email}
                    </Typography>
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
                        disableUnderline={true}
                      />
                    </Box>
                    <Typography style={{ fontSize: 12, color: "red" }}>
                      {touched.password && errors.password}
                    </Typography>
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
                      type="submit"
                    >
                      Log in
                    </Button>
                  </Box>
                </form>
              </Box>
            );
          }}
        </Formik>
        )}
      </Box>
    </div>
  );
};
export default Index;
