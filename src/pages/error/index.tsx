import { View, Text } from '@tarojs/components';
import './index.scss';

definePageConfig({
    navigationBarTitleText: 'Error'
});

const Error = () => {
    return (
        <View className="index">
            <Text>Error</Text>
        </View>
    );
};

export default Error;
