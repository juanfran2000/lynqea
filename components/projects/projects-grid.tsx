"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function ProjectsGrid() {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get unique technologies across all projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();
  
  // Filter projects based on selected technology
  const filteredProjects = filter
    ? projects.filter(project => project.technologies.includes(filter))
    : projects;

  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex flex-wrap gap-2 justify-center"
      >
        <Button
          variant={filter === null ? "default" : "outline"}
          onClick={() => setFilter(null)}
          className="rounded-full"
        >
          All
        </Button>
        {allTechnologies.map(tech => (
          <Button
            key={tech}
            variant={filter === tech ? "default" : "outline"}
            onClick={() => setFilter(tech)}
            className="rounded-full"
          >
            {tech}
          </Button>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No projects found with the selected technology.</p>
        </div>
      )}
    </div>
  );
}