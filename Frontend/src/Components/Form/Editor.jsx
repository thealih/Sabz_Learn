import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = ({ value, setValue }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={(event) => {
        setValue(data);
      }}
    />
  );
};

export default Editor;
