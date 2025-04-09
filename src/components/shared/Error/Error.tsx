import { Container } from "../Container";

function ErrorComponent() {
  return (
    <Container>
      <div className="flex justify-center items-center h-64">
        <div className="text-red-500">Error loading products</div>
      </div>
    </Container>
  );
}

export { ErrorComponent };
