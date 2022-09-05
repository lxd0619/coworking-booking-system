import { View, Text } from '@tarojs/components';
import './index.scss';
import Taro from '@tarojs/taro';

const Welcome = () => {
    const goToHome = () => {
        Taro.navigateTo({
            url: '/pages/Home/index.tsx'
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
