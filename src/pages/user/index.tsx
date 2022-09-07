import { useState } from 'react';
import { View, Text } from '@tarojs/components';
import {  } from 'taro-ui';
import './index.scss';

definePageConfig({
    navigationBarTitleText: 'User'
});

const User = () => {
    const [] = useState();

    return (
        <View className="index">
            <Text>User</Text>
        </View>
    );
};

export default User;
