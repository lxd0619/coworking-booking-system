import { useState } from 'react';
import { View, Text } from '@tarojs/components';
import {  } from 'taro-ui';
import './index.scss';

definePageConfig({
    navigationBarTitleText: 'Utilization'
});

const Utilization = () => {
    const [] = useState();

    return (
        <View className="index">
            <Text>Utilization</Text>
        </View>
    );
};

export default Utilization;
