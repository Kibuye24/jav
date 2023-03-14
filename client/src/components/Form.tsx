import { useState } from "react";
import Axios from "axios";
import {
  Box,
  Grid,
  FormControl,
  TextField,
  FormHelperText,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

interface FormData {
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  city: String;
  skills: String;
  availability: String;
  emergencyContact: String;
}

const Form = () => {
  const { formData, setFormData } = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    skills: "",
    availability: "",
    emergencyContact: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      Axios.post("http://127.0.0.1:8080/api/v1/members", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((response) => console.log(response));
    } catch (err) {
      console.log(err);
    }
  };

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
      method="POST"
      onSubmit={handleSubmit}
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
                color="info"
                variant="outlined"
                sx={{
                  width: "95%",
                }}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
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
                color="info"
                variant="outlined"
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
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
        <TextField
          fullWidth
          required
          variant="outlined"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
          Phone
        </FormHelperText>
        <TextField
          fullWidth
          required
          variant="outlined"
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
          City
        </FormHelperText>
        <TextField
          fullWidth
          required
          variant="outlined"
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
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
          Skills
        </FormHelperText>
        <TextField
          fullWidth
          required
          variant="outlined"
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
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
          Availability
        </FormHelperText>
        <Select>
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="visits">During Visits</MenuItem>
        </Select>
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
        <TextField
          fullWidth
          required
          variant="outlined"
          onChange={(e) =>
            setFormData({ ...formData, emergencyContact: e.target.value })
          }
        />
      </FormControl>

      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
