package org.example;

import java.util.Arrays;

public class Persistence {

    private final long n;

    public Persistence(long n) {
        this.n = n;
    }

    public int persistence () {
        String[] characters = Long.toString(n).split("");
        int counter = 1;
        int result = 1;

        if (characters.length == 1) {
            return 0;
        }

        for (String character: characters) {
            result *= Integer.parseInt(character);
        }

        while(String.valueOf(result).length() != 1) {
            characters = Integer.toString(result).split("");
            result = 1;
            for (String character: characters) {
                result *= Integer.parseInt(character);
            }
            counter++;
        }
        return counter;
    }
}
