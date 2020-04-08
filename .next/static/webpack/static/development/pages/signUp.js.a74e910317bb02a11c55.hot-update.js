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




var initialValues = {
  firstname: " ",
  lastname: "   ",
  email: " ",
  passsword: "   ",
  confirm: " "
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
      lineNumber: 28,
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
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: initialValues,
    onSubmit: function onSubmit(values, _ref) {
      var resetForm = _ref.resetForm;
      console.log(values);
    },
    validationSchema: logInValidationSchema,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
        lineNumber: 54,
        columnNumber: 9
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
        lineNumber: 65,
        columnNumber: 11
      }
    }, "Sign Up", " "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        color: "#9C9C9C",
        padding: "5px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }
    }, "Please fill in this form to create an account!"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
      style: {
        width: "100%",
        marginBottom: "20px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
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
        lineNumber: 81,
        columnNumber: 13
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
      on: true,
      type: "text",
      placeholder: "First Name",
      border: "1px",
      disableUnderline: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 15
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      style: {
        width: "100%",
        backgroundColor: "#F2F2F2",
        //   border: "1px solid #CCCCCC",
        outline: "none",
        marginLeft: "5px",
        borderRadius: "4px",
        padding: "0px 10px"
      },
      type: "text",
      placeholder: "Last Name",
      border: "1px",
      disableUnderline: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 15
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      style: {
        width: "100%",
        backgroundColor: "#F2F2F2",
        //   border: "1px solid #CCCCCC",
        outline: "none",
        marginRight: "5px",
        borderRadius: "4px",
        padding: "5px 10px"
      },
      type: "text",
      placeholder: "Email",
      border: "1px",
      disableUnderline: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
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
      type: "text",
      placeholder: "Password",
      border: "1px",
      disableUnderline: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
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
      type: "text",
      placeholder: "Confirm Password",
      border: "1px",
      disableUnderline: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        marginTop: "25px",
        color: "#9C9C9C"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 13
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
        lineNumber: 171,
        columnNumber: 15
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
        lineNumber: 179,
        columnNumber: 11
      }
    }, "Sign in"));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (signUp);

/***/ })

})
//# sourceMappingURL=signUp.js.a74e910317bb02a11c55.hot-update.js.map