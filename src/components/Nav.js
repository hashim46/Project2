import {Link} from 'react-router-dom'



function Nav(props){
    return (
        <div className = "nav">
            
            
            <Link to = "/about">
                <div> About </div>
            </Link>
            
            <Link to ="/Generator">
                <div> The App </div>
            </Link>

            <Link to = "/Suggestions">
                <div> Need Ideas? </div>
            </Link>
            
            

        </div>
    )
}

export default Nav