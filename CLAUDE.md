# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A local development server for redirecting and mocking ad-related HTTP requests during testing. Primarily used to intercept SSP (Supply-Side Platform) bid requests for display and video ads, returning controlled mock responses to test specific bid scenarios on page. While it includes test pages for Fabrik Video Player integration, its main purpose is request interception and response spoofing for any ad testing needs.

## Commands

```bash
# Install dependencies
npm install

# Run server (recommended - auto-restarts on changes)
nodemon server.js

# Run server (without auto-restart)
npm start
```

The server runs on:
- HTTPS: port 7070
- HTTP: port 8090

## Architecture

### Core Files
- `server.js` - Express server setup with HTTP/HTTPS, CORS handling, and route definitions
- `controllers/spoofCtrl.js` - Mock ad response handlers for SSPs (AppNexus, Rubicon, Kargo, Pubmatic, Sharethrough, Adagio, Amazon, Teads). Contains configurable CPM values and response structures for each platform.
- `ad-tag-cache.json` - Domain-to-adTagUrlId mapping for Kargo ad configs (synced from integration-checker repo)

### Kargo Integration
The `kargoDisplay` handler automatically looks up the correct ad-tag config based on the request domain:
- Extracts domain from `body.site.domain` or `body.site.page`
- Looks up `adTagUrlId` in `ad-tag-cache.json`
- Uses the ID to build the config URL: `https://storage.cloud.kargo.com/ad/network/tag/v3/{adTagUrlId}.js`
- Falls back to distractify config if domain not found

### Test Assets
- `test-ads/` - HTML test pages and VAST XML ad responses
- `prebid-library/` - Prebid.js library files
- `kargoLoaderScript.js` - Client-side Fabrik Ads loader with Eppo experimentation

### Key Endpoints
**Test Pages:**
- `/hi` - Prebid test page
- `/demand-manager` - Managed config prebid page
- `/prebid-video` - Video prebid test page

**SSP Mocks (redirect your traffic here):**
- `/kargoDisplay` - Kargo display bid responses (uses domain lookup)
- `/kargoVideo` - Kargo video bid responses
- `/appnexusVideo` - AppNexus video responses
- `/rubiconVideo` - Rubicon video responses
- `/pubmaticVideo` - Pubmatic video responses
- `/sharethroughVideoAd` - Sharethrough video responses
- `/adagioVideo` - Adagio video responses

**Config/Utility:**
- `/domainConfig`, `/newDomain` - FVP domain config responses
- `/floors` - Floor pricing responses
- `/auction` - Auction responses

### SSL Certificates
Uses `cert.pem` and `key.pem` for HTTPS (self-signed for local dev).

## Modifying CPM Values

CPM values are defined at the top of `controllers/spoofCtrl.js`:
```javascript
const kargoCpm = 40.00;
const rubiconCpm = 20;
const pubmaticCpm = 14;
const appnexusCpm = 2;
const sharethroughCpm = 2;
const adagioCpm = 22.00;
```

## Code Style

Prettier config: 120 char width, single quotes, trailing commas, 2 space tabs
