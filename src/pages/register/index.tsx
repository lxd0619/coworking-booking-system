import { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';
import './index.scss';

definePageConfig({
    navigationBarTitleText: 'Register'
});

const Register = () => {
    const [currentTab, setCrrentTab] = useState(0);

    return (
        <View className="index">
            <Text>Register</Text>
        </View>
    );
};

export default Register;
