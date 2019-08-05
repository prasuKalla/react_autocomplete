import React from 'react';
import axios from 'axios';

export class SearchBarComponent extends React.Component {

        constructor(props){
          super(props);
          this.state = {
              users : [],
              suggestions : [],
              text :'',
          };
        }
     
      onTextChanged = (e) =>{
        const {users} = this.state;
        const names = [];
        users.map((user) => {
            names.push(user.name);
        })

        console.log(names);
          const value = e.target.value;
          let suggestions = [];
            console.log("onText changed");
            
          if(value.length>0){
              const regex = new RegExp(`^${value}`, 'i');
              console.log(regex);
              suggestions = names.sort().filter(v => regex.test(v));
               
              console.log(users.length);
              console.log(suggestions);
              console.log(suggestions.length);
          }

          this.setState(() => ({ suggestions, text: value }));
      }

      suggestionSelected(value){
          this.setState(() =>({
              text : value,
              suggestions : [],
          }));
         
      }


      renderSuggestions(){
        const {suggestions} = this.state;
        console.log("render suggestions");
        if(suggestions.length === 0){
            console.log("render suggestions 0 length");
            return null;
        }
        return (
            
                <ul>
                    { suggestions.map((userName) => <li onClick={() => { this.suggestionSelected(userName) }}>{userName}</li> )}
                </ul>
           );
      }

      componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
           this.setState ({
              users: response.data
           });
        })
        .catch((error) => {
            console.log(error);
        });
      }


      render() {
          const { text } = this.state;
          return (
              <div>
                  <input value={text} onChange={this.onTextChanged} type="text" />
                  {this.renderSuggestions()}
              </div>
           
        );
  }

 }