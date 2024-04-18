import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const NewTaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ title });
    setTitle("");
  };

  const handletitleChange = e => setTitle(e.target.value);

  return (
    <Form
      onSubmit={handleSubmit}
      onSubmitCapture={() => {
        if ("activeElement" in document) document.activeElement.blur();
      }}
    >
      <FormGroup>
        <Label>TITLE</Label>
        <Input
          placeholder="Task Title"
          required
          type="text"
          value={title}
          onChange={handletitleChange}
        />
      </FormGroup>
      <FormGroup>
        <Button block outline type="submit" color="primary">
          Create Task
        </Button>
      </FormGroup>
    </Form>
  );
};

export default NewTaskForm;
