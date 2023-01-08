export const CardLoading = () => {
    return (
        <div style={{maxWidth: '307px', margin: '1rem auto'}}>
            <div className="ph-item">
                <div className="ph-col-12">
                    <div className="ph-picture"></div>
                    <div className="ph-row">
                        <div className="ph-col-4"></div>
                        <div className="ph-col-8 empty"></div>
                        <div className="ph-col-12"></div>
                    </div>
                </div>
                <div className="ph-col-2">
                    <div className="ph-avatar"></div>
                </div>
                <div>
                    <div className="ph-row">
                        <div className="ph-col-12"></div>
                        <div className="ph-col-2"></div>
                        <div className="ph-col-10 empty"></div>
                        <div className="ph-col-8 big"></div>
                        <div className="ph-col-4 big empty"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};