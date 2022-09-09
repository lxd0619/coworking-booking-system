import { useState } from 'react';
import { View, Text, Image } from '@tarojs/components';
import { AtForm, AtInput, AtButton, AtDivider } from 'taro-ui';
import UserIcon from 'Icons/user-filling-grey.png';

import './index.scss';

definePageConfig({
    navigationBarTitleText: 'Register'
});

const Register = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        console.log();
    };

    return (
        <View className="register-container">
            <AtForm className="register-form" onSubmit={handleSubmit}>
                <Image className="register-avatar" src={UserIcon} />
                <AtInput
                    className="register-input"
                    name="value"
                    type="text"
                    placeholder="USERNAME"
                    value={inputValue}
                    onChange={(e: any) => setInputValue(e)}
                />
                <AtInput
                    className="register-input"
                    name="value6"
                    border={false}
                    type="phone"
                    placeholder="MOBILE"
                    value={inputValue}
                    onChange={(e: any) => setInputValue(e)}
                />
                <AtInput
                    className="register-input"
                    name="value1"
                    type="text"
                    placeholder="GEID"
                    value={inputValue}
                    onChange={(e: any) => setInputValue(e)}
                />
                <AtInput
                    className="register-input"
                    name="value3"
                    type="password"
                    placeholder="PASSWORD"
                    value={inputValue}
                    onChange={(e: any) => setInputValue(e)}
                />
                <AtInput
                    className="register-input"
                    name="value3"
                    type="password"
                    placeholder="CONFIRM PASSWORD"
                    value={inputValue}
                    onChange={(e: any) => setInputValue(e)}
                />
                <AtButton className="register-singup" formType="submit">
                    SINGUP
                </AtButton>
                <AtDivider
                    className="register-divider"
                    content="OR"
                    fontColor="#fff"
                    lineColor="#fff"
                />
                <AtButton
                    className="register-singupWithEmail"
                    formType="submit"
                >
                    SINGUP WITH EMAIL
                </AtButton>
            </AtForm>
            <Text className="register-tips">
                By continuing, you accept our Privacy Policy and Terms of Use.
            </Text>
        </View>
    );
};

export default Register;
