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
    public List<Integer> getGeneratedNumbers(Integer countNumbers) {
        return generateNumbers(countNumbers);
    }

    // gerando a lista com os numeros aleatórios
    private List<Integer> generateNumbers(Integer countNumbers) {
        List<Integer> numbersList = new ArrayList<>();
        
        while (numbersList.size() < countNumbers) {
            int randomNumber = generateRandomNumber();
            if (!numbersList.contains(randomNumber)) {
                numbersList.add(randomNumber);
            }
        }

        orderGeneratedNumbers(numbersList);
        return numbersList;
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
