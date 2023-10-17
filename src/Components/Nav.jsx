import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className="text-center space-x-5 mt-5 font-bold text-3xl">
            <button> <Link to='/updatecoffe'> UpdateCOffe</Link>
            </button>
            <button> <Link to='/addcoffe'> AddCoffe</Link>
            </button>
            
        </div>
    );
};

export default Nav;