package com.example.demo.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebConfig {

    @RequestMapping(value = {"/", "/login", "/admin", "/user"})
    public String index() {
        return "forward:/index.html";
    }
}