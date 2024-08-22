# Le Jeu de la Vie
Le jeu de la vie est un automate cellulaire imaginé par John Horton Conway en 1970. Il s'agit d'un jeu à zéro joueur, ce qui signifie que son évolution est déterminée par son état initial et ne nécessite aucune intervention de la part d'un humain. On interagit avec le jeu en créant un motif initial, puis en observant son évolution.

# Les règles
Le jeu de la vie se déroule sur une grille à deux dimensions, théoriquement infinie (mais de taille finie ou bouclée dans la pratique), dont les cases — qu’on appelle des « cellules », par analogie avec les cellules vivantes — peuvent prendre deux états distincts : morte ou vivante. Chaque cellule interagit avec ses huit voisines, qui sont les cellules directement adjacentes horizontalement, verticalement ou en diagonale.

À chaque étape, les règles suivantes s’appliquent :
- Une cellule morte possédant exactement trois voisines vivantes devient vivante (elle naît).
- Une cellule vivante possédant deux ou trois voisines vivantes le reste, sinon elle meurt.

# Limitations
Ce projet est une reproduction imparfaite du Jeu de la Vie original (grille finie, affichage lent, etc.). Malgré ses limitations, il propose quelques outils intéressants qui permettent de s'amuser et d'expérimenter avec le Jeu de la Vie.

# En savoir plus
Si vous souhaitez en savoir plus sur le Jeu de la Vie, voici quelques ressources intéressantes :
[Wikipédia]("https://fr.wikipedia.org/wiki/Jeu_de_la_vie") , [LifeWiki]("https://conwaylife.com/wiki/"), ["epic conway's game of life" (Rational Animations)]("https://www.youtube.com/watch?v=C2vgICfQawE"), ["Le Jeu de la Vie" (ScienceEtonnante)]("https://youtu.be/S-W0NX97DB0?si=D3INFdFrrCfTsUJc").

