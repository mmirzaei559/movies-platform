import React from "react";
import "../../styles/Footer.scss";

export const Footer: React.FC<any> = () => {
    return (
        <footer className="site-footer">
            <div>
                <div className="copyright-box">
                    <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by
                        <a href="#"> Boom Boom Flix </a>.
                    </p>
                </div>

                <div>
                    <ul className="social-icons">
                        <li><a className="facebook" href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a className="twitter" href="#"><i className="fab fa-twitter-square" aria-hidden="true"></i></a></li>
                        <li><a className="instagram" href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a className="linkedin" href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
