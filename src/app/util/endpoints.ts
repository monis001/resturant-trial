import { environment } from 'src/environments/environment';

export const FoodEndPoints = {
    getfoodList(){
        return generateURL('food');
    },
    getFoodStates(){
        return generateURL('food-states');
    }
}

const generateURL = (apiURL) => {
    const url = environment.apiBaseUrl;
  
  
    return `${url}${apiURL}`;
  };
  