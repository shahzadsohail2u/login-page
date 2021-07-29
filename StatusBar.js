import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import AppStatusBar from './AppStatusBar';


const THEME_COLOR = '#00b9ee';

export default function App() {
    return (
        <>
            <SafeAreaView style={styles.topSafeArea} />
            <SafeAreaView style={styles.bottomSafeArea}>
                <AppStatusBar backgroundColor={THEME_COLOR} barStyle="light-content" />
                
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    topSafeArea: {
        
        backgroundColor: THEME_COLOR
    }, 
    bottomSafeArea: {
         
        backgroundColor: THEME_COLOR
    },
});
