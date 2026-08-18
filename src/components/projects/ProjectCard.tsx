import React from 'react';
import { Project } from '../../data/projectsData';
import { Button } from '../ui/Button';
import { formatNumber, formatRubles } from '../../utils/calculator';
import { Maximize2, BedDouble, Bath, Clock, ArrowRight } from 'lucide-react';
import styles from './ProjectsCatalog.module.css';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <article className={styles.card}>
      {/* Image with Tag */}
      <div className={styles.imageContainer} onClick={() => onOpenDetails(project)}>
        <div
          className={styles.cardImage}
          style={{ backgroundImage: `url('${project.imageUrl}')` }}
        />
        <div className={styles.categoryBadge}>{project.categoryLabel}</div>
        <div className={styles.timelineBadge}>
          <Clock size={12} /> {project.buildTimeDays} дней
        </div>
      </div>

      {/* Content */}
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle} onClick={() => onOpenDetails(project)}>
            {project.title}
          </h3>
          <span className={styles.dimensions}>{project.dimensions}</span>
        </div>

        {/* Specs Row */}
        <div className={styles.specsRow}>
          <div className={styles.specBadge} title="Общая площадь">
            <Maximize2 size={14} className={styles.specBadgeIcon} />
            <span>{project.area} м²</span>
          </div>
          <div className={styles.specBadge} title="Спальни">
            <BedDouble size={14} className={styles.specBadgeIcon} />
            <span>{project.bedrooms} сп.</span>
          </div>
          <div className={styles.specBadge} title="Санузлы">
            <Bath size={14} className={styles.specBadgeIcon} />
            <span>{project.bathrooms} с/у</span>
          </div>
        </div>

        <p className={styles.cardExcerpt}>{project.description}</p>

        {/* Price & Action */}
        <div className={styles.cardFooter}>
          <div className={styles.priceBlock}>
            <span className={styles.priceLabel}>Стоимость дома под ключ:</span>
            <span className={styles.priceValue}>{formatRubles(project.priceTotal)}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onOpenDetails(project)}
            rightIcon={<ArrowRight size={14} />}
          >
            Проект
          </Button>
        </div>
      </div>
    </article>
  );
};
