package org.example;

import java.util.ArrayList;

public class MultipleOf3Or5 {
    private final int number;

    public MultipleOf3Or5(int number) {
        this.number = number;
    }

    public int solution() {
        ArrayList<Integer> multipleOf3Or5Array = new ArrayList<>();

        for (int i = 1; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                multipleOf3Or5Array.add(i);
            }
        }

        return multipleOf3Or5Array.stream().reduce(0, Integer::sum);
    }
}
