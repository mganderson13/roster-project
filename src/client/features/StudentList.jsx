import { useGetStudentsQuery } from 

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
        </div>
      );
}

export default StudentList;