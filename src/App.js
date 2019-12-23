import React   from 'react'
import Movie from './components/Movie'
 
import './App.css'
const movies=[{name:"Pinoccio",src:"https://media2.picsearch.com/is?M0RRN2xzI2NZFH8alBQ0qGVGLwQ5mVwv-ypqkyIgyIM&height=337" 
,rate:2 ,year:"1940"},
{name:"Alice au pays des merveilles",src:"https://media4.picsearch.com/is?K-1HbFVfUoXzjC0SHFu-gttUSWAEtbWMKpxnjBqX40c&height=334",
 rate:3,year:"1951"},
{name:"Mary et Max",src:"https://media4.picsearch.com/is?w0nkcnd3j0ah_IQ7AgOVLzhUEjS-Zm5gf4eFWl9uKQk&height=100" ,
rate:5,year:"2009"},
{name:"le roi lion",src:"https://media1.picsearch.com/is?Gc-o1XVTRpb8FmLwf-MZUaPCs9FcszTKUvUJvJs-E7I&height=336",
rate:4,year:"2019"},
{name:"la reine des neiges",src:"http://fr.web.img2.acsta.net/c_215_290/pictures/19/10/25/15/08/5952325.jpg",
rate:3,year:"2019"}]

class App extends React.Component {

state={
  isLoading:true,
  movie:movies
}
getData=()=>{
  setTimeout(() =>{this.setState({ isLoading:!this.state.isLoading })},3000);
}
componentDidMount=()=>{
  this.getData();
}

  render() {
    return (
      <div>
      <Movie isLoading={this.state.isLoading} movie={this.state.movie} />
     
      </div>
    )
  }
}
export default App;
