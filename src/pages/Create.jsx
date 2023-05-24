import { Form, redirect, useLocation, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { useContext, useState } from "react";
import { TaskContext } from "../routes/root";

export async function action({ request, params }) {
  let formData = await request.formData();
  console.log(formData);
  return redirect(`/`);
}

export default function Create() {
  const { tasks, setTask } = useContext(TaskContext);
  const navigate = useNavigate();

  return (
    <div id="form-container">
      <Form method="post">
        <div>
          <Input
            id="task-name"
            name="task-name"
            placeholder="Enter Task  Name"
          />
        </div>
        <Button type="submit" id="button-save">
          Save
        </Button>
      </Form>
    </div>
  );
}
