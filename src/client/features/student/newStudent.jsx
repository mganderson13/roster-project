import { useState } from "react";
import { useCreateStudentMutation } from "./studentSlice";

export default function NewStudent(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [gpa, setGpa] = useState('')
    


const [createStudent] = useCreateStudentMutation();
const create = async (evt) => {
    evt.preventDefault();
    createStudent({firstName, lastName, email, imageUrl, gpa});

};

return (
    <form onSubmit={create}>
        <label className="form-first-name">First Name 
        <input type = "text"
        value = {firstName}
        onChange={(e) => setFirstName(e.target.value )}
        required>   
        </input>
        </label>
        <label className="form-last-name">Last Name 
        <input type = "text"
        value = {lastName}
        onChange={(e) => setLastName(e.target.value )}
        required>   
        </input>
        </label>
        <label className="form-email">Student Email
        <input type = "text"
        value = {email}
        onChange={(e) => setEmail(e.target.value )}
        required>   
        </input>
        </label>
        <label className="form-imageUrl">link to submit a student photo
        <input type = "text"
        value = {imageUrl}
        onChange={(e) => setImageUrl(e.target.value )}
        required>   
        </input>
        </label>
        <label className="form-gpa">GPA
        <input type = "number"
        value = {gpa}
        onChange={(e) => setGpa(e.target.value)}
        required>   
        </input>
        </label>
      <button type= "submit"> Submit New Student</button>
        
    </form>
)};