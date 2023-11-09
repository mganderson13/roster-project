//Not sure about these paths/imports
import { useGetStudentsQuery } from "./studentSlice.js";
import StudentCard from "./studentcard.jsx";
import NewStudent from "./newStudent.jsx";
import "./studentcard.css"

function StudentList() {
  const { data, isLoading, isError } = useGetStudentsQuery();

  // console.log("data", data);
  // console.log("isError", isError);
  return (
    <div className="studentList">
      <h1 className="students-header">Students:</h1>
      {isLoading && <p>Loading students...</p>}
      {data && (
        <ul>
          {data.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </ul>
      )}
      <h2 className="add-student">Add a new student:</h2>
      <NewStudent />
    </div>
  );
}

export default StudentList;
