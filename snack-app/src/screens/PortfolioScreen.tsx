import { useMemo, useState } from 'react';
import { Linking, ScrollView, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { PortfolioControls } from '../components/portfolio/PortfolioControls';
import { ProfileCard } from '../components/portfolio/ProfileCard';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { profile, projects } from '../data/portfolio';
import type { ThemeColors, ThemeMode } from '../types/portfolio';

export default function PortfolioScreen() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [fontScale, setFontScale] = useState(16);
  const fontMultiplier = fontScale / 16;

  const colors = useMemo<ThemeColors>(() => {
    const dark = themeMode === 'dark';

    return {
      background: dark ? '#07111f' : '#f3f7fb',
      surface: dark ? '#0f1b2d' : '#ffffff',
      surfaceAlt: dark ? '#13263f' : '#edf4fb',
      text: dark ? '#f5f7fb' : '#102033',
      muted: dark ? '#a7b7cc' : '#5d6b7c',
      border: dark ? '#22344f' : '#d8e4ef',
      chip: dark ? '#17304d' : '#dceefd',
      accent: dark ? '#7dd3fc' : '#0f766e',
    };
  }, [themeMode]);

  const openExternalLink = async (url: string) => {
    const isWeb = url.startsWith('http://') || url.startsWith('https://');
    const isMail = url.startsWith('mailto:');

    if (!isWeb && !isMail) {
      return;
    }

    const canOpen = await Linking.canOpenURL(url);
    if (canOpen) {
      await Linking.openURL(url);
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <StatusBar style={themeMode === 'dark' ? 'light' : 'dark'} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.backdropLeft} />
        <View style={styles.backdropRight} />

        <ProfileCard
          profile={profile}
          colors={colors}
          fontScale={fontScale}
          fontMultiplier={fontMultiplier}
          onOpenExternal={openExternalLink}
        />

        <PortfolioControls
          themeMode={themeMode}
          onThemeChange={setThemeMode}
          fontScale={fontScale}
          onFontScaleChange={setFontScale}
          fontMultiplier={fontMultiplier}
          colors={colors}
        />

        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.text, fontSize: fontScale * 1.2 }]}>Projetos por semestre</Text>
          <Text style={[styles.sectionSubtitle, { color: colors.muted, fontSize: fontScale * 0.84, lineHeight: 18 * fontMultiplier }]}>
            Troque os textos abaixo pelos dados reais de cada trabalho.
          </Text>
        </View>

        {projects.map((project) => (
          <ProjectCard
            key={project.semester}
            project={project}
            colors={colors}
            fontScale={fontScale}
            fontMultiplier={fontMultiplier}
          />
        ))}

        <View style={[styles.footerCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.footerTitle, { color: colors.text, fontSize: fontScale * 1.05 }]}>Como usar este ambiente</Text>
          <Text style={[styles.footerText, { color: colors.muted, fontSize: fontScale * 0.88, lineHeight: 20 * fontMultiplier }]}>
            Substitua nome, links, parceiros, descrições e fotos. Se quiser, também posso transformar isso em uma tela com edição direta dos campos.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingVertical: 18,
    gap: 16,
  },
  backdropLeft: {
    position: 'absolute',
    top: -20,
    left: -60,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(14, 165, 233, 0.14)',
  },
  backdropRight: {
    position: 'absolute',
    top: 180,
    right: -70,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(168, 85, 247, 0.10)',
  },
  sectionHeader: {
    gap: 6,
    paddingTop: 4,
  },
  sectionTitle: {
    fontWeight: '800',
  },
  sectionSubtitle: {
  },
  footerCard: {
    borderWidth: 1,
    borderRadius: 24,
    padding: 18,
    gap: 8,
    marginBottom: 10,
  },
  footerTitle: {
    fontWeight: '800',
  },
  footerText: {
  },
});