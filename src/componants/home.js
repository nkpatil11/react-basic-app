import { Alert, Container } from "react-bootstrap";

export function Home() {
    return (
        <Container className="mt-5 text-center">
            <Alert>This is Home page</Alert>
            <p>In this app you can peform CRUD operation on product</p>
        </Container>
    )
}