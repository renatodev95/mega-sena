package com.lottery.controller;

import com.lottery.service.MegaSenaService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@AllArgsConstructor
public class MegaSenaController {
    
    private final MegaSenaService megaSenaService;
    
    @GetMapping(value = "/{countNumbers}")
    public ResponseEntity<List<Integer>> getNumbers(@PathVariable Integer countNumbers) {
        return ResponseEntity.ok().body(megaSenaService.getGeneratedNumbers(countNumbers));
    }
}
