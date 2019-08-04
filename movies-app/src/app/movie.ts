/*
Following the MVC pattern, this app will have a Model which will check the data
types of every property in the data objects in order to retreive and display
data.

It is recommended to use a TypeScript interface to represent the Model when
using Angular since interfaces are used specifically for checking data types.
*/
export interface Movie {
  id: number;
  name: string;
  image: string;
  trailer: string;
  genres: string[];
  series: boolean;
}
