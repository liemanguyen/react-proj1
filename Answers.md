# Answers!
Keep your answers to each checkoff question here for safe keeping. You will need to copy them over to the submission form at the end of the project.

1.1) ReactDOM.render generates a visual of the component passed in as the first argument as an element of the DOM object passed in as the second argument.

1.2) UI libraries allow developers to import and directly apply state-of-the-art features to their projects with minimal additional code. However, they also discourage users from developing their own code and can restrict them to the implemented designs.

1.3) By wrapping addToCart in another function, the onClick property has a value of a function itself, rather than any value that might be returned by addToCart; that way, a function is actually called when the specific element is clicked rather than simply setting onClick to some other object.

1.4a) The Product component was only written once because it can be mapped to each product in ProductData.

1.4b) Making a new component and manually adding props for each product is just as correct; however, pulling these values from an object highly reduces the likelihood of human error from adding them by hand and abstracts the details of each product to the data file itself.

2.0) An example of a previously undiscussed component implemented in React that would require state might be a messaging system, in which full conversations with contacts must be tracked so they can be displayed to the user.

2.1) Parent-to-child communication in React is accomplished by passing down information in the form of props. On the other hand, child-to-parent communication is accomplished by having the child call functions that are declared in the parent and passed down as props; these functions update the parent's state and can in turn change the value of the props passed down to its children. These methods of communication cannot be the same because children have no means of directly passing information to their parents.

2.2) Adding and removing items from the cart might involve calling this.setState() to increment/decrement the count of each product in the cart; for example, one might call this.setState({ cartItems: this.state.cartItems.map({ productName: "Apple", price: 1, count: 2 } => this.state.cartItems.find(o => o.productName === obj.productName) || obj) }) to change the number of apples in the cart.
