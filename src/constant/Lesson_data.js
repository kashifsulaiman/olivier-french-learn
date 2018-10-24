const LESSON_DATA = [
    {
        'id': 1,
        'lesson': 'Lesson 1',
        pages: [
            {
                id: 1,
                html: `
                    <div>
                        <h2>Page 1</h2>
                        <h3 className="something"> but du course </h3>
                        <p> Ce course à pour objectif de vous apprendre à lire et dire le français avec un accent métropolitain. Il n'a pas pour but que vous compreniez ce que vous lisez mais seulement que vous soyez capable de lire à voix haute et de prononcer correctement le français. Néanmoins vous verrez tout au long du course beaucoup de mots et si vos ne les connaissez pas je vous invite à regarder leur définition dans un dictionnaire simple. Mais rassurez-vous le mot équivalent est écrit dans votre propre langue pour vous aider dans un premier temps </p>
                    </div>
                `,
                foreignHtml: `
                    <div>
                        <h2>Page 1</h2>
                        <h3> Purpose of course </h3>
                        <p> this course is done to teach you to read french with metropolitan pronociation..... </p>
                    </div>
                `
            },
            {
                id: 2,
                html: `
                    <div>
                        <h2>Page 2</h2>
                        <h3>Règles générales de la lecture du français</h3>
                        <p>La première grande règle: le français n'est pas une langue qui chante. Il n'y a pas d'accentuation comme dans d'autres langues comme l'anglais, l'arabe, le russe etc. Bien sûr il y a des nuances due à l'émotion mais nous ne parlons pas de ces accents mais bien des accents toniques qui font exploser ou atténuent grandement la prononciation d'une lettre ou d'un son dans le discourse normal. Il ne faut pas trop s'en inquiéter car nous allons voir que cela vient presque naturellement si l'on comprend comment se prononce le français. Ecoute la phrase suivante pour comparer l'intonation et le rythme</p>
                        <audio controls>
                            <source src="../../assets/audio/son/phraseQuiChanteFr.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                        <img src="../../assets/images/placeholder.jpg" width="300px" />
                    </div>
                `,
                foreignHtml: `
                    <div>
                        <h2>Page 2</h2>
                        <h3>General rules to read french.</h3>
                        <p>the first importante rule: French is not ....</p>
                        <audio controls>
                            <source src="../../assets/audio/son/phraseQuiChanteFr.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                        <img src="../../assets/images/placeholder.jpg" width="300px" />
                    </div>   
                `,
            },
            {
                id: 3,
                html: `
                    <div>
                        <h2>Page 3</h2>
                        <h3>Définition</h3>
                        <div>
                            <p>l'alphabet français comporte 26 lettres et 5 signes qui modifient le son que représente les lettres.</p>
                            <figure>
                                <img src="../../assets/images/placeholder.jpg" width="300px" />
                                <figcaption>lettres de l'alphabet</figcaption>
                            </figure>                        
                        </div>
                        <p>définition: Une lettre est un dessin qui represente un son de la langue parlée. Dans ta langue lorsque tu vois la lettre A tu dis le son que la lettre A représente.</p>
                        <figure>
                            <img src="../../assets/images/placeholder.jpg" width="300px" />
                            <figcaption>description image</figcaption>
                        </figure>
                    </div>
                `,
                foreignHtml: `
                    <div>
                        <h2>Page 3</h2>
                        <h3>Definition</h3>
                        <div>
                            <p>French alphabet has 26...</p>
                            <figure>
                                <img src="../../assets/images/placeholder.jpg" width="300px" />
                                <figcaption>lettres de l'alphabet</figcaption>
                            </figure>
                        </div>
                        <p>Definition: a letter is a draw which represente a sound of langage...</p>
                        <figure>
                            <img src="../../assets/images/placeholder.jpg" width="300px" />
                            <figcaption>description image</figcaption>
                        </figure>
                    </div>
                `,
            },
            {
                id: 4,
                html: `
                    <div>
                        <h2>Page 4</h2>
                        <h3>Régles</h3>
                        <div>
                            <p>Les lettres ont des noms qui peuvent être très différents des sons qu'elles représentent. Par exemple la lettre C peut faire le son</p>
                            <audio controls>
                                <source src="../../assets/audio/son/se.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p>ou le son r</p>
                            <audio controls>
                                <source src="../../assets/audio/son/ke.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p>et son nom est</p>
                            <audio controls>
                                <source src="../../assets/audio/son/ses.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                        <div>
                            <p>De plus une association de lettres symbolise un son qui n'a rien à voir avec le son que forme chaque lettre individuellement. Par exemple la lettre A fait le son</p>
                            <audio controls>
                                <source src="../../assets/audio/son/a.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p>la lettre U fait le son</p>
                            <audio controls>
                                <source src="../../assets/audio/son/u.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p>alors que l'association AU, fait le son</p>
                            <audio controls>
                                <source src="../../assets/audio/son/o.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                `,
                foreignHtml: `
                    <div>
                        <h2>Page 4</h2>
                        <h3>rules</h3>
                        <div>
                            <p>Letters have name which can very different the sound they express</p>
                            <audio controls>
                                <source src="../../assets/audio/son/se.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p>ou le son r</p>
                            <audio controls>
                                <source src="../../assets/audio/son/ke.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p>et son nom est</p>
                            <audio controls>
                                <source src="../../assets/audio/son/ses.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                        <div>
                            <p>The association of letters symbolise a sound that as nothing to do... For exemple the letter A made the sound</p>
                            <audio controls>
                                <source src="../../assets/audio/son/a.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p>the letter U made the sound</p>
                            <audio controls>
                                <source src="../../assets/audio/son/u.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p>but the association of AU made the sound</p>
                            <audio controls>
                                <source src="../../assets/audio/son/o.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                `
            },
            {
                id: 5,
                html: `
                    <div>
                        <h2>Page 5</h2>
                        <h3>Régles</h3>
                        <div>
                            <p>Les voyelles: ce sont les lettres qui représente les sons que l'on peut vocaliser seuls. Les voyelles de bases A E I O U. Donc les sons</p>
                            <audio controls>
                                <source src="../../assets/audio/son/a.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p>,</p>
                            <audio controls>
                                <source src="../../assets/audio/son/e.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p>,</p>
                            <audio controls>
                                <source src="../../assets/audio/son/i.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p>,</p>
                            <audio controls>
                                <source src="../../assets/audio/son/o.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p>,</p>
                            <audio controls>
                                <source src="../../assets/audio/son/u.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p>sont prononçables seuls, avec eux on a de la voix.</p>
                        </div>
                    </div>
                `,
                foreignHtml: `
                    <div>
                        <h2>Page 5</h2>
                        <h3>Rules</h3>
                        <div>
                            <p>Voyelles: the letters that express the sound which can be vocalized alone?. the voyelles are A E I O U. Thus the sound</p>
                            <audio controls>
                                <source src="../../assets/audio/son/a.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p>,</p>
                            <audio controls>
                                <source src="../../assets/audio/son/e.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p>,</p>
                            <audio controls>
                                <source src="../../assets/audio/son/i.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p>,</p>
                            <audio controls>
                                <source src="../../assets/audio/son/o.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p>,</p>
                            <audio controls>
                                <source src="../../assets/audio/son/u.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio>
                            <p>can be said alone. with them we have voice.</p>
                        </div>
                    </div>
                `
            }
        ]
    },
    {
        'id': 2,
        'lesson': 'Lesson 2',
        pages: [
            {
                id: 1,
                paragraph: [
                    {
                        text: "les consonnes. Le mot consonne est fait de con: avec et sonne: sonner ce qui veut dire: qui sonne avec. Contrairement a certaine langue qui ont concerver une prononciation du type latin comme le russe l'anglais, l'allemand, le français lui n'a aucune struture d'origine latine dans sa prononciation. Les consonnes ne se vocalisent pas seul, il faut une voyelle après pour que la consonne sonne. La lettre T va selon la voyelle qui lui succède de prononcer, , seul elle ne sonne pas. C'est pourquoi la consonne à la fin d'un mot ne se prononce pas. mais encore un fois ne vous préoccupez pas de tout cela car nous allons voir toutes ces choses graduellement dans ce course. Vous devez simplement le garder en en tête.",
                        foreignLanguage: "consonne:the word consonne is made with con (with) and with sonne (ring). mais encore un fois ne vous préoccupez pas de tout cela car nous allons voir toutes ces choses graduellement dans ce course. Vous devez simplement le garder en en tête."
                    }
                ]
            },
            {
                id: 2,
                title: {
                    text: "Régles",
                    foreignLanguage: "Rules"
                },
                paragraph: [
                    {
                        text: "Seul les voyelles peuvent être vocalisées et donc une consonne ne peut l'être qu'avec une voyelle. Chaque mot est décomposée en syllabe que l'on dit séparément une à une. une syllabe est un son vocalisé en une fois en un soufle et elle est transcrite par une ou plusieurs lettres. Il y a bien sûr des exceptions, autrement le français ne serait pas le français. Mais vous devez vous impréniez des règles générales et ensuite les particularités seront aisées à retenir et à comprendre. Et nous les verrons mais seulement après avoir assimiler la règle générale. Des exemples dans ce cas valent mieux qu'une longue page.",
                        foreignLanguage: "Now, the very important rule to read french. Only voyelles can be vocalised ...."
                    },
                    {
                        text: "prenons des mots papa qui doit être lu comme si le groupe de lettre ne faisait qu'un seul son qui se dit en un seul soufle. Le mot TATA doit être lu",
                        foreignLanguage: "The association of letters symbolise a sound that as nothing to do... For exemple the letter A made the sound"
                    }
                ]
            }
        ]
    },
    {
        'id': 3,
        'lesson': 'Lesson 3',
        pages: []
    },
    {
        'id': 4,
        'lesson': 'Lesson 4',
        pages: []
    },
    {
        'id': 5,
        'lesson': 'Lesson 5',
        pages: []
    },
    {
        'id': 6,
        'lesson': 'Lesson 6',
        pages: []
    },
    {
        'id': 7,
        'lesson': 'Lesson 7',
        pages: []
    },
    {
        'id': 8,
        'lesson': 'Lesson 8'
    },
    {
        'id': 9,
        'lesson': 'Lesson 9'
    },
    {
        'id': 10,
        'lesson': 'Lesson 10'
    }
]

export default LESSON_DATA