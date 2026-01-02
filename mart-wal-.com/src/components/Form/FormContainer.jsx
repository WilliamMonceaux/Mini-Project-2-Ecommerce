import { Box } from "@mui/material";
import { FormInputs } from "./FormInputs";
import './form-container.css';

function FormContainer(props) {
  return (
    <main>
        <div className='flex-container'>
      <form>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "500px",
            height: "400px",
            border: "2px solid black",
            padding: "20px",
            backgroundColor: "#f5f5f5",
          }}
        >
          <FormInputs />
        </Box>
      </form>
      </div>
    </main>
  );
}

export { FormContainer };
