const productos = [
    //polos
    {
        id:1,
        title: "Polo Brooklyn",
        Description: "Polo de algodón son frescos y muy recomendables para cualquier actividad",
        stock: 15,
        type: "Polos",
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/ea/28/42/ea28427e28a4fba9a29738058ff0f850.jpg"
        }, 
        price: 50.00,
    },

    {
        id:2,
        title: "Polo Smile",
        Description: "Polo de algodón son frescos y muy recomendables para cualquier actividad",
        stock: 15,
        type: "Polos", 
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/1f/8d/7b/1f8d7bb4f22ec6dfb1e672ef7be2fb2a.jpg"
        },
        price: 55.00,
    },

    {
        id:3,
        title: "Polo Feelings",
        Description: "Polo de algodón son frescos y muy recomendables para cualquier actividad",
        stock: 15,
        type: "Polos", 
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/30/45/bf/3045bf08fd50ab80d4cb1e94212bbdf8.jpg"
        },
        price: 40.00,
    },

    {
        id:4,
        title: "Polo Los Angeles",
        Description: "Polo de algodón son frescos y muy recomendables para cualquier actividad",
        stock: 15,
        type: "Polos", 
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/84/5c/d7/845cd7600dcd44d44ae2a02736d7d24c.jpg"
        },
        price: 45.00,
    },

    {
        id:5,
        title: "Polo Brave",
        Description: "Polo de algodón son frescos y muy recomendables para cualquier actividad",
        stock: 15,
        type: "Polos", 
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/17/00/f5/1700f50ebd9c472bd17931b64aa52374.jpg"
        },
        price: 48.00,
    },

    {
        id:6,
        title: "Polo Blessed",
        Description: "Polo de algodón son frescos y muy recomendables para cualquier actividad",
        stock: 15,
        type: "Polos", 
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/87/61/78/87617804bb30fbcab4766051e2822bf5.jpg"
        },
        price: 52.00,
    },

    //pantalones
    {
        id:7,
        title: "Pantalon cargo Sofia",
        Description: "Pantalones por lo general se deben usar para looks casuales o deportivos (siendo útiles para algunos ciclistas). Su look suelto y algunos materiales hacen que sea casi imposible usarlo en cualquier entorno formal, o semi-formal",
        stock: 15,
        type: "Pantalones",
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/5d/2a/7a/5d2a7a80e197ca8cef1d2bf270dddbb4.jpg"
        }, 
        price: 90.00,
    },

    {
        id:8,
        title: "Pantalon cargo Alejo",
        Description: "Pantalones por lo general se deben usar para looks casuales o deportivos (siendo útiles para algunos ciclistas). Su look suelto y algunos materiales hacen que sea casi imposible usarlo en cualquier entorno formal, o semi-formal",
        stock: 15,
        type: "Pantalones",
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/5b/46/4b/5b464bc6e26e21be3b5af2591a2f36fa.jpg"
        }, 
        price: 100.00,
    },

    {
        id:9,
        title: "Cargo Lead",
        Description: "Pantalones por lo general se deben usar para looks casuales o deportivos (siendo útiles para algunos ciclistas). Su look suelto y algunos materiales hacen que sea casi imposible usarlo en cualquier entorno formal, o semi-formal",
        stock: 15,
        type: "Pantalones",
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/e8/53/0d/e8530da6f5fc17ca713bac7660f2a099.jpg"
        }, 
        price: 50.00,
    },

    {
        id:10,
        title: "Cargo militar",
        Description: "Pantalones por lo general se deben usar para looks casuales o deportivos (siendo útiles para algunos ciclistas). Su look suelto y algunos materiales hacen que sea casi imposible usarlo en cualquier entorno formal, o semi-formal",
        stock: 15,
        type: "Pantalones",
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/ca/e6/35/cae6359a24c396f0edb313b8ed6d45bb.jpg"
        }, 
        price: 50.00,
    },

    {
        id:11,
        title: "Casaca Pastel",
        Description: "Pantalones por lo general se deben usar para looks casuales o deportivos (siendo útiles para algunos ciclistas). Su look suelto y algunos materiales hacen que sea casi imposible usarlo en cualquier entorno formal, o semi-formal",
        stock: 15,
        type: "Casacas",
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/c8/5d/16/c85d168bbe884431013e295afd2baece.jpg"
        }, 
        price: 50.00,
    },

    {
        id:12,
        title: "Casaca Lila",
        Description: "Pantalones por lo general se deben usar para looks casuales o deportivos (siendo útiles para algunos ciclistas). Su look suelto y algunos materiales hacen que sea casi imposible usarlo en cualquier entorno formal, o semi-formal",
        stock: 15,
        type: "Casacas",
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/e1/85/31/e185318eb9075fbedb53bdc910d7239f.jpg"
        }, 
        price: 50.00,
    },

    {
        id:13,
        title: "Casaca Beige",
        Description: "Pantalones por lo general se deben usar para looks casuales o deportivos (siendo útiles para algunos ciclistas). Su look suelto y algunos materiales hacen que sea casi imposible usarlo en cualquier entorno formal, o semi-formal",
        stock: 15,
        type: "Casacas",
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/5e/69/ad/5e69ad714a0b92ac5499627500c57d28.jpg"
        }, 
        price: 50.00,
    },

    {
        id:14,
        title: "Casaca Oversize",
        Description: "Pantalones por lo general se deben usar para looks casuales o deportivos (siendo útiles para algunos ciclistas). Su look suelto y algunos materiales hacen que sea casi imposible usarlo en cualquier entorno formal, o semi-formal",
        stock: 15,
        type: "Casacas",
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/2a/52/ff/2a52ffc867aa91288496eeabab6ab848.jpg"
        }, 
        price: 50.00,
    },

    {
        id:15,
        title: "Gorra Saturno",
        Description: "Pantalones por lo general se deben usar para looks casuales o deportivos (siendo útiles para algunos ciclistas). Su look suelto y algunos materiales hacen que sea casi imposible usarlo en cualquier entorno formal, o semi-formal",
        stock: 15,
        type: "Gorras",
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/11/97/10/1197107cbfa9c39c59cbbe41c41abae6.jpg"
        }, 
        price: 50.00,
    },

    {
        id:16,
        title: "Gorra Happy",
        Description: "Pantalones por lo general se deben usar para looks casuales o deportivos (siendo útiles para algunos ciclistas). Su look suelto y algunos materiales hacen que sea casi imposible usarlo en cualquier entorno formal, o semi-formal",
        stock: 15,
        type: "Gorras",
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/9c/69/ba/9c69ba4a3fc767e6d98baa403d66575c.jpg"
        }, 
        price: 50.00,
    },

    {
        id:17,
        title: "Gorra Cheese",
        Description: "Pantalones por lo general se deben usar para looks casuales o deportivos (siendo útiles para algunos ciclistas). Su look suelto y algunos materiales hacen que sea casi imposible usarlo en cualquier entorno formal, o semi-formal",
        stock: 15,
        type: "Gorras",
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/5d/94/b1/5d94b14ec999c008c0ee5cc441a84214.jpg"
        }, 
        price: 50.00,
    },

    {
        id:18,
        title: "Bucket Alien",
        Description: "Pantalones por lo general se deben usar para looks casuales o deportivos (siendo útiles para algunos ciclistas). Su look suelto y algunos materiales hacen que sea casi imposible usarlo en cualquier entorno formal, o semi-formal",
        stock: 15,
        type: "Gorras",
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/f4/66/fd/f466fd0f6c204a40e2d71556b0f7723e.jpg"
        }, 
        price: 50.00,
    },

    {
        id:14,
        title: "Casaca Oversize",
        Description: "Pantalones por lo general se deben usar para looks casuales o deportivos (siendo útiles para algunos ciclistas). Su look suelto y algunos materiales hacen que sea casi imposible usarlo en cualquier entorno formal, o semi-formal",
        stock: 15,
        type: "Casacas",
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/2a/52/ff/2a52ffc867aa91288496eeabab6ab848.jpg"
        }, 
        price: 50.00,
    },

    {
        id:14,
        title: "Casaca Oversize",
        Description: "Pantalones por lo general se deben usar para looks casuales o deportivos (siendo útiles para algunos ciclistas). Su look suelto y algunos materiales hacen que sea casi imposible usarlo en cualquier entorno formal, o semi-formal",
        stock: 15,
        type: "Casacas",
        imageProduct: {
            firtsImage: "https://i.pinimg.com/564x/2a/52/ff/2a52ffc867aa91288496eeabab6ab848.jpg"
        }, 
        price: 50.00,
    },




]

export default productos;