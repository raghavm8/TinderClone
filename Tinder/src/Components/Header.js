import React from 'react'
import './style/Header.css'
import PersonIcon from '@material-ui/icons/Person'; 
import IconButton from '@material-ui/core/IconButton';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';

function Header() {
    return (
        <div className="header">
            <IconButton>
               <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            
            <img className="header__logo" 
            src="data:image/jpeg;base64,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"
            alt="iamf"
            />

            <IconButton>
               <FormatAlignJustifyIcon fontSize="large" className="header__icon" />
            </IconButton>

        </div>
    )
}

export default Header