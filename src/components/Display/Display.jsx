import React from 'react'

const globalArticleStyle = {
    width: '150px',
    height: '150px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto'
}

export default function Display({head, torso, bottom, catchphraseListArr}) {
    return (
        <>
            <section>
                <article 
                style={{
                    ...globalArticleStyle,
                    backgroundImage: `url(${head}-hat.png)`
                    }}
                data-testid='article'
                >
                </article>

                <article 
                style={{
                    ...globalArticleStyle,
                    backgroundImage: `url(${torso}-torso.png)`
                    }}>
                </article>

                <article 
                style={{
                    ...globalArticleStyle,
                    backgroundImage: `url(${bottom}-bottom.png)`
                    }}>
                </article>
            </section>

            <section>
                {
                    catchphraseListArr.map(catchphrase => <p key={catchphrase} data-testid={catchphrase}>{catchphrase}</p>)
                }
            </section>
        </>
    )
}
