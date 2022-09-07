import { View, Text } from '@tarojs/components';
import './index.scss';
import Taro from '@tarojs/taro';

definePageConfig({
    navigationBarTitleText: 'Welcome'
});

const Welcome = () => {
    const goToHome = () => {
        Taro.navigateTo({
            url: '/pages/home'
        });
    };

    return (
        <View className="welcome-container" onClick={goToHome}>
            <View className="welcome-title-box">
                <Text className="welcome-title">Welcome to</Text>
                <Text className="welcome-subtitle">
                    Coworking Booking System
                </Text>
            </View>
        </View>
    );
};

export default Welcome;
