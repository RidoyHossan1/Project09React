import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  const [text, setText] = useState("Enter text here");

  const upcaseClick = () => {
    let newTxt = text.toUpperCase();
    setText(newTxt);

    props.showAlert("Upper Case Convert", "success");
  };

  const lowcaseClick = () => {
    let newTxt = text.toLowerCase();
    setText(newTxt);

    props.showAlert("Lower Case Convert", "success");
  };

  const titleClick = () => {
    let newTxt = text.toLowerCase().replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
    setText(newTxt);

    props.showAlert("Capitalized Case Convert", "success");
  };

  const copyTextClick = () => {
    navigator.clipboard.writeText(text);

    props.showAlert("Text Copied", "success");
  };

  const removeSpaceClick = () => {
    let newTxt = text.split(/[ ]+/);
    setText(newTxt.join(" "));

    props.showAlert("Removed Extra Speaces", "success");
  };

  const clearClick = () => {
    setText("");

    props.showAlert("Clear Text", "danger");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className={`w-1/2  mt-4 mx-auto text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1 className="w-fit mx-auto text-5xl mb-6 font-bold">
          Customize Your Text Here
        </h1>

        <div className="mb-3">
          <textarea
            id="myBox"
            value={text}
            onChange={handleOnChange}
            className="form-control"
            rows="8"
          ></textarea>
        </div>

        <div className="">
          <button className="btn btn-primary" onClick={upcaseClick}>
            Convert To UpperCase
          </button>
          <button className="btn btn-primary mx-3" onClick={lowcaseClick}>
            Convert To LowerCase
          </button>

          <button className="btn btn-primary " onClick={titleClick}>
            Convert To Title
          </button>

          <button className="btn btn-primary mx-3" onClick={copyTextClick}>
            Copy Text
          </button>

          <button className="btn btn-primary" onClick={removeSpaceClick}>
            Remove Extra Spaces
          </button>

          <br />

          <button className="btn btn-primary my-3" onClick={clearClick}>
            Clear Text
          </button>

          <div className="container my-5 p-0">
            <h2 className="font-bold text-3xl mb-2">Your Text Summary</h2>
            <p className="text-xl">
              {
                text.split(/\s+/).filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
              words and {text.length} characters
            </p>
            <p className="text-xl">
              It can be read in {0.008 * text.split(" ").length} Minute
            </p>
            <h3 className="font-bold text-3xl mb-2 mt-5">Preview</h3>

            <p className="text-xl">
              {text.length > 0 ? text : "Enter Something to Preview"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
