But de l'exercice 2 : 

Nous créerons des calculatrices en utilisant le pattern "Revealing Module.

Le 'CalculatorModule' renverra un objet lorsqu'il est appelé.
Cet objet aura des fonctions attachées à celui-ci qui effectuent différentes opérations.
Les utilisateurs ne pourront pas accéder à ces fonctions sans créer au préalable une nouvelle calculatrice.

Cette calculatrice aura également des variables privées: "total" et 'memory'. Les utilisateurs ne pourront pas accéder directement à ces valeurs.
Seules les fonctions pourront interagir avec ces valeurs, des fonctions comme: '.add ()', '.subtract ()', '.multiply ()', '.divide ()', etc.

REMARQUE : Assurez-vous de vérifier toutes vos entrées! 

"taco" + 3 // Non valide !

Exemples d'utilisation

let myCalculator = calculatorModule() // crée une nouvelle calculatrice à utiliser
myCalculator.load(6) // valeur initiale à stocker dans une variable privée nommée 'total'
myCalculator.add(5) // ajoute 5 au 'total'
myCalculator.getTotal() // renvoie la valeur de 'total'

Pour commencer : 

1. Installez les dépendances en exécutant la commande : 'npm install'
2. Exécutez les tests en exécutant la commande : 'npm test'
3. Votre travail sera un dans le fichier nommé : 'calculator.js'
4. Faites réussir vos tests!

Aide : 

[Modèles de conception JavaScript essentiels - Modèle de module] (http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)
