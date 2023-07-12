import React from 'react';

export default function Footer() {
    return (
        <>
            <footer className="text-body-secondary px-2 py-5">
                <div className="container">
                    <p className="mb-1">
                        "Album example is © Bootstrap, but please download and
                        customize it for yourself!"
                    </p>
                    <p className="float-end mb-1">
                        <a href="#">Back to top</a>
                    </p>
                    <p>
                        "New to Bootstrap? "
                        <a href="https://getbootstrap.com/">
                            Visit the homepage
                        </a>
                        " or read our "
                        <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">
                            getting started guide
                        </a>
                        .
                    </p>
                </div>
            </footer>
        </>
    );
}
