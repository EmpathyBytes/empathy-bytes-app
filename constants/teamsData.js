export const teamData = [
    {
        id: 1,
        team: "App Team",
        teamPic: "gs://empathy-bytes-app.appspot.com/team_photo/AppTeamPic.jpeg",
        picURL: 'https://firebasestorage.googleapis.com/v0/b/empathy-bytes-app.appspot.com/o/team_photo%2FAppTeamPic.jpeg?alt=media&token=25ebc980-0d86-4dae-a8d1-1b725d4b6b71',
        description: [
            {
                id: 0,
                tag: 'title',
                name: "App Team",
            },
            {
                id: 1,
                tag: 'text',
                name: "Description",
                text: "The App team is dedicated to the development of an informational cross-platform app that acts as a portal showcasing our research on communities within Georgia Tech through interactive content such as video/audio interviews and augmented reality games and models."
            },
            {
                id: 2,
                tag: 'tech-stack',
                name: "Tech Stack",
                text: "React Native, Expo, JavaScript, Google Firestore",
                techStackImages: [
                    require('../assets/teams/app_team_tech_stack/react.png'),
                    require('../assets/teams/app_team_tech_stack/expo.png'),
                    require('../assets/teams/app_team_tech_stack/javascript.png'),
                    require('../assets/teams/app_team_tech_stack/firestore.png')
                ]
            },
            {
                id: 3,
                tag: 'devs',
                name: "Developers",
                devs: [
                    {
                        id: 0,
                        name: "Genesis Fu",
                        role: "Team Lead",
                        image: require('../assets/teams/app_team_dev/genesis.jpg')
                    },
                    {
                        id: 1,
                        name: "Felicia Jamba",
                        role: "Team Lead",
                        image: require('../assets/teams/app_team_dev/felicia.jpg')
                    },
                    {
                        id: 2,
                        name: "Via Hu",
                        role: "Frontend Developer",
                        image: require('../assets/teams/app_team_dev/via.jpg')
                    },
                    {
                        id: 3,
                        name: "Julian Lautzenheiser",
                        role: "Frontend Developer",
                        image: require('../assets/teams/app_team_dev/julian.jpg')
                    },
                    {
                        id: 4,
                        name: "Richard Nguyen",
                        role: "Frontend Developer",
                        image: require('../assets/teams/app_team_dev/richard.jpg')
                    },
                    {
                        id: 5,
                        name: "Rose Wen",
                        role: "Frontend Developer",
                        image: require('../assets/teams/app_team_dev/rose.jpg')
                    },
                    {
                        id: 6,
                        name: "Steven Li",
                        role: "Backend Developer",
                        image: require('../assets/teams/app_team_dev/steven.jpg')
                    },
                    {
                        id: 7,
                        name: "Aaron Liu",
                        role: "Backend Developer",
                        image: require('../assets/teams/app_team_dev/aaron.jpg')
                    },
                    {
                        id: 8,
                        name: "Eileen Yang",
                        role: "Backend Developer",
                        image: require('../assets/teams/app_team_dev/eileen.jpg')
                    }
                ]
            }],
    },
    {
        id: 2,
        team: "Web Team",
        teamPic: 'gs://empathy-bytes-app.appspot.com/team_photo/webTeam.jpg',
        picURL: 'https://firebasestorage.googleapis.com/v0/b/empathy-bytes-app.appspot.com/o/team_photo%2FwebTeam.jpg?alt=media&token=813b7963-4375-4304-9627-464fbdd07094',
        description: [
            {
                id: 0,
                tag: 'title',
                name: "Web Team",
            },
            {
                id: 1,
                tag: 'text',
                name: "Description",
                text: "The web team develops a website utilized to showcase our research. Our team is split into two subteams for Web Development and Design. We created the site using GatsbyJS and Decoupled Drupal. We also are experimenting with Web 3D using Three.js.                "
            },
            {
                id: 2,
                tag: 'text',
                name: "Tech Stack",
                text: "GatsbyJS, Drupal, Three.js",
                techStackImages: [
                    require('../assets/teams/web_team_tech_stack/drupal.png'),
                    require('../assets/teams/web_team_tech_stack/gatsby.png'),
                    require('../assets/teams/web_team_tech_stack/threejs.png'),
                ]
            },
            {
                id: 3,
                tag: 'devs',
                name: "Developers",
                devs: [
                    {
                        id: 0,
                        name: 'Josh Samuel',
                        role: 'Team Lead',
                        image: require('../assets/teams/media_team_dev/temp.png'),
                    },
                    {
                        id: 1,
                        name: 'Amara Williams',
                        role: 'Team Lead',
                        image: require('../assets/teams/media_team_dev/amara.jpeg'),
                    },
                    {
                        id: 2,
                        name: 'Jason Wu',
                        role: 'Team Lead',
                        image: require('../assets/teams/media_team_dev/jason.jpeg'),
                    },
                    {
                        id: 3,
                        name: 'Iliyah Dean',
                        role: 'Developer',
                        image: require('../assets/teams/media_team_dev/iliyah.jpeg'),
                    },
                    {
                        id: 4,
                        name: 'Diana Perales',
                        role: 'Developer',
                        image: require('../assets/teams/media_team_dev/diana.jpeg'),
                    },
                    {
                        id: 5,
                        name: 'Husna Hussain',
                        role: 'Developer',
                        image: require('../assets/teams/media_team_dev/husna.jpeg'),
                    },
                    {
                        id: 6,
                        name: 'Tiffany Lee',
                        role: 'Developer',
                        image: require('../assets/teams/media_team_dev/tiffany.jpeg'),
                    },
                    {
                        id: 7,
                        name: 'Isiah Nogal',
                        role: 'Developer',
                        image: require('../assets/teams/media_team_dev/isiah.jpeg'),
                    },
                    {
                        id: 8,
                        name: 'Tanvi Singhal',
                        role: 'Developer',
                        image: require('../assets/teams/media_team_dev/tanvi.jpeg'),
                    },
                    {
                        id: 9,
                        name: 'Mackenzie Thies',
                        role: 'Developer',
                        image: require('../assets/teams/media_team_dev/temp.png'),
                    },
                    {
                        id: 10,
                        name: 'Tyler Wallace',
                        role: 'Developer',
                        image: require('../assets/teams/media_team_dev/tyler.jpeg'),
                    },
                    {
                        id: 11,
                        name: 'Xavier Genio',
                        role: 'Developer',
                        image: require('../assets/teams/media_team_dev/xavier.jpeg'),
                    },
                ]
            }],
    },
    {
        id: 3,
        team: "VR/AR Team",
        teamPic: 'gs://empathy-bytes-app.appspot.com/team_photo/Emerging/Jack_0.jpg',
        picURL: 'https://firebasestorage.googleapis.com/v0/b/empathy-bytes-app.appspot.com/o/team_photo%2FEmerging%2FJack_0.jpg?alt=media&token=477d334d-6b95-42a7-b786-c0670a268f8c',
        //will include 3d artifacts here
        description: [
            {
                id: 0,
                tag: 'title',
                name: "VR/AR Team",
            },
            {
                id: 1,
                tag: 'text',
                name: "Description",
                text: "The VR team at Empathy Bytes specializes in developing virtual reality experiences and digital preservation projects using technologies like Unity for development, photogrammetry for 3D modeling, and Blender for asset creation and optimization. They focus on creating immersive environments and preserving historical artifacts in accessible digital formats."
            },
            {
                id: 2,
                tag: 'text',
                name: "Tech Stack",
                text: "Unity, Blender",
                techStackImages: [
                    require('../assets/teams/vr_ar_team_tech_stack/blender.png'),
                    require('../assets/teams/vr_ar_team_tech_stack/unity.png'),
                ]
            },
            {
                id: 3,
                tag: 'devs',
                name: "Developers",
                devs: [
                    {
                        id: 0,
                        name: 'Jack English',
                        role: 'Team Lead',
                        image: require('../assets/teams/vr_ar_team_dev/jack.jpeg')
                    },
                    {
                        id: 1,
                        name: 'Eric Guenoun',
                        role: 'Developer',
                        image: require('../assets/teams/vr_ar_team_dev/eric.jpeg')
                    },
                    {
                        id: 2,
                        name: 'Hebe Huang',
                        role: 'Developer',
                        image: require('../assets/teams/vr_ar_team_dev/hebe.jpeg')
                    },
                    {
                        id: 3,
                        name: 'Febin Joseph',
                        role: 'Developer',
                        image: require('../assets/teams/vr_ar_team_dev/temp.png')
                    },
                    {
                        id: 4,
                        name: 'Aya Kakizaki',
                        role: 'Developer',
                        image: require('../assets/teams/vr_ar_team_dev/aya.jpeg')
                    },
                    {
                        id: 5,
                        name: 'Shrenik Koppaka',
                        role: 'Developer',
                        image: require('../assets/teams/vr_ar_team_dev/shrenik.jpeg')
                    },
                    {
                        id: 6,
                        name: 'Denzel Marizcal',
                        role: 'Developer',
                        image: require('../assets/teams/vr_ar_team_dev/temp.png')
                    },
                    {
                        id: 7,
                        name: 'Timothy Nguyen',
                        role: 'Developer',
                        image: require('../assets/teams/vr_ar_team_dev/timothy.jpeg')
                    },
                    {
                        id: 8,
                        name: 'Srikrishna Tadimeti',
                        role: 'Developer',
                        image: require('../assets/teams/vr_ar_team_dev/temp.png')
                    },
                ]
            }],
    },
    {
        id: 4,
        team: "Media Team",
        //will have different description
        teamPic: 'gs://empathy-bytes-app.appspot.com/team_photo/Media Team.jpg', 
        picURL: 'https://firebasestorage.googleapis.com/v0/b/empathy-bytes-app.appspot.com/o/team_photo%2FMedia%20Team.jpg?alt=media&token=bbab5453-6641-4b25-9653-b9c4119c0445',        description: [
            {
                id: 0,
                tag: 'title',
                name: "Media Team",
            },
            {
                id: 1,
                tag: 'text',
                name: "Descriptions",
                text: "The Media Team strives to explore new communities, document the work of all of our sub-teams, and promote our VIP in new and creative ways. When exploring communities we often interview several members to find a clear view of what makes their community special. We also search for different artifacts that we can pass on to our different sub-teams so that they can discover new ways to preserve them in an engaging way.                "
            },
            {
                id: 2,
                tag: 'text',
                name: "Tech Stack",
                text: "this is the tech stack",
                techStackImages: [
                    require('../assets/teams/media_team_tech_stack/camera.png'),
                ]
            },
            {
                id: 3,
                tag: 'devs',
                name: "Developers",
                devs: [
                    {
                        id: 0,
                        name: 'Sydney Oden',
                        role: 'Team Lead',
                        image: require('../assets/teams/media_team_dev/sydney.jpeg'),
                    },
                    {
                        id: 1,
                        name: 'Iliyah Dean',
                        role: 'Developer',
                        image: require('../assets/teams/media_team_dev/iliyah.jpeg'),
                    },
                    {
                        id: 2,
                        name: 'Diana Perales',
                        role: 'Developer',
                        image: require('../assets/teams/media_team_dev/diana.jpeg'),
                    },
                    {
                        id: 3,
                        name: 'Husna Hussain',
                        role: 'Developer',
                        image: require('../assets/teams/media_team_dev/husna.jpeg'),
                    },
                    {
                        id: 4,
                        name: 'Tiffany Lee',
                        role: 'Developer',
                        image: require('../assets/teams/media_team_dev/tiffany.jpeg'),
                    },
                    {
                        id: 5,
                        name: 'Isiah Nogal',
                        role: 'Developer',
                        image: require('../assets/teams/media_team_dev/isiah.jpeg'),
                    },
                    {
                        id: 6,
                        name: 'Tanvi Singhal',
                        role: 'Developer',
                        image: require('../assets/teams/media_team_dev/tanvi.jpeg'),
                    },
                    {
                        id: 7,
                        name: 'Mackenzie Thies',
                        role: 'Developer',
                        image: require('../assets/teams/media_team_dev/temp.png'),
                    },
                    {
                        id: 8,
                        name: 'Tyler Wallace',
                        role: 'Developer',
                        image: require('../assets/teams/media_team_dev/tyler.jpeg'),
                    },
                    {
                        id: 9,
                        name: 'Xavier Genio',
                        role: 'Developer',
                        image: require('../assets/teams/media_team_dev/xavier.jpeg'),
                    },
                ]
            }],
    }
]