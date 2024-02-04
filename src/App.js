import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import React from "react";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems:[],
      items:[{
        id:1,
        title:"Стул серый",
        img:"chair-greay.jpg",
        desc:'123',
        category:"chairs",
        price:'49.99'
      },
      {
        id:2,
        title:"Стул серый",
        img:"chair-greay.jpg",
        desc:'123',
        category:"chairs",
        price:'49.99'
      },
      {
        id:3,
        title:"Стул серый",
        img:"chair-greay.jpg",
        desc:'123',
        category:"tables",
        price:'49.99'
      },
      {
        id:4,
        title:"Стул серый",
        img:"chair-greay.jpg",
        desc:'123',
        category:"chairs",
        price:'49.99'
      }
      ],
      showFullItem: false,
      fullItem:{},
    }
   // this.addToOrder = this.addToOrder.bind(this);
   //this.deleteOrder = this.deleteOrder.bind(this)
   this.state.currentItems = this.state.items
  }
  render(){
  return (
    <div className="wrapper">
      <Header orders = {this.state.orders} onDelete={this.deleteOrder.bind(this)}/>
      <Categories chooseCategory = {this.chooseCategory.bind(this)}/>
      <Items onShowItem={this.onShowItem.bind(this)}  items = {this.state.currentItems} onAdd={this.addToOrder.bind(this)}/>
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem.bind(this)} onAdd={this.addToOrder.bind(this)} item = {this.state.fullItem}/>}
      <Footer />
    </div>
  );
}

onShowItem(item){
  this.setState({fullItem:item})
  this.setState({showFullItem:!this.state.showFullItem})
}


deleteOrder(id){
this.setState({orders: this.state.orders.filter(el => el.id !==id)})
}

chooseCategory(category){
  if(category =='all')
 { 
  this.setState({currentItems: this.state.items})
return
}
 this.setState({
  currentItems: this.state.items.filter(el => el.category === category)
 })
}

addToOrder(item) { 
let isInArray  = false
this.state.orders.forEach(el => {if(el.id===item.id) isInArray = true})
if (!isInArray){
this.setState({orders:[...this.state.orders, item]})}
  }
}

export default App;
