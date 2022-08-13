package org.example;

import java.util.ArrayList;

public class DeadFish {
    private String data;

    public DeadFish(String data) {
        this.data = data;
    }

    public int[] parse() {
        String[] characters = data.split("");
        ArrayList<Integer> results = new ArrayList<>();
        int result = 0;

        for (String character: characters) {
            switch (character) {
                case ("i"):
                   result++;
                   break;
                case ("d"):
                    result--;
                    break;
                case ("s"):
                    result = result * result;
                    break;
                case ("o"):
                    results.add(result);
                    break;
            }
        }

        return results.stream().mapToInt(i -> i).toArray();
    }
}
