/// <reference types="astro/client" />

declare module "@primer/octicons" {
  const octicons: Record<
    string,
    { toSVG: (options?: Record<string, string>) => string }
  >
  export default octicons
}
