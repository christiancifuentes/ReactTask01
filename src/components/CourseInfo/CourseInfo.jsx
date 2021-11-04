import React from 'react'
import Button from '../../common/Button/Button';
import './CourseInfo';

export default class CourseInfo extends React.Component {

  render() {
    return (
    <div className="centerFullDiv" >
        <Button label='Back to courses' />         
        <h2 className="divCenter">{this.props.title}</h2>



<div>
    <div class="alignleft"><p>{this.props.description}</p></div>

<div class="alignright">
            <div className='cardElement'>
                <h4>ID: </h4>
                <p>{this.props.ID}</p>
            </div>
            <div className='cardElement'>
                <h4>Duration: </h4> <p>{this.props.duration} hours</p>
            </div>
            <div className='cardElement'>
                <h4>Created: </h4> <p>{this.props.creationDate}</p>
            </div>
            <div className='cardElement'>
                <h4>Authors: </h4>
                <p>{this.props.authors}</p>
            </div>
        </div>

</div>
       
    </div>

    );
  }
}
