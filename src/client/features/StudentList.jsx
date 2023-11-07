//Not sure about these paths/imports 
import { useGetStudentsQuery } from "./studentSlice.js";
import StudentCard from "./components/studentcard.jsx";
//new student stuff
import AddNewStudent from "";

function StudentList() {
    const { data: students, isLoading } = useGetStudentsQuery();
    return (
        <div className="studentList">
          <h1>Students:</h1>
          {isLoading && <p>Loading students...</p>}
          {students && (
            <ul>
              {students.map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
            </ul>
          )}
          <h2>Add a new student:</h2>
          <AddNewStudent />
        </div>
      );
}

export default StudentList;