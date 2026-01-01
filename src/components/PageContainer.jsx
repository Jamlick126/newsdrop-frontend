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
            <div className="page-content">
                <div className="container">{children}</div>
            </div>
        </section>
    );
};

export default PageContainer;