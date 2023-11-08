import { useParams } from "react-router-dom";
import { useGetStudentQuery } from "./studentSlice";

export default function StudentDetails() {
  const { id } = useParams();
  const { data: students } = useGetStudentQuery();

  const numId = +id;
  console.log(numId);
  console.log(typeof numId);
  //console.log("data", data);
  console.log("students", students);

  const student = students?.find((student) => student.id === numId);

  if (!student) {
    return <p>Student not found</p>;
  }

  return (
    <div>
      <h2>
        {student.firstName} {student.lastName}
      </h2>
      <p>Email: {student.email}</p>
      <img src={student.imageUrl} />
      <p>Gpa: {student.gpa}</p>
    </div>
  );
}
