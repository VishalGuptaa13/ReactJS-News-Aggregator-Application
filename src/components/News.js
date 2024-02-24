import React, { Component } from "react";
import NewsItem from "./NewsItem";
import LoadingComponent from "./LoadingComponent";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



export default class News extends Component {

//here we are defining the defaul value of props and the type of the props. this function we are taking from react official documentation
  static defaultProps = {
    country: 'in',
    pageSize : 8,
    category :"general"
  }
 
  static propsType = {
    country:PropTypes.string,
    pageSize: PropTypes.number,
    category : PropTypes.string,
  }
  

  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
    }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page:1,
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsWithVishal`;
  }


  async updateNews(){

        //we are using news api for india news to fetch live top headlines news 
    this.props.setProgress(10);    
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    this.props.setProgress(30);       
    //we are making the data in json format
    let parsedData= await data.json();
    this.props.setProgress(70);       
    console.log(data);
    //here we are extracting the value of articles and total result from news api
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false});
    this.props.setProgress(100);    
  }

  // componentDidMoun is a life cycle method who will run after execution of render method we are making it to async function as it is using the fetch api to take the data from api 
  async componentDidMount() {
    this.updateNews();
  }

  //this two method is used to go to next page and previous page of website
  handleNextClick= async ()=>{
  
    this.setState({page: this.state.page+1});
    this.updateNews();
  }
  handlePreviousClick=async ()=>{

    this.setState({page: this.state.page-1});
    this.updateNews();    

  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({articles:this.state.articles.concat(parsedData.articles),totalResults:parsedData.totalResults,loading:false});    


  };
  
 

  render() {

    return (
      <>
        <h1 className="text-center" style={{margin: '35px'}}>NewsWithVishal- {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {/* here i am considering this loaing state should show only if loading is true so i make the logic in the givenn below */}
        {this.state.loading && <LoadingComponent/>}


        {/* i made this Infinate scroll using the infinite scroll package importing to infinately scroll the content */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
         
          loader={
           
              <LoadingComponent />
          
          }
        >
        <div className="container">
        <div className="row">
          {/* their is total 12 grid space in bootstrape so col-md-4 divided equally in 3 parts of whole grade */}
          {/* map function is used to extract the required value from article array without change the output of article array  and when you use map function. you have to give a unique key and also making state loading logic so thata if loading is happening than the artile shouldn't displayed*/}
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                {/* here we are passing title,descroiption and imageUrl as props in  newsitem component. here imageUrl and newsUrl will not static we will pass it through from the articls array and here we are also doing slicing to make uniform size of the news box*/}
                <NewsItem
                  title={element.title?element.title:""}
                  description={element.description?element.description:""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        </div>
        
        </InfiniteScroll>
      </>
    );
  }
}
