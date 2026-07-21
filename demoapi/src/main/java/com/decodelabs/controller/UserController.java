package com.decodelabs.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.decodelabs.model.User;

@RestController
public class UserController {

    // GET API
    @GetMapping("/users")
    public User getUsers() {

        User user = new User();
        user.setName("Akhila");
        user.setEmail("akhila@gmail.com");

        return user;
    }

    // POST API
    @PostMapping("/addUser")
    public User addUser(@RequestBody User user) {

        return user;
    }
}