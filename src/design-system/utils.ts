/**
 * Design System Utilities
 * 
 * Funciones helper para trabajar con el design system
 */

import { designTokens } from './tokens';

/**
 * Obtiene un valor de spacing del design system
 */
export function getSpacing(size: keyof typeof designTokens.spacing): string {
  return designTokens.spacing[size];
}

/**
 * Obtiene un color del design system
 */
export function getColor(path: string): string {
  const keys = path.split('.');
  let value: any = designTokens.colors;
  
  for (const key of keys) {
    value = value[key];
    if (value === undefined) {
      console.warn(`Color path "${path}" not found in design tokens`);
      return 'transparent';
    }
  }
  
  return value;
}

/**
 * Obtiene un valor de tipografía
 */
export function getFontSize(size: keyof typeof designTokens.typography.fontSize): string {
  return designTokens.typography.fontSize[size][0];
}

/**
 * Obtiene un valor de border radius
 */
export function getBorderRadius(size: keyof typeof designTokens.borderRadius): string {
  return designTokens.borderRadius[size];
}

/**
 * Obtiene una sombra del design system
 */
export function getShadow(size: keyof typeof designTokens.shadows): string {
  return designTokens.shadows[size];
}

/**
 * Obtiene una transición del design system
 */
export function getTransition(
  duration: keyof typeof designTokens.transitions.duration = 'base',
  easing: keyof typeof designTokens.transitions.easing = 'default'
): string {
  return `${designTokens.transitions.duration[duration]} ${designTokens.transitions.easing[easing]}`;
}

/**
 * Obtiene un z-index del design system
 */
export function getZIndex(layer: keyof typeof designTokens.zIndex): string {
  return designTokens.zIndex[layer];
}

/**
 * Genera una clase CSS personalizada con valores del design system
 */
export function createCustomProperty(name: string, value: string): string {
  return `--${name}: ${value};`;
}
