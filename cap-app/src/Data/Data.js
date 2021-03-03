export const fakeData = [
    {
        title: "Main Sequence Stars",
        imageUrl: "https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3Acbbd4a805436be7e3dba4f5fd0c964e5b84dc0eae377762c3c26813e%2BIMAGE_TINY%2BIMAGE_TINY.1",
        id: 1,
        size: "large",
        linkUrl: "shop/stars",
    },
    {
        title: "Stellar Remnants",
        imageUrl: "https://lh3.googleusercontent.com/proxy/gHGqNwdCgBDoI11IvrH2tDq-7MfEiEdLR_GErHNgBMMIGGx5vm9YvL_GByETooN46egNXGDMu_LIS6xtMRzHwxvWgH-tNpSjK_TPBtck12-gdoPXf1nEViHe93NXAgEOrG0BBnRw9WilxmOAd18CiNta7i9F9T6Vi7Cr5E5_Hgk55oh1CUPJ65VyFcFnc6fbaJGsCeokjD9Ryj_CKZW3ebEP0FPVqt5rMIH1JoiNKCKP7PBdRetzscdJfYyK9PElQ7GcUmtoOVO19qiWPhvGkOCRLYzrgYUsDqaqAxImwb0Pw3cGu9FWiZHnOM2r6dYbFBHVrh6dHl08jV_RSUOvfTLATv8aFhQofYg4qUeZt2vSZ0Ch-Y3Q_mJn4Cnt-LUutYKS0ak",
        id: 2,
        size: "large",
        linkUrl: "shop/remnants",
    },
    {
        title: "Interstellar Objects",
        imageUrl: "https://spaceplace.nasa.gov/nebula/en/nebula3.en.jpg",
        id: 3,
        size: "large",
        linkUrl: "shop/interstellar",
    },
];

export const shopData = {
    stars: {
        id: 1,
        title: "Star Classes",
        routeName: "stars",
        items: [
            {
                id: 1,
                name: "Type O Stars ",
                imageUrl: "https://www.pngkit.com/png/full/160-1601013_dark-blue-violet-28-000-blue-giant-star.png",
                price: 90,
            },
            {
                id: 2,
                name: "Type B Stars",
                imageUrl: "https://images.vectorhq.com/images/previews/882/blue-sun-psd-426769.png",
                price: 80,
            },
            {
                id: 3,
                name: "Type A Stars",
                imageUrl: "https://www.usswolff.com/wiki/images/c/cc/AST_SC_A.png",
                price: 70,
            },
            {
                id: 4,
                name: "Type F Stars",
                imageUrl: "https://www.usswolff.com/wiki/images/e/ec/AST_SC_F.png",
                price: 60,
            },
            {
                id: 5,
                name: "Type G Stars",
                imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96269ce8-4a07-4702-936a-6860e1b5594f/dcnx6ww-17fade1a-a937-4c1d-b58c-8ab3c80a4bb4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTYyNjljZTgtNGEwNy00NzAyLTkzNmEtNjg2MGUxYjU1OTRmXC9kY254Nnd3LTE3ZmFkZTFhLWE5MzctNGMxZC1iNThjLThhYjNjODBhNGJiNC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.c6jyVNWKFsEAjT9Ui-HNQsH_jzsYZa-4j7OWUzn7mm8",
                price: 50,
            },
            {
                id: 6,
                name: "Type K Stars",
                imageUrl: "https://www.pngkey.com/png/full/88-886353_a-purple-star-is-always-class-o-a.png",
                price: 40,
            },
            {
                id: 7,
                name: "Type M Stars",
                imageUrl: "https://www.starpng.com/public/uploads/preview/sun-png-14-11583909735uxheleo3ir.png",
                price: 30,
            },
            {
                id: 8,
                name: "Type L Stars",
                imageUrl: "https://www.usswolff.com/wiki/images/b/bf/AST_SC_L.png",
                price: 20,
            },
            {
                id: 9,
                name: "Type Y Stars",
                imageUrl: "http://stellarconquest.blob.core.windows.net/website/images/stars/4cbba940-ea5a-4a52-a6b6-b94de04fdbb3.png",
                price: 10,
            },
        ],
    },
    remnants: {
        id: 2,
        title: "Stellar Remnants",
        routeName: "remnants",
        items: [
            {
                id: 10,
                name: "White Dwarf",
                imageUrl: "https://www.fizzics.org/the-life-cycle-of-a-star/white-dwarf/",
                price: 220,
            },
            {
                id: 11,
                name: "Magnetar",
                imageUrl: "https://indico.ice.csic.es/event/1/logo-4046185614.png",
                price: 280,
            },
            {
                id: 12,
                name: "Neutron Star",
                imageUrl: "https://www.pngitem.com/pimgs/m/9-90057_transparent-sun-png-blue-purple-sun-png-download.png",
                price: 320,
            },
            {
                id: 13,
                name: "Black Hole",
                imageUrl: "https://www.pngarts.com/files/8/Space-Black-Hole-Transparent-Image.png",
                price: 400,
            },
      
        ],
    },
    interstellar: {
        id: 3,
        title: "Interstellar Objects",
        routeName: "interstellar",
        items: [
            {
                id: 14,
                name: "Nebula",
                imageUrl: "https://www.pngkey.com/png/full/855-8551589_galaxy-space-outerspace-smoke-glitter-galaxy-png.png",
                price: 500,
                size: "large",
            },
            {
                id: 15,
                name: "Nova Remnant",
                imageUrl: "https://freepikpsd.com/wp-content/uploads/2019/11/supernova-transparent-png-7-Images.png",
                price: 100,
                size: "large",
            },
            {
                id: 16,
                name: "Comet",
                imageUrl: "https://pngimg.com/uploads/comet/comet_PNG2.png",
                price: 50,
                size: "large",
            },
        
        ],
    },
};
