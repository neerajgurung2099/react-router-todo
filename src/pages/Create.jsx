import { Form, useLocation, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { useContext, useState } from "react";
import { TaskContext } from "../routes/root";

export async function action({ request, params }) {
  let formData = await request.formData();
  console.log(formData);
}

export default function Create() {
  const { tasks, setTask } = useContext(TaskContext);
  const navigate = useNavigate();

  return (
    <div id="form-container">
      <Form action="create">
        <div>
          <Input id="search-bar" placeholder="Enter Task  Name" />
        </div>
        <Button id="button-save">Save</Button>
      </Form>
    </div>
  );
}
