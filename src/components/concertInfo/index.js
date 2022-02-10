import React from 'react';
import ReactDOM from "react-dom";
import Zoom from "react-reveal/Zoom";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';





function ConcertInfo() {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="cn_wrapper">
          <Zoom duration={500}>
            <div className="cn_item">
              <div className="cn_outer">
                <div className="cn_inner">
                  <div className="cn_icon_square bck_red"></div>
                    <CalendarTodayIcon className="cn_icon"  />
                  <div className="cn_title"> Concert Date and Time: </div>
                    <div className="cn_desc"> 08/10/22 </div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500}>
            <div className="cn_item">
              <div className="cn_outer">
                <div className="cn_inner">
                  <div className="cn_icon_square bck_yellow"></div>
                    <LocationOnIcon className="cn_icon" />
                  <div className="cn_title"> Location: </div>
                <div className="cn_desc"> Richmond Hill Centre for the Arts 10268 Yonge St, Richmond Hill, ON L4C 3B7
                 </div>

                </div>
              </div>
            </div>
          </Zoom>
      </div>
    </div>
  </div>

  );
}

export default ConcertInfo;
