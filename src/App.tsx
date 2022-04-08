import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BookCard from "./components/BookCard";
import ActionButton from "./components/ActionButton";

import { useState } from "react";
import AddBookModal from "./components/AddBookModal";

interface Books {
  title: string;
  author: string;
  date: string;
}

function App() {
  const [books, setBooks] = useState<Books[]>([
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      date: "July 31, 1997",
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      date: "September 21, 1937",
    },
  ]);
  const [open, setOpen] = useState(false);

  const addBook = (book: Books) => {
    setBooks([...books, book]);
  };

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Library
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {books.map((book) => (
          <BookCard
            key={book.title}
            title={book.title}
            author={book.author}
            date={book.date}
            onDelete={() => {
              setBooks(books.filter((b) => b.title !== book.title));
            }}
          />
        ))}
      </Box>
      <ActionButton onClick={() => setOpen(true)} />
      <AddBookModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={addBook}
      />
    </Box>
  );
}

export default App;
