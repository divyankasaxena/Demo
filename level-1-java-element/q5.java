package Level1_java_element;

public class Ques5 {
	   public Ques5() {
	   }

	   public static void main(String[] args) {
	      int pens = 14;
	      int students = 3;
	      int perStudent = pens / students;
	      int remaining = pens % students;
	      System.out.println("The Pen Per Student is " + perStudent + " and the remaining pen not distributed is " + remaining);
	   }
	}
