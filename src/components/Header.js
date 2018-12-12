import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-address-book"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Saharat Nasahachart</h1>
                <h1>(Teddy)</h1>
                <p>Software Engineer</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('portfolio')}}>Portfolio</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('portfoliovdo')}}>Portfolio VDO</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('resume')}}>Resume</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
