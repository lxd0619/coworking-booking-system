import { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';
import './index.scss';

definePageConfig({
    navigationBarTitleText: 'Login'
});

const Login = () => {
    const [currentTab, setCrrentTab] = useState(0);

    return (
        <View className="index">
            <Text>Login</Text>
        </View>
    );
};

export default Login;
