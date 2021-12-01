import React from 'react'

const globalArticleStyle = {
    width: '150px',
    height: '150px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto'
}

export default function Display({stateArr, catchphraseListArr}) {
    return (
        <>
            <section>
                {
                    stateArr.map(state => {
                        return <article 
                            style={{
                                ...globalArticleStyle,
                                backgroundImage: `url(${state}.png)`
                                }}
                            key={state}
                            data-testid={state}
                            >
                        </article>
                    })
                }
            </section>

            <section>
                {
                    catchphraseListArr.map(catchphrase => <p key={catchphrase}>{catchphrase}</p>)
                }
            </section>
        </>
    )
}
