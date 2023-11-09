import { useParams } from "react-router-dom";
import { useGetStudentQuery } from "./studentSlice";
import UpdateForm from "./updateStudentForm";

export default function StudentDetails() {
  const { id } = useParams();
  // data: student remanes data to student
  const { data: student, isLoading } = useGetStudentQuery(id);

  if (!student) {
    return <p>Student not found</p>;
  }

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div>
        <h2>
          {student.firstName} {student.lastName}
        </h2>
        <p>Email: {student.email}</p>
        <img src={student.imageUrl} />
        <p>Gpa: {student.gpa}</p>
      </div>
      <UpdateForm id={student.id} />
    </>
  );
}
