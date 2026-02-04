package com.mergeflow.backend.controller;

import com.mergeflow.backend.model.Project;
import com.mergeflow.backend.repository.ProjectRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectRepository repo;

    public ProjectController(ProjectRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Project> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Project create(@RequestBody Project project) {
        return repo.save(project);
    }
}
