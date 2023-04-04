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
  Typography,
} from "@mui/material";
import { useForm, Resolver } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  city: string;
  availability: string;
  emergencyContact: string;
}

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: "required",
            message: "This is required.",
          },
          lastName: {
            type: "required",
            message: "This is required.",
          },
          email: {
            type: "required",
            message: "This is required.",
          },
          phone: {
            type: "required",
            message: "This is required.",
            maxLength: 10,
          },
          city: {
            type: "required",
            message: "This is required.",
          },
          availability: {
            type: "required",
            message: "This is required.",
          },
          emergencyContact: {
            type: "required",
            message: "This is required.",
            maxLength: 10,
          },
        }
      : {},
  };
};

const Form = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => {
    try {
      Axios.post("https://just-a-vision.onrender.com/api/v1/members", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((res) => navigate("/"));
    } catch (err) {
      console.log(err);
    }
  });

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
      onSubmit={onSubmit}
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
                {...register("firstName")}
              />
              {errors?.firstName && (
                <Typography>{errors.firstName.message}</Typography>
              )}
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
                {...register("lastName")}
              />
              {errors?.lastName && (
                <Typography>{errors.lastName.message}</Typography>
              )}
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
          type="email"
          variant="outlined"
          {...register("email")}
        />
        {errors?.email && <Typography>{errors.email.message}</Typography>}
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
          {...register("phone")}
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
          {...register("city")}
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
        <Select {...register("availability")}>
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
          {...register("emergencyContact")}
        />
      </FormControl>

      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
