const Loading = () => {
    return (
        <div className="min-h-screen w-full bg-slate-900 flex justify-center items-center">
            <style>
                {`
                    .loader {
                        border: 8px solid #f3f3f3; /* Light grey */
                        border-top: 8px solid #3498db; /* Blue color */
                        border-radius: 50%;
                        width: 80px;
                        height: 80px;
                        animation: spin 1s linear infinite;
                    }

                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>
            <div className="loader"></div>
        </div>
    );
};

export default Loading;
