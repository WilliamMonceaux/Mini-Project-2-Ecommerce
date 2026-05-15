import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function PurchaseBtn() {
  return (
    <Button variant="contained" sx={{ fontSize: "1.2rem", padding: '.5rem' }}>
      Purchase now
    </Button>
  );
}

export { PurchaseBtn };
