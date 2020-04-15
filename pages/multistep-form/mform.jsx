import { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Typography,
  Divider,
  Button,
  Avatar,
  Input,
} from "@material-ui/core";

const step1 = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("username is required"),
  password: Yup.string().min(5, "Too Short!").required("Password is required"),
  cpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),

  // password: Yup.string()
  //   .min(2, "Too Short!")
  //   .max(25, "Too Long!")
  //   .min(6, "Password has to be longer than 6 characters!")
  //   .required("Valid password  is required"),
  // cpassword: Yup.string()
  //   .min(2, "Too Short!")
  //   .max(25, "Too Long!")
  //   .min(6, "Password has to be longer than 6 characters!")
  //   .required("Valid password  is required"),
  email: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("email is required"),
});

const step2 = Yup.object().shape({
  fname: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("first name  is required"),
  lname: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .min(6, "Last name is required"),
  email2: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("email is required"),
  phoneno: Yup.number().min(10, "minium 10 numbers"),
  // .min(8 ,"too short")
  // .max(10,"too long ")
  // .required("A phone number is required"),
  zipcode: Yup.string()
    .min(2, "Too Short!")
    .max(4, "Too Long!")
    .required(" Zip code  is required"),
  state: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("state is required"),
  haddress: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Home address  is required"),
  scountry: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required(" Please Select a country"),
});
const formValidation = [step1, step2];

const initialValues = {
  username: "",
  password: "",
  cpassword: "",
  email: "",
  fname: "",
  lname: "",
  phoneno: "",
  email2: "",
  state: "",
  zipcode: "",
  haddress: "",
  scountry: "",
};

