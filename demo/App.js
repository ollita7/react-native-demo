import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput } from 'react-native';
import { Result } from './components/Result';
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      filter: '',
      hasData: false,
      news: [] 
    }
  }
  
  search = (text) => {
    fetch('https://newsapi.org/v1/articles?source=' + text + '&apiKey=ff895ff298de474bba071da8f033e16a')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        if(result.status == 'error'){
          this.setState({
            hasData:false,
            news: []
          })
        }
        else{
          this.setState({
            hasData:true,
            news:result.articles
          })
        }
      })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={ {backgroundColor:'#31e8d4', paddingTop:20}}>
              <SearchBar  
                containerStyle={ {backgroundColor:'#31e8d4', borderColor:'#31e8d4', borderTopWidth:0}}
                inputStyle={ {backgroundColor:'white'}}
                lightTheme
                placeholder='Place...'
                onChangeText={this.search.bind()}
              />
        </View>
        <Result list={this.state.news}></Result>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 12,
    fontSize: 16,
  },
});



