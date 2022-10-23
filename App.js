import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo'
import GlobalStyles from './GlobalStyles';
import Home from './components/Home';

export default function App() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={styles.container}>
                <Home />
            </View>
        </SafeAreaView>
    );
  
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})  