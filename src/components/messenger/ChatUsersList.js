import React from 'react';

import profile from '../../images/profile.jpg'

const ChatUsersList = (props) => (
      <div className="inbox_people p-md-3 p-sm-0 border-0">
        <div className="headind_srch">
          <div className="srch_bar w-100">
            <div className="stylish-input-group">
              <input type="text" className="search-bar w-100"  placeholder="Search" />
              <span className="input-group-addon">
              <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
              </span> 
            </div>
          </div>
        </div>
        <div className="inbox_chat">
          <div className="chat_list active_chat" onClick={props.handleClickShow}>
            <div className="chat_people">
              <div className="chat_img"> 
              <img src={profile} alt="sunil"/> 
              </div>
              <div className="chat_ib">
                <h5>Jerry Lee <span className="chat_date">14/07/2019</span></h5>
                <p>Tacimates convenire ne mei, eu tibique erroribus pri.</p>
              </div>
            </div>
          </div>
          <div className="chat_list">
            <div className="chat_people">
              <div className="chat_img"> <img src={profile} alt="sunil" /> </div>
              <div className="chat_ib">
                <h5>Jerry Lee <span className="chat_date">14/07/2019</span></h5>
                <p>Tacimates convenire ne mei, eu tibique erroribus pri.</p>
              </div>
            </div>
          </div>
          <div className="chat_list">
            <div className="chat_people">
              <div className="chat_img"> <img src={profile} alt="sunil" /> </div>
              <div className="chat_ib">
                <h5>Jerry Lee <span className="chat_date">14/07/2019</span></h5>
                <p>Tacimates convenire ne mei, eu tibique erroribus pri.</p>
              </div>
            </div>
          </div>
          <div className="chat_list">
            <div className="chat_people">
              <div className="chat_img"> <img src={profile} alt="sunil" /> </div>
              <div className="chat_ib">
                <h5>Jerry Lee <span className="chat_date">14/07/2019</span></h5>
                <p>Test, which is a new approach to have all solutions 
                  astrology under one roof.</p>
              </div>
            </div>
          </div>
          <div className="chat_list">
            <div className="chat_people">
              <div className="chat_img"> <img src={profile} alt="sunil" /> </div>
              <div className="chat_ib">
                <h5>Jerry Lee <span className="chat_date">14/07/2019</span></h5>
                <p>Tacimates convenire ne mei, eu tibique erroribus pri.</p>
              </div>
            </div>
          </div>
          <div className="chat_list">
            <div className="chat_people">
              <div className="chat_img"> <img src={profile} alt="sunil" /> </div>
              <div className="chat_ib">
                <h5>Jerry Lee <span className="chat_date">14/07/2019</span></h5>
                <p>Tacimates convenire ne mei, eu tibique erroribus pri.</p>
              </div>
            </div>
          </div>
          <div className="chat_list">
            <div className="chat_people">
              <div className="chat_img"> <img src={profile} alt="sunil" /> </div>
              <div className="chat_ib">
                <h5>Jerry Lee <span className="chat_date">14/07/2019</span></h5>
                <p>Tacimates convenire ne mei, eu tibique erroribus pri.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

        
      

export default ChatUsersList;