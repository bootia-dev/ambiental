# Deploy Ambiental POC en Vercel

## 1. Subir el proyecto a Git

Si aún no tenés el proyecto en un repositorio:

```bash
cd ambiental-poc
git init
git add .
git commit -m "Initial commit"
```

Creá un repo en GitHub, GitLab o Bitbucket y vinculalo:

```bash
git remote add origin https://github.com/TU-USUARIO/ambiental-poc.git
git branch -M main
git push -u origin main
```

## 2. Conectar con Vercel

1. Entrá a [vercel.com](https://vercel.com) e iniciá sesión (con GitHub/GitLab/Bitbucket si querés).
2. Click en **Add New…** → **Project**.
3. Importá el repositorio donde está `ambiental-poc`.
4. Vercel detecta **Next.js** y usa por defecto:
   - **Build Command:** `next build` (o `npm run build`)
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
5. No hace falta definir variables de entorno para este POC.
6. Click en **Deploy**.

## 3. Después del primer deploy

- Cada push a la rama que elegiste (ej. `main`) genera un nuevo deploy.
- La URL será algo como `ambiental-poc-xxx.vercel.app`; podés cambiar el nombre del proyecto en **Project Settings**.
- Si querés un dominio propio: **Project** → **Settings** → **Domains** y agregá tu dominio.

## Notas

- El build usa `next build`; si en local corre bien, en Vercel también debería.
- Leaflet y los iframes de Grafana cargan en el cliente; no requieren configuración extra en Vercel.
- Si en el futuro usás variables de entorno, agregalas en **Project Settings** → **Environment Variables**.
