import React from 'react';
export const ThemeContext = React.createContext();

class Theme extends React.Component{
  constructor(props){
    this.state={
      showForm: false,
      nOfItem: 3,
      sortList: 'lowToHighDif',

    }
  }


render() {
  return (
    <ThemeContext.Provider value={this.state}>
      {this.props.children}
    </ThemeContext.Provider>
  )
}
}

export default Theme;