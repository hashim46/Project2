import {Link} from 'react-router-dom'



function Nav(props){
    return (
        <div className = "nav">
            <Link to ="/suggestions">
                <div>AI help</div>
            </Link>

            <Link to = "/about">
                <div> About </div>
            </Link>
            
            

        </div>
    )
}

export default Nav