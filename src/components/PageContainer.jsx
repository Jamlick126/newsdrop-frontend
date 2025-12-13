import React, { useEffect } from 'react';

const PageContainer = ({ children, title = "NewsDrop Blog"}) => {
    useEffect(() => {
        document.title = title;

        return () => {
            document.title = "NewsDrop Blog";
        };
    }, [title]);

    return (
        <section className="page-container section">
            <header className="page-header">
                <div className="container">
                    <h1 className="main-page-title">{title.split(' | ')[0]}</h1>
                </div>
            </header>

            <div className="page-content">
                <div className="container">{children}</div>
            </div>
        </section>
    );
};

export default PageContainer;