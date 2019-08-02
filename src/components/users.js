import React from 'react';
import axios from 'axios';

export class UsersComponent extends React.Component {

        constructor(props){
          super(props);
          this.state = {
              users : []
          };
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
          return (
              <ul>
                { this.state.users.map(user =>
                            <li key={user.email}>{user.name}</li>)
                }
              </ul>
        );
  }

 }