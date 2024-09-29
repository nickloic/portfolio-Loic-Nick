import React from 'react';
import { motion } from 'framer-motion';

const Arc = ({ percentage }) => {
  // Convertir le pourcentage en angle (0-360 degrés)
  const angle = (percentage / 100) * 360;

  // Définir le rayon et les dimensions du cercle
  const radius = 30;
  const diameter = radius * 2;
  const strokeWidth = 10;
  const center = radius + strokeWidth / 2;

  // Calculer les coordonnées de fin de l'arc
  const endAngle = angle - 90; // Déplace le point de départ à 12 heures
  const endX = center + radius * Math.cos((endAngle * Math.PI) / 180);
  const endY = center + radius * Math.sin((endAngle * Math.PI) / 180);

  // Déterminer le flag pour l'arc grand ou petit
  const largeArcFlag = angle > 180 ? 1 : 0;

  // Définir le path pour l'arc
  const pathData = `M ${center} ${center - radius} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;

  return (
    <svg width={diameter + strokeWidth} height={diameter + strokeWidth} viewBox={`0 0 ${diameter + strokeWidth} ${diameter + strokeWidth}`}>
      <circle
        cx={center}
        cy={center}
        r={radius}
        stroke="#141414"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <motion.path
        d={pathData}
        stroke="#cc1e28"
        strokeWidth={strokeWidth}
        fill="none"
        initial={{ strokeDasharray: 0 }}
        animate={{ strokeDasharray: `${Math.PI * radius * 2 * (angle / 360)} ${Math.PI * radius * 2}` }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      
    </svg>
  );
};

export default Arc;
