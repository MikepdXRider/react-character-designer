import React from 'react'

const globalArticleStyle = {
    width: '150px',
    height: '150px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto'
}

export default function Display({head}) {
    return (
        <section>
            <article 
            style={{
                ...globalArticleStyle,
                backgroundImage: `url(${head}-hat.png)`
                }}>

            </article>
        </section>
    )
}
