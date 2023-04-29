import React from "react";

const {Provider, Consumer} = React.createContext();
export {Consumer};

class ContextApi extends React.Component{
    constructor(props){
        super(props);
        this.setStateFunc = this.setStateFunc.bind(this);
        this.deleteStateFunc = this.deleteStateFunc.bind(this);
        this.moveContentFunc = this.moveContentFunc.bind(this);
        this.editContentFunc = this.editContentFunc.bind(this);
        this.searchTitleFunc = this.searchTitleFunc.bind(this);
        this.state = {
            Contents:[],
            MoveFlag: 'none',
            EditFlag: false,
            SearchIdx: 'none',
        };
    }

    //게시물 추가 함수
    setStateFunc(tValue, dValue, iValue){
        const obj = {
            Title: tValue,
            Detail: dValue,
            Img: iValue,
        };

        this.setState((state) => {
            const Contents = state.Contents.concat(obj)

            return {Contents}
        });
  
    }
    //수정함수
    editContentFunc(tValue, dValue, iValue){
        const obj = {
            Title: tValue,
            Detail: dValue,
            Img: iValue,
        };
        this.setState((prev) => {
            prev.Contents.splice(prev.MoveFlag, 1, obj);
        })
    }

    //게시물 삭제 함수
    deleteStateFunc(index){
        this.setState((state) => {
            const Contents = state.Contents.filter((el, i) => index !== i)

            return {Contents}
        });
    }

    //게시물로 이동하는 함수
    moveContentFunc(index, flag=false){
        this.setState({MoveFlag: index});
        this.setState({EditFlag: flag});
    }

    //게시물 검색하는 함수
    searchTitleFunc(tValue){
        const serachTitle = tValue.SearchTitle;

        this.state.Contents.forEach((element, idx) => {
            if(element.Title === serachTitle)
                this.setState({SearchIdx: idx});
        })
    }

    render(){
        const content = {
            ...this.state,
            setStateFunc: this.setStateFunc, 
            deleteStateFunc: this.deleteStateFunc,
            moveContentFunc: this.moveContentFunc,
            editContentFunc: this.editContentFunc,
            searchTitleFunc: this.searchTitleFunc,
        }
        return(
            <Provider value={content}>
                {this.props.children}
            </Provider>
        );
    }
}

export default ContextApi;