import { Image, StyleSheet, Text, View } from 'react-native';

import type { ProjectSection, ThemeColors } from '../../types/portfolio';

type ProjectCardProps = {
  project: ProjectSection;
  colors: ThemeColors;
  fontScale: number;
  fontMultiplier: number;
};

export function ProjectCard({ project, colors, fontScale, fontMultiplier }: ProjectCardProps) {
  return (
    <View style={[styles.projectCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <View style={styles.projectTopRow}>
        <View style={[styles.semesterBadge, { backgroundColor: colors.surfaceAlt }]}>
          <Text style={[styles.semesterBadgeText, { color: project.accent, fontSize: fontScale * 0.8 }]}>
            {project.semester}
          </Text>
        </View>
        <View style={[styles.accentBar, { backgroundColor: project.accent }]} />
      </View>

      <Text style={[styles.projectTitle, { color: colors.text, fontSize: fontScale * 1.1 }]}>{project.title}</Text>
      <Text
        style={[
          styles.projectText,
          { color: colors.muted, fontSize: fontScale * 0.92, lineHeight: 21 * fontMultiplier },
        ]}
      >
        {project.description}
      </Text>

      <View style={styles.infoGrid}>
        <InfoPill label="Parceiro" value={project.partner} borderColor={colors.border} color={colors.text} mutedColor={colors.muted} />
        <InfoPill label="Fotos" value={`${project.photos.length} anexo(s)`} borderColor={colors.border} color={colors.text} mutedColor={colors.muted} />
      </View>

      <View style={styles.photoGrid}>
        {project.photos.map((photo, index) => (
          <View key={`${project.semester}-${photo.label}-${index}`} style={styles.photoCard}>
            <Image source={photo.source} style={styles.projectImage} resizeMode="cover" />
            <Text
              style={[
                styles.photoLabel,
                { color: colors.muted, fontSize: fontScale * 0.78, lineHeight: 16 * fontMultiplier },
              ]}
              numberOfLines={2}
            >
              {photo.label}
            </Text>
          </View>
        ))}
      </View>

      <View style={[styles.linkBox, { backgroundColor: colors.surfaceAlt, borderColor: colors.border }]}>
        <Text style={[styles.sectionLabel, { color: colors.muted, fontSize: fontScale * 0.82 }]}>Links do projeto</Text>
        {project.links.map((link, index) => (
          <Text
            key={`${project.semester}-${link}-${index}`}
            style={[styles.inlineLink, { color: colors.text, fontSize: fontScale * 0.9, lineHeight: 20 * fontMultiplier }]}
          >
            {link}
          </Text>
        ))}
      </View>
    </View>
  );
}

function InfoPill({
  label,
  value,
  borderColor,
  color,
  mutedColor,
}: {
  label: string;
  value: string;
  borderColor: string;
  color: string;
  mutedColor: string;
}) {
  return (
    <View style={[styles.infoPill, { borderColor }]}>
      <Text style={[styles.infoLabel, { color: mutedColor }]}>{label}</Text>
      <Text style={[styles.infoValue, { color }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  projectCard: {
    borderWidth: 1,
    borderRadius: 28,
    padding: 18,
    gap: 14,
  },
  projectTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  semesterBadge: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  semesterBadgeText: {
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  accentBar: {
    flex: 1,
    height: 6,
    borderRadius: 999,
  },
  projectTitle: {
    fontWeight: '800',
  },
  projectText: {
  },
  infoGrid: {
    gap: 10,
  },
  infoPill: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 14,
    gap: 4,
  },
  infoLabel: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  infoValue: {
    fontWeight: '600',
  },
  photoGrid: {
    flexDirection: 'row',
    gap: 1,
  },
  photoCard: {
    flex: 1,
    gap: 6,
  },
  projectImage: {
    width: '80%',
    height: 250,
    borderRadius: 14,
  },
  photoLabel: {
    fontWeight: '600',
  },
  linkBox: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 14,
    gap: 10,
  },
  sectionLabel: {
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  inlineLink: {
  },
});