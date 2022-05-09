import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <div className='blogs '>
                <div className="card  mt-5">
                    <h3 className='text-center py-5'>
                        1. Difference between Node.JS and Javascript?
                    </h3>
                    <figure className="table">
                        <table><thead><tr><th>S.No</th><th>Javascript</th><th>NodeJS</th></tr></thead><tbody><tr><td>1.</td><td><p>Javascript is a programming language that is used for writing scripts on the website.&nbsp;<br/>&nbsp;</p><p>&nbsp;</p></td><td>NodeJS is a Javascript runtime environment.</td></tr><tr><td>2.</td><td>Javascript can only be run in the browsers.</td><td>We can run Javascript outside the browser with the help of NodeJS.</td></tr><tr><td>3.</td><td>It is basically used on the client-side.</td><td>It is mostly used on the server-side.</td></tr><tr><td>4.</td><td>Javascript is capable enough to add HTML and play with the DOM.&nbsp;<br/>&nbsp;</td><td>Nodejs does not have capability to add HTML tags.</td></tr><tr><td>5.</td><td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.&nbsp;<br/>&nbsp;</td><td>V8 is the Javascript engine inside of node.js that parses and runs Javascript.&nbsp;</td></tr><tr><td>6.</td><td>Javascript is used in frontend development.</td><td>Nodejs is used in server-side development.</td></tr><tr><td>7.</td><td>Some of the javascript frameworks are RamdaJS, TypedJS, etc.&nbsp;<br/>&nbsp;</td><td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.&nbsp;<br/>&nbsp;</td></tr><tr><td>8.</td><td>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.&nbsp;<br/>&nbsp;</td><td>Nodejs is written in C, C++ and Javascript.</td></tr></tbody></table>
                    </figure>

                </div>
                <div className="card  mt-5">
                    <h3 className='text-center py-5'>
                        2.Differences between sql and nosql databases.
                    </h3>
                    <figure className="table"><table><thead><tr><th>SQL</th><th>NoSQL</th></tr></thead><tbody><tr><td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td><td>Non-relational or distributed database system.</td></tr><tr><td>These databases have fixed or static or predefined schema</td><td>They have dynamic schema</td></tr><tr><td>These databases are not suited for hierarchical data storage.</td><td>These databases are best suited for hierarchical data storage.</td></tr><tr><td>These databases are best suited for complex queries</td><td>These databases are not so good for complex queries</td></tr><tr><td>Vertically Scalable</td><td>Horizontally scalable</td></tr><tr><td>Follows ACID property</td><td>Follows CAP(consistency, availability, partition tolerance)</td></tr></tbody></table>
                    </figure>
                </div>
                <div className="card  mt-5">
                    <h3 className='text-center py-5'>
                        3. How JWT Works?
                    </h3>
                
                      <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p> 

                </div>
            </div>

        </div>
    );
};

export default Blogs;