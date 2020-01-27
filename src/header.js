import React from 'react';
import './style.scss'
class Header extends React.Component {
    render() {
        return (
            <div className="headerFlexContainer ">
            <div>
                 <h4> RamsayBolton </h4>
            </div>
            <div >
            
                <button className="btn">
                    Home
                </button>
                <button className="btn">
                    About Me
                </button>
                <button className="btn">
                    My Projects
                </button>
                <button className="btn">
                    Contact Me
                </button>
            </div>
            </div>
        );
    }
}
export default Header;