import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="content">
            <div className="inner">
                <h2>PORTFOLIO</h2>
                <nav>
                    <ul>
                        <li><a href="javascript:;" onClick={() => { props.onOpenArticle('resume') }}>Resume</a></li>
                        <li><a href="javascript:;" onClick={() => { props.onOpenArticle('about') }}>About</a></li>
                        <li><a href="javascript:;" onClick={() => { props.onOpenArticle('contact') }}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="content">
            <div className="inner">
                <h1>SAHARAT NASAHACHART</h1>
                <h1>(TEDDY)</h1>
                <p>SOFTWARE ENGINEER</p>
            </div>
        </div>
        <nav>
            <div className="inner">
                <h3>PROJECTS</h3>
            </div>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('zerofriction') }}>ZeroFricton</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('songoftheshield') }}>SONG OF THE SHIELD</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('witchcraft') }}>Witchcraft</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('rtsnetworking') }}>RTS GAME NETWORKING</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('aidemo') }}>AI DEMO</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('physicsimulator') }}>PHYSICS SIMULATOR</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
