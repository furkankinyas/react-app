import React from 'react';
import Header from './header';
import Unsplash, { toJson } from "unsplash-js";
import InfiniteScroll from "react-infinite-scroll-component";
const unsplash = new Unsplash({
  applicationId: "eeb89ad66933ae094352dcee4a037cc27ba514d19da2a3030a7eb15216d5d209",
  secret: "8c7b0acce7599f2d1aa9147dda3d352f6aaaa1c229a3c7c45c86566b6fb06316"
});

  class Index extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        ajaxPage: 1,
        ajaxOldPage: 0,
        list:[],
        search: false,
        searchText: "",
        hasMore: true
      }
      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.fetchMoreData = this.fetchMoreData.bind(this);
    }

    handleFieldChange = (value) => {
      this.setState({
        searchText: value,
        list: [],
        ajaxOldPage:0,
        ajaxPage: 1
      }, () => {
        if(value===""){
          this.setState({
            search:false,
            hasMore: true
          },()=>{
            this.fetchMoreData();
          })
        }else{
          this.setState({
            search:true
          },()=>{
            this.fetchMoreData();
          })
        }

      });
    }

    fetchMoreData = () => {
      if(this.state.ajaxOldPage<this.state.ajaxPage){
        if(this.state.search===true){
          unsplash.search.photos(this.state.searchText, this.state.ajaxPage, 12)
          .then(toJson)
          .then(json => {
            if(json.results.length===0){
              this.setState({ hasMore: false });
              return;
            }
            this.setState({
              list: this.state.list.concat(json.results),
              isLoading: false,
              ajaxOldPage: this.state.ajaxPage,
              ajaxPage: this.state.ajaxPage+1
            })
          })
        }else{
          unsplash.photos.listPhotos(this.state.ajaxPage, 12, "latest")
          .then(toJson)
          .then(json => {
            if(json.length===0){
              this.setState({ hasMore: false });
              return;
            }
            this.setState({
              list: this.state.list.concat(json),
              isLoading: false,
              ajaxOldPage: this.state.ajaxPage,
              ajaxPage: this.state.ajaxPage+1
            })
          })
        }
      }
    };

    componentDidMount(){
      this.fetchMoreData()
    }
  
    render() {

      return (
        <div>
          <Header onChange={this.handleFieldChange} value={this.state.searchText} />
          {!this.state.isLoading&& 
           <div className="container">
            <InfiniteScroll
              className="row margin-bottom"
              dataLength={this.state.list.length}
              next={this.fetchMoreData}
              hasMore={this.state.hasMore}
              endMessage={<div className="font-size-14 text-center padding-lg font-weight-7 width-full">Şimdilik bu kadar başka birşeyler aramaya ne dersin?</div>}
              loader={<div className="font-size-14 text-center padding-lg font-weight-7 width-full">Yükleniyor...</div>}
            >
              {this.state.list.map((item, index) => (
                <div className="col-4" key={index}>
                  <div className="image-wrapper margin-bottom-md">
                    <img alt={item.user.name} className="responsive-image" src={item.urls.small}/>
                  </div>
                  <h2 className="font-size-14 font-weight-7">{item.user.name}</h2>
                </div>
              ))}
          </InfiniteScroll>
        </div>
          }
      </div>
      );
    }

  }

export default Index;