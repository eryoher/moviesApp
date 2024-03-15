import { IDeleteMovieParams, IMovie } from "../../models/movies";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteMovie, updateMovie } from "../../actions/movies";
import { useState } from "react";
import MovieForm from "../MovieForm/MovieForm";

type Props = {
  movie: IMovie;
};

const MovieDetail = ({ movie }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [movieUpdate, setMovieUpdate] = useState<IMovie>();
  const dispatch = useDispatch();
  const handleDelete = (id: string) => {
    const params: IDeleteMovieParams = { id };
    dispatch(deleteMovie(params));
  };

  const handleCloseModal = () => setShowModal(false);

  const handleUpdate = (movie: IMovie) => {
    setShowModal(true);
    setMovieUpdate(movie);
  };

  const handleSubmit = (movie: IMovie) => {
    dispatch(updateMovie(movie));
    handleCloseModal();
  };

  return (
    <Container>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MovieForm onSubmit={handleSubmit} movieToEdit={movieUpdate} />
        </Modal.Body>
      </Modal>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>Detalles de la Película</h2>
          <Card>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <Image src={movie.poster} fluid />
                </Col>
                <Col md={8}>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>Director: {movie.director}</Card.Text>
                  <Card.Text>Género: {movie.genre}</Card.Text>
                  <Card.Text>Año de lanzamiento: {movie.year}</Card.Text>
                  <Card.Text>Duración: {movie.duration} minutos</Card.Text>
                  <Card.Text>Clasificación: {movie.rate}</Card.Text>
                  <Card.Text>Genre: {movie.genre.join(",")}</Card.Text>
                  <div className="text-right">
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(movie.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="warning"
                      onClick={() => handleUpdate(movie)}
                    >
                      Update
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetail;
