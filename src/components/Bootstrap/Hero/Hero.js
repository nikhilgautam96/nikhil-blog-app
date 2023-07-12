import React from 'react';

export default function Hero() {
    return (
        <>
            <section className="container py-4">
                <div className="row py-lg-4">
                    <div className="text-center p-4 col-lg-6 mx-auto">
                        <h1 className=".text-dark">Album example</h1>
                        <div>
                            <p className=".text-body-secondary">
                                Something short and leading about the collection
                                below—its contents, the creator, etc. Make it
                                short and sweet, but not too short so folks
                                don’t simply skip over it entirely.
                            </p>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="btn btn-primary mx-1"
                                href="#">
                                Main call to action
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary mx-1"
                                href="#">
                                Secondary action
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
