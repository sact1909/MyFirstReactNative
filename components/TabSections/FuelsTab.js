/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  Avatar,
  Text,
} from 'react-native-paper';
import {View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import NavBar from './../NavBar';

const FuelsTab = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [fuelsDate, setfuelsDate] = useState('');

    const getPostFromApiAsync = async () => {
      try {
        const response = await fetch(
          'http://apidashboard.somee.com/api/getfuelsapp'
        );
        const json = await response.json();
        setfuelsDate(json[0].WeekLabel);
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

   useEffect(() => {
    getPostFromApiAsync();
    }, []);

    return (
      <View style={styles.container}>
        <NavBar titleText="Fuels Information"/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.sectionTitle}>{fuelsDate}</Text>
          <View style={styles.cardContainer}>
            {isLoading ? <ActivityIndicator/> : (
              data.map((item, index)=>{
                return (
                    <View style={styles.item} key={index}>
                        <View style={styles.itemLeft}>
                            <Avatar.Icon icon={item.SIGN === '+' ? 'trending-up' : item.SIGN === '=' ? 'show-chart' : 'trending-down'}
                                         size={40} color="#FFF"
                                         style={{backgroundColor:item.CONDITION_COLOR}}/>
                            <Text style={styles.itemText}>{item.FUEL_NAME}</Text>
                        </View>
                        <View style={styles.circular}>
                            <Text style={styles.textPrice}>
                                {item.PRICE}
                            </Text>
                            <Text style={item.SIGN === '+' ? styles.textColorRed : item.SIGN === '=' ? styles.textColorSilver : styles.textColorGreen}>
                                {item.VARIANT}
                            </Text>
                        </View>
                    </View>
                );
              })
            )}
          </View>
        </ScrollView>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexGrow: 1,
    },
    sectionTitle:{
        fontSize:23,
        fontWeight:'bold',
        paddingTop:10,
        paddingHorizontal:20,
        color:'black',
    },
    cardContainer: {
      marginTop: '2%',
      marginLeft: '2%',
      marginRight: '2%',
      marginBottom:'5%',
      flex: 1,
    },
    item:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:10,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#55BCF6',
        opacity:0.4,
        borderRadius:5,
        marginRight:15,
    },
    itemText:{
        maxWidth:'90%',
        color:'black',
        fontWeight:'bold',
        marginLeft:'5%',
    },
    textPrice:{
        color:'black',
        textAlign:'right',
    },
    textColorRed:{
        color:'red',
        textAlign:'right',
    },
    textColorGreen:{
        color:'green',
        textAlign:'right',
    },
    textColorSilver:{
        color:'gray',
        textAlign:'right',
    },
  });

export default FuelsTab;
