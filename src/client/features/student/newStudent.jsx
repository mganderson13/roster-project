import { useState } from "react";
import { useCreateStudentMutation } from "./studentSlice";

export default function NewStudent(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        imageUrl: '',
        gpa: null,
    })


const [createStudent] = useCreateStudentMutation();
const create = async (evt) => {
    evt.preventDefault();
    try {
        const response = await createStudent(formData);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};

return (
    <form onSubmit={create}>
        <label className="form-first-name">First Name 
        <input type = "text"
        value = {formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        required>   
        </input>
        </label>
        <label className="form-last-name">Last Name 
        <input type = "text"
        value = {formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        required>   
        </input>
        </label>
        <label className="form-email">Student Email
        <input type = "text"
        value = {formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required>   
        </input>
        </label>
        <label className="form-imageUrl">link to submit a student photo
        <input type = "text"
        value = {formData.imageUrl}
        onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
        required>   
        </input>
        </label>
        <label className="form-gpa">GPA
        <input type = "number"
        step = "0.01"
        value = {formData.gpa}
        onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
        required>   
        </input>
        </label>
      <button type= "submit"> Submit New Student</button>
        
    </form>
)};