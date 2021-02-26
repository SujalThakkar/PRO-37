class Question {
    constructor(){
        this.input = createInput("Name");
        this.title = createElement('h1');
        this.question = createElement('h2');
        this.Option1 = createElement('h2');
        this.Option2 = createElement('h2');
        this.Option3 = createElement('h2');
        this.Option4 = createElement('h2');
        this.input1 = createInput('Correct Answer Option No.');
    }

    display(){
        this.title.html("My Quiz Game");
        this.title.position(displayWidth/2 - 50, 0);
        
        this.question.html("How many sides does a dodecahedron have?");
        this.question.position(displayWidth/2 , displayHeight/2 - 50);

        this.Option1.html("5");
        this.Option1.position(displayWidth/2 - 40 , displayHeight - 30);

        this.Option2.html("11");
        this.Option2.position(displayWidth/2 - 40 , displayHeight - 10);

        this.Option3.html("8");
        this.Option3.position(displayWidth/2 - 40 , displayHeight + 10);

        this.Option4.html("12");
        this.Option4.position(displayWidth/2 - 40 , displayHeight + 30);

        this.input.position(displayWidth/2 - 40 , displayHeight/2);
   
        this.button.position(displayWidth/2 - 30 , displayHeight/2);
        
        this.input1.position(displayWidth - 100 , 20);
    }
}
