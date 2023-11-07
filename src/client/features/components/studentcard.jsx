import { Link } from "react-router-dom";

export default function StudentCard({ student }) {
return (
    <div className="student-card">
        <section className="student-info">
            <h2 className="student-name">{student.firstName} {student.lastName} </h2>
        </section>
    </div>
)
}