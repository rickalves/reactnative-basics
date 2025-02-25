import React from 'react'
import { Text } from 'react-native'

interface Props {
    navigation: any
    route:any
}

const ProfileScreen = ({navigation, route}:Props) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };

export default ProfileScreen;