import axios from 'axios';
const url = "http://localhost:8000";

export class StudentRepository{
    getStudent(studentID) {
        return new Promise((resolve, reject) => {
          axios.get(`${this.url}/searchStudentByID`, { params: { studentID: studentID } })
            .then(x => resolve(x.data))
            .catch(x => {
              alert(x);
              reject(x);
            })
        });
      }
}