import React from 'react'
import logo from '../../assets/logo.png'

/**
 * Creates the page
 * @returns default homepage
 */
export default function HomePage() {
  return (
    <div>
        LOGO
        {renderLogo()}
    </div>
    
  )
}

/**
 * Renders logo
 * @returns logo
 */
function renderLogo() {
    return (
        <div>
            log
            <img src={logo} alt="Logo" />
        </div>
    )
}
