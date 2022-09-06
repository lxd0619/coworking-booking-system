import { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';
import './index.scss';

definePageConfig({
    navigationBarTitleText: '用户中心'
});

const User = () => {
    const [currentTab, setCrrentTab] = useState(0);

    return (
        <View className="index">
            <Text>User</Text>
        </View>
    );
};

export default User;
