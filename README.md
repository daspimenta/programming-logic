# Pokémon Rank Calculator

A small JavaScript program that assigns a rank to a Pokémon based on its level, using the `switch(true)` pattern.

## Table of Contents

- [Rank Table](#rank-table)
- [Getting Started](#getting-started)
- [Example Output](#example-output)
- [Known Limitations](#known-limitations)
- [Roadmap](#roadmap)
- [License](#license)

## Rank Table

| Level range  | Rank         |
|:-------------|:-------------|
| Below 0      | Invalid rank |
| 0 – 1000     | Bronze       |
| 1001 – 2000  | Iron         |
| 2001 – 5000  | Silver       |
| 5001 – 7000  | Gold         |
| 7001 – 8000  | Platinum     |
| 8001 – 9000  | Radiant      |
| 9001 – 10000 | Ascended     |
| 10001 and up | Immortal     |

## Getting Started

### Prerequisites

A JavaScript runtime such as [Node.js](https://nodejs.org/), or a browser developer console.

### Installation

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### Usage

1. Open `index.js` and set the values at the top of the file:

   ```js
   let pokemonName = "Dialga";
   let pokemonLevel = 9235;
   ```

2. Run the program:

   ```bash
   node index.js
   ```

## Example Output

```text
Hero named Dialga is Ascended!
```

## Known Limitations

- Decimal levels (for example `1000.5`) fall between the defined ranges, so no rank is assigned.

## Roadmap

- [ ] Refactor the logic into a reusable function
- [ ] Accept the name and level as user input
- [ ] Handle decimal levels

## License

Distributed under the MIT License.
