export default defineAppConfig({
    pages: [
        'pages/welcome',
        'pages/login',
        'pages/register',
        'pages/home',
        'pages/utilization',
        'pages/history',
        'pages/user'
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },
    tabBar: {
        custom: true,
        color: 'rgba(68, 68, 68, 1)',
        selectedColor: 'rgba(68, 68, 68, 1)',
        backgroundColor: 'white',
        list: [
            {
                pagePath: 'pages/home',
                text: 'Home',
                iconPath: './assets/icons/home-filling.png',
                selectedIconPath: './assets/icons/home-filling-selected.png'
            },
            {
                pagePath: 'pages/utilization',
                text: 'Utilization',
                iconPath: './assets/icons/analytics.png',
                selectedIconPath: './assets/icons/analytics-selected.png'
            },
            {
                pagePath: 'pages/history',
                text: 'History',
                iconPath: './assets/icons/history-filling.png',
                selectedIconPath: './assets/icons/history-filling-selected.png'
            },
            {
                pagePath: 'pages/user',
                text: 'User',
                iconPath: './assets/icons/user-filling.png',
                selectedIconPath: './assets/icons/user-filling-selected.png'
            }
        ]
    }
});
