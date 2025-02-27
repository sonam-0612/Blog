const destinationData = [
    {
        id: 1,
        name: "Mount Everest",
        image: [require('../../assets/Mount1.webp'), require('../../assets/mount2.jpeg')],
        description: "Mount Everest is the highest mountain in the world, located in the Himalayas.",
        attractions: [
            {
                id: 1,
                name: "Base Camp",
                image: require('../../assets/basecamp1.jpg'),
                description: "The starting point for climbers attempting to reach the summit of Everest.",
                link: "https://www.example.com/basecamp"
            },
            {
                id: 2,
                name: "Khumbu Icefall",
                image: require('../../assets/kumbu.jpeg'),
                description: "A treacherous section of the Everest ascent with constantly shifting ice and deep crevasses.",
                link: "https://www.example.com/khumbu-icefall"
            },
            // Add more attractions as needed
        ],
        travelTips: "Best time to visit is from April to May and September to November.",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18...",
        reviews: "This place is breathtaking! A must-visit for adventure seekers."
    },
    // Add more destinations
    {
        id: 2,
        name: "Swiss Alps",
        image: [require('../../assets/Swiss Alps.jpeg'),require('../../assets/swiss2.jpeg')],
        description: "Renowned for their stunning beauty, adventure sports, and charming alpine villages.",
        attractions: [
            {
                id: 1,
                name: "Matterhorn",
                image: require('../../assets/Matterhorn.jpeg'),

                description: "One of the most iconic peaks in the Alps, offering world-class mountaineering and skiing.",
                link: "https://www.example.com/matterhorn"
            },
            {
                id: 2,
                name: "Jungfraujoch",
                image: require('../../assets/Jungfraujoch.jpg'),
                description: "The highest railway station in Europe, known as the 'Top of Europe' with breathtaking views.",
                link: "https://www.example.com/jungfraujoch"
            }
            
        ],
        travelTips: "Visit in winter for skiing (December-March) or in summer (June-August) for hiking and mountain biking.",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18...",
        reviews: "The Swiss Alps are magical, with endless opportunities for adventure and relaxation amidst stunning scenery."
    },
    {
        id: 3,
        name: "Leh Ladakh",
        image: [require('../../assets/leh1.jpg'), require('../../assets/leh2.jpeg')],
        description: "Leh Ladakh is known for its stunning landscapes, serene monasteries, and thrilling adventure opportunities in the Himalayas.",
        attractions: [
            {
                id: 1,
                name: "Pangong Lake",
                image: require('../../assets/Pangong.webp'),
                description: "A high-altitude lake, famous for its changing colors and breathtaking beauty.",
                link: "https://www.example.com/pangong"
            },
            {
                id: 2,
                name: "Nubra Valley",
                image: require('../../assets/Nubra.jpeg'),
                description: "Known for its sand dunes, double-humped camels, and panoramic views.",
                link: "https://www.example.com/nubra-valley"
            }
        ],
        travelTips: "Best time to visit is between May and September when the roads are clear and weather is pleasant.",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18...",
        reviews: "A must-visit for those seeking adventure, spirituality, and raw natural beauty."
    }
    
    

];
export default destinationData; 