import React, { useState } from "react";

const Form = () => {
  const [option, setOption] = useState("SelectOne");

  const handleOption = (event) => {
    setOption(event.target.value);
  };

  return (
    <div style={{ padding: "15px" }}>
      <div className="number-of-quotes mt-5">Request For Quote</div>

      <div>
        <label className="input-label block mt-5">
          Enter direct requirement
        </label>
        <input
          className="input-box mt-2"
          style={{ width: "400px", height: "100px" }}
          placeholder="Enter direct requirement"
        ></input>
      </div>
      <div>
        <div className="details-header block mt-15">Fabric Details</div>
        <div>
          <form>
            <label className="input-label block mt-10">Blend</label>
            <select
              className="input-box mt-2 h-10"
              style={{ width: "94%" }}
              value={option}
              onChange={handleOption}
            >
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>

            <label className="input-label block mt-14">Quantity</label>
            <input
              className="input-box mt-2 h-10"
              style={{ width: "50%" }}
              type="text"
              placeholder=" Enter Quantity"
            />
            <select
              className="input-box mt-2 h-10"
              style={{ width: "44%", marginLeft: "50%" }}
              value={option}
              onChange={handleOption}
            >
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
            <div className="flex">
              <label className="input-label block mt-14">Reed</label>
              <label
                className="input-label block mt-14"
                style={{ marginLeft: "50%" }}
              >
                Pick
              </label>
            </div>
            <div className="flex mt-2">
              <input
                className="input-box h-10"
                style={{ width: "45%" }}
                type="text"
                placeholder=" X"
              />
              <p style={{ marginLeft: "52%", marginTop: "8px" }}>X</p>

              <input
                className="input-box h-10"
                style={{ width: "40%", marginLeft: "54%" }}
                type="text"
                placeholder=" Y"
              />
            </div>
            <div className="flex">
              <label className="input-label block mt-6">Wrap Count</label>
              <label
                className="input-label block mt-6"
                style={{ marginLeft: "39%" }}
              >
                Weft Count
              </label>
            </div>
            <div className="flex mt-2">
              <input
                className="input-box h-10"
                style={{ width: "45%" }}
                type="text"
                placeholder=" X"
              />
              <p style={{ marginLeft: "52%", marginTop: "8px" }}>X</p>

              <input
                className="input-box h-10"
                style={{ width: "40%", marginLeft: "54%" }}
                type="text"
                placeholder=" Y"
              />
            </div>

            <label className="input-label block mt-6">Lorem</label>
            <input
              className="input-box mt-2 h-10"
              style={{ width: "50%" }}
              type="text"
              placeholder=" Enter"
            />
            <select
              className="input-box mt-2 h-10"
              style={{ width: "44%", marginLeft: "50%" }}
              value={option}
              onChange={handleOption}
            >
              <option value="one">OZ</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>

            <label className="input-label block mt-14">Weave</label>
            <select
              className="input-box mt-2 h-10"
              style={{ width: "94%" }}
              value={option}
              onChange={handleOption}
            >
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
            <label className="input-label block mt-14">Yarn Quality</label>
            <select
              className="input-box mt-2 h-10"
              style={{ width: "94%" }}
              value={option}
              onChange={handleOption}
            >
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
            <button
              className="rfq-button mt-14"
              style={{ background: "#C7771D" }}
              type="submit"
            >
              Send RFQ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
