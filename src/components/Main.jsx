import { useState } from 'react'
import articles from '../data/articles'

export default function Main() {
    const [article, setNewArticle] = useState('')

    return (
        <div className="container">
            <ul className='articlesList list-group'>

                {articles.map((article, index) => (
                    <li className='list-group-item' key={index}>{article}</li>
                ))}
            </ul>

            <div class="mb-3">
                <label htmlFor="new_article" class="form-label"></label>
                <input
                    type="text"
                    class="form-control p-2 mt-2"
                    name="new_article"
                    id="new_article"
                    aria-describedby="helpId"
                    placeholder="Insert a new article"
                />
                <small id="helpId" class="form-text text-muted"></small>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>

        </div>

    )
}
