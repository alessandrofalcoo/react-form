import { useState } from 'react'
import myArticles from '../data/articles'

export default function Main() {
    const [articles, setArticles] = useState(myArticles)
    const [newArticle, setNewArticle] = useState('')

    function handleAddArticle(e) {
        e.preventDefault()
        if (newArticle === '') {
            alert('The field must not be empty')
        }
        setArticles([...articles, newArticle])
        console.log(articles);
        console.log(newArticle);


        setNewArticle('')
    }

    function handleDeleteArticle(index) {
        setArticles(articles.filter((_, i) => i !== index))
    }
    return (
        <div className="container">
            <ul className='articlesList list-group'>

                {articles.map((article, index) => (
                    <li className='list-group-item' key={index}>{article}
                        <button type='button' className='btn btn-danger mx-4' onClick={() => handleDeleteArticle(index)}>Delete</button>
                    </li>

                ))}
            </ul>
            <form onSubmit={handleAddArticle}>
                <div className="mb-3">
                    <label htmlFor="new_article" className="form-label"></label>
                    <input
                        type="text"
                        className="form-control p-2 mt-2"
                        name="new_article"
                        id="new_article"
                        aria-describedby="helpId"
                        placeholder="Insert a new article"
                        value={newArticle}
                        onChange={(e) => setNewArticle(e.target.value)}
                    />
                    <small id="helpId" className="form-text text-muted"></small>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>

    )
}
