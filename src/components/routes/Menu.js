import React from "react";
import { Link } from "react-router-dom";
import MainWrapper from "../MainWrapper";
import Header from "../Header";
import "../../assets/styles/Menu.css";

export default function Menu() {
  return (
    <MainWrapper>
      <div className="contentWrapper">
        <div className="menuBackground" />
        <div className="rightContent">
          <Header className="tinyHeader" title="MENY N°7" />
          <p>&nbsp;BLEAK ROE - LICHEN - HORSERADISH</p>
          <p>RAINBOW TROUT - DILL FLOWER - KOHLRABI</p>
          <p>MACKEREL - FOIE GRAS - CHANTERELLE</p>
          <p>DUCK - TRUFFLE - CELERIAC</p>
          <p>RASPBERRY - WHITE CHOCOLATE - SPRUCE&nbsp;</p>
          <p>&nbsp;LEMON VERBENA - SALT - OLIVE OIL</p>
          <p>&nbsp;755 SEK</p>
          <Link to="/book">
            <button type="button" className="button">BOKA BORD</button>
          </Link>
          <p>&nbsp;+46 123 45 67</p>
        </div>
      </div>
    </MainWrapper>
  );
}
