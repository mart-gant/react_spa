import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>HELLO</h2>
                <p>Cras facilisis urna ornare ex volutpat, et
                    convallis erat elementum. Ut aliquam, ipsum vitae
                    gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                    metus nec massa. Maecenas hendrerit laoreet augue
                    nec molestie. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.</p>

                <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            </div>
        );
    }
}

export default Home;
Next, create a file called Stuff.js in the same location and add in the following:

    import React, { Component } from "react";

class Stuff extends Component {
    render() {
        return (
            <div>
                <h2>STUFF</h2>
                <p>Mauris sem velit, vehicula eget sodales vitae,
                    rhoncus eget sapien:</p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                    <li>Eget erat</li>
                    <li>Id porttitor</li>
                </ol>
            </div>
        );
    }
}

export default Stuff;