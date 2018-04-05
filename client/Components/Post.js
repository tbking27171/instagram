import React from 'react'
import { Dimensions, Image } from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Feather'

const { width, height } = Dimensions.get('window')

const Post = ({ navigation }) => (
    <React.Fragment>
        <Header>
            <UserPhoto source={require('../resources/andzia.jpg')} />
            <Username>Angelaaa</Username>
        </Header>

        <Image
            style={{
                width,
                height: width
            }}
            source={require('../resources/andzia.jpg')}
        />
        <Footer>
            <Icons>
                <Icon name="heart" size={30} color="black" />
                <Icon name="message-circle" size={30} color="black" />
            </Icons>

            <LikeCount>
                <Icon name="heart" size={14} color="black" />
                <LikeCountText>500 likes</LikeCountText>
            </LikeCount>

            <Comment>
                <Username>Angelaaa</Username>
                <CommentText>Selfie</CommentText>
            </Comment>

            <Comment>
                <ViewComments onPress={() => navigation.navigate('Comments')}>
                    View all the comments 5
                </ViewComments>
            </Comment>
        </Footer>
    </React.Fragment>
)

export default Post

const Header = styled.View`
    flex-direction: row;
    padding: 8px;
    align-items: center;
`
const UserPhoto = styled.Image`
    width: 35;
    height: 35;
    border-radius: 30;
    margin-right: 10px;
`
const Username = styled.Text`
    font-family: montserratMedium;
    font-size: 14;
`
const Footer = styled.View`
    padding: 10px;
`
const LikeCount = styled.View`
    flex-direction: row;
    margin-top: 5px;
    align-items: center;
`
const LikeCountText = styled.Text`
    font-family: montserratMedium;
    font-size: 16;
    margin-left: 7;
`
const Icons = styled.View`
    flex-direction: row;
`
const Comment = styled.View`
    flex-direction: row;
    margin-top: 7;
    align-items: center;
`
const CommentText = styled.Text`
    font-family: montserratRegular;
    font-size: 14;
    margin-left: 5;
`
const ViewComments = styled.Text`
    font-family: montserratRegular;
    font-size: 12;
    color: gray;
`
