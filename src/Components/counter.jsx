import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // tags: [],
    /*imageUrl: 'https://picsum.photos/200'*/
  };
  constructor() {
    //   Counter is a child class as we doing inheritance here, it is extending Component class. So, before calling the 
    //   constructor of child class we have to call the constructor of parent class and we do that by calling super().
      super();
    //   console.log("Constructor", this);
    // Functions in javascript are objects, So they can have properties and methods, bind() is one of them.
    // and with bind we can set the value of this. bind() method will return the new instance of count increment function
    // and in that function this will be refering to the current object.
    // So, it will return a new function and we will be setting it to the countIncrement function. 
    this.countIncrement = this.countIncrement.bind(this);
  }
  // its good practice to make class for styling keeping in the view
  // maintainbility and performance but sometimes we may want to break the rules so,
  styles = {
    fontSize: 15,
    fontWeight: "bold",
  };

  renderTags() {
    /*
        Unlike angular we don't have if/else condition because its not 
        a templating engine. So, to render elements conditionally we need to go back to 
        plain old javascript.
    */
    //   if Array is empty then it will render "there is no tags."
    if (this.state.tags.length === 0) return <p>There are no Tags!</p>;

    // otherwise this will get render.
    return (
      <ul>
        {/* Iterators we use in javascript are Map(ES6), ForEach, For-of, among them Map is best to use.
            To ensure that each HTML element in the React DOM has a unique 
            identifier, you’re required to provide each rendered element with, well, a unique key.
            You do this by providing a key attribute on the HTML element that 
            you are rendering inside of the Map function. */}
        {this.state.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        {/* <React.Fragment> use this tag if you want to render something without using any tag */}
        {/* <img src={this.state.imageUrl} alt=""/ > */}
        {/* <span style={this.styles} className="badge badge-primary m-2">{this.state.count } </span> */}
        {/* for inline styling style={{ fontSize: 20}} */}
        {/*<span className="badge badge-primary m-2">{this.state.count } </span> */}
        <span>
          {/* 
            Imagine just before rendering the rnederTags method we want to render another
            method based on the condition and we have simple IF statement without and else part.
            So, this is how we will be achieving this in React 
          */}
          {/* 
            How this is actually works, in javascript unlike other programming languages we can apply 
            logical (&&) and operator between non-boolean values.
            Examples, Plain javascript.
            ----->: true && false
            result: flase

            what will be the result?
            ----->: true && 'Hi'
            result: Hi
            Reason: When javascript tries to eveluate this expression, it will look at the first operand 
                    and in this case its true so it will look at the second operand and Its a string and not empty (string which have atleast one character always return true)
                    so it will also give us true. Essentially we have two operands, which are truthy.
                    In that case Javascript engine return the second operand, that's why we get the 'Hi'
            
            ----->: true && 'Hi' && 1
            result: Hi
            Reason: All three operands are true, if number is not 0 then it will always be true. So, the result is the last operand, we will get 1. 

            Ps: First will be the logical condition and then it could be any jsx express.
          */}
          {/* { this.state.tags.length === 0 && 'Please create a new tag!'}
          {this.renderTags()} */}
        </span>
        <span className={this.getBadgeClasses()}>{this.formatCount()} </span>
        
        {/* 
            Note that, we are not calling the method, we are simply passing refrence to it.
            this is different from handling onclick in Vanila Javascript, in vanila JS we call
            the target function, when setting the onclick.
        */}
        <button onClick={this.countIncrement} className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }
  countIncrement() {

  }
  getBadgeClasses() {
    // Using a let variable instead of const because we cannot change the state of const variable
    // but we can change the field of const object e.g
    // const obj={ name:'Ali'};
    // obj.name="Numan";

    // Rendering class properties dynamically
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
