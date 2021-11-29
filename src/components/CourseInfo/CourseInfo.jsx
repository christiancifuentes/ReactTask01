import React from 'react'
import {Redirect, useParams, useHistory} from 'react-router-dom'
import { connect } from "react-redux";

import Button from '../../common/Button/Button';
import {useFetch} from '../../services';

import './CourseInfo';

const url = "http://localhost:3000/courses/";

const CourseInfo = (props)=>{
    const id = useParams().id;
    const {results} = useFetch(url+id);

    let history = useHistory();
	const  backCourses = () => {
		history.push(`/courses/`);
	}
  return(
      <>
    {props.token&&<div className="centerFullDiv" >
        <Button label='Back to courses' onClick={backCourses}/>         
        <h2 className="divCenter">{results.title}</h2>
        <div>
            <div class="alignleft"><p>{results.description}</p></div>
            <div class="alignright">
                <div className='cardElement'>
                    <h4>ID: </h4>
                    <p>{results.id}</p>
                </div>
                <div className='cardElement'>
                    <h4>Duration: </h4> <p>{results.duration} hours</p>
                </div>
                <div className='cardElement'>
                    <h4>Created: </h4> <p>{results.creationDate}</p>
                </div>
                <div className='cardElement'>
                    <h4>Authors: </h4>
                    <p>{results.authors}</p>
                </div>
            </div>
        </div>
    </div>}
       { !props.token&&<Redirect to="/login" />}
    </>
    );
}

function mapStateToProps(state) {
	return {
	  token: state.user.token
	};
  }

export default  connect(mapStateToProps)(CourseInfo);	
