import Header from "../DefaultLayout/Header";

function Uploadlayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Uploadlayout