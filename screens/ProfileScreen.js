import React from "react";
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, View, Modal } from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

import ProfileEditModal from './ProfileEditModal';

class ProfileScreen extends React.Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  closeModal = (e) => {
    if (this.state.modalVisible) {
      this.setState({
        modalVisible: false
      })
    }
  }

  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '25%' }}>
              <Block flex style={styles.profileCard}>
                <Block middle style={styles.avatarContainer}>
                  <Image source={Images.ProfilePicture} style={styles.avatar} resizeMode={"center"} />
                </Block>
                <Block style={styles.info}>
                  <Block flex>
                    <Block middle style={styles.nameInfo}>
                      <Text bold size={20} color="#32325D">
                        김아무개
                    </Text>
                    </Block>
                  </Block>
                  <Block row space="between" style={{ marginTop: 20, paddingBottom: '10%' }}>
                    <Block middle>
                      <Text bold size={12} color="#525F7F" style={{ marginBottom: 4 }}>
                        2K
                      </Text>
                      <Text size={12}>Orders</Text>
                    </Block>
                    <Block middle>
                      <Text bold color="#525F7F" size={12} style={{ marginBottom: 4 }}>
                        10
                      </Text>
                      <Text size={12}>Photos</Text>
                    </Block>
                    <Block middle>
                      <Text bold color="#525F7F" size={12} style={{ marginBottom: 4 }}>
                        89
                      </Text>
                      <Text size={12}>Comments</Text>
                    </Block>
                  </Block>
                </Block>
                <Block flex>
                  {/* <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block> */}
                  <Block middle>
                    <Text size={16} color="#525F7F" style={{ textAlign: "center", paddingBottom: '5%' }}>
                      소개글
                    </Text>
                    <Button color="transparent"
                      textStyle={{ color: argonTheme.COLORS.SECONDARY, fontWeight: "500", fontSize: 13 }}
                      onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                      프로필 수정
                    </Button>
                  </Block>

                  <Modal middle visible={this.state.modalVisible} transparent={false}>
                    <ProfileEditModal closeModal={this.closeModal} animationType={'slide'}/>
                  </Modal>
                  <Block>
                    <Text>{"\n"}{"\n"}</Text>
                  </Block>
                  <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                    <Block row space="between" style={{ flexWrap: "wrap" }}>
                      {Images.Viewed.map((img, imgIndex) => (
                        <Image source={{ uri: img }} key={`viewed-${img}`}
                          resizeMode="cover" style={styles.thumb} />))}
                    </Block>
                  </Block>
                </Block>
              </Block>
            </ScrollView>

          </ImageBackground>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -theme.SIZES.BASE * 8.5 : -theme.SIZES.BASE * 1.5,
    // marginBottom: Platform.OS === "android" ? -theme.SIZES.BASE * 7 : 0,
    // flex: 1
    paddingBottom: '10%'
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height
  },
  profileCard: {
    position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80,
  },
  avatar: {
    width: 124,
    height: 124,
    backgroundColor: '#F0F2F0',
  },
  nameInfo: {
    marginTop: 20
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});

export default ProfileScreen;
