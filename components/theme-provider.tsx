import {
  ThemeProvider as NextThemeProvider,
  type ThemeProviderProps,
} from "@wrksz/themes";

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemeProvider {...props}>
      {children}
    </NextThemeProvider>
  );
}