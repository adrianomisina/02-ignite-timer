//arquivo de definição de tipo - apenas tipagens
import 'styled-components';
import { defaultTheme } from '../styles/theme/default';


type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}