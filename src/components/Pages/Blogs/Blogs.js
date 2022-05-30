import React from 'react';

const Blogs = () => {
    return (
        <div className='my-10'>
            <div className='mx-12 my-6 border border-indigo-600 p-5 rounded-md'>
                <h2 className='text-xl font-bold text-primary'>How will you improve the performance of a React Application?</h2>
                <p>Answer:
                    Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. While this will lead to a faster user interface without specifically optimizing for performance for many cases, there are ways where you can still speed up your React application. This post will go over some useful techniques you can use to improve your React code.

                    1. Using Immutable Data Structures
                    Data immutability is not an architecture or design pattern, it’s an opinionated way of writing code. This forces you to think about how you structure your application data flow. In my opinion, data immutability is a practice that revolves around a strict unidirectional data flow.

                    Data immutability, which comes from the functional programming world, can be applied to the design of front-end apps. It can have many benefits, such as:

                    Zero side-effects;
                    Immutable data objects are simpler to create, test, and use;
                    Helps prevent temporal coupling;
                    Easier to track changes.
                    In the React landscape, we use the notion of Component to maintain the internal state of components, and changes to the state can cause the component to re-render.

                    React builds and maintains an internal representation of the rendered UI (Virtual DOM). When a component’s props or state changes, React compares the newly returned element with the previously rendered one. When the two are not equal, React will update the DOM. Therefore, we have to be careful when changing the state.
                </p>
            </div>
            <div className='mx-12  my-6  border border-indigo-600 p-5 rounded-md'>
                <h2 className='text-xl font-bold text-primary'>What are the different ways to manage a state in a React application?</h2>
                <p>Answer:
                    When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                    There are four main types of state you need to properly manage in your React apps:

                    Local state
                    Global state
                    Server state
                    URL state
                    Let's cover each of these in detail:

                    Local (UI) state – Local state is data we manage in one or another component.

                    Local state is most often managed in React using the useState hook.

                    For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                    Global (UI) state – Global state is data we manage across multiple components.

                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                    A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                    Sometimes state we think should be local might become global.

                    Server state – Data that comes from an external server that must be integrated with our UI state.

                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                    There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                    Fortunately there are tools such as SWR and React Query that make managing server state much easier.

                    URL state – Data that exists on our URLs, including the pathname and query parameters.

                    URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                    There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                </p>
            </div>
            <div className='mx-12  my-6  border border-indigo-600 p-5 rounded-md'>
                <h2 className='text-xl font-bold text-primary'>How does prototypical inheritance work?</h2>
                <p>Answer:
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
                </p>
            </div>
            <div className='mx-12  my-6  border border-indigo-600 p-5 rounded-md'>
                <h2 className='text-xl font-bold text-primary'>Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`</h2>
                <p>Answer:
                    One should never update the state directly because of the following reasons:

                    If you update it directly, calling the setState() afterward may just replace the update you made.
                    When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                    You will lose control of the state across all components.
                </p>
            </div>
            <div className='mx-12  my-6  border border-indigo-600 p-5 rounded-md'>
                <h2 className='text-xl font-bold text-primary'>What is a unit test? Why should write unit tests?</h2>
                <p>Answer:
                    Unit testing may seem like a tedious process at first, but in the long run, its benefits are clear. Unit testing ensures that all code meets quality standards before it’s deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                </p>
            </div>

        </div>

    );
};

export default Blogs;