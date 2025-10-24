const appModel = {
    app: {
        currentPage: 'frontPage',

        loggedInId: null,
        recieverId: null,
        senderId: null,
    },
    
    inputs: {

editUser: {
    username: '',
    password: '',
    email: '',
    name: '',
    picture: '' ,
    
},

        filters: {
            selectedCounties: [],
        },

        loginForm: {
            username: '',
            password: '',
        },

        registerForm: {
            userId: null,
            name: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            repeatPassword: '',
            isAdmin: false,
            picture: 'assets/img/profile-silhouette-300x300.jpg',
            isLoggedIn: true,
        },
        
        searchField:{
            searchText: null,
        },
        
        messages: {
            messageStorage: null,
            messageBeeingOpened: null,
        },

        ratingForm:{
            rating: null,
            comment:``,
        },

        notifications: {
            notification: null,
        },


    },

    data: {
        categories: {

            counties: [
                'Akershus', 'Oslo', 'Vestland', 
                'Trøndelag', 'Innlandet', 'Agder', 'Østfold', 
                'Møre og Romsdal', 'Buskerud', 'Vestfold', 
                'Nordland', 'Telemark', 'Troms', 'Finnmark'
            ]
        },

        users: [
            {
                username: 'varinlinnea',
                password: '',
                email: 'varino@getacademy.no',
                name: 'Vårin',
                userId: 1,
                isAdmin: false,
                picture: '',
                isLoggedIn: false,
                message: [],
                messageSender: [],
            },
            {
                username: 'test',
                password: '123',
                email: 'testmail@test.no',
                name: 'testname',
                userId: 2,
                isAdmin: false,
                picture: 'IMG, VID/profile-silhouette-300x300.jpg',
                isLoggedIn: false,
                message: [],
                messageSender: [],
            },
            {
                username: 'Ronny',
                password: '',
                email: 'testmail@test.no',
                name: 'Ronny',
                userId: 3,
                isAdmin: false,
                picture: '',
                isLoggedIn: false,
                message: [],
                messageSender: [],
            },
            {
                username: 'Anne',
                password: '',
                email: 'testmail@test.no',
                name: 'Anne',
                userId: 4,
                isAdmin: false,
                picture: '',
                isLoggedIn: false,
                message: [],
                messageSender: [],
            },

        ],

        notifications: [
            {
                notificationId: 0,
                sender: 'anonym',
                receiver: 'varinlinnea',
                notification: 'Hey, how are you doing?',
                date: '2021-05-24',
            },
        ],

    },

    samplePacks: samplePackModel,
};

window.model = appModel;
