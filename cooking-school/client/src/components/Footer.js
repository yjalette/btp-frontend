import React, { Component } from 'react';


class Footer extends Component {
  
  render() {
    
    return (
        <footer className="footer p-3 flex row w-100 justify-content-center bg-purple text-light m-0">
                
                <div className="w-50">
                    <cite title="Source Title" className="p-3"><i className="fa fa-copyright"></i>2019 Vasiliki Vourliotaki</cite>
                </div>

                <div className="w-50 text-right">
                    <i className="fa fa-envelope-o"></i>
                </div>
                 
        </footer>
            )
        }
}

export default Footer;