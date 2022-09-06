import { View, Text } from '@tarojs/components';
import './index.scss';
import Taro from '@tarojs/taro';

definePageConfig({
    navigationBarTitleText: '欢迎页'
});

const Welcome = () => {
    const goToHome = () => {
        Taro.navigateTo({
            url: '/pages/home'
        });
    };

    return (
        <View className="index" onClick={goToHome}>
            <Text>Welcome to</Text>
            <Text>Coworking Booking System</Text>
        </View>
    );
};

export default Welcome;
