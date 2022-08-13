package org.example;

import java.util.Arrays;

public class NumberZooPatrol {

    public static int findMissingNumber(int[] numbers) {
        Arrays.sort(numbers);
        int maxNumber = Arrays.stream(numbers).max().getAsInt();
        int missingNumber = 0;

        for (int i = 1; i < maxNumber + 1; i++) {
            if (numbers[i - 1] != i) {
                missingNumber = i;
                break;
            }
        }

        return missingNumber;
    }
}
