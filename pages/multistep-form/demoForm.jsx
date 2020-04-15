import react from "react";
import { Typography, Box, Divider, Input, Button } from "@material-ui/core";

const form = () => {
  return (
    <Box
      style={{
        marginTop: "10px",
        boxShadow: " 3px 3px 5px 6px #ccc",
        marginLeft: "350px",
        height: "615px",
        width: "600px",
        display: "flex",
        alignContent: "center",
        backgroundColor: "#DDDDDD",
        borderTopColor: "solid green",
      }}
    >
      <Box style={{ flex: 2, backgroundColor: "black", padding: "0 20px" }}>

      <Box style={{padding:" 0 20px"}}>
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-around",
                        }}
                      >
                        <Box style={{ marginLeft: "10px", paddingTop: "5px" }}>
                          <Typography style={{}}>First Name</Typography>
                          <input
                            style={{
                              width: "90%",
                              padding: "8px",
                              borderRadius: "4px",
                            }}
                            type="text"
                            placeholder="Lewin"
                            name="fname"
                        
                          />
                          <Typography
                            style={{
                              fontSize: 12,
                              color: "red",
                            }}
                          >
                            sdfsaf
                          </Typography>
                        </Box>

                        <Box style={{ marginLeft: "10px", paddingTop: "5px" }}>
                          <Typography style={{}}>Last Name</Typography>
                          <input
                            style={{
                              width: "90%",
                              padding: "8px",
                              borderRadius: "4px",
                            }}
                            type="text"
                            placeholder="Pandey"
                            name="lname"
                            
                          />
                        </Box>
                      </Box>

                      <Typography style={{ fontSize: 12, color: "red" }}>
                       sdfafd
                      </Typography>

                      <Box style={{ marginLeft: "10px", paddingTop: "8px" }}>
                        <Typography style={{}}>Email</Typography>
                        <input
                          style={{
                            width: "90%",
                            padding: "8px",
                            borderRadius: "4px",
                          }}
                          type="text"
                          placeholder="xyz@gmail.com"
                          name="email2"
                          
                        />
                      </Box>

                      <Typography
                        style={{
                          marginLeft: "10px",
                          fontSize: 12,
                          color: "red",
                        }}
                      >
                        dsafasfasdf
                      </Typography>
                      <Box style={{ marginLeft: "10px", paddingTop: "8px" }}>
                        <Typography style={{}}>Phone no</Typography>
                        <input
                          style={{
                            width: "90%",
                            padding: "8px",
                            borderRadius: "4px",
                          }}
                          type="number"
                          placeholder=" "
                          name="phoneno"
                          
                        />
                      </Box>
                      <Typography
                        style={{
                          marginLeft: "10px",
                          fontSize: 12,
                          color: "red",
                        }}
                      >
                       sdfdsfsdfa
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "spacebetween",
                        }}
                      >
                        <Box style={{ marginLeft: "10px", paddingTop: "8px" }}>
                          <Typography style={{}}>Zip Code</Typography>
                          <input
                            style={{
                              width: "90%",
                              padding: "8px",
                              borderRadius: "4px",
                            }}
                            type="text"
                            placeholder="+977*"
                            name="zipcode"
                            
                          />
                        </Box>

                        <Box style={{ marginLeft: "10px", paddingTop: "8px" }}>
                          <Typography style={{}}>Select State</Typography>
                          <input
                            style={{
                              width: "90%",
                              padding: "8px",
                              borderRadius: "4px",
                            }}
                            type="text"
                            placeholder="State*"
                            name="state"
                           
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
                       dsfsadfsdf
                      </Typography>

                      <Box style={{ marginLeft: "10px", paddingTop: "8px" }}>
                        <Typography style={{}}>Home Address</Typography>
                        <input
                          style={{
                            width: "90%",
                            padding: "8px",
                            borderRadius: "4px",
                          }}
                          type="Text"
                          placeholder=""
                          name="haddress"
                          
                        />
                      </Box>
                      <Typography
                        style={{
                          marginLeft: "10px",
                          fontSize: 12,
                          color: "red",
                        }}
                      >
                       dsfasdfdsfasd
                      </Typography>
                      <Box style={{ marginLeft: "10px", paddingTop: "8px" }}>
                        <Typography style={{}}>Select Country</Typography>
                        <input
                          style={{
                            width: "90%",
                            padding: "8px",
                            borderRadius: "4px",
                          }}
                          type="text"
                          placeholder=" Country*"
                          name="scountry"
                          
                        />
                      </Box>
                      <Typography
                        style={{
                          marginLeft: "10px",
                          fontSize: 12,
                          color: "red",
                        }}
                      >
                     dsfaasdfdd
                      </Typography>
                    </Box>
       
      </Box>
      <Box style={{ flex: 1, backgroundColor: "green", padding: "0 20px"   }}>
       
      </Box>
    </Box>
  );
};
export default form;
