const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {/* Create shimmer cards to match the number of restaurant cards */}
            {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="shimmer-card">
                    <div className="shimmer-image"></div>
                    <div className="shimmer-content">
                        <div className="shimmer-title"></div>
                        <div className="shimmer-rating"></div>
                        <div className="shimmer-delivery"></div>
                        <div className="shimmer-cuisines"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
