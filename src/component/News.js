import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Kenneth Chang",
            "title": "SpaceX Live Updates: Inspiration4 Civilian Crew Returns to Earth - The New York Times",
            "description": "The crew has completed a water landing near Florida after a three-day trip to orbit.",
            "url": "https://www.nytimes.com/live/2021/09/18/science/spacex-inspiration4-splashdown",
            "urlToImage": "https://static01.nyt.com/images/2021/09/18/multimedia/18SpaceX-Splashdown-02/18SpaceX-Splashdown-02-facebookJumbo.jpg",
            "publishedAt": "2021-09-19T00:27:00Z",
            "content": "LiveUpdated Sept. 18, 2021, 8:52 p.m. ET\r\nSept. 18, 2021, 8:52 p.m. ET\r\nThe crew has completed a water landing near Florida after a three-day trip to orbit.\r\nSept. 18, 2021, 8:52 p.m. ET\r\nSept. 18, 2… [+32860 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "Barrett Sallee",
            "title": "Alabama vs. Florida score, takeaways: No. 1 Tide survive No. 11 Gators' gritty effort in The Swamp - CBSSports.com",
            "description": "A rematch of last year's SEC Championship Game proved just as exciting",
            "url": "https://www.cbssports.com/college-football/news/alabama-vs-florida-score-takeaways-no-1-tide-survive-no-11-gators-gritty-effort-in-the-swamp/live/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/09/18/a95c0ab1-2470-43ab-8564-b224f898bff8/thumbnail/1200x675/91737c195458adc14d6995ae5b8a25f4/brian-robinson-jr-alabama.jpg",
            "publishedAt": "2021-09-19T00:11:00Z",
            "content": "No. 1 Alabama outlasted No. 11 Florida, 3129, in a classic SEC battle between storied cross-division rivals. The victory was the Crimson Tide's eighth straight over the Gators dating back to 2009, th… [+7105 chars]"
        },
        {
            "source" : {
                "id" : "the-hill",
                "name" : "The Hill"
            },
            "author" : "Celine Castronuovo",
            "title" : "Texas doctor who provided abortion in violation of new law: 'I had a duty of care' | TheHill - The Hill",
            "description" : "A Texas doctor has revealed that he recently performed an abortio...",
            "url" : "https://thehill.com/homenews/state-watch/572888-texas-doctor-who-provided-abortion-in-violation-of-new-law-i-had-a-duty",
            "urlToImage" : "https://thehill.com/sites/default/files/abortion_061318gn.jpg",
            "publishedAt" : "2021-09-18T23:23:29Z",
            "content" : "A Texas doctor has revealed that he recently performed an abortion in violation of the state's new controversial law that prohibits nearly all abortions after roughly six weeks into a pregnancy, argu… [+2918 chars]"
        },
        {
            "source" : {
                "id" : null,
                "name" : "TMZ"
            },
            "author" : "TMZ Staff",
            "title" : "Wack 100 Says He Has Unreleased Kim K Sex Tape, Offers It to Kanye - TMZ",
            "description" : "Another Kim K sex tape??? Ray J's one-time manager says yes.",
            "url" : "https://www.tmz.com/2021/09/18/ray-j-ex-manager-wack-100-unreleased-sex-tape-kim-k-kanye/",
            "urlToImage" : "https://imagez.tmz.com/image/c2/16by9/2021/09/18/c2eede9ff5d44712a74b694dcdf60b1d_xl.jpg",
            "publishedAt" : "2021-09-18T22:45:00Z",
            "content" : "Wack 100 says he has an unreleased sex tape belonging to Kim Kardashian and her ex, Ray J, that's never been seen before -- and he's weirdly offering it to ... Kanye West.\r\nRJ's former manager spille… [+1315 chars]"
        },
    ]
    constructor() {
        super();
        console.log("Hello i am constructor from news component");
        this.state = {
            articles: this.articles,
            loading: false,
        }
    }

    async componentDidMount(){
        console.log("cdm");
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=6e710b9030bb4efc9f5d36921cbf85d2&page=1&pageSize=20";
        let data=await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }
     handlePrevClick=async()=>{
        console.log("previous");
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=6e710b9030bb4efc9f5d36921cbf85d2&page=${this.state.page-1}&pageSize=20`;
        let data=await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData);
        this.setState({
            page:this.state.page-1,
            articles:parsedData.articles
        })
    }
     handleNextClick=async()=>{
        console.log("next");
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=6e710b9030bb4efc9f5d36921cbf85d2&page=${this.state.page+1}&pageSize=20`;
        let data=await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData);
        this.setState({
            page:this.state.page+1,
            articles:parsedData.articles
        })
    }
    render() {
        return (
            <div className="container">
                <h2>NewsMonkey-Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
