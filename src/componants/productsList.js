import { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { fetchAllProducts } from "../services/productService";
export function ProductsList() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await fetchAllProducts();
    setProducts(response.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Container className="mt-5 text-center">
        <Alert>Products List</Alert>
      </Container>
      <Container>
        <Row>
          {products.map((product) => {
            return (
              <Col lg={4} className='mt-4'>
                <Card>
                  <Card.Body>
                    <Card.Title>{product.name} #{product.pid}</Card.Title>
                    <Card.Text>{product.description}<h3 className="mt-3">&#8377;{product.price}</h3></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
