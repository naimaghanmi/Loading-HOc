import React from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
 class Loading extends React.Component {
 //other logic
   render() {
    return(
     <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        //3 secs

     />
    );
   }
}
export default Loading;