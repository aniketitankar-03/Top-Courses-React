import React, { useState } from "react";
import Card from "./Card";


function Cards(props){

    let courses = props.courses;
    let category = props.category;
    const [likedCourses , setLikedCourses] = useState([]);

    // returns you a list of all Courses received from the api response;
    const getCourses = () => {

        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach( (courseCategory) => {
                courseCategory.forEach( (courseData) => {
                allCourses.push(courseData)
                })
            })
            return allCourses;
        
        }else{
            return courses[category];
        }
    }
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map( (course) => {
                    return (
                        <Card key={course.id} course= {course} likedCourses = {likedCourses} setLikedCourses = {setLikedCourses} />
                    )
                })
            }
        </div>
    )
}

export default Cards;