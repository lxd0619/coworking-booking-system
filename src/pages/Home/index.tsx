import { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { AtSearchBar, AtTabBar } from 'taro-ui';
import Taro from '@tarojs/taro';
import './index.scss';

definePageConfig({
    navigationBarTitleText: '首页'
});

const tabList = [
    { title: 'Home', iconType: 'home' },
    { title: 'Utilization', iconType: 'analytics' },
    {
        title: 'History',
        iconType: 'list',
        text: '100',
        max: 99
    },
    {
        title: 'User',
        iconType: 'user'
    }
];

const Home = () => {
    const [searchValue, setSearchValue] = useState('');
    const [currentTab, setCrrentTab] = useState<number>(0);

    const handleSearch = (value: string) =>{
        setSearchValue(value)
    }

    const handleTabClick = (tab: number) => {
        Taro.navigateTo({
            url: `/pages/${tabList[tab].title.toLowerCase()}`
        });
        setCrrentTab(tab);
    };

    return (
        <View className="index">
            <AtSearchBar
                value={searchValue}
                onChange={handleSearch}
            />
            <Text>Home</Text>
            <AtTabBar
                fixed
                tabList={tabList}
                onClick={handleTabClick}
                current={currentTab}
            />
        </View>
    );
};

export default Home;
