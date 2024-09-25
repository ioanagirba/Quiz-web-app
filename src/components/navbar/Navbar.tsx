import "./navbar.css"

export const Navbar = () => {

    return (
        <nav className="nav">

            <div className="quiz-options">
                <a href = "/math" className="option">Math</a>
                <a href = "/geography" className="option">Geography</a>
            </div>

            <a href= "/" className="title">
                EXIT
            </a>


            
        </nav>
    )

}