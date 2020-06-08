import {createAppContainer,createSwitchNavigator} from 'react-navigation';

import Login from '../views/Login';
import List from '../views/List';
import Book from '../views/Book';

const Routes = createAppContainer(createSwitchNavigator({
    Login,
    List,
    Book
}));

export default Routes;
