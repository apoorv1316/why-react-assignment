import React from 'react'
function Header(){
    return(
        <div>
            <header className="main-header">
                <div className="container" >
                <h1>Logo</h1>
                    <nav className="main-nav">
                        <ul className="main-nav-list">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>  
            </header>
        </div>
    )
}
 export default Header