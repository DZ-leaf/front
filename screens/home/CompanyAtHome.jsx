import React from "react";
import { ScrollView, StyleSheet, View, Dimensions } from "react-native";
import { Block, Text, theme } from "galio-framework";

const { width } = Dimensions.get("screen");

import BoardCard from '../../components/board/BoardCard';
import GalleryCard from '../../components/gallery/GalleryCard';
import CalendarCard from '../../components/calendar/CalendarCard';

const CompanyAtHome = () => {

    const renderCards = () => {
        return (
            <Block row>
                <View style={{ width: width }}>
                    <BoardCard move={"CompanyBoardList"} />
                </View>
            </Block>
        );
    };

    const renderGallery = () => {
        return (
            <Block row>
                <View style={{ width: width }}>
                    <GalleryCard />
                </View>
            </Block>
        );
    };

    const renderCalendar = () => {
        return (
            <Block row>
                <View style={{ width: width }}>
                    <CalendarCard move={"CompanyCalendar"} />
                </View>
            </Block>
        )
    }
    return (
        <Block>
            <Text bold size={16} style={styles.title}>{"\n"}{"\n"}회사</Text>
            <ScrollView horizontal disableIntervalMomentum>
                {renderCards()}
                {renderGallery()}
                {renderCalendar()}
            </ScrollView>
        </Block>
    );
}

const styles = StyleSheet.create({
    title: {
        paddingHorizontal: theme.SIZES.BASE,
        color: '#525F7F'
    },
});

export default CompanyAtHome;