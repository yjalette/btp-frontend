import React from 'react';
import profile from '../../images/profile-female.jpg'


const Messages = (props) => (
    <div className="mesgs p-md-3 p-sm-0">
      <span className="float-left resp-toggle fa fa-arrow-left mx-3 font-med" onClick={props.handleClickClose}></span>
        <div className="headind_srch">
            <div className="srch_bar">
              <div className="stylish-input-group">
                <h6>Mary Palmer </h6>
              </div>
            </div>
          </div>
          <div className="msg_history bg-light p-3">
            <div className="incoming_msg">
              <div className="incoming_msg_img"> <img src={profile} alt="sunil" /> </div>
              <div className="received_msg">
                <div className="received_withd_msg">
                  <p>Tacimates convenire ne mei, eu tibique erroribus pri.</p>
                  <span className="time_date"> 14:05 |  01/07/2019</span></div>
              </div>
            </div>
            <div className="outgoing_msg">
              <div className="sent_msg">
                <p>Tacimates convenire ne mei, eu tibique erroribus pri.</p>
                <span className="time_date"> 14:05 |  01/07/2019</span> </div>
            </div>
            <div className="incoming_msg">
              <div className="incoming_msg_img"> <img src={profile} alt="sunil" /> </div>
              <div className="received_msg">
                <div className="received_withd_msg">
                  <p>Tacimates convenire ne mei, eu tibique erroribus pri.</p>
                  <span className="time_date"> 18:35   |    Yesterday</span></div>
              </div>
            </div>
            <div className="outgoing_msg">
              <div className="sent_msg">
                <p>Tacimates convenire ne mei, eu tibique erroribus pri.</p>
                <span className="time_date"> 18:35   |    Today</span> </div>
            </div>
            <div className="incoming_msg">
              <div className="incoming_msg_img"> <img src={profile} alt="sunil" /> </div>
              <div className="received_msg">
                <div className="received_withd_msg">
                  <p>Tacimates convenire ne mei, eu tibique erroribus pri. Tacimates convenire ne mei, eu tibique erroribus pri.</p>
                  <span className="time_date"> 18:35   |    Today</span></div>
              </div>
            </div>
          </div>
          <div className="type_msg p-1">
            <div className="input_msg_write">
              <input type="text" className="write_msg" placeholder="Type a message" />
              <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
)

export default Messages;