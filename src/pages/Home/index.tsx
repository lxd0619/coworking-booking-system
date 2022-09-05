import { useState, useEffect } from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import './index.scss';

const Home = () => {
    useEffect(() => {
        console.log('useEffect');
    }, []);

    return (
        <View className="index">
            <Text>Home</Text>
            <AtButton type="primary">button</AtButton>
        </View>
    );
};

export default Home;