const mform = () => {
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    setStep(step - 1);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        handleNext();
        console.log(values);
      }}
      validationSchema={formValidation[step - 1]}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
      }) => {
        console.log(errors);

        return (
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div style={{ display: step === 1 ? "block " : "none" }}>
                <Box
                  style={{
                    marginTop: "40px",
                    boxShadow: " 3px 3px 5px 6px #ccc",
                    marginLeft: "350px",
                    height: "545px",
                    width: "600px",
                    alignContent: "center",
                    backgroundColor: "#FFFFFF",
                    borderTopColor: "solid green",
                  }}
                >
                  <Box
                    style={{
                      borderColor: "2px solid ",
                      height: "50px",
                      width: "100%",
                      backgroundColor: "#DDDDDD",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "20px ",
                        textAlign: "center",
                        marginLeft: "5px",
                        padding: "7px",
                      }}
                    >
                      Advance Signup From Wizard
                    </Typography>
                  </Box>

                  <Box
                    style={{
                      width: "100%",
                      height: "100px",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        marginLeft: "40px",
                        marginRight: "40px",
                      }}
                    >
                      <p
                        style={{
                          width: "35px",
                          height: "35px",
                          borderRadius: "50%",
                          fontSize: "18px",
                          color: "#fff",
                          lineHeight: "35px",
                          textAlign: "center",

                          background: step === 1 ? "#93CF57" : "#F46B5A",
                        }}
                      >
                        1
                      </p>
                      <div
                        style={{
                          marginLeft: "30px",
                          marginTop: "35px",
                          height: "2px",
                          backgroundColor: "#BDBDBD",
                          width: "30%",
                        }}
                      ></div>

                      <p style={{ flex: 1 }} />
                      <p
                        style={{
                          width: "35px",
                          height: "35px",
                          borderRadius: "50%",
                          fontSize: "18px",
                          color: "#fff",
                          lineHeight: "35px",
                          textAlign: "center",

                          background: step === 2 ? "#93CF57" : "#F46B5A",
                        }}
                      >
                        2
                      </p>
                      <div
                        style={{
                          marginLeft: "30px",
                          marginTop: "35px",
                          height: "2px",
                          backgroundColor: "#BDBDBD",
                          width: "30%",
                        }}
                      ></div>

                      <p style={{ flex: 1 }} />
                      <p
                        style={{
                          width: "35px",
                          height: "35px",
                          borderRadius: "50%",
                          fontSize: "18px",
                          color: "#fff",
                          lineHeight: "35px",
                          textAlign: "center",

                          background: step === 3 ? "#93CF57" : "#F46B5A",
                        }}
                      >
                        3
                      </p>
                    </div>
                    {/* <hr /> */}

                    <Divider style={{ width: "100%" }} />
                  </Box>
                  <Box
                    style={{
                      marginLeft: "15px",
                      marginRight: "5px",
                      height: "320px",
                      width: "95%",
                      backgroundColor: "#F2F7FA",
                    }}
                  >
                    <Box style={{ marginLeft: "10px", paddingTop: "10px" }}>
                      <Typography style={{}}>Username</Typography>
                      <input
                        style={{
                          width: "95%",
                          padding: "8px",
                          borderRadius: "4px",
                          borderStyle: "none",
                        }}
                        type="text"
                        placeholder="Lewin"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Box>
                    <Typography
                      style={{ marginLeft: "10px", fontSize: 12, color: "red" }}
                    >
                      {touched.username && errors.username}
                    </Typography>
                    <Box style={{ marginLeft: "10px", paddingTop: "10px" }}>
                      <Typography style={{}}>Password</Typography>
                      <input
                        style={{
                          width: "95%",
                          padding: "8px",
                          borderRadius: "4px",
                          borderStyle: "none",
                        }}
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disableUnderline={true}
                        outline="none"
                      />
                    </Box>
                    <Typography
                      style={{ marginLeft: "10px", fontSize: 12, color: "red" }}
                    >
                      {touched.password && errors.password}
                    </Typography>
                    <Box style={{ marginLeft: "10px", paddingTop: "10px" }}>
                      <Typography style={{}}>Confirm Password</Typography>
                      <input
                        style={{
                          width: "95%",
                          padding: "8px",
                          borderRadius: "4px",
                          borderStyle: "none",
                        }}
                        type="password"
                        placeholder="Password"
                        name="cpassword"
                        value={values.cpassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Box>
                    <Typography
                      style={{ marginLeft: "10px", fontSize: 12, color: "red" }}
                    >
                      {touched.cpassword && errors.cpassword}
                    </Typography>
                    <Box style={{ marginLeft: "10px", paddingTop: "10px" }}>
                      <Typography style={{}}>Email</Typography>
                      <input
                        style={{
                          width: "95%",
                          padding: "8px",
                          borderRadius: "4px",
                          borderStyle: "none",
                        }}
                        type="text"
                        placeholder="xyz@gmail.com"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Box>
                    <Typography
                      style={{ marginLeft: "10px", fontSize: 12, color: "red" }}
                    >
                      {touched.email && errors.email}
                    </Typography>
                  </Box>

                  <Button
                    style={{
                      padding: "10px",
                      marginTop: "15px",
                      backgroundColor: "#66D1F5",
                      textTransform: "capitalize",
                      marginLeft: "  495px",
                    }}
                    type="submit"
                  >
                    Next Step
                  </Button>
                </Box>
              </div>

              <div style={{ display: step === 2 ? "block " : "none" }}>
                <Box
                  style={{
                    marginTop: "10px",
                    boxShadow: " 3px 3px 5px 6px #ccc",
                    marginLeft: "350px",
                    // height: "615px",
                    width: "600px",
                    alignContent: "center",
                    backgroundColor: "#FFFFFF",
                    borderTopColor: "solid green",
                  }}
                >
                  <Box
                    style={{
                      borderColor: "2px solid ",
                      height: "50px",
                      width: "100%",
                      backgroundColor: "#DDDDDD",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "20px ",
                        textAlign: "center",
                        marginLeft: "5px",
                        padding: "7px",
                      }}
                    >
                      Advance Signup From Wizard
                    </Typography>
                  </Box>

                  <Box
                    style={{
                      width: "100%",
                      height: "100px",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        marginLeft: "40px",
                        marginRight: "40px",
                      }}
                    >
                      <p
                        style={{
                          width: "35px",
                          height: "35px",
                          borderRadius: "50%",
                          fontSize: "18px",
                          color: "#fff",
                          lineHeight: "35px",
                          textAlign: "center",

                          background: step === 1 ? "#93CF57" : "#F46B5A",
                        }}
                      >
                        1
                      </p>
                      <div
                        style={{
                          marginLeft: "30px",
                          marginTop: "35px",
                          height: "2px",
                          backgroundColor: "#BDBDBD",
                          width: "30%",
                        }}
                      ></div>

                      <p style={{ flex: 1 }} />
                      <p
                        style={{
                          width: "35px",
                          height: "35px",
                          borderRadius: "50%",
                          fontSize: "18px",
                          color: "#fff",
                          lineHeight: "35px",
                          textAlign: "center",

                          background: step === 2 ? "#93CF57" : "#F46B5A",
                        }}
                      >
                        2
                      </p>
                      <div
                        style={{
                          marginLeft: "30px",
                          marginTop: "35px",
                          height: "2px",
                          backgroundColor: "#BDBDBD",
                          width: "30%",
                        }}
                      ></div>

                      <p style={{ flex: 1 }} />
                      <p
                        style={{
                          width: "35px",
                          height: "35px",
                          borderRadius: "50%",
                          fontSize: "18px",
                          color: "#fff",
                          lineHeight: "35px",
                          textAlign: "center",

                          background: step === 3 ? "#93CF57" : "#F46B5A",
                        }}
                      >
                        3
                      </p>
                    </div>
                    <Divider style={{ width: "100%" }} />
                  </Box>

                  <Box
                    style={{
                      width: "100%",
                      backgroundColor: "#F2F7FA",
                    }}
                  >
                    <Box style={{ display: "flex" }}>
                      <Box style={{ flex: 2, padding: "0 20px" }}>
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            style={{ marginLeft: "10px", paddingTop: "5px" }}
                          >
                            <Typography style={{}}>First Name</Typography>
                            <input
                              style={{
                                marginRight: "5px",
                                width: "90%",
                                padding: "8px",
                                borderRadius: "4px",
                                borderStyle: "none",
                              }}
                              type="text"
                              placeholder="Lewin"
                              name="fname"
                              value={values.fname}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <Typography
                              style={{
                                fontSize: 12,
                                color: "red",
                              }}
                            >
                              {touched.fname && errors.fname}
                            </Typography>
                          </Box>

                          <Box
                            style={{ marginLeft: "10px", paddingTop: "5px" }}
                          >
                            <Typography style={{}}>Last Name</Typography>
                            <input
                              style={{
                                marginleft: "5px",
                                width: "90%",
                                padding: "8px",
                                borderRadius: "4px",
                                borderStyle: "none",
                              }}
                              type="text"
                              placeholder="Pandey"
                              name="lname"
                              value={values.lname}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Box>
                        </Box>

                        <Typography style={{ fontSize: 12, color: "red" }}>
                          {touched.lname && errors.lname}
                        </Typography>

                        <Box style={{ marginLeft: "10px", paddingTop: "8px" }}>
                          <Typography style={{}}>Email</Typography>
                          <input
                            style={{
                              width: "95%",
                              padding: "8px",
                              borderRadius: "4px",
                              borderStyle: "none",
                            }}
                            type="text"
                            placeholder="xyz@gmail.com"
                            name="email2"
                            value={values.email2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Box>

                        <Typography
                          style={{
                            marginLeft: "10px",
                            fontSize: 12,
                            color: "red",
                          }}
                        >
                          {touched.email2 && errors.email2}
                        </Typography>
                        <Box style={{ marginLeft: "10px", paddingTop: "8px" }}>
                          <Typography style={{}}>Phone no</Typography>
                          <input
                            style={{
                              width: "95%",
                              padding: "8px",
                              borderRadius: "4px",
                              borderStyle: "none",
                            }}
                            type="number"
                            placeholder=" "
                            name="phoneno"
                            value={values.phoneno}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Box>
                        <Typography
                          style={{
                            marginLeft: "10px",
                            fontSize: 12,
                            color: "red",
                          }}
                        >
                          {touched.phoneno && errors.phoneno}
                        </Typography>
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "spacebetween",
                          }}
                        >
                          <Box
                            style={{ marginLeft: "10px", paddingTop: "8px" }}
                          >
                            <Typography style={{}}>Zip Code</Typography>
                            <input
                              style={{
                                width: "90%",
                                padding: "8px",
                                borderRadius: "4px",
                                borderStyle: "none",
                              }}
                              type="text"
                              placeholder="+977*"
                              name="zipcode"
                              value={values.zipcode}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Box>

                          <Box
                            style={{ marginLeft: "10px", paddingTop: "8px" }}
                          >
                            <Typography style={{}}>Select State</Typography>
                            <input
                              style={{
                                width: "90%",
                                padding: "8px",
                                borderRadius: "4px",
                                borderStyle: "none",
                              }}
                              type="text"
                              placeholder="State*"
                              name="state"
                              value={values.state}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Box>
                        </Box>
                        <Typography
                          style={{
                            marginLeft: "10px",
                            fontSize: 12,
                            color: "red",
                          }}
                        >
                          {touched.zipcode && errors.zipcode}
                        </Typography>

                        <Box style={{ marginLeft: "10px", paddingTop: "8px" }}>
                          <Typography style={{}}>Home Address</Typography>
                          <input
                            style={{
                              width: "95%",
                              padding: "8px",
                              borderRadius: "4px",
                              borderStyle: "none",
                            }}
                            type="Text"
                            placeholder=""
                            name="haddress"
                            value={values.haddress}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Box>
                        <Typography
                          style={{
                            marginLeft: "10px",
                            fontSize: 12,
                            color: "red",
                          }}
                        >
                          {touched.haddress && errors.haddress}
                        </Typography>
                        <Box style={{ marginLeft: "10px", paddingTop: "8px" }}>
                          <Typography style={{}}>Select Country</Typography>
                          <input
                            style={{
                              width: "95%",
                              padding: "8px",
                              borderRadius: "4px",
                              borderStyle: "none",
                            }}
                            type="text"
                            placeholder=" Country*"
                            name="scountry"
                            value={values.scountry}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Box>
                        <Typography
                          style={{
                            marginLeft: "10px",
                            fontSize: 12,
                            color: "red",
                          }}
                        >
                          {touched.scountry && errors.scountry}
                        </Typography>
                      </Box>
                      <Box style={{ flex: 1, padding: "0 20px" }}>
                        <Box
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Avatar
                            style={{
                              marginTop: "20px",
                              width: "150px",
                              height: "150px",
                            }}
                          ></Avatar>
                          <Input
                            type="file"
                            style={{ marginTop: "20px", marginLeft: "45px" }}
                          >
                            Choose file
                          </Input>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: "10px 0px  ",
                      }}
                    >
                      <Button
                        style={{
                          padding: "5px",
                          marginTop: "10px",
                          marginBottom: "10px",
                          marginLeft: "30px",
                          backgroundColor: "#66D1F5",
                          textTransform: "capitalize",
                        }}
                        onClick={handlePrevious}
                      >
                        Previous
                      </Button>

                      <Button
                        style={{
                          padding: "5px",
                          marginTop: "10px",
                          marginBottom: "10px",
                          backgroundColor: "#66D1F5",
                          textTransform: "capitalize",
                          marginRight: "15px",
                          // marginLeft: "  435px",
                        }}
                        type="submit"
                        // onClick={handleNext}
                      >
                        Next Step
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </div>

              <div style={{ display: step === 3 ? "block " : "none" }}>
                <Box
                  style={{
                    marginTop: "10px",
                    boxShadow: " 3px 3px 5px 6px #ccc",
                    marginLeft: "350px",
                    // height: "615px",
                    width: "600px",
                    alignContent: "center",
                    backgroundColor: "#FFFFFF",
                    borderTopColor: "solid green",
                  }}
                >
                  <Box
                    style={{
                      borderColor: "2px solid ",
                      height: "50px",
                      width: "100%",
                      backgroundColor: "#DDDDDD",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "20px ",
                        textAlign: "center",
                        marginLeft: "5px",
                        padding: "7px",
                      }}
                    >
                      Advance Signup From Wizard
                    </Typography>
                  </Box>

                  <Box
                    style={{
                      width: "100%",
                      height: "100px",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        marginLeft: "40px",
                        marginRight: "40px",
                      }}
                    >
                      <p
                        style={{
                          width: "35px",
                          height: "35px",
                          borderRadius: "50%",
                          fontSize: "18px",
                          color: "#fff",
                          lineHeight: "35px",
                          textAlign: "center",

                          background: step === 1 ? "#93CF57" : "#F46B5A",
                        }}
                      >
                        1
                      </p>
                      <div
                        style={{
                          marginLeft: "30px",
                          marginTop: "35px",
                          height: "2px",
                          backgroundColor: "#BDBDBD",
                          width: "30%",
                        }}
                      ></div>

                      <p style={{ flex: 1 }} />
                      <p
                        style={{
                          width: "35px",
                          height: "35px",
                          borderRadius: "50%",
                          fontSize: "18px",
                          color: "#fff",
                          lineHeight: "35px",
                          textAlign: "center",

                          background: step === 2 ? "#93CF57" : "#F46B5A",
                        }}
                      >
                        2
                      </p>
                      <div
                        style={{
                          marginLeft: "30px",
                          marginTop: "35px",
                          height: "2px",
                          backgroundColor: "#BDBDBD",
                          width: "30%",
                        }}
                      ></div>

                      <p style={{ flex: 1 }} />
                      <p
                        style={{
                          width: "35px",
                          height: "35px",
                          borderRadius: "50%",
                          fontSize: "18px",
                          color: "#fff",
                          lineHeight: "35px",
                          textAlign: "center",

                          background: step === 3 ? "#93CF57" : "#F46B5A",
                        }}
                      >
                        3
                      </p>
                    </div>
                  </Box>

                  <Box
                    style={{
                      marginLeft: "15px",
                      marginRight: "5px",
                      height: "410px",
                      width: "95%",
                      backgroundColor: "#F2F7FA",
                    }}
                  >
                    <Box
                      style={{
                        marginLeft: "15px",
                        marginRight: "5px",
                        height: "310px",
                        width: "55%",
                        backgroundColor: "#FFFFFF",
                      }}
                    ></Box>
                  </Box>
                  <Box style={{ display: "flex", flexDirection: "row" }}>
                    <Button
                      style={{
                        padding: "5px",
                        marginTop: "5px",
                        marginLeft: "10px",
                        backgroundColor: "#66D1F5",
                        textTransform: "capitalize",
                      }}
                      onClick={handlePrevious}
                    >
                      Previous
                    </Button>

                    <Button
                      style={{
                        padding: "8px",
                        marginTop: "5px",
                        backgroundColor: "#66D1F5",
                        textTransform: "capitalize",
                        marginRight: "5px",
                        marginLeft: "  435px",
                      }}
                      disabled
                    >
                      Submit
                    </Button>
                  </Box>
                </Box>
              </div>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};
export default mform;
