import { useState } from 'react';
import { AtTabBar } from 'taro-ui';
import Taro from '@tarojs/taro';
import './index.scss';

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

const TabBar = () => {
    const [currentTab, setCrrentTab] = useState<number>(0);

    const handleTabClick = (tab: number) => {
        Taro.navigateTo({
            url: `/pages/${tabList[tab].title.toLowerCase()}`
        });
        setCrrentTab(tab);
    };

    return (
        <AtTabBar
            fixed
            tabList={tabList}
            onClick={handleTabClick}
            current={currentTab}
        />
    );
};

export default TabBar;
