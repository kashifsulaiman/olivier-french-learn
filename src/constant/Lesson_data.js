

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
                        <img src="../../assets/images/placeholder.jpg" width="300px" class="element123" id ="../../assets/audio/son/phraseQuiChanteFr.mp3"/>
                        <br/>
                        <!--<button class="element123" id ="phraseQuiChanteFr">Get Id</button>-->
                    </div>
                `,
                foreignHtml: `
                    <div>
                        <h2>Page 2</h2>
                        <h3>General rules to read french.</h3>
                        <p>the first importante rule: French is not ....</p>
                        <img src="../../assets/images/placeholder.jpg" width="300px" class="element123" id = "../../assets/audio/son/phraseQuiChanteFr.mp3"/>
                        <br/>
                        <!--<button class="element123" id ="phraseQuiChanteFr">Get Id</button>-->
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
                                <img src="../../assets/images/placeholder.jpg" width="300px"/>
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
                            <p>
                                Les lettres ont des noms qui peuvent être très différents des sons qu'elles représentent. Par exemple
                            </p>

                            <p style="display: inline;">la lettre C peut faire le son</p>
                            <button class="element123" id = "../../assets/audio/son/se.mp3" type="audio/mpeg">[se]</button>
                            <br/>
                            <br/>

                            <p style="display: inline;">ou le son r</p>
                            <button class="element123" id = "../../assets/audio/son/ke.mp3" type="audio/mpeg">ke</button>
                            <br/>
                            <br/>

                            <p style="display: inline;">et son nom est</p>
                            <button class="element123" id = "../../assets/audio/son/ses.mp3" type="audio/mpeg">ses</button>
                            <br/>
                            <br/>
                        </div>

                        <div>
                            <p style="display: inline;">
                                De plus une association de lettres symbolise un son qui n'a rien à voir avec le son que forme chaque lettre individuellement. Par exemple </p> <br /><br /> <p style="display: inline;"> la lettre A fait le son
                            </p>
                            <button class="element123" id = "../../assets/audio/son/a.mp3">a</button>
                            <br/>
                            <br/>

                            <p style="display: inline;">la lettre U fait le son</p>
                            <button class="element123" id = "../../assets/audio/son/u.mp3" type="audio/mpeg">u</button>
                            <br/>
                            <br/>

                            <p style="display: inline;">alors que l'association AU, fait le son</p>
                            <button class="element123" id = "../../assets/audio/son/o.mp3" type="audio/mpeg">o</button>
                            <br/>
                            <br/>
                        </div>
                    </div>
                `,
                foreignHtml: `
                    <div>
                        <h2>Page 4</h2>
                        <h3>rules</h3>
                        <div>
                            <p style="display: inline;">Letters have name which can very different the sound they express</p>
                            <button class="element123" id = "../../assets/audio/son/se.mp3">se</button>
                            <br/><br/>
                            <p style="display: inline;">ou le son r</p>
                            <button class="element123" id = "../../assets/audio/son/ke.mp3">ke</button>
                            <br/><br/>
                            <p style="display: inline;" >et son nom est</p>
                            <button class="element123" id = "../../assets/audio/son/ses.mp3">ses</button>

                        </div>
                        <div>
                            <p>The association of letters symbolise a sound that as nothing to do... For exemple </p>

                            <p style="display: inline;">the letter A made the sound</p>
                            <button  class="element123" id = "../../assets/audio/son/a.mp3">a</button>
                            <br/><br/>
                            <p style="display: inline;">the letter U made the sound</p>
                            <button  class="element123" id = "../../assets/audio/son/u.mp3">u</button>
                            <br/><br/>
                            <p style="display: inline;">but the association of AU made the sound</p>
                            <button class="element123" id = "../../assets/audio/son/o.mp3">o</button>


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
                            <p>
                                Les voyelles: ce sont les lettres qui représente les sons que l'on peut vocaliser seuls. Les voyelles de bases A E I O U. Donc les sons
                            </p>
                            <button class="element123" id = "../../assets/audio/son/a.mp3">A</button>


                            <button class="element123" id = "../../assets/audio/son/e.mp3">E</button>


                            <button class="element123" id = "../../assets/audio/son/i.mp3">I</button>


                            <button class="element123" id = "../../assets/audio/son/o.mp3">O</button>


                            <button class="element123" id = "../../assets/audio/son/u.mp3">U</button>


                            <p>sont prononçables seuls, avec eux on a de la voix.</p>
                        </div>
                    </div>
                `,
                foreignHtml: `
                    <div>
                        <h2>Page 5</h2>
                        <h3>Rules</h3>
                        <div>
                            <p>
                                Voyelles: the letters that express the sound which can be vocalized alone?. the voyelles are A E I O U. Thus the sound
                            </p>

                            <button class="element123" id = "../../assets/audio/son/a.mp3">A</button>

                            <button class="element123" id = "../../assets/audio/son/e.mp3">E</button>

                            <button class="element123" id = "../../assets/audio/son/i.mp3">I</button>

                            <button class="element123" id = "../../assets/audio/son/o.mp3">O</button>

                            <button class="element123" id = "../../assets/audio/son/u.mp3">U</button>

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
                            <p>
                                les consonnes. Le mot consonne est fait de con: avec et sonne: sonner ce qui veut dire: qui sonne avec. Contrairement a certaine langue qui ont concerver une prononciation du type latin comme le russe l'anglais, l'allemand, le français lui n'a aucune struture d'origine latine dans sa prononciation. Les consonnes ne se vocalisent pas seul, il faut une voyelle après pour que la consonne sonne. La lettre T va selon la voyelle qui lui succède de prononcer
                            </p>
                            <button class="element123" id = "../../assets/audio/son/tu.mp3">tu</button>

                            <p >, seul elle ne sonne pas. C'est pourquoi la consonne à la fin d'un mot ne se prononce pas</p>
                            <button class="element123" id = "../../assets/audio/son/souris.mp3">souris</button>

                            <p >mais encore un fois ne vous préoccupez pas de tout cela car nous allons voir toutes ces choses graduellement dans ce course. Vous devez simplement le garder en en tête.</p>
                            <button  class="element123" id = "../../assets/audio/son/elephant.mp3">elephant</button>
                        </div>
                    </div>
                `,
                foreignHtml: `
                <div>
                    <h2>Page 1</h2>
                    <div>
                        <p>consonne:the word consonne is made with con (with) and with sonne (ring)</p>
                        <button class="element123" id = "../../assets/audio/son/souris.mp3" style={{display: 'inline'}}>souris</button>

                        <p>mais encore un fois ne vous préoccupez pas de tout cela car nous allons voir toutes ces choses graduellement dans ce course. Vous devez simplement le garder en en tête.</p>
                        <button class="element123" id = "../../assets/audio/son/elephant.mp3">elephant</button>
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
                        <div sytle={styling}>

                            <p>prenons des mots papa qui doit être lu</p>
                            <div >

                               <button  id = "../../assets/audio/son/pa.mp3" >pa</button>
                            <span>et</span>


                            <button class="element123" id="../../assets/audio/son/pa.mp3" >pa</button>
                </div>
                            <p>comme si le groupe de lettre ne faisait qu'un seul son qui se dit en un seul soufle. Le mot TATA doit être lu</p>


                            <button  class="element123" id = "../../assets/audio/son/ta_ta.mp3">ta ta</button>

                            <p>et on ne chante pas. On essaye pas d'accentuer les sons même si votre oreille entend un quelque chose qui ressemble à une accentuation. Il vous faut lire syllabe après syllabe et ne pas chercher à faire autre chose. En français il n'y a pas de</p>

                            <!--<p style="display: inline;">aaa</p>-->
                            <button class="element123" id = "../../assets/audio/son/aaa.mp3">aaa</button>

                            <span>ou de</span>
                            <!--<p style="display: inline;">ououwa</p>-->
                            <button class="element123" id = "../../assets/audio/son/ouwa.mp3">ououwa</button>

                            <div>
                                <p style="display: inline;">ba</p>
                                <button  class="element123" id = "../../assets/audio/son/ba.mp3"></button>
                                <p style="display: inline;">la</p>
                                <button class="element123" id = "../../assets/audio/son/la.mp3"></button>
                                <p style="display: inline;">de</p>
                                <button class="element123" id = "../../assets/audio/son/de.mp3"></button>
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
                            <!--<p style="display: inline;">pa</p>-->
                            <button class="element123" id = "../../assets/audio/son/pa.mp3">pa</button>

                            <p>and</p>
                            <!--<p style="display: inline;">pa</p>-->
                            <button class="element123" id = "../../assets/audio/son/pa.mp3">pa</button>

                            <p>as the group of letters made only one sound and it is saied in one breath. The word TATA have to be read</p>
                            <!--<p style="display: inline;">ta ta</p>-->
                            <button class="element123" id = "../../assets/audio/son/ta_ta.mp3">ta ta</button>
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

                            <button class="element123" id = "../../assets/audio/son/english/two.mp3">two</button>

                            <p>se lit presque en un seul soufle, un seul son. Alors que le mot</p>

                            <button class="element123" id = "../../assets/audio/son/english/quiet.mp3">quiet</button>

                            <p>il y a 3 syllabes</p>
                            <div>

                               <button  class="element123" id = "../../assets/audio/son/koi.mp3">qui</button>


                               <button class="element123" id = "../../assets/audio/son/i.mp3">i</button>


                               <button class="element123" id = "../../assets/audio/son/ete.mp3">ete</button>
                            </div>
                        </div>
                        <div>
                            <p>Pour lire et dire correctement le français il faut identifier les syllabes et voici comment les reconnaître. Les voyelles sont toujours prononçable et peuvent former un syllabe à elle seule. le verbe avoir dans,</p>
                            <div>
                                <p>il</p>

                                <button class="element123" id = "../../assets/audio/son/a.mp3">a</button>

                                <p>un chien.</p>
                            </div>
                            <p>Si le mot commence par une voyelle elle se dit seule comme dans</p>

                            <button class="element123" id = "../../assets/audio/son/o.mp3">o</button>

                            <p>range.</p>
                        </div>
                        <div>
                            <p>La consonne ne peut être lue qu'avec une voyelle et chaque consonne ne peut être lue qu'avec une voyelle qui la succède. par exemple</p>
                            <div>
                            <p style="display: inline;">patate</p>
                            <button class="element123" id = "../../assets/audio/son/patate.mp3"></button>

                                <div>

                                    <button class="element123" id = "../../assets/audio/son/pa.mp3">pa</button>


                                    <button class="element123" id = "../../assets/audio/son/ta.mp3">ta</button>


                                    <button class="element123" id = "../../assets/audio/son/te.mp3">te</button>

                                </div>
                            </div>
                        </div>
                        <div>
                            <p>a l'intérieur d'un mot si il y a deux même consonnes elles se lisent comme une seule avec la voyelle qui les suit. le mot</p>
                            <div>
                            <p style="display: inline;">comme</p>
                            <button class="element123" id = "../../assets/audio/son/comme.mp3">comme</button>
                                <p>. On le lit</p>
                                <div>

                                    <button class="element123" id = "../../assets/audio/son/co.mp3">co</button>


                                    <button class="element123" id = "../../assets/audio/son/me.mp3">me</button>

                                </div>
                            </div>
                            <p>ou le mot</p>
                            <div>

                                <button class="element123" id = "../../assets/audio/son/commerce.mp3">commerce</button>

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
                            <!--<p style="display: inline;">o</p>-->
                            <button class="element123" id = "../../assets/audio/son/o.mp3">o</button>

                            <p>range</p>
                            <div>
                                <p>li</p>

                                <button class="element123" id = "../../assets/audio/son/a.mp3">a</button>
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

                            <button class="element123" id = "../../assets/audio/son/comme.mp3">coome</button>
                                <div>

                                    <button  class="element123" id = "../../assets/audio/son/co.mp3">co</button>

                                    <button  class="element123" id = "../../assets/audio/son/me.mp3">me</button>

                                </div>
                            </div>
                            <div>

                            <button class="element123" id = "../../assets/audio/son/commerce.mp3">commerce</button>

                                <div>

                                    <button class="element123" id = "../../assets/audio/son/co.mp3">co</button>


                                    <button class="element123" id = "../../assets/audio/son/mer.mp3">mer</button>

                                    <button class="element123" id = "../../assets/audio/son/ce.mp3">ce</button>
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
                        <h3><button class="element123" id = "all"> la lettre A </button></h3>
                        <!--<p style="display: inline;">a</p>-->
                        <button class="element123" id = "../../assets/audio/son/a.mp3">a</button>
                        </br>

                        <!--<p style="display: inline;">papa</p>-->
                        <button class="element123" id = "../../assets/audio/son/papa.mp3">papa</button>
                        </br>

                        <!--<p style="display: inline;">amiral</p>-->
                        <button class="element123" id = "../../assets/audio/son/amiral.mp3">amiral</button>
                        </br>

                        <!--<p style="display: inline;">bataille</p>-->
                        <button class="element123" id = "../../assets/audio/son/bataille.mp3">bataille</button>
                        </br>

                        <!--<p style="display: inline;">attaque</p>-->
                        <button class="element123" id = "../../assets/audio/son/attaque.mp3">attaque</button>
                        </br>

                        <!--<p style="display: inline;">abri</p>-->
                        <button class="element123" id = "../../assets/audio/son/abri.mp3">abri</button>

                        <br /><br /><button> Pendant la bataille, mon papa et l'amiral sont à l'abri de l'attaque. </button>
                    </div>
                `,
                foreignHtml: `
                     <div>
                        <h2>Page 1</h2>
                        <button class="element123" id = "all">letter A</button>
                        <!--<p style="display: inline;">a</p>--><br /><br />
                        <button class="element123" id = "../../assets/audio/son/a.mp3">a</button>
                        </br>

                        <!--<p style="display: inline;">papa</p>-->
                        <button class="element123" id = "../../assets/audio/son/papa.mp3">papa</button>
                        </br>

                        <!--<p style="display: inline;">amiral</p>-->
                        <button class="element123" id = "../../assets/audio/son/amiral.mp3">amiral</button>
                        </br>

                        <!--<p style="display: inline;">bataille</p>-->
                        <button class="element123" id = "../../assets/audio/son/bataille.mp3">bataille</button>
                        </br>

                        <!--<p style="display: inline;">attaque</p>-->
                        <button class="element123" id = "../../assets/audio/son/attaque.mp3">attaque</button>
                        </br>

                        <!--<p style="display: inline;">abri</p>-->
                        <button class="element123" id = "../../assets/audio/son/abri.mp3">abri</button>

                        <br /><br /><button> During the battle, my dad and the admiral are safe from attack. </button>
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
                        <button class="element123" id = "all">la lettre A </button>
                        <!--<p style="display: inline;">a</p>--><br /><br />
                        <button class="element123" id = "../../assets/audio/son/a.mp3">a</button>
                        </br>

                        <!--<p style="display: inline;">papa</p>-->
                        <button class="element123" id = "../../assets/audio/son/papa.mp3">papa</button>
                        </br>

                        <!--<p style="display: inline;">amiral</p>-->
                        <button class="element123" id = "../../assets/audio/son/amiral.mp3">amiral</button>
                        </br>

                        <!--<p style="display: inline;">bataille</p>-->
                        <button class="element123" id = "../../assets/audio/son/bataille.mp3">bataille</button>
                        </br>

                        <!--<p style="display: inline;">attaque</p>-->
                        <button class="element123" id = "../../assets/audio/son/attaque.mp3">attaque</button>
                        </br>

                        <!--<p style="display: inline;">abri</p>-->
                        <button class="element123" id = "../../assets/audio/son/abri.mp3">abri</button>

                        <br /><br /><button> Pendant la bataille, mon papa et l'amiral sont à l'abri de l'attaque. </button>
                    </div>
                `,
                foreignHtml: `
                     <div>
                        <h2>Page 1</h2>
                        <button class="element123" id = "all">letter A</button>
                        <!--<p style="display: inline;">a</p>--><br /><br />
                        <button class="element123" id = "../../assets/audio/son/a.mp3">a</button>
                        </br>

                        <!--<p style="display: inline;">papa</p>-->
                        <button class="element123" id = "../../assets/audio/son/papa.mp3">papa</button>
                        </br>

                        <!--<p style="display: inline;">amiral</p>-->
                        <button class="element123" id = "../../assets/audio/son/amiral.mp3">amiral</button>
                        </br>

                        <!--<p style="display: inline;">bataille</p>-->
                        <button class="element123" id = "../../assets/audio/son/bataille.mp3">bataille</button>
                        </br>

                        <!--<p style="display: inline;">attaque</p>-->
                        <button class="element123" id = "../../assets/audio/son/attaque.mp3">attaque</button>
                        </br>

                        <!--<p style="display: inline;">abri</p>-->
                        <button class="element123" id = "../../assets/audio/son/abri.mp3">abri</button>

                        <br /><br /><button> During the battle, my dad and the admiral are safe from attack. </button>
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
                        <button class="element123" id = "all"> la lettre A </button>
                        <!--<p style="display: inline;">a</p>--><br /><br />
                        <button class="element123" id = "../../assets/audio/son/a.mp3">a</button>
                        </br>

                        <!--<p style="display: inline;">papa</p>-->
                        <button class="element123" id = "../../assets/audio/son/papa.mp3">papa</button>
                        </br>

                        <!--<p style="display: inline;">amiral</p>-->
                        <button class="element123" id = "../../assets/audio/son/amiral.mp3">amiral</button>
                        </br>

                        <!--<p style="display: inline;">bataille</p>-->
                        <button class="element123" id = "../../assets/audio/son/bataille.mp3">bataille</button>
                        </br>

                        <!--<p style="display: inline;">attaque</p>-->
                        <button class="element123" id = "../../assets/audio/son/attaque.mp3">attaque</button>
                        </br>

                        <!--<p style="display: inline;">abri</p>-->
                        <button class="element123" id = "../../assets/audio/son/abri.mp3">abri</button>

                        <br /><br /><button> Pendant la bataille, mon papa et l'amiral sont à l'abri de l'attaque. </button>
                    </div>
                `,
                foreignHtml: `
                     <div>
                        <h2>Page 1</h2>
                        <button class="element123" id = "all">letter A</button>
                        <!--<p style="display: inline;">a</p>--><br /><br />
                        <button class="element123" id = "../../assets/audio/son/a.mp3">a</button>
                        </br>

                        <!--<p style="display: inline;">papa</p>-->
                        <button class="element123" id = "../../assets/audio/son/papa.mp3">papa</button>
                        </br>

                        <!--<p style="display: inline;">amiral</p>-->
                        <button class="element123" id = "../../assets/audio/son/amiral.mp3">amiral</button>
                        </br>

                        <!--<p style="display: inline;">bataille</p>-->
                        <button class="element123" id = "../../assets/audio/son/bataille.mp3">bataille</button>
                        </br>

                        <!--<p style="display: inline;">attaque</p>-->
                        <button class="element123" id = "../../assets/audio/son/attaque.mp3">attaque</button>
                        </br>

                        <!--<p style="display: inline;">abri</p>-->
                        <button class="element123" id = "../../assets/audio/son/abri.mp3">abri</button>

                        <br /><br /><button> During the battle, my dad and the admiral are safe from attack. </button>
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
                        <button class="element123" id = "all">la lettre A </button>
                        <!--<p style="display: inline;">a</p>--><br /><br />
                        <button class="element123" id = "../../assets/audio/son/a.mp3">a</button>
                        </br>

                        <!--<p style="display: inline;">papa</p>-->
                        <button class="element123" id = "../../assets/audio/son/papa.mp3">papa</button>
                        </br>

                        <!--<p style="display: inline;">amiral</p>-->
                        <button class="element123" id = "../../assets/audio/son/amiral.mp3">amiral</button>
                        </br>

                        <!--<p style="display: inline;">bataille</p>-->
                        <button class="element123" id = "../../assets/audio/son/bataille.mp3">bataille</button>
                        </br>

                        <!--<p style="display: inline;">attaque</p>-->
                        <button class="element123" id = "../../assets/audio/son/attaque.mp3">attaque</button>
                        </br>

                        <!--<p style="display: inline;">abri</p>-->
                        <button class="element123" id = "../../assets/audio/son/abri.mp3">abri</button>
                        <br /><br /><button> Pendant la bataille, mon papa et l'amiral sont à l'abri de l'attaque. </button>
                    </div>
                `,
                foreignHtml: `
                     <div>
                        <h2>Page 1</h2>
                        <button class="element123" id = "all">letter A</button>
                       <!--<p style="display: inline;">a</p>--><br /><br />
                        <button class="element123" id = "../../assets/audio/son/a.mp3">a</button>
                        </br>

                        <!--<p style="display: inline;">papa</p>-->
                        <button class="element123" id = "../../assets/audio/son/papa.mp3">papa</button>
                        </br>

                        <!--<p style="display: inline;">amiral</p>-->
                        <button class="element123" id = "../../assets/audio/son/amiral.mp3">amiral</button>
                        </br>

                        <!--<p style="display: inline;">bataille</p>-->
                        <button class="element123" id = "../../assets/audio/son/bataille.mp3">bataille</button>
                        </br>

                        <!--<p style="display: inline;">attaque</p>-->
                        <button class="element123" id = "../../assets/audio/son/attaque.mp3">attaque</button>
                        </br>

                        <!--<p style="display: inline;">abri</p>-->
                        <button class="element123" id = "../../assets/audio/son/abri.mp3">abri</button>
                        <br /><br /><button> During the battle, my dad and the admiral are safe from attack. </button>
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
                        <button class="element123" id = "all"> la lettre A </button>
                        <!--<p style="display: inline;">a</p>--><br /><br />
                        <button class="element123" id = "../../assets/audio/son/a.mp3">a</button>
                        </br>

                        <!--<p style="display: inline;">papa</p>-->
                        <button class="element123" id = "../../assets/audio/son/papa.mp3">papa</button>
                        </br>

                        <!--<p style="display: inline;">amiral</p>-->
                        <button class="element123" id = "../../assets/audio/son/amiral.mp3">amiral</button>
                        </br>

                        <!--<p style="display: inline;">bataille</p>-->
                        <button class="element123" id = "../../assets/audio/son/bataille.mp3">bataille</button>
                        </br>

                        <!--<p style="display: inline;">attaque</p>-->
                        <button class="element123" id = "../../assets/audio/son/attaque.mp3">attaque</button>
                        </br>

                        <!--<p style="display: inline;">abri</p>-->
                        <button class="element123" id = "../../assets/audio/son/abri.mp3">abri</button>

                        <br /><br /><button> Pendant la bataille, mon papa et l'amiral sont à l'abri de l'attaque. </button>
                    </div>
                `,
                foreignHtml: `
                     <div>
                        <h2>Page 1</h2>
                        <button class="element123" id = "all">letter A</button>
                        <!--<p style="display: inline;">a</p>--><br /><br />
                        <button class="element123" id = "../../assets/audio/son/a.mp3">a</button>
                        </br>

                        <!--<p style="display: inline;">papa</p>-->
                        <button class="element123" id = "../../assets/audio/son/papa.mp3">papa</button>
                        </br>

                        <!--<p style="display: inline;">amiral</p>-->
                        <button class="element123" id = "../../assets/audio/son/amiral.mp3">amiral</button>
                        </br>

                        <!--<p style="display: inline;">bataille</p>-->
                        <button class="element123" id = "../../assets/audio/son/bataille.mp3">bataille</button>
                        </br>

                        <!--<p style="display: inline;">attaque</p>-->
                        <button class="element123" id = "../../assets/audio/son/attaque.mp3">attaque</button>
                        </br>

                        <!--<p style="display: inline;">abri</p>-->
                        <button class="element123" id = "../../assets/audio/son/abri.mp3">abri</button>

                        <br /><br /><button> During the battle, my dad and the admiral are safe from attack. </button>
                    </div>
                `
            },
        ]
    },
]

const styling = {
    display: 'inline !important',
};

export default LESSON_DATA