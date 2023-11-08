import { Link } from "react-router-dom";

export default function StudentCard({ student }) {
    console.log("student card", StudentCard);
return (
    <div className="student-card">
        <section className="student-info">
            <h2 className="student-name">{student.firstName} {student.lastName} </h2>
        </section>
        <img className="student-image" src={student.imageUrl} />
        <h3>{student.email}</h3>
        <h4>{student.gpa}</h4>
        <Link className="student-info" to={`students/${student.id}`}> Student Details </Link>
    </div>
);


}