import {Link} from 'react-router-dom'



function Nav(props){
    return (
        <div className = "nav">
            <Link to = "/about">
                <div> About </div>
            </Link>
            
            <Link to ="/suggestions">
                <div>CURRENCIES</div>
            </Link>

        </div>
    )
}

export default Nav