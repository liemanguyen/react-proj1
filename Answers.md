# Answers!
Keep your answers to each checkoff question here for safe keeping. You will need to copy them over to the submission form at the end of the project.

1.1) ReactDOM.render generates a visual of the component passed in as the first argument as an element of the DOM object passed in as the second argument.

1.2) UI libraries allow developers to import and directly apply state-of-the-art features to their projects with minimal additional code. However, they also discourage users from developing their own code and can restrict them to the implemented designs.

1.3) By wrapping addToCart in another function, the onClick property has a value of a function itself, rather than any value that might be returned by addToCart; that way, a function is actually called when the specific element is clicked rather than simply setting onClick to some other object.

1.4a) The Product component was only written once because it can be mapped to each product in ProductData.

1.4b) Making a new component and manually adding props for each product is just as correct; however, pulling these values from an object highly reduces the likelihood of human error from adding them by hand and abstracts the details of each product to the data file itself.
