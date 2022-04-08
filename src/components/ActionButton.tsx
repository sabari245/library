import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface ActionButtonProps {
  onClick: () => void;
}

function ActionButton(props: ActionButtonProps) {
  return (
    <Box sx={{ position: "fixed", bottom: 20, right: 20 }}>
      <Fab color="primary" aria-label="add book" onClick={props.onClick}>
        <AddIcon />
      </Fab>
    </Box>
  );
}

export default ActionButton;
