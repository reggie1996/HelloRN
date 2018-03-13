
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Dimensions,
    Button,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';


const {width,height}=Dimensions.get('window')

type Props = {};
export default class Find extends Component<Props> {

    constructor(props){
        super();
    }

    refreshing(){
        let timer = setTimeout(()=>{
            clearTimeout(timer)
            alert('刷新成功')
        },1500)
    }

    _onLoad(){
        let timer = setTimeout(()=>{
            clearTimeout(timer)
            alert('加载成功')
        },1500)
    }

    render() {

        var data = [];

        for(var i = 0; i <100; i++){
            data.push({key:i, title:i})
        }

        return (
            <View style={{flex:1}}>
                <Button title='滚动到指定位置' onPress={()=>{
                    this._flatList.scrollToOffset({animated:true,offset:2000});
                }}/>

                <View>
                    <FlatList
                        ref={(flatList)=>this._flatList = flatList}
                        ListHeaderComponent={this._header}
                        ListFooterComponent={this._footer}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem}
                        onRefresh={this.refreshing}
                        refreshing={false}
                        onEndReachedThreshold={0}
                        onEndReached={this._onLoad}
                        numColumns={2}
                        //columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:10}}
                        getItemLayout={(data,index)=>(
                        {length: 100, offset: (100+2) * index, index}
                        )}
                        data={data}
                        horizontal={false}
                    />

                </View>


            </View>
        );
    }

    _renderItem = (item)=>{
        var bgColor = item.index % 2 == 0 ? 'red' : 'blue';
        return (
            <TouchableOpacity activeOpacity={0.5}>

                <View style={{marginLeft:50, marginBottom:10,marginTop:5}}>
                    <Image source={{uri: 'http://img.zcool.cn/community/018d4e554967920000019ae9df1533.jpg@900w_1l_2o_100sh.jpg'}}
                           style={styles.iconStyle} />
                    <Text>商品名称</Text>
                    <Text>商品价格</Text>
                </View>
            </TouchableOpacity>
        );


    }

    _onPressed = (item)=>{
        //ToastAndroid.show('aaa', ToastAndroid.SHORT);
    }

    _header = ()=>{
        return <Text stlye={styles.txt}>这是头部</Text>
    }

    _footer = ()=>{
        return <Text stlye={styles.txt}>这是尾部</Text>
    }

    _separator = ()=>{
        return <View style={{height:0.5,backgroundColor:'gray'}}/>
    }
}

const styles = StyleSheet.create({
    txt:{
        textAlign:'center',
        textAlignVertical:'center',
        color:'black',
        fontSize:30
    },

    iconStyle:{
        width:100,
        height:150
    },


});
