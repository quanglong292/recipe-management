package com.example.demo.recipe;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {
    @Autowired
    private RecipeRepository recipeRepository;

    @CrossOrigin(origins = "*")
    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/{id}")
    public Recipe getRecipeById(@PathVariable Long id) {
        return recipeRepository.findById(id).get();
    }

    @CrossOrigin(origins = "*")
    @PostMapping
    public Recipe creatRecipe(@RequestBody Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @CrossOrigin(origins = "*")
    @PutMapping("/{id}")
    public Recipe updatRecipe(@PathVariable Long id, @RequestBody Recipe recipe) {
        Recipe existRecipe = recipeRepository.findById(id).get();
        existRecipe.setName(recipe.getName());

        return recipeRepository.save(existRecipe);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/{id}")
    public String delRecipe(@PathVariable Long id) {
        try {
            recipeRepository.deleteById(id);

            return "Recipe deleted!";
        } catch (Exception e) {
            return "Recipe not found";
        }
    }
}
