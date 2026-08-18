'use client';

import React, { useState, useMemo } from 'react';
import { PROJECTS, Project } from '../../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Home, Filter, Sparkles } from 'lucide-react';
import styles from './ProjectsCatalog.module.css';

export const ProjectsCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'Все проекты', count: PROJECTS.length },
    { id: 'single-storey', label: 'Одноэтажные', count: PROJECTS.filter((p) => p.category === 'single-storey').length },
    { id: 'two-storey', label: 'Двухэтажные', count: PROJECTS.filter((p) => p.category === 'two-storey').length },
    { id: 'fachwerk', label: 'Фахверк', count: PROJECTS.filter((p) => p.category === 'fachwerk').length },
    { id: 'premium', label: 'Премиум', count: PROJECTS.filter((p) => p.category === 'premium').length },
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleOrderProject = (project: Project) => {
    const calculatorElement = document.querySelector('#calculator');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section" id="projects" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">
            <Home size={14} />
            Портфолио и типовые решения
          </span>
          <h2 className="section-heading">Каталог авторских проектов</h2>
          <p className="section-subtitle">
            Каждый проект разработан с учетом снеговых и ветровых нагрузок, оптимизирован по теплопотерям и готов к реализации.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filtersWrapper}>
          <div className={styles.filterTabs}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.activeFilter : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className={styles.filterCount}>{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* Detail Modal */}
        <ProjectDetailModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onOrderProject={handleOrderProject}
        />
      </div>
    </section>
  );
};
