import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces cleared!", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#202020" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          rows="8"
          value={text}
        ></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary my-3 mx-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-primary my-3 mx-2"
        >
          Speak Text
        </button>
        <button
          className="btn btn-primary my-3 mx-2"
          onClick={handleExtraSpace}
        >
          Clear Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : "Enter in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
