/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  Avatar,
  Card,
  Title,
  Paragraph,
  Button,
} from 'react-native-paper';
import {View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import NavBar from './../NavBar';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
const HomeTab = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getPostFromApiAsync = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const json = await response.json();
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
        <NavBar titleText="Home Screen"/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cardContainer}>
            {isLoading ? <ActivityIndicator/> : (
              data.map((item, index)=>{
                return (
                  <Card style={styles.cardSpace} key={index}>
                    <Card.Title
                      title={item.title}
                      subtitle="Card Subtitle"
                      left={LeftContent}
                    />
                    <Card.Content>
                      <Title>{item.title}</Title>
                      <Paragraph>{item.body}</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
                    <Card.Actions>
                      <Button>Cancel</Button>
                      <Button>Ok</Button>
                    </Card.Actions>
                  </Card>
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
    cardContainer: {
      marginTop: '2%',
      marginLeft: '2%',
      marginRight: '2%',
      marginBottom:'5%',
      flex: 1,
    },
    cardSpace:{
      marginTop:'3%',
    },
  });

export default HomeTab;
