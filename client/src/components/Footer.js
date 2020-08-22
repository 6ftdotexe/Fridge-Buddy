import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer className='page-footer'>
                    <nav className='navbar footer-copyright'>
                        <div className='container'>
                            <div className='row hide-on-large-only center'>
                                <span id='copyright'>
                                    Copyright &copy; 2020
              </span>
                                <li>
                                    <Link href='https://github.com/6ftdotexe'><a target='_blank'>Lance Page</a></Link>
                                </li>
                                <li>
                                    <Link href='https://github.com/williamntrout'><a target='_blank'>William Trout</a></Link>
                                </li>
                                <li>
                                    <Link href='https://github.com/ckangkolo16'><a target='_blank'>Chobu Kangkolo</a></Link>
                                </li>
                                <li>
                                    <Link href='https://github.com/GrandeRojo17'><a target='_blank'>David Yennerell</a></Link>
                                </li>
                            </div>
                        </div>
                    </nav>
                </footer>
                <style jsx>{`
        #copyright {
          margin: 0px 20px 0px 0px;
        }
        footer {
          height: 50px;
          border-top: 1px solid lightgray;
          margin-top: 50px;
        }
        li {
          list-style-type: none;
          margin: 0px 10px 0px 10px;
        }
      `}</style>
            </Fragment>
        );
    }
}

export default Footer;