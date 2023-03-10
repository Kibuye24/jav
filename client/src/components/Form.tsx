import {
  Box,
  Typography,
  Grid,
  FormControl,
  TextField,
  FormHelperText,
  Button,
} from "@mui/material";
import React from "react";

const Form = () => {
  return (
    <form
      style={{
        marginTop: "20px",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        gap: "20px",
      }}
      className="rounded-lg shadow-lg p-8 mb-8"
    >
      <Box>
        <FormControl sx={{ flex: 1, flexDirection: "row", width: "100%" }}>
          <Grid container width="100%">
            <Grid item direction="column" xs={12} sm={6}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                First Name
              </FormHelperText>
              <TextField
                required
                id="outlined-basic"
                color="info"
                variant="outlined"
                sx={{
                  width: "95%",
                }}
              />
            </Grid>
            <Grid item direction="column" xs={12} sm={6}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Last Name
              </FormHelperText>
              <TextField
                fullWidth
                required
                id="outlined-basic"
                color="info"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </FormControl>
      </Box>

      <FormControl>
        <FormHelperText
          sx={{
            fontWeight: 500,
            margin: "10px",
            fontSize: 16,
            color: "#11142d",
          }}
        >
          Email
        </FormHelperText>
        <TextField fullWidth required color="info" variant="outlined" />
      </FormControl>

      <FormControl>
        <FormHelperText
          sx={{
            fontWeight: 500,
            margin: "10px",
            fontSize: 16,
            color: "#11142d",
          }}
        >
          Phone
        </FormHelperText>
        <TextField
          fullWidth
          required
          color="info"
          variant="outlined"
          type="number"
        />
      </FormControl>
      <FormControl>
        <FormHelperText
          sx={{
            fontWeight: 500,
            margin: "10px",
            fontSize: 16,
            color: "#11142d",
          }}
        >
          Address
        </FormHelperText>
        <TextField fullWidth required color="info" variant="outlined" />
      </FormControl>
      <FormControl>
        <FormHelperText
          sx={{
            fontWeight: 500,
            margin: "10px",
            fontSize: 16,
            color: "#11142d",
          }}
        >
          Skills
        </FormHelperText>
        <TextField fullWidth required color="info" variant="outlined" />
      </FormControl>
      <FormControl>
        <FormHelperText
          sx={{
            fontWeight: 500,
            margin: "10px",
            fontSize: 16,
            color: "#11142d",
          }}
        >
          Availability
        </FormHelperText>
        <TextField fullWidth required color="info" variant="outlined" />
      </FormControl>
      <FormControl>
        <FormHelperText
          sx={{
            fontWeight: 500,
            margin: "10px",
            fontSize: 16,
            color: "#11142d",
          }}
        >
          Emergency Contact
        </FormHelperText>
        <TextField fullWidth required color="info" variant="outlined" />
      </FormControl>
      <Button variant="contained">Submit</Button>
    </form>
  );
};

export default Form;
