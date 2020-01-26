import React, {Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;
  state = {  }
  render() {
    const { isLightTheme, light, dark} = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
        <ul>
          <li style={{background: theme.ui}}>Early Indians</li>
          <li style={{background: theme.ui}}>Sapiens</li>
          <li style={{background: theme.ui}}>The Lost Symbol</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
