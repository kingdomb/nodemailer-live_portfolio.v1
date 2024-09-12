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


```
nodemailer-live_portfolio.v1
├─ .editorconfig
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ branches
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ main
│  │           ├─ main
│  │           └─ whitesource
│  │              └─ configure
│  ├─ objects
│  │  ├─ 09
│  │  │  ├─ 67ef424bce6791893e9a57bb952f80fd536e93
│  │  │  └─ d52f37c42bbe8c681ad9fbf90efe43ebe71695
│  │  ├─ 12
│  │  │  └─ 4cad756f4da038b2c69cfd350feba6272b9f7a
│  │  ├─ 14
│  │  │  └─ 5ad9ff9a398df6944036a8b74ef0ea44221ff6
│  │  ├─ 1c
│  │  │  └─ e7e3a3727bd3c121e239e7d937df1a32ad3a97
│  │  ├─ 1d
│  │  │  └─ 849965700332cb5c6a348913f9fcaed7c35233
│  │  ├─ 1e
│  │  │  └─ d453a371ba5c23ea9e365f9a6984d6aec0a13e
│  │  ├─ 23
│  │  │  └─ 0d0b2ce2ba7349d53b2aaefe20f1fa4b4807b3
│  │  ├─ 29
│  │  │  └─ 30e01e4c3e0e1637e21aa02507c92e502f3fbe
│  │  ├─ 2b
│  │  │  └─ b296a8ca8e48e468f22b92250b9fe2518b8cfc
│  │  ├─ 2f
│  │  │  └─ 207c7cd4060080c0eee7f022b4be6c006834a8
│  │  ├─ 37
│  │  │  └─ 25a29678515fd53e49f72fabeeb90507a26ed2
│  │  ├─ 4c
│  │  │  └─ d612f6b5abf5e99e64f01153dcf9c25f45618b
│  │  ├─ 5d
│  │  │  └─ 63c0b56ecc23c047ecf59e13a9516c6ad26f72
│  │  ├─ 5f
│  │  │  └─ 85a9597bd37cf5dedebca63466a911b1b161c3
│  │  ├─ 62
│  │  │  └─ 07d4f21d32df125199ecc43b293c8ea2ef9735
│  │  ├─ 68
│  │  │  └─ 9dc7a972504d916bc4e6ea20b095639ecb3c0f
│  │  ├─ 6a
│  │  │  └─ 96f80bd7bd8add8546d7312c0ffa0cba4671f1
│  │  ├─ 6c
│  │  │  └─ 78e8fd107a4eba912891ff4ce02c6fe39d5a49
│  │  ├─ 6d
│  │  │  └─ 5cee3fbf501db91e7b6c789c802bef8d96e22f
│  │  ├─ 6e
│  │  │  └─ d68316eb3f65dec9063332d2f69bf3093bbfab
│  │  ├─ 83
│  │  │  └─ 21bf1f226479c22d8cc649e3d69a3f9ff30426
│  │  ├─ 84
│  │  │  └─ fee366f52308dc5fb6f3802a263651fa1a602a
│  │  ├─ 89
│  │  │  └─ f078b37c0be1ddcf7020c848a8d39e6910e088
│  │  ├─ 9c
│  │  │  └─ 7ae90b4ec3d91a99cd4b355b0c0cd8a1d67667
│  │  ├─ a2
│  │  │  └─ 413d2fb372aa414a43f1007bc746597308060a
│  │  ├─ a4
│  │  │  └─ be541218c0610b188d7ae750640d15c8b3f6a9
│  │  ├─ a5
│  │  │  ├─ 17e6fb3db2dbd7c6c47832a73618bbab93bc4c
│  │  │  └─ 7c4144ff8f41a18a4ffa4819dfaca1ddc1756b
│  │  ├─ a8
│  │  │  └─ f4eba5c99d3138f9646b423ee9f349cdc765b4
│  │  ├─ af
│  │  │  └─ 3ad128122dfe2a143df207c66884380fd888d4
│  │  ├─ b3
│  │  │  ├─ 17a7cda31a440fbd47540297ee3c68d51f343e
│  │  │  └─ 225238f26e3ab49a5e41e9cb287a73c82740b7
│  │  ├─ c1
│  │  │  └─ 525b811a167671e9de1fa78aab9f5c0b61cef7
│  │  ├─ c6
│  │  │  └─ 303876f8034b8f00b9dd2d1e649b3ed6c09460
│  │  ├─ c9
│  │  │  └─ e0b395d6e645f083c3c979c71487592bb25042
│  │  ├─ cc
│  │  │  └─ 121302316c8faaaebfd6a15f4212d99e563199
│  │  ├─ d8
│  │  │  └─ eff41ef71e45791b88fa85fecfdfd91936ff16
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ f1
│  │  │  └─ 60be685966201030d8b57a5c5236180c7d9a2a
│  │  ├─ f4
│  │  │  └─ 18035b469aff23689a74c912849662f442aed4
│  │  ├─ fa
│  │  │  └─ 79117871a6a2ee3e111dd25c277b9fc6d009cd
│  │  ├─ ff
│  │  │  └─ fea6beded3445b10d043214d85f557278a5094
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ main
│     │     ├─ main
│     │     └─ whitesource
│     │        └─ configure
│     └─ tags
├─ .gitattributes
├─ .gitignore
├─ README.md
├─ emailSender.js
├─ index.js
├─ jest.config.mjs
├─ package.json
├─ reports
│  └─ test-report.html
├─ swaggerSetup.js
├─ tests
│  ├─ coverage
│  │  ├─ clover.xml
│  │  ├─ coverage-final.json
│  │  ├─ lcov-report
│  │  │  ├─ base.css
│  │  │  ├─ block-navigation.js
│  │  │  ├─ favicon.png
│  │  │  ├─ index.html
│  │  │  ├─ prettify.css
│  │  │  ├─ prettify.mjs
│  │  │  ├─ sort-arrow-sprite.png
│  │  │  └─ sorter.js
│  │  └─ lcov.info
│  └─ emailSender.test.js
├─ vercel.json
└─ yarn.lock

```