import axios from 'axios';


export class Repository {
    url = "http://team1dockercompose.ch1rnpkjnswq.us-east-1.rds.amazonaws.com:8000";
    config = {
        headers: {

        }
    };

    createProfessor(professor) {
        console.log("Adding Prof", professor);
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/createProfessor`, professor, this.config)
                .then(x => {
                    resolve(x.data);
                    console.log(x.data);
                })
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        })

    }




    searchProf(id) {
        console.log("finding Prof by " , id);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/professor/searchProfessorByID?prof_id=${id}`) 
                .then(x => {
                    resolve(x.data);
                    console.log(x.data);
                })
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        })

    } 
}