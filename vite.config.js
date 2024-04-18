import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['src/assets/images/**/*.jpg', 'src/assets/images/**/*.jpeg', 'src/assets/images/**/*.png', 'src/assets/images/**/*.gif', 'src/assets/images/**/*.svg'],
});
