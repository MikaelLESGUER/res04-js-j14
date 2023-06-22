export default {  
    data() {  
        return {  
            grades : [  
  
            ]  
        }  
    },  
    methods : {  
        addGrade (event) {  
            let value = event.target.elements.grade.value;  
            this.grades.push(value);  
        },
        markAsDone(index) {
          this.grades[index].done = true;
          console.log(this.grades);
        }
    }  
}