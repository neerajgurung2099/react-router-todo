import { Form } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Create() {
  return (
    <div id="form-container">
      <Form>
        <div>
          <Input id="search-bar" placeholder="Enter Task  Name" />
        </div>
        <Button id="button-save">Save</Button>
      </Form>
    </div>
  );
}
