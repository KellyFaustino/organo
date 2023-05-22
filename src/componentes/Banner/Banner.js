import { Fragment } from 'react'
import './Banner.css'

export const Banner = () => {
    // JSX
    return (
        // Fragment some na hora de virar um elemento no Dom
        <Fragment> 
            <header className="banner">
                <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
            </header>
            {/* <h1>Ola Kelly !!!</h1> */}
        </Fragment>
        )
}