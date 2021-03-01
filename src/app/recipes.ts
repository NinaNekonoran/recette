let NO_IMAGE = 'https://www.recia.fr/wp-content/uploads/2019/09/no_image.png';

let recipes = [
    {
        id : 6,
        title : 'MANIOC DOUX CUISSON A L\'EAU',
        member : '4 à 5 personnes',
        time_preparation : '20 min',
        time_cuisson : '25 min',
        description : 'Le manioc frais est un légume, un tubercule farineux apprécié et consommé généralement bouilli, c\'est un aliment très nourrissant.',
        img : 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/1614201716299.jpg?raw=true',
        ingredients : [
            {name : 'Manioc frais', amount : '1', img : 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/1614201716342.jpg?raw=true'},
            {name : '[sel]'}
        ],
        states : [
            'Lavez les maniocs.',
            'A l\'aide d\'un couteau coupez les maniocs en deux, épluchez-les en profondeur, fendez, enlevez les racines au milieu, coupez en morceaux de taille moyenne, rincez.',
            'Mettez-les dans une casserole, ajoutez de l\'eau à mi-hauteur des morceaux de manioc et salez si besoin, mettez la casserole au feu, dès ébullition, laissez cuire pendant 25 min environ, si l\'eau de cuisson déborde, mettez votre couvercle entrouvert, surveillez la cuisson.',
            'Piquez les maniocs avec le bout d\'un couteau, si le couteau s\'enfonce, votre manioc est cuit, arrêtez la cuisson quand le manioc est tendre, enlevez l\'eau de cuisson et dégustez.'
        ],
        advices: [
            'Choisissez le manioc frais bien ferme. Il accompagne vos plats de poissons, de viandes, vos feuilles de manioc, les safous, ect…'
        ]
    },
    {
        id : 5,
        title : 'FEUILLES DE MANIOC SANS SEL: (Kwem ou Kpwem)',
        member : '4 à 5 personnes',
        time_preparation : '30 min',
        time_cuisson : '2h',
        description : 'Les feuilles de manioc, ou purée de feuilles de manioc ou (pkwem) chez les bétis au Cameroun, est un plat très nourrissant. On peut  le préparer sans ou avec sel en ajoutant la viande le poisson ou de la pâte d\'arachide, ect...',
        img : 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/1614201716313.jpg?raw=true',
        ingredients : [
            {name : ['Paquets de feuilles de manioc frais','Sachets de feuilles de manioc surgelés'], amount : ['3','2']},
            {name : 'Boîte de 500g de jus de noix de palme (sauce graine)', amount : '1'},
            {name : 'Maïs', amount : '1'},
            {name : '[Macabos]', amount : '2'}
        ],
        states : [
            'Mettez les feuilles de manioc dans une casserole,  ajoutez de l\'eau à hauteur des feuilles, mélangez, couvrez et faites cuire  à feu doux 1h environ, en remuant de temps en temps',
            'Epluchez, lavez les macabos et le maïs, coupez-les en deux si nécessaire, réservez.',
            'Au bout d\'une heure de cuisson, ajoutez dans la préparation les macabos, fermez la casserole et laissez cuire 15 min',
            'Rincez et ouvrez la boîte de jus de noix de palme (sauce graine), enlevez à l\'aide d\'une cuillère l\'huile rouge qui est au dessus, vous pouvez la jeter, versez toujours à l\'aide d\'une cuillère le jus de la boîte dans la casserole, ajoutez en même temps le maïs, remuez, le mélange ne doit pas être épais ni liquide, ajoutez de l\'eau si besoin et faites  cuire encore 30 min environ, gouttez, les feuilles de manioc doivent être tendres et servez chaud.'
        ],

        advices : [
            'Les feuilles de manioc s\'accompagnent avec le manioc frais bouilli, le macabo, le maïs, ou le bâton de manioc, ect...',
            'A la place de la boîte de 500g de jus de noix de palme, vous pouvez mettre la boîte de 800g selon votre goût.'
        ],
    },
    {
        id : 4,
        title : 'MACABO BOUILLI',
        member : '4 personnes',
        time_preparation : '15 min',
        time_cuisson : '30min',
        description : 'xxx',
        img : 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/1614541536120.jpg?raw=true',
        ingredients : [
            {name : 'Macabos', amount : '5', img: 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/1614541536105.jpg?raw=true'},
            {name : '[sel]'},
        ],
        states : [
            'Pelez les macabos avec un couteau, lavez, coupez-les en 2 ou 3 morceaux si nécessaire, rincez.',
            'Dans une casserole disposez les macabos, ajoutez de l\'eau à hauteur des macabos.',
            'Mettez au feu à feu moyen, dès que l\'eau boue, ajoutez un peu de sel si besoin, et laissez cuire 30 mn environ.',
            'Vérifiez la cuisson avec la pointe d\'un couteau, si le couteau s\'enfonce, alors les macabos sont cuits.',
            'Retirez du feu, enlevez l\'eau de cuisson et servez chaud.',
            'Le macabo bouilli s\'accompagne avec les poissons en sauce, les viandes en sauce, les feuilles de manioc, ect...'
        ]
    },
    {
        id : 3,
        title : 'BOEUF SAUCE GOMBO',
        member : '4 à 5 personnes',
        time_preparation : '20 min',
        time_cuisson : '2h30',
        description : 'La sauce gombo est une sauce gluante, à base de gombos frais. Elle accompagne souvent  les plats de viandes,  de crabes, de crevettes, de poissons fumés, ect... Elle est l\'une des sauces les plus célèbres d\'Afrique.',
        img : 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/img3.jpg?raw=true',
        ingredients : [
            {name : 'Côtes de BOEUF', amount : '1kg'},
            {name : 'Gombos frais', amount : '200g'},
            {name : 'Oignons', amount : '2'},
            {name : 'Gousses d\'ail', amount : '4'},
            {name : 'Tomates', amount : '2'},
            {name : 'Huile végétale', amount : '3 cs'},
            {name : '[Cube maggi]', amount : '1'},
            {name : 'Sel'},
            {name : 'Poivre'},
        ],
        states : [
            'Epluchez et lavez les oignons, les gousses d\'ail, et les tomates, coupez-les en petits morceaux.',
            'Apprêtez votre viande, coupez-la en morceaux, rincez et égouttez.',
            'Chauffez de l\'huile dans une casserole, faîtes rissoler la viande en remuant de temps en temps pendant 10 min, ajoutez les légumes coupés en morceaux, assaisonnez à votre goût (cube maggi), salez, poivrez, remuez, couvrez et laissez mijoter à feu doux pendant 20 min en remuant de temps en temps.',
            'Ajoutez ensuite de l\'eau à hauteur de la viande, couvrez et laissez cuire durant 2 h environ',
            'Lavez les gombos, coupez chaque gombo en 4 ou 5 morceaux, réservez.',
            'Faîtes bouillir de l\'eau dans une casserole sans couvercle, ajoutez les gombos, et laissez cuire 20 min environ à feu doux en remuant de temps en temps, faîtes attention que l\'eau de cuisson ne déborde pas.',
            'Dès que les gombos sont cuits, enlevez l\'eau de cuisson, et versez les gombos dans la casserole de viande tendre, remuez, gouttez, assaisonnez encore à votre convenance si besoin, laissez encore mijoter 10 min, et servez avec le foufou de votre choix, ect…',
        ],
        advices : [
            'Vous pouvez utiliser d\'autres morceaux de viande de boeuf : queue de boeuf, boeuf bourguignon ou autres. La sauce gombo s\'accompagne de foufou de manioc, de foufou de maïs, de plantin pilé, vous pouvez  aussi mélanger la farine de maïs avec la farine de manioc, ect...'
        ],
    },{
        id : 2,
        title : 'BOUILLON DE POISSON',
        member : '4 à 6 personnes',
        time_preparation : '20 min',
        time_cuisson : '25 min',
        description : 'Le bouillon de poisson appelé au Cameroun Pèpè Soupe est une recette simple, pimentée, très épicée, elle est délicieuse. Choisissez le poisson à chair ferme: Le bar, le capitaine, le mâchoiron, la carpe, ou le maquereau, évitez les poissons avec beaucoup d\'arrêtes. Vous pouvez remplacer le piment avec du poivre selon votre goût. ',
        img : 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/1613750628687.jpg?raw=true',
        ingredients : [
            {name : 'Maquereaux', amount : '2', img : 'https://image.freepik.com/photos-gratuite/maquereaux-frais-vue-dessus-assiette_23-2148295238.jpg'},
            {name : 'Tomates', amount : '3', img : 'https://image.freepik.com/photos-gratuite/tomates_144627-15408.jpg'},
            {name : 'Gingembre frais', amount : '10g', img : 'https://image.freepik.com/photos-gratuite/gingembre-doux-amer_144627-12044.jpg'},
            {name : 'Oignon', amount : '1', img : 'https://image.freepik.com/photos-gratuite/oignon_144627-27528.jpg'},
            {name : 'Gousse d\'ail', amount : '1', img: 'https://image.freepik.com/photos-gratuite/fin-haut-frais-ail_144627-34523.jpg'},
            {name : 'Branche de basilic', amount : '1', img: 'https://image.freepik.com/photos-gratuite/gros-plan-basilic-savoureux-mise-au-point-selective_1220-1501.jpg'},
            {name : 'Branche de blanc de poireau', amount : '1', img:'https://image.freepik.com/photos-gratuite/poireau-surface-blanche_144627-45166.jpg'},
            {name : 'Citron', amount : '1', img:'https://image.freepik.com/photos-gratuite/citron_1205-1667.jpg'},
            {name : '[Piment frais]', amount : '1', img:'https://image.freepik.com/photos-gratuite/poivre-isole_1205-1721.jpg'},
            {name : 'Cuillère d\'huile d\'olive', amount : '2', img:'https://image.freepik.com/photos-gratuite/bouteille-huile-olive-table-marbre_114579-18137.jpg'},
            {name : '[Njansang]', amount : '20g', img:'https://i.pinimg.com/originals/1b/6f/7b/1b6f7be5b247f2f54b367d4da38f83f5.jpg'},
            {name : '[Pèbé]', amount : '10g', img:'https://afritibi.com/wp-content/uploads/2017/02/noix-de-pebe.png'},
            {name : 'Sel'},
            {name : 'Poivre'},
        ],
        states : [
            'Nettoyez, lavez les <b>poissons</b>, coupez-les en 3 ou 4 morceaux, réservez dans un grand saladier rempli d\'eau salée.',
            'Lavez, coupez les légumes en morceaux, mixez les tomates, l\'<b>oignon</b>, le <b>gingembre</b>, le <b>basilic</b>, le <b>poireau</b>, l\'<b>ail</b>, et un petit morceau de <b>piment</b> si besoin, réservez.',
            'Ecrasez le <b>pèbè</b> et le <b>djansang</b> si besoin, réservez.',
            'Videz l\'eau des poissons, ajoutez les ingrédients mixés, écrasés, sans oublier le <b>jus de citron</b> dans le saladier à poissons, <b>poivrez</b>, <b>salez</b>, mélangez bien, et versez le contenu dans une grande casserole à fond épais.',
            'Posez votre casserole sur un feu doux, laissez frémir <b>10 min</b>, ensuite ajoutez de l\'eau, de l\'huile, assaisonnez à votre gout, remuez, et laissez cuire <b>20 min</b> environ.',
            'Gouttez, rectifiez, ajoutez de l\'eau si nécessaire, surtout veillez à ce que les morceaux de poissons restent entiers, laissez encore <b>5 min</b> au feu.'
        ],
        advices : [
            'Le bouillon de poisson se sert chaud accompagné du plantin vert, du manioc, de l\'igname, du macabo, ect...'
        ],
        areImg : true
    },
    {
        id : 1,
        title : 'Le SANGA',
        member : '5 à 6 personnes',
        time_preparation : '40 min',
        time_cuisson : '1 h 30 min',
        description : 'Le Sanga est un met composé de légumes (les feuilles de folon, de zom, d\'aubergines, ou les épinards), de maïs en grain doux frais cuits avec du jus de noix de palme et mangé avec ou sans sucre, il est apprécié dans le sud  et presque partout au Cameroun, on peut le consommer en entrée, ou en plat principal.',
        img : 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/1613750628714.jpg?raw=true',
        ingredients : [
            {name : 'Folon frais', amount : '1kg ', img: 'https://enviesdafrique.fr/wp-content/uploads/2020/11/follon-300x300.jpeg'},
            {name : 'Epis de maïs doux frais', amount : '8-10', img: 'https://image.freepik.com/photos-gratuite/graines-mais-sucre-table-bois_1150-9483.jpg'},
            {name : 'Boîte de 500g de jus de noix de palme(sauce graine)', amount : '1', img: 'https://produits.bienmanger.com/28567-0w600h600_Sauce_Graine_Palme.jpg'}
        ],
        states : [
            'Triez, lavez, égouttez, coupez le <b>folon</b> en deux',
            'Faites bouillir de l\'eau dans une grande casserole, <b>versez</b> les feuilles de folon dans cet eau bouillante, et laissez cuire pendant <b>15 min</b> sans couvercle, <b>remuez de temps en temps</b> avec une spatule en bois, il faut que les feuilles soient tendres, égouttez, laissez tiédir, ensuite <b>pressez-les</b> avec vos mains pour enlever l\'eau, et <b>hacher-les</b> finement avec un couteau sur une planche en bois',
            '<i>Ou bien hachez le folon frais finement à la main avec un couteau, réservez.</i>',
            'A l\'aide d\'un couteau bien aiguisé, égrenez le <b>maïs</b> par le sens de la longueur en deux étapes, et grattez les épis, réservez.',
            'Mettez les feuilles de folon dans une grande casserole, ajoutez assez d\'eau, mélangez, couvrez et portez à ébullition à feu moyen pendant <b>15 min</b>',
            'Versez ensuite les grains de maïs dans la casserole de folon, mélangez, portez de nouveau à ébullition pendant <b>30 min</b>, remuez de temps en temps',
            'Ajoutez le <b>jus de noix de palme(sauce graine)</b> à la préparation, remuez, laissez encore cuire <b>20 min</b> environ en remuant souvent pour éviter que le mélange colle au fond de la casserole, laissez épaissir, ou ajoutez de l\'eau si besoin, goutez, servez.'
        ],
        advices : [
            '<i>Vous pouvez aussi faire le sanga avec les feuilles d\'épinards, ou les feuilles de zom, ou  les feuilles d\'aubergines.</i>'
        ]
    }
    ];

let presentation = "Bonjour tous le monde, j'aime cuisiner de bons plats d'ici, d'ailleurs, et de mon enfance.\n" +
    "Depuis l'âge de 8 ans, ma mère m'a appris à cuisiner.\n" +
    "La cuisine camerounaise est délicieuse, et très variée. Elle est riche en saveur. On y trouve des épices, des produits végétaux, des poissons, des viandes, sans oublier des fruits tropicaux.\n" +
    "Je vous laisse le temps de découvrir mes quelques recettes simples, familiales, classiques, et traditionnelles.\n" +
    "Je vous souhaite un bon appétit.";

let title = "Mamie Cameroun";

export {recipes, presentation, title} ;
