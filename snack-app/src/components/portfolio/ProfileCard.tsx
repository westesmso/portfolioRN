import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import type { ProfileData, ThemeColors } from '../../types/portfolio';

type ProfileCardProps = {
  profile: ProfileData;
  colors: ThemeColors;
  fontScale: number;
  fontMultiplier: number;
  onOpenExternal: (url: string) => void;
};

export function ProfileCard({ profile, colors, fontScale, fontMultiplier, onOpenExternal }: ProfileCardProps) {
  return (
    <View style={[styles.heroCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <View style={styles.heroTopRow}>
        <View style={[styles.avatar, { backgroundColor: colors.chip, borderColor: colors.border }]}>
          <Image source={profile.avatar} style={styles.avatarImage} resizeMode="cover" />
        </View>

        <View style={styles.heroMeta}>
          <Text style={[styles.kicker, { color: colors.accent, fontSize: fontScale * 0.82 }]}>Portfólio DSM</Text>
          <Text style={[styles.heroTitle, { color: colors.text, fontSize: fontScale * 1.6 }]}>{profile.name}</Text>
          <Text style={[styles.heroSubtitle, { color: colors.muted, fontSize: fontScale }]}>{profile.course}</Text>
        </View>
      </View>

      <Text style={[styles.heroBody, { color: colors.text, fontSize: fontScale, lineHeight: 22 * fontMultiplier }]}>
        {profile.summary}
      </Text>

      <View style={styles.chipRow}>
        <Chip label={profile.role} background={colors.chip} color={colors.accent} />
        <Chip label="Avatar + Card + Switch + Slider" background={colors.surfaceAlt} color={colors.text} />
      </View>

      <View style={[styles.linkBox, { backgroundColor: colors.surfaceAlt, borderColor: colors.border }]}>
        <Text style={[styles.sectionLabel, { color: colors.muted, fontSize: fontScale * 0.84 }]}>Links-base</Text>
        <LinkLine label="LinkedIn" value={profile.linkedin} color={colors.text} accent={colors.accent} onPress={() => onOpenExternal(profile.linkedin)} />
        <LinkLine label="GitHub" value={profile.github} color={colors.text} accent={colors.accent} onPress={() => onOpenExternal(profile.github)} />
        <LinkLine label="E-mail" value={profile.email} color={colors.text} accent={colors.accent} onPress={() => onOpenExternal(`mailto:${profile.email}`)} />
      </View>
    </View>
  );
}

function Chip({ label, background, color }: { label: string; background: string; color: string }) {
  return (
    <View style={[styles.chip, { backgroundColor: background }]}>
      <Text style={[styles.chipText, { color }]}>{label}</Text>
    </View>
  );
}

function LinkLine({
  label,
  value,
  color,
  accent,
  onPress,
}: {
  label: string;
  value: string;
  color: string;
  accent: string;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={styles.linkLine}>
      <Text style={[styles.linkLabel, { color: accent }]}>{label}</Text>
      <Text style={[styles.linkValue, { color }]} numberOfLines={1}>
        {value}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    borderWidth: 1,
    borderRadius: 28,
    padding: 18,
    gap: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  heroTopRow: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
  },
  avatar: {
    width: 86,
    height: 86,
    borderRadius: 28,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 1,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 28,
  },
  heroMeta: {
    flex: 1,
    gap: 4,
  },
  kicker: {
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  heroTitle: {
    fontWeight: '800',
  },
  heroSubtitle: {
    fontWeight: '600',
  },
  heroBody: {
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  chipText: {
    fontSize: 12,
    fontWeight: '700',
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
  linkLine: {
    gap: 3,
  },
  linkLabel: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  linkValue: {
    fontWeight: '600',
  },
});