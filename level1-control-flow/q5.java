package Level1_control_flow;

import java.util.Scanner;

public class ques5 {
	   public ques5() {
	   }

	   public static void main(String[] args) {
	      Scanner sc = new Scanner(System.in);
	      int age = sc.nextInt();
	      if (age >= 18) {
	         System.out.println("The person's age is " + age + " and can vote.");
	      } else {
	         System.out.println("The person's age is " + age + " and cannot vote.");
	      }

	   }
	}
