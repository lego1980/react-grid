import React from 'react';
import './LayoutGrid2.css';

export const LayoutGrid2 = () => (
    <div className={"LayoutGrid2"}>
        {
        /*
        <header>
            <h1 className="title">Card Layout</h1>
            <div className="options">
            <a href="#" className="options-link link-active">Home</a>
            <a href="#" className="options-link">About</a>
            <a href="#" className="options-link">Gallery</a>
            <a href="#" className="options-link">Blog</a>
            <a href="#" className="options-link">References</a>
            <a href="#" className="options-link">Contant</a>
            </div>
        </header>
        */
        }
        <main>
            <section>
                <h2>The Title</h2>
                <p>Some Text goes here, some text goes here, some text goes here, some text goes here.</p>
                <a href="#" className="info-link">Learn more...</a>
            </section>
            <section>
                <h2>The Title</h2>
                <p>Some Text goes here, some text goes here, some text goes here, some text goes here.</p>
                <img className="section-img" src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/emoji-one/104/chart-with-upwards-trend_1f4c8.png" alt="important graph" />
                <a href="#" className="info-link">Learn more...</a>
            </section>
            <section>
                <h2>The Title</h2>
                <img className="section-img profile" src="http://placekitten.com/260/260" />
                <p>Some Text goes here, some text goes here, some text goes here, some text goes here.</p>
                <a href="#" className="info-link">Learn more...</a>
            </section>
            <section className="bigbottom">
                <h2>The Title</h2>
                <p>Some Text goes here, some text goes here, some text goes here, some text goes here.</p>
                <a className="bigbottom-link info-link" href="#" className="info-link">Learn more...</a>
            </section>
            <section className="bigtitle">
                <h2 className="bigtitle-title">The Title</h2>
                <p>Some Text goes here, some text goes here, some text goes here, some text goes here.</p>
                <a href="#" className="info-link">Learn more...</a>
            </section>
            <section>
                <h2>The Title</h2>
                <p>Some Text goes here, some text goes here, some text goes here, some text goes here.</p>
                <a href="#" className="info-link">Learn more...</a>
            </section>
        </main>
     </div>
);
