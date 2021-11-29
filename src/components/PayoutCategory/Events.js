import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background: black;
  width: 80%;
  height: auto;
  box-sizing: border-box;
  margin: 60px auto 50px auto;
  font-size: 1.5rem;

  @media (max-width: 600px) {
    width: 90%;
    margin: 50px auto 70px auto;
  }

  hr {
    width: 80px;
    border: 1px solid #a8a8a8;
    margin-top: 40px;
  }
`;

const Events = (
  <Box>
    <table className="tg">
      <thead>
        <tr>
          <th className="tg-header header-font">Events</th>
        </tr>
        <tr>
          <th className="tg-center header-font">Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="tg-left">
            <div className="align-center">
              <span className="description-header">
                Online webinar or workshop
              </span>
              <br />
              <span className="description-content">
                - Presenting Status in your language
              </span>
              <br />
              <span className="description-content">- min. 10 mins</span>
              <br />
              <span className="description-content">
                - Recommend using localized slides &amp; materials
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td className="tg-left">
            <div className="align-center">
              <span className="description-header">
                Hackathon & conference representation
              </span>
              <br />
              <span className="description-content">- 1 speaking session</span>
            </div>
          </td>
        </tr>
        <tr>
          <td className="tg-left">
            <div className="align-center">
              <span className="description-header">Meetup</span>
              <br />
              <span className="description-content">
                -{" "}
                <a
                  href="http://bit.ly/ambassador-meetup-budget"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="table-link"
                >
                  Meetup budget guidelines
                </a>
              </span>
              <br />
              <span className="description-content">
                - Based on a meetup of the ‘S’ size
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </Box>
);

export default Events;
