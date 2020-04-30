import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Action from '../../domain/action';
import State from '../../domain/state';

export default function Main() {
  const courses = useSelector((state: State) => state.data);
  const dispatch = useDispatch();
  const [course, setCourse] = useState<string>('');

  function addCourses() {
    dispatch<Action>({ type: 'ADD_COURSE', title: course });
  }

  function removeCourse(coursess: string) {
    dispatch<Action>({ type: 'REMOVE', title: coursess });
  }

  useEffect(() => {
    document.title = `Você tem ${courses.length} cursos listados`;
  }, [courses]);

  return (
    <>
      <input
        type='text'
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <button onClick={addCourses}>Adicionar</button>
      <ul>
        {courses.map((course: string) => (
          <li key={course}>
            {course}
            <button onClick={() => removeCourse(course)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}
