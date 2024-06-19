import React from "react";
import "../App.css";

function Container() {
  return (
    <div className="nh">
      <h2>Why Use Kuda?</h2>
      <div className="jk">
        <p>
          All the amazing features we offer on <span>Kuda</span>
        </p>
      </div>
      <div className="lm">
        <div className="ju">
          <h4>1</h4>
          <h3>Fast And Efficient</h3>
          <p>
            Pay bills, make financial transactions
            <br />
            without any delays, hassles
            <br />
            and restrictions
          </p>
        </div>
        <div className="ju">
          <h4>2</h4>
          <h3>Global</h3>
          <p>
            With kuda bank, you can send and receive
            <br />
            money from friends and family around
            <br />
            the globe.
          </p>
        </div>
        <div className="ju">
          <h4>3</h4>
          <h3>Investmest</h3>
          <p>
            Kuda bank provides an avenue
            <br />
            for investing your currency on
            <br /> things that will bring profit.
          </p>
        </div>
      </div>
      <div className="oi">
        <p>
          Discover more when you <span>GET STARTED</span>
        </p>
      </div>
    </div>
  );
}

export default Container;
