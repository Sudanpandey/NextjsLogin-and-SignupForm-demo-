webpackHotUpdate("static/development/pages/signUp.js",{

/***/ "./pages/signUp.jsx":
/*!**************************!*\
  !*** ./pages/signUp.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
var _this = undefined,
    _jsxFileName = "/home/lewin/formPractice/pages/signUp.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var signupValidationSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  firstname: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("First name  is required"),
  lastname: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("Last name is required"),
  email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("Email is required"),
  password: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "Too Short!").max(25, "Too Long!").min(6, "Password has to be longer than 6 characters!").required("Valid password  is required"),
  cpassword: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "Too Short!").max(25, "Too Long!").min(6, "Password has to be longer than 6 characters!").required("Confirm  password  is required")
});
var initialValues = {
  firstname: " ",
  lastname: "   ",
  email: " ",
  passsword: "   ",
  cpassword: " "
};

var signUp = function signUp() {
  return __jsx("div", {
    style: {
      backgroundColor: "#3598DC",
      paddingBottom: "40px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: initialValues,
    onSubmit: function onSubmit(values, _ref) {
      var resetForm = _ref.resetForm;
      console.log(values);
    },
    validationSchema: signupValidationSchema,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, function (_ref2) {
    var values = _ref2.values,
        handleChange = _ref2.handleChange,
        handleBlur = _ref2.handleBlur,
        handleSubmit = _ref2.handleSubmit,
        errors = _ref2.errors,
        touched = _ref2.touched;
    console.log(errors);
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      style: {
        borderRadius: "2px",
        width: "380px",
        height: "500px",
        backgroundColor: "#FFFFFF ",
        padding: "20px",
        margin: "30px"
      },
      boxShadow: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        color: "333333",
        textAlign: "left",
        fontSize: "30px ",
        fontWeight: "bold",
        paddingBottom: "15px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }, "Sign Up", " "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        color: "#9C9C9C",
        padding: "5px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }
    }, "Please fill in this form to create an account!"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
      style: {
        width: "100%",
        marginBottom: "20px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "25px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      style: {
        width: "100%",
        backgroundColor: "#F2F2F2",
        //   border: "1px solid #CCCCCC",
        outline: "none",
        marginRight: "5px",
        borderRadius: "4px",
        padding: "5px 10px"
      },
      name: "firstname",
      value: values.firstname,
      onChange: handleChange,
      onBlur: handleBlur,
      type: "text",
      placeholder: "First Name",
      border: "1px",
      disableUnderline: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 22
      }
    }, touched.firstname && errors.firstname), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      style: {
        width: "100%",
        backgroundColor: "#F2F2F2",
        //   border: "1px solid #CCCCCC",
        outline: "none",
        marginLeft: "5px",
        borderRadius: "4px",
        padding: "0px 10px"
      },
      name: "lastname",
      value: values.lastname,
      onChange: handleChange,
      onBlur: handleBlur,
      type: "text",
      placeholder: "Last Name",
      border: "1px",
      disableUnderline: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        fontSize: 12,
        color: "red"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 22
      }
    }, touched.firstname && errors.firstname)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      style: {
        width: "100%",
        backgroundColor: "#F2F2F2",
        //   border: "1px solid #CCCCCC",
        outline: "none",
        marginRight: "5px",
        borderRadius: "4px",
        padding: "5px 10px"
      },
      name: "email",
      value: values.email,
      onChange: handleChange,
      onBlur: handleBlur,
      type: "text",
      placeholder: "Email",
      border: "1px",
      disableUnderline: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 19
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      style: {
        width: "100%",
        backgroundColor: "#F2F2F2",
        //   border: "1px solid #CCCCCC",
        outline: "none",
        marginTop: "25px",
        marginRight: "5px",
        marginBottom: "25px",
        borderRadius: "4px",
        padding: "5px 10px"
      },
      name: "password",
      value: values.password,
      onChange: handleChange,
      onBlur: handleBlur,
      type: "text",
      placeholder: "Password",
      border: "1px",
      disableUnderline: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 19
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      style: {
        width: "100%",
        backgroundColor: "#F2F2F2",
        //   border: "1px solid #CCCCCC",
        outline: "none",
        marginTop: "25 px",
        marginRight: "5px",
        borderRadius: "4px",
        padding: "5px 10px"
      },
      name: "cpassword",
      value: values.cpassword,
      onChange: handleChange,
      onBlur: handleBlur,
      type: "text",
      placeholder: "Confirm Password",
      border: "1px",
      disableUnderline: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 19
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        marginTop: "25px",
        color: "#9C9C9C"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      style: {
        color: "#A8A19C"
      },
      size: "small",
      inputProps: {
        "aria-label": "checkbox with small size"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 21
      }
    }), "I Accept the Term and Condition")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      style: {
        borderRadius: "5px",
        width: "40%",
        backgroundColor: "#3598DC",
        color: "#FFFFFF",
        marginTop: "25px",
        padding: "10px"
      },
      variant: "contained",
      color: "#337AB7",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 17
      }
    }, "Sign in"));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (signUp);

/***/ })

})
//# sourceMappingURL=signUp.js.39102d52383a105ec9a6.hot-update.js.map