package com.lottery.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

@Service
public class MegaSenaService {

    private final Random random = new Random();

    // método que retornará os números sorteados
    public List<String> getGeneratedNumbers(Integer countNumbers) {
        return generateNumbers(countNumbers);
    }

    // gerando a lista com os numeros aleatórios
    private List<String> generateNumbers(Integer countNumbers) {
        List<Integer> numbersList = new ArrayList<>();
        
        while (numbersList.size() < countNumbers) {
            int randomNumber = generateRandomNumber();
            if (!numbersList.contains(randomNumber)) {
                numbersList.add(randomNumber);
            }
        }

        orderGeneratedNumbers(numbersList);
        
        return castListNumberToStrings(numbersList);
    }

    private List<String> castListNumberToStrings(List<Integer> numbersList) {
        List<String> stringList = numbersList.stream().map(String::valueOf).toList();
        stringList = stringList.stream().map(n -> Integer.parseInt(n) < 10 ? "0" + n : n).toList();
        return stringList;
    }

    private void orderGeneratedNumbers(List<Integer> numbersList) {
        Collections.sort(numbersList);
    }

    // gerando um numero aleatorio entre 1 e 60 (o max é excluido, entao foi acrescentado +1 a ele)
    private int generateRandomNumber() {
        int min = 1;
        int max = 61;
        return random.nextInt(max - min) + min;
    }
}
