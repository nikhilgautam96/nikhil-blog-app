import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header>
                <div
                    className="collapse text-bg-dark"
                    id="navbarSupportedContent">
                    <div className="container">
                        <div className="d-flex flex-row flex-wrap justify-content-between">
                            <div className="col-lg-7 py-4">
                                <h3>About</h3>
                                <p className="about">
                                    Add some information about the album below,
                                    the author, or any other background context.
                                    Make it a few sentences long so folks can
                                    pick up some informative tidbits. Then, link
                                    them off to some social networking sites or
                                    contact information.
                                </p>
                            </div>
                            <div className="col-lg-4 px-2 py-4 ms-5">
                                <h4>Contact</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="social-links">
                                            Follow on Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="social-links">
                                            Like on Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="social-links">
                                            Email me
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <nav
                    className="navbar text-bg-dark border-bottom border-bottom-dark"
                    data-bs-theme="dark">
                    <div className="container">
                        <a
                            class="navbar-brand d-flex align-items-center"
                            href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                aria-hidden="true"
                                class="me-2"
                                viewBox="0 0 24 24">
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                <circle cx="12" cy="13" r="4"></circle>
                            </svg>
                            <strong>Album</strong>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
}
