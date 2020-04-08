webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
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
    _jsxFileName = "/home/lewin/formPractice/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var logInValidationSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  username: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "Too Short!").max(25, "Too Long!").required("Email is required"),
  password: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "Too Short!").max(25, "Too Long!").min(6, "Password has to be longer than 6 characters!").required("Valid password  is required")
});
var initialValues = {
  username: " ",
  password: "   "
};

var Index = function Index() {
  return __jsx("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: initialValues,
    onSubmit: function onSubmit(values, _ref) {
      var resetForm = _ref.resetForm;
      console.log(values);
    } // validationSchema={logInValidationSchema}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
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
        borderRadius: "5px",
        width: "310px",
        height: "440px",
        backgroundColor: "#F7F7F7",
        padding: "20px",
        margin: "60px"
      },
      boxShadow: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        color: "333333",
        textAlign: "center",
        fontSize: "30px "
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }, "Sign in", " "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      style: {
        padding: "20px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      style: {
        borderRadius: "5px",
        width: "100%",
        margin: "0px",
        backgroundColor: "#337AB7",
        color: "#FFFFFF"
      },
      variant: "contained",
      color: "#337AB7",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, "Sign in with . ", __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 34
      }
    }, "facebook")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      style: {
        marginTop: "12px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      style: {
        borderRadius: "5px",
        width: "100%",
        margin: "0px",
        backgroundColor: "#5BC0DE",
        color: "#FFFFFF"
      },
      variant: "contained",
      color: "#337AB7",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 19
      }
    }, "Sign in with . ", __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 36
      }
    }, " Twitter"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      style: {
        marginTop: "12px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      style: {
        borderRadius: "5px",
        width: "100%",
        margin: "0px",
        backgroundColor: "#D9534F",
        color: "#FFFFFF"
      },
      variant: "contained",
      color: "#337AB7",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 19
      }
    }, "Sign in with . ", __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 36
      }
    }, " Twitter"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "115px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
      style: {
        width: "100%"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 19
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        padding: "10px",
        textAlign: "center"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 19
      }
    }, "or"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
      style: {
        width: "100%"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 19
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      style: {
        width: "100%",
        backgroundColor: "#ffffff",
        border: "1px solid #CCCCCC",
        outline: "none",
        borderRadius: "4px",
        padding: "0px 10px"
      },
      name: "username",
      value: values.username,
      onChange: handleChange,
      onBlur: handleBlur,
      type: "text",
      placeholder: "User name",
      border: "1px",
      disableUnderline: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      style: {
        marginTop: "15px",
        width: "100%",
        backgroundColor: "#ffffff",
        border: "1px solid #CCCCCC",
        outline: "none",
        borderRadius: "4px",
        padding: "0px 10px"
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
        lineNumber: 158,
        columnNumber: 17
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      style: {
        borderRadius: "5px",
        width: "100%",
        backgroundColor: "#5BB85C",
        color: "#FFFFFF",
        marginTop: "35px"
      },
      variant: "contained",
      color: "#337AB7",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }
    }, "Sign in")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 15
      }
    }, " ", __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      size: "small",
      inputProps: {
        "aria-label": "checkbox with small size"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }
    }), " ", "Remember me"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.1ce920954a16006586d6.hot-update.js.map