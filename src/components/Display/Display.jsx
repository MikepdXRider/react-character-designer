import React from 'react'

const globalArticleStyle = {
    width: '150px',
    height: '150px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto'
}

export default function Display({head, torso}) {
    return (
        <section>
            <article 
            style={{
                ...globalArticleStyle,
                backgroundImage: `url(${head}-hat.png)`
                }}>
            </article>
            <article 
            style={{
                ...globalArticleStyle,
                backgroundImage: `url(${torso}-torso.png)`
                }}>

            </article>
        </section>
    )
}
