/* eslint-disable no-unused-vars */
import { defineConfig } from 'cypress';
import { registerArgosTask } from '@argos-ci/cypress/task';

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      registerArgosTask(on, config, {
        // Enable upload to Argos only when it runs on CI.
        uploadToArgos: !!process.env.ARGOS_TOKEN,
        // Set your Argos token (required only if you don't use GitHub Actions).
        token: process.env.ARGOS_TOKEN,
        
      });

      // include any other plugin code...
    },
    video: false,
  },
});
