import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({ course }) => <h1>{course.name}</h1>

const Total = ({ parts }) => {
    const sum = 0
    const total = parts.reduce(function(sum, parts){
        return sum + parts.exercises
    },0)

    return <p>Total of {total} exercises</p>

    
}

const Part = ({ parts }) => {
    return <li>{parts.name} {parts.exercises}</li>
}

const Content = ({ parts }) => 

  <>
    {parts.map(
        part =>(
            <Part key={part.id} parts={part}/>
        )
    )}
    
  </>



const Course = props => {
    const {course} = props
    return(
        <div>
            <Header course={course} />
            <p>
                <Content parts={course.parts}/>
                <Total parts={course.parts}/>
                
            </p>

        </div>

    )

}


const App = () => {
    const course = {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1,
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2,
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3,
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4,
          },
      ],
    }

    return <Course course={course} />
  }

export default App

