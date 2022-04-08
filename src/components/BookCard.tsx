import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

import { Delete } from "@mui/icons-material";

interface BookCardProps {
  title: string;
  author: string;
  date: string;
  onDelete: () => void;
}

function BookCard(props: BookCardProps) {
  return (
    <Card sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.date}
        </Typography>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          by {props.author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="error" onClick={props.onDelete}>
          <Delete /> Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default BookCard;
