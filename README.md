## ⚙️ Configuración inicial

1. Clona el repositorio:
   ```bash
   git clone https://github.com/mc-herrera-90/fullstackjs.git
   cd fullstackjs
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

---

## 🚀 Ejecutar en desarrollo

```bash
npm run dev
```

Abre tu navegador en `http://localhost:5173` (o el puerto que Vite indique al iniciar).

---

## 🚀 Despliegue automático con GitHub Actions

Este repositorio incluye un workflow (`.github/workflows/deploy.yml`) que **despliega automáticamente el contenido de la carpeta `dist/` a GitHub Pages** cada vez que haces push a la rama `main`.

### ✅ Para que funcione correctamente:

1. En GitHub:

   * Ve a **Settings → Actions → General**
   * En **Workflow permissions**, selecciona **Read and write permissions**

2. En **Settings → Pages**:

   * Rama: `gh-pages`
   * Carpeta: `/ (root)`


![Deploy to GitHub Pages](https://github.com/mc-herrera-90/fullstackjs/actions/workflows/deploy.yml/badge.svg)

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
