import { useState } from 'react';
import { View, Image, Swiper, SwiperItem } from '@tarojs/components';
import { AtSearchBar, AtGrid } from 'taro-ui';
import DeskBooking from 'Images/desk-booking.png';
import RoomBooking from 'Images/room-booking.png';
import CarSpaceBooking from 'Images/car-space-booking.png';
import SpaceUtilization from 'Images/space-utilization.png';
import Desktop from 'Images/desktop.png';
import Meeting from 'Images/meeting.png';
import Parking from 'Images/parking.png';
import Waiting from 'Images/waiting.png';

import './index.scss';

definePageConfig({
    navigationBarTitleText: 'Home'
});

const imgList = [DeskBooking, RoomBooking, CarSpaceBooking, SpaceUtilization];
const gridList = [
    {
        image: Desktop,
        value: 'Desk'
    },
    {
        image: Meeting,
        value: 'Room'
    },
    {
        image: Parking,
        value: 'Car Space'
    },
    {
        image: Waiting,
        value: 'Coming Soon'
    }
];

const Home = () => {
    const [searchValue, setSearchValue] = useState('');
    const [swiperHeight, setSwiperHeight] = useState('');

    const handleSearch = (value: string) => {
        setSearchValue(value);
    };

    const imgLoadDetail = (e: any) => {
        setSwiperHeight(e?.detail?.height);
    };

    return (
        <View className="index">
            <AtSearchBar value={searchValue} onChange={handleSearch} />
            <Swiper
                style={{ height: swiperHeight + 'px' }}
                indicatorColor="#999"
                indicatorActiveColor="#fff"
                circular
                indicatorDots
                autoplay
            >
                {imgList.map((item: any, index: any) => (
                    <SwiperItem key={index}>
                        <Image src={item} onLoad={imgLoadDetail} />
                    </SwiperItem>
                ))}
            </Swiper>
            <AtGrid columnNum={2} data={gridList} />
        </View>
    );
};

export default Home;
