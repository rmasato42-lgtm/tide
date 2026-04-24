<div align="center">
    <img src="https://raw.githubusercontent.com/UseInterstellar/Interstellar/main/.github/branding/in.png">
    <p>Tide is a modern web proxy with a clean, sleek UI and easy to use menus. Our goal is to provide the best user experience to everyone.</p>
</div>

## Features

- About:Blank Cloaking
- Tab Cloaking
- Wide collection of apps & games
- Clean, Easy to use UI
- Inspect Element
- Various Themes
- Password Protection (Optional)
- Built-in Tab System
- Now.gg Support
- Fast Speeds
- Geforce NOW Support

## Deployment

> [!IMPORTANT]
> You **cannot** deploy to static web hosts, including Netlify, Cloudflare Pages, and GitHub Pages.

### Docker (Recommended)

```bash
# Start the container
docker compose up -d

# Access at http://localhost:8080
```

**Environment Variables:**
| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `8080` | Server port |
| `AUTH_ENABLED` | `false` | Enable basic auth |
| `AUTH_PASSWORD` | `tide` | Auth password (username: `tide`) |

**Example with authentication:**
```bash
AUTH_ENABLED=true AUTH_PASSWORD=secret docker compose up -d
```

### GitHub Codespaces

1. Create a GitHub account if you haven't already.
2. Click "Code" and then "Create Codespace on main."
3. In the terminal, paste: `docker compose up`
4. Access the deployed website from the ports tab.

### Manual Deployment

```bash
git clone <repository-url>
cd tide
npm install
npm start
```

### Updating

```bash
docker compose pull && docker compose up -d
```

Or for manual:
```bash
cd tide && git pull && npm install && npm start
```

## License

This project is licensed under the GPL-3.0-or-later license.