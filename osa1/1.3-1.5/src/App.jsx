const Header = (props) => {
  
  return (
    <h1>{props.course.name}</h1>
  )

}

const Content = (props) => {
  console.log(props.content[0]['name'])
  return (
    <>
      <p>
          {props.content[0]['name']} {props.content[0]['exercises']}
      </p>
      <p>
        {props.content[1]['name']} {props.content[1]['exercises']}
      </p>
      <p>
        {props.content[2]['name']} {props.content[2]['exercises']}
      </p>
    </>
  )
}

const Total = (props) => {
 let summa = 0;
  props.summa.forEach(item => {
    summa += item['exercises'];
    
  });

  return (
    <p>Number of exercises {summa}</p>
  )
}




const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}  />
      <Content content={course.parts}  />
      <Total summa={course.parts}  />
    </div>
  )
}
export default App