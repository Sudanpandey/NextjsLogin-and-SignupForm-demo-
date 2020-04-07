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

const Index = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
          style={{ color: "333333", textAlign: "center", fontSize: "30px " }}
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
            <Typography style={{ padding: "10px", textAlign: "center" }}>
              or
            </Typography>
            <Divider style={{ width: "100%" }} />
          </Box>

          <Input
            style={{
              width: "100%",
              backgroundColor: "#ffffff",
              border: "1px solid #CCCCCC",
              outline: "none",
              borderRadius: "4px",
              padding: "0px 10px",
            }}
            type="text"
            placeholder="User name"
            border="1px"
          />
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
            type="text"
            placeholder="User name"
            border="1px"
          />

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
          >
            Sign in
          </Button>
        </Box>
        <Typography>
          {" "}
          <Checkbox
            size="small"
            inputProps={{ "aria-label": "checkbox with small size" }}
          />{" "}
          Remember me
        </Typography>
      </Box>
    </div>
  );
};
export default Index;
