import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMovie, getMovies } from "../../actions/movies";
import { AnyAction } from "redux-saga";
import MovieDetail from "../../Components/MovieDetail";
import { IMovie } from "../../models/movies";
import { Alert, Button, Container, Modal } from "react-bootstrap";
import MovieForm from "../../Components/MovieForm/MovieForm";

type Props = {};
const Movies = (props: Props) => {
  const dispatch = useDispatch();
  const { listMovies, deletedMovie, newMovie, updateMovie } = useSelector(
    (state: AnyAction) => state.movies
  );
  const [showMessage, setShowMessage] = useState(false); // Estado para controlar la visibilidad del mensaje
  const [message, setMessage] = useState<string>("");
  const [variantMessage, setVariantMessage] = useState<string>("");

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  useEffect(() => {
    if (deletedMovie) {
      setShowMessage(true);
      setMessage(deletedMovie.message);
      setVariantMessage("danger");
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [deletedMovie]);

  useEffect(() => {
    if (newMovie) {
      setShowMessage(true);
      setMessage("New Movie Added");
      setVariantMessage("success");
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [newMovie]);

  useEffect(() => {
    if (updateMovie) {
      setShowMessage(true);
      setMessage("Movie updated successfully");
      dispatch(getMovies());
      setVariantMessage("warning");
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [updateMovie]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (newMovie: IMovie) => {
    console.log(newMovie);
    dispatch(createMovie(newMovie));
    handleClose();
  };

  return (
    <Fragment>
      {showMessage && (
        <Alert
          variant={variantMessage}
          className="alert alert-info warning"
          role="alert"
          style={{
            position: "fixed",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "1000",
          }}
        >
          {message}
        </Alert>
      )}
      <Container className="text-center p-3">
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MovieForm onSubmit={handleSubmit} />
        </Modal.Body>
      </Modal>
      {listMovies && listMovies.length > 0
        ? listMovies.map((movie: IMovie) => (
            <MovieDetail key={movie.id} movie={movie} />
          ))
        : []}
    </Fragment>
  );
};

export default Movies;
