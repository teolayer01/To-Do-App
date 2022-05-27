import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/credits'>
                            <button>Creditos</button>
                        </Link>
                    </li>
                    <li>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar