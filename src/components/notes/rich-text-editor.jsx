import React from "react";

import "./rich-text-editor.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export function RichTextEditor({ value, setValue }) {
  const toolbarOptions = [
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    ["link", "image"],
    ["clean"],
  ];
  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <ReactQuill
      value={value}
      onChange={setValue}
      placeholder="Write Note here..."
      modules={modules}
    />
  );
}
