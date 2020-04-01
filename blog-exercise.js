/**
 * JavaScript: Blog Exercise.
 * @author  TECHCareers by Manpower
 * @date    2020.03.31
 * @summary Iterates through blog articles and outputs an HTML representation of each.
 * 
 * Goals:
 * ======
 * - Output into the DOM.
 * - Use a template literal.
 * - Use a for...of loop.
 * - Instantiate an object or object(s) of a class.
 * - Add an element to an array.
 * - Loop through (iterate through) an array.
 * - If you are adding functions or using methods, use ES6 standard.
 */

let contentpage = {
  title: `Template literal: output JS variable value in a multi-line string`,
  content: `Content`,
  blogContent() {
      return `Blog content ${this.title} ${this.content}`;
  }

};

class Article {
  constructor(title = 'Blog Title', content = 'Lorem ipsum...') {
    this.title = title;
    this.content = content;
  }




 output(element = null) {
    if (element !== null) {
      // Populate the element.
      element.innerHTML += `
         <dl> This is dynamic HTML! Wow! 
           <dt>Title:</dt>
           <dd>${this.title}</dd> Template literal: output JS variable value in a multi-line string (\`\`).
           <dt>Content:</dt>
           <dd>${this.content}</dd>
          </dl>
   `;
    }
  }

}
console.log(`This ia a literal template ${title}`);
console.log(`This is the content ${content}`);


const blogArticles = [
  new Article(
    'First Day of Class (C#)',
    'Oh! C# is a programming language, often used for Windows programs... this could be really useful! It has variables, loops, and even methods; a lot to learn, but it really opens up doors!'
  ),
  new Article(
    'How to Build Websites! (HTML)',
    'What a great day! We learned all about HTML, or, HyperText Markup Language. It is the content and skeleton of the website.'
  ),
  new Article(
    'Brand new Topic (CSS)',
    'Today we learned about CSS, or, Cascading StyleSheets - how cool! This language helps us make our sites look pretty, we get to define the styles.'
  ),
  new Article(
    'Another New Topic!? (JS)',
    'Wow! I thought the other languages were pretty neat, but this one takes the cake so far. JS, or JavaScript, can be used to bring our websites to LIFE! It is used for functionality within the webpage.'
  ),
  new Article(
    'Adding on to our JS (TS)',
    'Who knew we could use something to check our code for errors and offer additional features to JavaScript!? TS, or TypeScript, is a superset of JavaScript that compiles to regular JS. The extra features will come in handy!'
  ),
  new Article(
    'Time to React',
    'Our very first large JavaScript framework, how exciting! Now we can build web components and build more complex front-ends with ease... a bit of a learning curve but so useful now that we\'re getting the hang of it!'
  )
];

//const mytext = document.body; // Target body.
//new.output( mytext ); //


for (let article of blogArticles) {
  console.log(Article); // Output each product in console.
  // new.output( mytext );// 
}


