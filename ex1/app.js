export default {  
    data() {  
        return {  
            number : 0  
        }  
    },  
    methods : {  
        addOne()
        {
	        this.number = this.number + 1;
        },
        moinsOne()
        {
            this.number = this.number - 1;
        }
    }  
}