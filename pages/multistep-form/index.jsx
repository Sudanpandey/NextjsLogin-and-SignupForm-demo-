import { useState } from "react";

const Index = () => {
  const [step, setStep] = useState(1);
  const handleNext = (event) => {
    event.preventDefault();
    setStep(step + 1);
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    setStep(step - 1);
  };

  return (
    <div className="container">
      <div style={{ display: "flex" }}>
        <p
          style={{
            color: step === 1 ? "blue" : "black",
          }}
        >
          1
        </p>

        <hr style={{ flex: 1 }} />   
        <p style={{ color: step === 2 ? "blue" : "black" }}>2</p>
        <hr style={{ flex: 1 }} />
        <p style={{ color: step === 3 ? "blue" : "black" }}>3</p>
      </div>
      <hr />

      <form>
        <div className={step === 1 ? "show form-container" : "hide"}>
          <p>Name</p>
          <input
            name="name"
            placeholder="Enter your name"
            type="text"
            className="input-style"
          />
          <button className="button-style" onClick={handleNext}>
            Next
            </button>
        </div>

        <div className={step === 2 ? "show form-container" : "hide"}>   
          <p>Address</p>
          <input
            name="address"
            placeholder="Enter your address"
            type="text"
            className="input-style"
          />
          <button className="button-style" onClick={handleNext}>
            Next
          </button>
          <button className="button-style" onClick={handlePrevious}>
            Previous
          </button>
        </div>

        <div className={step === 3 ? "show form-container" : "hide"}>
          <p>Age</p>
          <input
            name="age"
            placeholder="Enter your age"
            type="number"
            className="input-style"
          />
          <button className="button-style" disabled>
            Submit
          </button>
          <button className="button-style" onClick={handlePrevious}>
            Previous
          </button>
        </div>
      </form>

      <style jsx>{`
        .container {
          margin: 20px 450px;
          padding: 20px 50px 50px 50px;
          background-color: ghostwhite;
        }
        .title-text {
          text-align: center;
        }
        .show {
          display: block;
        }
        .hide {
          display: none;
        }
        .form-container {
          display: flex;
          flex-direction: column;
        }
        .input-style {
          padding: 5px 7px;
        }
        .button-style {
          margin-top: 8px;
          cursor: pointer;
        }
      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
        p {
          margin: 0px;
        }
      `}</style>
    </div>
  );
};

export default Index;
