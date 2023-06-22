export default {  
    data() {
        return {
          animal1: 'Dogs',
          animal2: 'Cats',
        };
      },
      methods: {
        toggleAnimals() {
          if (this.animal1 === 'Dogs') {
            this.animal1 = 'Cats';
          } else if (this.animal1 === 'Cats') {
            this.animal1 = 'Not Dogs or Cats';
          } else {
            this.animal1 = 'Dogs';
          }
        },
      },
    };