import React from 'react';
import { StyleSheet, Text, View, ListView} from 'react-native';
import { ResultItem } from './ResultItem';
 
export class Result extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
          filter: '',
          news: [] 
        }
      }

    render() {
        if (this.props.list.length){
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            const dataSource = ds.cloneWithRows(this.props.list);
            return (
                <View style={{flex: 4}}>
                    <ListView
                        dataSource={dataSource}
                        renderRow={(rowData) => 
                        <ResultItem item={rowData} ></ResultItem>  
                        }
                    />
                </View>);
        }
        else {
            return (<Text style={styles.nodata}>No data..</Text>);
        }
    }
}

const styles = StyleSheet.create({
    nodata: {
      padding: 10,
    }
});