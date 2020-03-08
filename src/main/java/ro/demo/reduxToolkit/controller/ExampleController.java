package ro.demo.reduxToolkit.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ro.demo.reduxToolkit.entity.Entry;



@RestController
@RequestMapping("/api")
public class ExampleController{

    @GetMapping("/entries")
    public List<Entry> getAllEntries(){
        return Arrays.asList(
            new Entry(1, "entry 1"),
            new Entry(2, "entry 2"),
            new Entry(3, "entry 3"),
            new Entry(4, "entry 4")
        );
    }
}