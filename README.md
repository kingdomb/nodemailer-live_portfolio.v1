# emailer-api

## Dependency Management with Yarn Plug'n'Play (PnP)

This project uses [Yarn Plug'n'Play (PnP)](https://yarnpkg.com/features/pnp) for dependency management. Unlike traditional Node.js projects, Yarn PnP does not create a `node_modules` directory. Instead, dependencies are managed in a central cache and are referenced directly from there.

### Troubleshooting Dependency Issues

If you encounter errors related to missing packages or dependencies, follow these steps:

1. **Reinstall Dependencies**
   - Run the following command to ensure all dependencies are properly installed:
     ```bash
     yarn install
     ```

2. **Clear Yarn Cache**
   - If reinstalling doesn't resolve the issue, clear Yarn's cache and reinstall dependencies:
     ```bash
     yarn cache clean
     yarn install
     ```

3. **Verify PnP Configuration**
   - Ensure that the PnP configuration files (`.pnp.cjs` and `.pnp.loader.mjs`) are correct and up-to-date. These files are essential for proper dependency resolution in a PnP environment.

4. **Restart the Node.js Process**
   - Sometimes, simply restarting the Node.js process can resolve transient issues:
     ```bash
     yarn start
     ```

### Additional Information

For more details on Yarn Plug'n'Play, including how it works and further troubleshooting tips, refer to the official [Yarn PnP documentation](https://yarnpkg.com/features/pnp).

