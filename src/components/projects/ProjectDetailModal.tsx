'use client';

import React, { useState } from 'react';
import { Project } from '../../data/projectsData';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { formatNumber, formatRubles } from '../../utils/calculator';
import {
  Maximize2,
  BedDouble,
  Bath,
  Clock,
  CheckCircle2,
  Phone,
  Layers,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import styles from './ProjectsCatalog.module.css';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onOrderProject: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onOrderProject,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="xl" title={`Проект «${project.title}»`}>
      <div className={styles.modalContent}>
        {/* Gallery & Preview */}
        <div className={styles.modalGallery}>
          <div
            className={styles.modalMainImage}
            style={{ backgroundImage: `url('${project.galleryUrls[activeImageIndex] || project.imageUrl}')` }}
          />
          {project.galleryUrls.length > 1 && (
            <div className={styles.modalThumbs}>
              {project.galleryUrls.map((url, idx) => (
                <div
                  key={idx}
                  className={`${styles.modalThumb} ${activeImageIndex === idx ? styles.activeThumb : ''}`}
                  style={{ backgroundImage: `url('${url}')` }}
                  onClick={() => setActiveImageIndex(idx)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Details & Specs */}
        <div className={styles.modalDetails}>
          <div className={styles.modalHeaderInfo}>
            <span className={styles.modalCategoryBadge}>{project.categoryLabel}</span>
            <div className={styles.modalPrice}>{formatRubles(project.priceTotal)}</div>
          </div>

          <p className={styles.modalDescription}>{project.description}</p>

          {/* Key Metric Pills */}
          <div className={styles.modalSpecsGrid}>
            <div className={styles.modalSpecItem}>
              <Maximize2 size={18} className={styles.specIcon} />
              <div>
                <span className={styles.specVal}>{project.area} м²</span>
                <span className={styles.specLabel}>Площадь</span>
              </div>
            </div>

            <div className={styles.modalSpecItem}>
              <BedDouble size={18} className={styles.specIcon} />
              <div>
                <span className={styles.specVal}>{project.bedrooms} спальни</span>
                <span className={styles.specLabel}>Комнаты</span>
              </div>
            </div>

            <div className={styles.modalSpecItem}>
              <Bath size={18} className={styles.specIcon} />
              <div>
                <span className={styles.specVal}>{project.bathrooms} санузла</span>
                <span className={styles.specLabel}>Удобства</span>
              </div>
            </div>

            <div className={styles.modalSpecItem}>
              <Clock size={18} className={styles.specIcon} />
              <div>
                <span className={styles.specVal}>{project.buildTimeDays} дней</span>
                <span className={styles.specLabel}>Срок возведения</span>
              </div>
            </div>
          </div>

          {/* Construction Blueprint Details */}
          <div className={styles.modalFloorplanBox}>
            <h4 className={styles.floorplanTitle}>
              <Layers size={16} /> Габариты и планировочные решения:
            </h4>
            <ul className={styles.floorplanList}>
              <li>Габаритные размеры: <strong>{project.dimensions}</strong></li>
              <li>Площадь 1 этажа: <strong>{project.floorPlanDetails.groundFloorArea} м²</strong></li>
              {project.floorPlanDetails.secondFloorArea && (
                <li>Площадь 2 этажа: <strong>{project.floorPlanDetails.secondFloorArea} м²</strong></li>
              )}
              <li>Терраса / крыльцо: <strong>{project.floorPlanDetails.terraceArea} м²</strong></li>
              <li>Высота потолков: <strong>{project.floorPlanDetails.ceilingHeight}</strong></li>
              <li>Несущие стены: <strong>{project.technology}</strong></li>
            </ul>
          </div>

          {/* Architectural Highlights */}
          <div className={styles.modalHighlights}>
            <h4 className={styles.highlightsTitle}>Особенности проекта:</h4>
            <div className={styles.highlightsList}>
              {project.highlights.map((h, i) => (
                <div key={i} className={styles.highlightItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Actions */}
          <div className={styles.modalActions}>
            <Button
              variant="primary"
              size="lg"
              fullWidth
              rightIcon={<ArrowRight size={18} />}
              onClick={() => {
                onClose();
                onOrderProject(project);
              }}
            >
              Получить расчет сметы по проекту «{project.title}»
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
