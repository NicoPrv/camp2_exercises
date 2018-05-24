import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Table.css';
import _ from "underscore";

const products =
[
  { "decathlon_id": 8282689, "title": "Corne chasse 14cm", "price": 9.99 },
  { "decathlon_id": 8354464, "title": "Basic L print Long Gold Fusion", "price": 9.99 },
  { "decathlon_id": 8380024, "title": "RUN ELIOPRIME", "price": 54.99 },
  { "decathlon_id": 8379970, "title": "Pantalon Gym", "price": 12.99 },
  { "decathlon_id": 8247793, "title": "PALMES WADERS", "price": 24.99 },
  { "decathlon_id": 8357549, "title": "MINIMIZER EDEN UNI  NOIR", "price": 19.99 },
  { "decathlon_id": 8326155, "title": "Pantalon Training mesh marine", "price": 44.99 },
  { "decathlon_id": 8329121, "title": "COUTEAU A PALOURDES", "price": 4.99 },
  { "decathlon_id": 8370749, "title": "Doudoune Hike 100 garçon bleu", "price": 9.99 },
  { "decathlon_id": 8298354, "title": "OREILLER CONFORT", "price": 6.99 },
  { "decathlon_id": 8044622, "title": "2 guêtres RIDING noir", "price": 14.99 },
  { "decathlon_id": 8249674, "title": "BOBINE FUN 2 3 4mm X 40 20 12m", "price": 6.99 },
  { "decathlon_id": 8353265, "title": "Justaucorps manche longue Gym.", "price": 34.99 }
];

let clickId=0;
let clickTitle=0;
let clickPrice=0;

class Table extends Component{

  constructor(props) {
     super(props)
     this.state = {products:products}
   }

   sortArrayById=()=>{
     clickId++;
     if(clickId % 2 === 0){
       let sortedId = _.sortBy(products,"decathlon_id");
       this.setState({products:sortedId});
     }else{
       let sortedId = _.sortBy(products,"decathlon_id");
       let sortedIdReverse = sortedId.reverse();
       this.setState({products:sortedIdReverse});

     }


   }

   sortArrayByTitle=()=>{
     clickTitle++
     if(clickTitle % 2 === 0){
     let sortedTitle = _.sortBy(products,"title");
     this.setState({products:sortedTitle});
   }else{
     let sortedTitle = _.sortBy(products,"title");
     let sortedTitleReverse = sortedTitle.reverse();
     this.setState({products:sortedTitleReverse});
   }
 }

   sortArrayByPrice=()=>{
     clickPrice++;
     if(clickPrice %2 ==0){
       let sortedPrice = _.sortBy(products,"price");
       this.setState({products:sortedPrice});
     }else{
       let sortedPrice = _.sortBy(products,"price");
       let sortedPriceReverse = sortedPrice.reverse();
       this.setState({products:sortedPriceReverse});
     }

   }


  render(){


    return(
      <div id="test">
      <table>

      <tr>
      <th id="thId" onClick={()=>{this.sortArrayById()}}>decathlon_id</th>
      <th id="thTitle" onClick={()=>{this.sortArrayByTitle()}}>title</th>
      <th id="thPrice" onClick={()=>{this.sortArrayByPrice()}}>price</th>
      </tr>



      {
        this.state.products.map(product => {
          return <tr><td>{product.decathlon_id}</td><td>{product.title}</td><td>{product.price}</td></tr>
        }
      )
    }


    </table>
    </div>
  );
}
}

export default Table;
