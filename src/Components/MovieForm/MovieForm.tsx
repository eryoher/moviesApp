import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { IMovie } from "../../models/movies";

interface Props {
  onSubmit: (movie: IMovie) => void;
  movieToEdit?: IMovie;
}

const initialMovieState: IMovie = {
  id: "",
  title: "",
  year: 0,
  director: "",
  duration: 0,
  poster: "",
  genre: [],
  rate: 0,
};

const MovieForm: React.FC<Props> = ({ onSubmit, movieToEdit }) => {
  const [movie, setMovie] = useState<IMovie>(initialMovieState);

  useEffect(() => {
    if (movieToEdit) {
      setMovie(movieToEdit);
    } else {
      setMovie(initialMovieState);
    }
  }, [movieToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]:
        name === "genre"
          ? value.split(",")
          : name === "year" || name === "duration" || name === "rate"
          ? parseInt(value, 10)
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(movie);
    setMovie(initialMovieState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={movie.title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formYear">
        <Form.Label>Year:</Form.Label>
        <Form.Control
          type="number"
          name="year"
          value={movie.year.toString()}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formDirector">
        <Form.Label>Director:</Form.Label>
        <Form.Control
          type="text"
          name="director"
          value={movie.director}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formDuration">
        <Form.Label>Duration:</Form.Label>
        <Form.Control
          type="number"
          name="duration"
          value={movie.duration.toString()}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formPoster">
        <Form.Label>Poster:</Form.Label>
        <Form.Control
          type="text"
          name="poster"
          value={movie.poster}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formGenre">
        <Form.Label>Genre:</Form.Label>
        <Form.Control
          type="text"
          name="genre"
          value={movie.genre.join(",")}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formRate">
        <Form.Label>Rate:</Form.Label>
        <Form.Control
          type="number"
          name="rate"
          value={movie.rate.toString()}
          onChange={handleChange}
        />
      </Form.Group>
      <div className="text-center pt-2">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default MovieForm;
