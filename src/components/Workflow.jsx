import React from 'react';

const Workflow = () => {
    return (
        <>
            <section className="workflow">
                <div className="workflow-desc">
                    <h2>Supercharge your workflow</h2>
                    <p>We’ve got the tools to boost your productivity.</p>
                </div>
                <div className="workflow-containter">
                    <div className="workflow1 feature">
                        <img src="images/icon-blacklist.svg" alt="blacklist" />
                        <h2>Create blacklists</h2>
                        <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                    </div>
                    <div className="workflow2 feature">
                        <img src="images/icon-text.svg" alt="text" />
                        <h2>Plain text snippets</h2>
                        <p>Remove unwanted formatting from copied text for a consistent look.</p>
                    </div>
                    <div className="workflow3 feature">
                        <img src="images/icon-preview.svg" alt="preview" />
                        <h2>Sneak preview</h2>
                        <p>Quick preview of all snippets on your Clipboard for easy access.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Workflow
