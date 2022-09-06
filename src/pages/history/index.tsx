import { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';
import './index.scss';

definePageConfig({
    navigationBarTitleText: '历史记录'
});

const History = () => {
    const [currentTab, setCrrentTab] = useState(0);

    return (
        <View className="index">
            <Text>History</Text>
        </View>
    );
};

export default History;
