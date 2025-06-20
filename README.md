# LitoralulRomanesc.ro Scraper

This Node.js script scrapes hotel names from the homepage of [litoralulromanesc.ro](https://www.litoralulromanesc.ro/).

## Features
- Fetches the homepage using `axios`.
- Parses HTML and extracts hotel names using `cheerio`.

## Requirements
- Node.js (v14 or newer recommended)
- npm

## Setup
1. Install dependencies:
   ```bash
   npm install axios cheerio
   ```
2. Make sure `scrapper.js` is executable:
   ```bash
   chmod +x scrapper.js
   ```

## Usage
Run the script with:
```bash
node scrapper.js
```

## Output
The script will print a list of hotel names found on the homepage.

## Notes
- The CSS selectors used may need to be updated if the website changes its structure.
- Always respect the website's robots.txt and terms of service when scraping.

## License
This project is for educational purposes only.
