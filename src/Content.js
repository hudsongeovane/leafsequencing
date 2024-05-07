import React from 'react';
import linac from './images/linac2.png'

class Content extends React.Component {
  render() {
    return (
      <div className='content'>
        <div className='contentfirst'>
            <img className='img' src={linac}
            alt='Linear accelerator'></img>
        </div>
        <div className='contentsecond'>
            <h2>Leaf Sequencing Problem in IMRT</h2>
            <p>
              In Intensity-Modulated Radiation Therapy (IMRT), the goal is to
              deliver the highest possible radiation dose to the tumor while
              minimizing the dose to surrounding healthy tissue. One way to
              achieve this is by using collimators with leaf pairs that can move
              independently to shape the radiation beam. The leaf sequencing
              problem is the task of determining the optimal sequence of leaf
              movements to achieve a desired radiation intensity profile.

              The prescribed dosis for an application can be represented as
              a matrix - called fluence map. Algorithms for this problem should 
              decompose this matrix in 0-1 segments in which the ones in each row
              are consecutive.
            </p>
        </div>
      </div>
    );
  }
}

export default Content;
