var student1, student2;
function setup() {
  createCanvas(400,400);
  student1 = new Student("dia",13,8);
  student1.display();
  student2 = new Student("aadya", 8,2);
  student2.display();
}

function draw() 
{
  background(30);
  
}