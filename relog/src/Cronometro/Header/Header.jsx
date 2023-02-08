import { Link } from "react-router-dom";
import './HeaderStyle.css'
export default function Header(){


    return(
        <div className="header-div">
            <Link className="link" to='/'>home</Link>
            <Link  className="link" to='/Cronometro'>Cronometro</Link>
            <Link  className="link" to='/Temporalizador'>Temporalizador</Link>
        </div>
    )
}