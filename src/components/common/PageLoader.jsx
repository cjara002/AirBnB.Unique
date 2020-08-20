import React from "react";

const PageLoader = () => (
    <div className="page-loader">
        <em className="fas fa-circle-notch fa-spin fa-2x text-muted" />
    </div>
);

export default React.memo(PageLoader);