import React from 'react'
import { FlatList, Modal, StyleSheet, Text, View } from 'react-native'
import List from './List'




const CountryCode = (props) => {
    return (
        <View>
          <View style = {{width: '100%', padding: 20, }}>

          </View>
            <Modal onRequestClose = {props.onClose} visible = {props.visible} style = {{color: 'black'}}>
             <List selectedCode = {(code) => props.selectedCode((code))}/>

            </Modal>
        </View>
    )
}

export default CountryCode

const styles = StyleSheet.create({})
