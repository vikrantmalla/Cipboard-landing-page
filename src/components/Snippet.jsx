import React from 'react';

const Snippet = () => {
    return (
        <>
            <section className="snippet">
                <div className="snippet-desc">
                    <h2>Keep track of your snippets</h2>
                    <p>  Clipboard instantly stores any item you copy in the cloud,
                        meaning you can access your snippets immediately on all your
                        devices. Our Mac and iOS apps will help you organize everything.</p>
                </div>
                <div className="option-containter">
                    <div className="snippet-img">
                        <img src="images/image-computer.png" alt="computer" />
                    </div>
                    <div className="option-details">
                        <div className="option">
                            <h2>Quick Search</h2>
                            <p>Easily search your snippets by content, category, web address, application, and more.</p>
                        </div>
                        <div className="option">
                            <h2>iCloud Synch</h2>
                            <p>Instantly saves and syncs snippets across all your devices.</p>
                        </div>
                        <div className="option">
                            <h2>Complete History</h2>
                            <p>Retrieve any snippets from the first moment you started using the app.</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Snippet
