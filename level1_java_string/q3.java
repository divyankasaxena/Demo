import java.util.Scanner;

public class ToCharArrayDemo {
    static char[] userToCharArray(String text) {
        char[] arr = new char[text.length()];
        for (int i = 0; i < text.length(); i++) {
            arr[i] = text.charAt(i);
        }
        return arr;
    }

    static boolean compareArrays(char[] a, char[] b) {
        if (a.length != b.length) return false;
        for (int i = 0; i < a.length; i++) {
            if (a[i] != b[i]) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String text = sc.next();
        char[] arr1 = userToCharArray(text);
        char[] arr2 = text.toCharArray();
        System.out.println("Both same? " + compareArrays(arr1, arr2));
        sc.close();
    }
}
