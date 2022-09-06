import { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';
import './index.scss';

definePageConfig({
    navigationBarTitleText: '利用率'
});

const Utilization = () => {
    const [currentTab, setCrrentTab] = useState(0);

    return (
        <View className="index">
            <Text>Utilization</Text>
        </View>
    );
};

export default Utilization;
