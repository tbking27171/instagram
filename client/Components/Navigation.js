import React, { Component } from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { View, Text, TextInput } from 'react-native'

import FeedContainer from '../Containers/FeedContainer'
import CameraContainer from '../Containers/CameraContainer'
import ProfileContainer from '../Containers/ProfileContainer'
import ExploreContainer from '../Containers/ExploreContainer'
import NotificationsContainer from '../Containers/NotificationsContainer'

import FM from 'react-native-vector-icons/FontAwesome'
import MD from 'react-native-vector-icons/MaterialIcons'
import CommentsContainer from '../Containers/CommentsContainer'

const FeedNavigation = StackNavigator(
    {
        Main: {
            screen: FeedContainer
        },
        Comments: {
            screen: CommentsContainer,
            navigationOptions: {
                tabBarVisible: false,
                swipeEnabled: false
            }
        }
    },
    {
        navigationOptions: {
            title: 'Instagram'
        }
    }
)

const ExploreNavigation = StackNavigator(
    {
        Main: {
            screen: ExploreContainer
        }
    },
    {
        navigationOptions: {
            title: 'Search'
        }
    }
)

const ProfileNavigation = StackNavigator(
    {
        Main: {
            screen: ProfileContainer
        }
    },
    {
        navigationOptions: {
            title: 'Profile'
        }
    }
)

const AppNavigation = TabNavigator(
    {
        Feed: {
            screen: FeedNavigation,
            navigationOptions: {
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <FM name="home" size={20} color="black" />
                    ) : (
                        <FM name="home" size={20} color="#C6C6C6" />
                    )
            }
        },
        Explore: {
            screen: ExploreNavigation,
            navigationOptions: {
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <FM name="search" size={20} color="black" />
                    ) : (
                        <FM name="search" size={20} color="#C6C6C6" />
                    )
            }
        },
        Camera: {
            screen: CameraContainer,
            navigationOptions: {
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <MD name="add-circle" size={20} color="black" />
                    ) : (
                        <MD name="add-circle" size={20} color="#C6C6C6" />
                    )
            }
        },
        Nottifications: {
            screen: NotificationsContainer,
            navigationOptions: {
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <FM name="heart" size={20} color="black" />
                    ) : (
                        <FM name="heart" size={20} color="#C6C6C6" />
                    )
            }
        },
        Profile: {
            screen: ProfileNavigation,
            navigationOptions: {
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <FM name="user" size={20} color="black" />
                    ) : (
                        <FM name="user" size={20} color="#C6C6C6" />
                    )
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        initialRouteName: 'Explore',
        lazy: true,
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: '#000000',
            indicatorStyle: {
                display: 'none'
            },
            style: {
                backgroundColor: 'white'
            }
        }
    }
)

export default AppNavigation
