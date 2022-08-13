package org.example;

import java.util.ArrayList;

public class WordSpin {
    private String sentence;

    public WordSpin(String sentence) {
        this.sentence = sentence;
    }

    public String spinWords() {
        String[] words = sentence.split(" ");
        ArrayList<String> processedWords = new ArrayList<>();

        for (String word: words) {
            if (word.length() >= 5) {
                String flippedWord = new StringBuilder(word).reverse().toString();
                processedWords.add(flippedWord);
            } else {
                processedWords.add(word);
            }
        }
        
        return String.join(" ", processedWords);
    }
}
