import React from 'react';
import { Link } from 'react-router-dom';

export default function Cards(props) {
    return (
        <>
            <div className="col-4 p-2">
                <div className="card">
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{props.desc}</p>
                        <div className="d-flex flex-row justify-content-between">
                            <Link href="#">
                                <div
                                    class="btn-group"
                                    role="group"
                                    aria-label="Basic outlined example">
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary">
                                        View
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary">
                                        Edit
                                    </button>
                                </div>
                            </Link>
                            <span className="card-text time">{props.time}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
