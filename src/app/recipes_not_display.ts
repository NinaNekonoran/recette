import {NO_IMAGE, TYPE_RECIPE} from './recipes';

const recipes = [
    {
        id : 4,
        title : 'MACABO BOUILLI',
        member : '4 personnes',
        time_preparation : '15 min',
        time_cuisson : '30min',
        description : 'xxx',
        img : [NO_IMAGE],
        ingredients : [
            {name : 'Macabos', amount : '5'},
            {name : '[sel]'},
        ],
        steps : [
            'Pelez les macabos avec un couteau, lavez, coupez-les en 2 ou 3 morceaux si nécessaire, rincez.',
            'Dans une casserole disposez les macabos, ajoutez de l\'eau à hauteur des macabos.',
            'Mettez au feu à feu moyen, dès que l\'eau boue, ajoutez un peu de sel si besoin, et laissez cuire 30 mn environ.',
            'Vérifiez la cuisson avec la pointe d\'un couteau, si le couteau s\'enfonce, alors les macabos sont cuits.',
            'Retirez du feu, enlevez l\'eau de cuisson et servez chaud.',
            'Le macabo bouilli s\'accompagne avec les poissons en sauce, les viandes en sauce, les feuilles de manioc, ect...'
        ],
        difficult : 4,
        type : TYPE_RECIPE.ACCOMPAGNEMENT,
        plugin_like : 'https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fmamie-cameroun.fr%2Frecipe%2F4%2FMACABO%2520BOUILLI&width=92&layout=box_count&action=like&size=small&share=true&height=65&appId=191725056082943',
    }
    ];
