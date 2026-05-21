import Slider from '@react-native-community/slider';
import { StyleSheet, Switch, Text, View } from 'react-native';

import type { ThemeColors, ThemeMode } from '../../types/portfolio';

type PortfolioControlsProps = {
  themeMode: ThemeMode;
  onThemeChange: (value: ThemeMode) => void;
  fontScale: number;
  onFontScaleChange: (value: number) => void;
  fontMultiplier: number;
  colors: ThemeColors;
};

export function PortfolioControls({
  themeMode,
  onThemeChange,
  fontScale,
  onFontScaleChange,
  fontMultiplier,
  colors,
}: PortfolioControlsProps) {
  return (
    <View style={[styles.controlsCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <View style={styles.controlRow}>
        <View>
          <Text style={[styles.controlLabel, { color: colors.text, fontSize: fontScale }]}>Tema escuro</Text>
          <Text style={[styles.controlHint, { color: colors.muted, fontSize: fontScale * 0.8, lineHeight: 18 * fontMultiplier }]}>
            Ative para testar a leitura em fundo escuro.
          </Text>
        </View>
        <Switch value={themeMode === 'dark'} onValueChange={(value) => onThemeChange(value ? 'dark' : 'light')} />
      </View>

      <View style={styles.sliderHeader}>
        <Text style={[styles.controlLabel, { color: colors.text, fontSize: fontScale }]}>Tamanho da fonte</Text>
        <Text style={[styles.sliderValue, { color: colors.accent, fontSize: fontScale * 0.92 }]}>{fontScale}px</Text>
      </View>
      <Slider
        minimumValue={14}
        maximumValue={24}
        step={1}
        value={fontScale}
        onValueChange={(value) => onFontScaleChange(Math.round(value))}
        onSlidingComplete={(value) => onFontScaleChange(Math.round(value))}
        minimumTrackTintColor={colors.accent}
        maximumTrackTintColor={colors.border}
        thumbTintColor={colors.accent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  controlsCard: {
    borderWidth: 1,
    borderRadius: 24,
    padding: 18,
    gap: 14,
  },
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  controlLabel: {
    fontWeight: '700',
  },
  controlHint: {
    marginTop: 4,
  },
  sliderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sliderValue: {
    fontWeight: '700',
  },
});