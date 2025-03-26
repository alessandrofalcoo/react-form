import { useState } from 'react'
import articles from '../data/articles'

export default function Main() {

    return (
        <div className="container">
            <ul className='articlesList '>

                {articles.map((article, index) => (
                    <li key={index}>{article}</li>
                ))}
            </ul>
        </div>

    )
}
