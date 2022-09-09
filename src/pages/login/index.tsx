import { useState } from 'react';
import { View, Text, Image } from '@tarojs/components';
import { AtForm, AtInput, AtButton, AtDivider } from 'taro-ui';
import UserIcon from 'Icons/user-filling-grey.png';

import './index.scss';

definePageConfig({
    navigationBarTitleText: 'Login'
});

const Login = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        console.log();
    };

    return (
        <View className="login-container">
            <AtForm className="login-form" onSubmit={handleSubmit}>
                <Image className="login-avatar" src={UserIcon} />
                <AtInput
                    className="login-input"
                    name="value"
                    type="text"
                    placeholder="USERNAME"
                    value={inputValue}
                    onChange={(e: any) => setInputValue(e)}
                />
                <AtInput
                    className="login-input"
                    name="value3"
                    type="password"
                    placeholder="PASSWORD"
                    value={inputValue}
                    onChange={(e: any) => setInputValue(e)}
                />
                <Text className="login-forgot-password">Forgot Password?</Text>
                <AtButton className="login-singup" formType="submit">
                    LOGIN WITH GEID
                </AtButton>
                <Text className="login-have-no-account">Don't have an account?</Text>
                <Text className="login-register-here">Register Here</Text>
                <AtDivider
                    className="login-divider"
                    content="OR"
                    fontColor="#fff"
                    lineColor="#fff"
                />
                <AtButton
                    className="login-loginWithEmailOrSignup"
                    formType="submit"
                >
                    LOGIN WITH EMAIL OR SIGNUP
                </AtButton>
            </AtForm>
            <Text className="login-tips">
                By continuing, you accept our Privacy Policy and Terms of Use.
            </Text>
        </View>
    );
};

export default Login;
