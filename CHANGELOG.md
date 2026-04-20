<!-- markdownlint-disable MD024 -->

# Change Log

## [0.3.1] - 2026-04-20

### Fixed

- Corrected filename casing for `searchableEventListener` to fix Linux/CI module resolution

### Changed

- Updated release workflow to publish on version tags (`v*`) and deploy Pages only from `main`
- Updated artifact actions in CI (`actions/upload-artifact@v7`, `actions/download-artifact@v8`)
- Updated CI Node.js runtime to 24

## [0.3.0] - 2026-04-20

### Added

- npm installation option (`npm install @tofsjonas/searchable`) in documentation

## [0.2.0] - 2026-04-13

### Added

- The search icon can now be positioned inside the table using CSS

## [0.1.2] - 2026-04-02

### Fixed

- `z-index=-1` on `thead:after` element, so "empty" text does not shine through

## [0.1.1] - 2025-11-17

### Fixed

- Google Closure ADVANCED_OPTIMIZATIONS was breaking `data-sb-input-class`

## [0.1.0] - 2025-11-14

### Added

- added multi language support

## [0.0.2] - 2025-10-26

- Some efficency stuff, updated readme

## [0.0.1] - 2025-10-24

- First release
