import { useState } from "react";
import { useParams } from "react-router-dom";
import { useUpdateStudentMutation } from "./studentSlice";

export default function UpdateForm() {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [imageUrl, setImageUrl] = useState('');
const [gpa, setGpa] = useState('');

//const { id } = useParams();
const [updateStudent] = useUpdateStudentMutation();

const update = async (evt) => {
    evt.preventDefault();
    updateStudent({firstName, lastName, email, imageUrl, gpa});
  };
return (
<section>
<form onSubmit={update}>
    <label className="update-first-name">First Name 
    <input type = "text"
    value = {firstName}
    onChange={(e) => setFirstName(e.target.value )}
    required>   
    </input>
    </label>
    <label className="update-last-name">Last Name 
    <input type = "text"
    value = {lastName}
    onChange={(e) => setLastName(e.target.value )}
    required>   
    </input>
    </label>
    <label className="update-email">Student Email
    <input type = "text"
    value = {email}
    onChange={(e) => setEmail(e.target.value )}
    required>   
    </input>
    </label>
    <label className="update-imageUrl">link to submit a student photo
    <input type = "text"
    value = {imageUrl}
    onChange={(e) => setImageUrl(e.target.value )}
    required>   
    </input>
    </label>
    <label className="update-gpa">GPA
    <input type = "number"
    value = {gpa}
    onChange={(e) => setGpa(e.target.value)}
    required>   
    </input>
    </label>
  <button type= "submit">Update Student Info</button> 
</form>
</section>
)};