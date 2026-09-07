import { defineConfig } from "astro/config"

import react from "@astrojs/react"

export default defineConfig({
  site: "https://josugoar.github.io",
  integrations: [react()],
})
