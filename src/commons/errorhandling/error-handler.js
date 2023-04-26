import { UncontrolledAlert } from "reactstrap";

function ErrorHandler({ status, message }) {
  return (
    <div>
      <br />
      <UncontrolledAlert color="danger">
        An unexpected error occurred on the server side!
        <br />
        {status} - {message.error}
      </UncontrolledAlert>
    </div>
  );
}
export default ErrorHandler;
