import { useState } from 'react';
import { View, CoverView, CoverImage } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';
import Taro from '@tarojs/taro';
import './index.scss';

const tabList = [
    {
        pagePath: 'pages/home',
        text: 'Home',
        iconPath: '',
        selectedIconPath: ''
    },
    {
        pagePath: 'pages/utilization',
        text: 'Utilization',
        iconPath: '',
        selectedIconPath: ''
    },
    {
        pagePath: 'pages/history',
        text: 'History',
        iconPath: '',
        selectedIconPath: ''
    },
    {
        pagePath: 'pages/user',
        text: 'User',
        iconPath: '',
        selectedIconPath: ''
    }
]

const CustomTabBar = () => {
    const [currentTab, setCrrentTab] = useState<number>(0);
    const [tabColor, setTabColor] = useState<string>('rgba(68, 68, 68, 1)');
    const [tabSelectedColor, setTabSelectedColor] = useState<string>('rgba(68, 68, 68, 1)');

    const switchTab = (item: any) => {
        console.log('item',item)
        const url = `/${item.pagePath}`
        Taro.switchTab({
            url: url
        })
        // setCrrentTab()
    }

    return (
        <CoverView className="bottom-tab">
            {tabList.map((item, index) => (
                <CoverView
                    className="bottom-tab-item"
                    onClick={switchTab}
                    data-path={item.pagePath}
                    key={item.text}
                >
                    <CoverImage
                        className="bottom-tab-item-img"
                        src={
                            currentTab === index
                                ? item.selectedIconPath
                                : item.iconPath
                        }
                    />
                    <CoverView
                        className="bottom-tab-item-text"
                        style={{
                            color:
                                currentTab === index
                                    ? tabSelectedColor
                                    : tabColor
                        }}
                    >
                        {item.text}
                    </CoverView>
                </CoverView>
            ))}
        </CoverView>
    );
};

export default CustomTabBar;
