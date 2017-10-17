import React from 'react';
import { StyleSheet, Text, View, Image, Linking} from 'react-native';
 
export class ResultItem extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <View>
            <Image
              style={{width: 100, height: 100}}
              source= {{uri: this.props.item.urlToImage}}
            />
          </View>
          <View style={styles.rigth}>
            <Text style={styles.title}>
              {`${this.props.item.title}`} 
            </Text>
            <Text style={this.props.item.author!=null?styles.author:styles.hide}>
              {`${this.props.item.author}`} 
            </Text>
            <Text style={{color: 'blue'}}
                  onPress={() => Linking.openURL(this.props.item.url)}>
              more (+)
            </Text>
          </View>
        </View>);
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#D5D8DC',
    borderBottomWidth: 1,
    padding: 10
  },
  title: {
    //fontWeight: 'bold',
    fontSize: 16,
  },
  author: {
    paddingTop:10
  },
  rigth: {
    padding:10
  },
  hide:{
    display: 'none'
  }
});

