const LESSON_DATA = [
    {
        id: 1,
        lesson: 'Lesson 1',
        groupId: 1,
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
                        </audio><br />
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
                        </audio><br />
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
                            </audio><br />
                            <p>ou le son r</p>
                            <audio controls>
                                <source src="../../assets/audio/son/ke.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>et son nom est</p>
                            <audio controls>
                                <source src="../../assets/audio/son/ses.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                        </div>
                        <div>
                            <p>De plus une association de lettres symbolise un son qui n'a rien à voir avec le son que forme chaque lettre individuellement. Par exemple la lettre A fait le son</p>
                            <audio controls>
                                <source src="../../assets/audio/son/a.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>la lettre U fait le son</p>
                            <audio controls>
                                <source src="../../assets/audio/son/u.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>alors que l'association AU, fait le son</p>
                            <audio controls>
                                <source src="../../assets/audio/son/o.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
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
                            </audio><br />
                            <p>ou le son r</p>
                            <audio controls>
                                <source src="../../assets/audio/son/ke.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>et son nom est</p>
                            <audio controls>
                                <source src="../../assets/audio/son/ses.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                        </div>
                        <div>
                            <p>The association of letters symbolise a sound that as nothing to do... For exemple the letter A made the sound</p>
                            <audio controls>
                                <source src="../../assets/audio/son/a.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>the letter U made the sound</p>
                            <audio controls>
                                <source src="../../assets/audio/son/u.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>but the association of AU made the sound</p>
                            <audio controls>
                                <source src="../../assets/audio/son/o.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
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
                            </audio><br />
                            <p>,</p>
                            <audio controls>
                                <source src="../../assets/audio/son/e.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>,</p>
                            <audio controls>
                                <source src="../../assets/audio/son/i.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>,</p>
                            <audio controls>
                                <source src="../../assets/audio/son/o.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>,</p>
                            <audio controls>
                                <source src="../../assets/audio/son/u.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
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
                            </audio><br />
                            <p>,</p>
                            <audio controls>
                                <source src="../../assets/audio/son/e.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>,</p>
                            <audio controls>
                                <source src="../../assets/audio/son/i.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>,</p>
                            <audio controls>
                                <source src="../../assets/audio/son/o.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>,</p>
                            <audio controls>
                                <source src="../../assets/audio/son/u.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>can be said alone. with them we have voice.</p>
                        </div>
                    </div>
                `
            }
        ]
    },
    {
        id: 2,
        lesson: 'Lesson 2',
        groupId: 1,
        pages: [
            {
                id: 1,
                html: `
                    <div>
                        <h2>Page 1</h2>
                        <div>
                            <p>les consonnes. Le mot consonne est fait de con: avec et sonne: sonner ce qui veut dire: qui sonne avec. Contrairement a certaine langue qui ont concerver une prononciation du type latin comme le russe l'anglais, l'allemand, le français lui n'a aucune struture d'origine latine dans sa prononciation. Les consonnes ne se vocalisent pas seul, il faut une voyelle après pour que la consonne sonne. La lettre T va selon la voyelle qui lui succède de prononcer</p>
                            <audio controls>
                                <source src="" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <audio controls>
                                <source src="" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <audio controls>
                                <source src="" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <audio controls>
                                <source src="" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <audio controls>
                                <source src="../../assets/audio/son/tu.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>, seul elle ne sonne pas. C'est pourquoi la consonne à la fin d'un mot ne se prononce pas</p>
                            <audio controls>
                                <source src="../../assets/audio/son/souris.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <audio controls>
                                <source src="../../assets/audio/son/elephant.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>mais encore un fois ne vous préoccupez pas de tout cela car nous allons voir toutes ces choses graduellement dans ce course. Vous devez simplement le garder en en tête.</p>
                        </div>
                    </div>
                `,
                foreignHtml: `
                <div>
                    <h2>Page 1</h2>
                    <div>
                        <p>consonne:the word consonne is made with con (with) and with sonne (ring)</p>
                        <audio controls>
                            <source src="../../assets/audio/son/souris.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/elephant.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <p>mais encore un fois ne vous préoccupez pas de tout cela car nous allons voir toutes ces choses graduellement dans ce course. Vous devez simplement le garder en en tête.</p>
                    </div>
                </div>
                `
            },
            {
                id: 2,
                html: `
                    <div>
                        <h2>Page 2</h2>
                        <h3>Régles</h3>
                        <div>
                            <p>Seul les voyelles peuvent être vocalisées et donc une consonne ne peut l'être qu'avec une voyelle. Chaque mot est décomposée en syllabe que l'on dit séparément une à une. une syllabe est un son vocalisé en une fois en un soufle et elle est transcrite par une ou plusieurs lettres. Il y a bien sûr des exceptions, autrement le français ne serait pas le français. Mais vous devez vous impréniez des règles générales et ensuite les particularités seront aisées à retenir et à comprendre. Et nous les verrons mais seulement après avoir assimiler la règle générale. Des exemples dans ce cas valent mieux qu'une longue page.</p>
                        </div>
                        <div>
                            <p>prenons des mots papa qui doit être lu</p>
                            <audio controls>
                                <source src="../../assets/audio/son/pa.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>et</p>
                            <audio controls>
                                <source src="../../assets/audio/son/pa.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>comme si le groupe de lettre ne faisait qu'un seul son qui se dit en un seul soufle. Le mot TATA doit être lu</p>
                            <audio controls>
                                <source src="../../assets/audio/son/ta_ta.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>et on ne chante pas. On essaye pas d'accentuer les sons même si votre oreille entend un quelque chose qui ressemble à une accentuation. Il vous faut lire syllabe après syllabe et ne pas chercher à faire autre chose. En français il n'y a pas de</p>
                            <audio controls>
                                <source src="../../assets/audio/son/aaa.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>ou de</p>
                            <audio controls>
                                <source src="../../assets/audio/son/ouwa.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <div>
                                <audio controls>
                                    <source src="../../assets/audio/son/ba.mp3" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio><br />
                                <audio controls>
                                    <source src="../../assets/audio/son/la.mp3" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio><br />
                                <audio controls>
                                    <source src="../../assets/audio/son/de.mp3" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio><br />
                            </div>
                        </div>
                    </div>
                `,
                foreignHtml: `
                    <div>
                        <h2>Page 2</h2>
                        <h3>Rules</h3>
                        <div>
                            <p>Now, the very important rule to read french. Only voyelles can be vocalised ....</p>
                        </div>
                        <div>
                            <p>Lets take the word papa that must be read</p>
                            <audio controls>
                                <source src="../../assets/audio/son/pa.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>and</p>
                            <audio controls>
                                <source src="../../assets/audio/son/pa.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>as the group of letters made only one sound and it is saied in one breath. The word TATA have to be read</p>
                            <audio controls>
                                <source src="../../assets/audio/son/ta_ta.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>and we must not sing.</p>
                        </div>
                    </div>
                `
            },
            {
                id: 3,
                html: `
                    <div>
                        <h2>Page 3</h2>
                        <h3>Régles</h3>
                        <div>
                            <p>la syllabe: une syllabe est un son identifiable qui se dit en un soufle en un seul son sans nuance. Par exemple en anglais le mot</p>
                            <audio controls>
                                <source src="../../assets/audio/son/english/two.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>se lit presque en un seul soufle, un seul son. Alors que le mot</p>
                            <audio controls>
                                <source src="../../assets/audio/son/english/quiet.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>il y a 3 syllabes</p>
                            <div>
                                <audio controls>
                                    <source src="../../assets/audio/son/koi.mp3" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio><br />
                                <audio controls>
                                    <source src="../../assets/audio/son/i.mp3" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio><br />
                                <audio controls>
                                    <source src="../../assets/audio/son/ete.mp3" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio><br />
                            </div>
                        </div>
                        <div>
                            <p>Pour lire et dire correctement le français il faut identifier les syllabes et voici comment les reconnaître. Les voyelles sont toujours prononçable et peuvent former un syllabe à elle seule. le verbe avoir dans,</p>
                            <div>
                                <p>il</p>
                                <audio controls>
                                    <source src="../../assets/audio/son/a.mp3" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio><br />
                                <p>un chien.</p>
                            </div>
                            <p>Si le mot commence par une voyelle elle se dit seule comme dans</p>
                            <audio controls>
                                <source src="../../assets/audio/son/o.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>range.</p>
                        </div>
                        <div>
                            <p>La consonne ne peut être lue qu'avec une voyelle et chaque consonne ne peut être lue qu'avec une voyelle qui la succède. par exemple</p>
                            <div>
                                <audio controls>
                                    <source src="../../assets/audio/son/patate.mp3" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio><br />
                                <div>
                                    <audio controls>
                                        <source src="../../assets/audio/son/pa.mp3" type="audio/mpeg">
                                        Your browser does not support the audio element.
                                    </audio><br />
                                    <audio controls>
                                        <source src="../../assets/audio/son/ta.mp3" type="audio/mpeg">
                                        Your browser does not support the audio element.
                                    </audio><br />
                                    <audio controls>
                                        <source src="../../assets/audio/son/te.mp3" type="audio/mpeg">
                                        Your browser does not support the audio element.
                                    </audio><br />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>a l'intérieur d'un mot si il y a deux même consonnes elles se lisent comme une seule avec la voyelle qui les suit. le mot</p>
                            <div>
                                <audio controls>
                                    <source src="../../assets/audio/son/comme.mp3" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio><br />
                                <p>. On le lit</p>
                                <div>
                                    <audio controls>
                                        <source src="../../assets/audio/son/co.mp3" type="audio/mpeg">
                                        Your browser does not support the audio element.
                                    </audio><br />
                                    <audio controls>
                                        <source src="../../assets/audio/son/me.mp3" type="audio/mpeg">
                                        Your browser does not support the audio element.
                                    </audio><br />
                                </div>
                            </div>
                            <p>ou le mot</p>
                            <div>
                                <audio controls>
                                    <source src="../../assets/audio/son/commerce.mp3" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio><br />
                            </div>
                        </div>
                    </div>
                `,
                foreignHtml: `
                    <div>
                        <h2>Page 3</h2>
                        <h3>Rules</h3>
                        <div>
                            <p>Syllabe: syllabe is a ...</p>
                        </div>
                        <div>
                            <p>To read and said properly french you have to identify syllabes. The way to do it is as follow: Vowels can always been said alone and thus made a syllabe by itself. The verbe avoir dans</p>
                            <audio controls>
                                <source src="../../assets/audio/son/o.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                            </audio><br />
                            <p>range</p>
                            <div>
                                <p>li</p>
                                <audio controls>
                                    <source src="../../assets/audio/son/a.mp3" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio><br />
                                <p>un chien.</p>
                            </div>
                            <p>, if the word start with a vowel it is said alone as in</p>
                        </div>
                        <div>
                            <p>Consonne can not be read without voyelle and ...</p>
                        </div>
                        <div>
                            <p>within a word if there are 2 similar consonnes....</p>
                            <div>
                                <audio controls>
                                    <source src="../../assets/audio/son/comme.mp3" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio><br />
                                <div>
                                    <audio controls>
                                        <source src="../../assets/audio/son/co.mp3" type="audio/mpeg">
                                        Your browser does not support the audio element.
                                    </audio><br />
                                    <audio controls>
                                        <source src="../../assets/audio/son/me.mp3" type="audio/mpeg">
                                        Your browser does not support the audio element.
                                    </audio><br />
                                </div>
                            </div>
                            <div>
                                <audio controls>
                                    <source src="../../assets/audio/son/commerce.mp3" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio><br />
                                <div>
                                    <audio controls>
                                        <source src="../../assets/audio/son/co.mp3" type="audio/mpeg">
                                        Your browser does not support the audio element.
                                    </audio><br />
                                    <audio controls>
                                        <source src="../../assets/audio/son/mer.mp3" type="audio/mpeg">
                                        Your browser does not support the audio element.
                                    </audio><br />
                                    <audio controls>
                                        <source src="../../assets/audio/son/ce.mp3" type="audio/mpeg">
                                        Your browser does not support the audio element.
                                    </audio><br />
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    {
        'id': 3,
        'lesson': 'Lesson 3',
        groupId: 2,
        pages: [
            {
                id: 1,
                html: `
                    <div>
                        <h2>Page 1</h2>
                        <h3 className="something"> la lettre A </h3>
                        <audio controls>
                            <source src="../../assets/audio/son/a.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/papa.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/amiral.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/bataille.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/attaque.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/abri.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <p> Pendant la bataille, mon papa et l'amiral sont à l'abri de l'attaque. </p>
                    </div>
                `,
                foreignHtml: `
                     <div>
                        <h2>Page 1</h2>
                        <h3 className="something">letter A</h3>
                        <audio controls>
                            <source src="../../assets/audio/son/a.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/papa.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/amiral.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/bataille.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/attaque.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/abri.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <p> During the battle, my dad and the admiral are safe from attack. </p>
                    </div>
                `
            },
        ]
    },
    {
        'id': 4,
        'lesson': 'Lesson 4',
        groupId: 2,
        pages: [
            {
                id: 1,
                html: `
                    <div>
                        <h2>Page 1</h2>
                        <h3 className="something"> la lettre A </h3>
                        <audio controls>
                            <source src="../../assets/audio/son/a.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/papa.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/amiral.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/bataille.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/attaque.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/abri.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <p> Pendant la bataille, mon papa et l'amiral sont à l'abri de l'attaque. </p>
                    </div>
                `,
                foreignHtml: `
                     <div>
                        <h2>Page 1</h2>
                        <h3 className="something">letter A</h3>
                        <audio controls>
                            <source src="../../assets/audio/son/a.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/papa.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/amiral.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/bataille.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/attaque.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/abri.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <p> During the battle, my dad and the admiral are safe from attack. </p>
                    </div>
                `
            },
        ]
    },
    {
        'id': 5,
        'lesson': 'Lesson 5',
        groupId: 2,
        pages: [
            {
                id: 1,
                html: `
                    <div>
                        <h2>Page 1</h2>
                        <h3 className="something"> la lettre A </h3>
                        <audio controls>
                            <source src="../../assets/audio/son/a.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/papa.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/amiral.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/bataille.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/attaque.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/abri.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <p> Pendant la bataille, mon papa et l'amiral sont à l'abri de l'attaque. </p>
                    </div>
                `,
                foreignHtml: `
                     <div>
                        <h2>Page 1</h2>
                        <h3 className="something">letter A</h3>
                        <audio controls>
                            <source src="../../assets/audio/son/a.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/papa.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/amiral.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/bataille.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/attaque.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/abri.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <p> During the battle, my dad and the admiral are safe from attack. </p>
                    </div>
                `
            },
        ]
    },
    {
        'id': 6,
        'lesson': 'Lesson 6',
        groupId: 2,
        pages: [
            {
                id: 1,
                html: `
                    <div>
                        <h2>Page 1</h2>
                        <h3 className="something"> la lettre A </h3>
                        <audio controls>
                            <source src="../../assets/audio/son/a.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/papa.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/amiral.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/bataille.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/attaque.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/abri.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <p> Pendant la bataille, mon papa et l'amiral sont à l'abri de l'attaque. </p>
                    </div>
                `,
                foreignHtml: `
                     <div>
                        <h2>Page 1</h2>
                        <h3 className="something">letter A</h3>
                        <audio controls>
                            <source src="../../assets/audio/son/a.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/papa.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/amiral.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/bataille.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/attaque.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/abri.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <p> During the battle, my dad and the admiral are safe from attack. </p>
                    </div>
                `
            },
        ]
    },
    {
        'id': 7,
        'lesson': 'Lesson 7',
        groupId: 3,
        pages: [
            {
                id: 1,
                html: `
                    <div>
                        <h2>Page 1</h2>
                        <h3 className="something"> la lettre A </h3>
                        <audio controls>
                            <source src="../../assets/audio/son/a.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/papa.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/amiral.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/bataille.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/attaque.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/abri.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <p> Pendant la bataille, mon papa et l'amiral sont à l'abri de l'attaque. </p>
                    </div>
                `,
                foreignHtml: `
                     <div>
                        <h2>Page 1</h2>
                        <h3 className="something">letter A</h3>
                        <audio controls>
                            <source src="../../assets/audio/son/a.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/papa.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/amiral.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/bataille.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/attaque.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <audio controls>
                            <source src="../../assets/audio/son/abri.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio><br />
                        <p> During the battle, my dad and the admiral are safe from attack. </p>
                    </div>
                `
            },
        ]
    },
]

export default LESSON_DATA