import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface Books {
  title: string;
  author: string;
  date: string;
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (props: Books) => void;
}
function AddBookModal(props: ModalProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (props.open) {
      setTitle("");
      setAuthor("");
      setDate("");
    }
  }, [props.open]);

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={
          window.innerWidth > 600
            ? { ...style, width: 400 }
            : { ...style, width: window.innerWidth - 100 }
        }
      >
        <Typography variant="h6" id="modal-modal-title">
          Add a new book
        </Typography>
        <Typography
          variant="subtitle1"
          id="modal-modal-description"
          color="text.secondary"
        >
          Enter the details of the book you want to add
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="subtitle1">Title</Typography>
            <Input
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="subtitle1">Author</Typography>
            <Input
              type="text"
              value={author}
              placeholder="Author"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="subtitle1">Date</Typography>
            <Input
              type="text"
              value={date}
              placeholder="Date"
              onChange={(e) => setDate(e.target.value)}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 3 }}>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button
            onClick={() => {
              props.onSubmit({ title, author, date });
              props.onClose();
            }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default AddBookModal;
