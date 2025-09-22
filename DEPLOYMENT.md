# ARKAFilms - Optimización para GitHub Pages

## 📹 Consideraciones sobre Videos en GitHub Pages

### Limitaciones de GitHub Pages:
- **Tamaño máximo de archivo**: 100MB por archivo
- **Ancho de banda**: Limitado para archivos de video grandes
- **Rendimiento**: Videos grandes pueden afectar la velocidad de carga

### Estrategias Implementadas:

#### 1. **Enlaces a Plataformas Externas**
- ✅ Videos alojados en **YouTube** (enlaces en VideoClips.jsx)
- ✅ Archivos de proyecto en **Google Drive** (Gallery.jsx)
- ✅ Previews con thumbnails de alta calidad

#### 2. **Optimización de Imágenes**
- ✅ Imágenes comprimidas en formato WebP cuando sea posible
- ✅ Lazy loading implementado
- ✅ Placeholders mientras cargan las imágenes

#### 3. **Estrategia de Videos Locales (Si es necesario)**
```bash
# Para videos cortos (<10MB), comprimir con:
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset fast output.mp4

# Para GIFs/animaciones cortas:
ffmpeg -i input.mp4 -vf "fps=15,scale=720:-1" -loop 0 output.gif
```

## 🚀 Deployment en GitHub Pages

### Configuración Actual:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Comandos para Deploy:
```bash
# Construir el proyecto
npm run build

# Deploy a GitHub Pages
npm run deploy
```

### Configuración de Vite para GitHub Pages:
```javascript
// vite.config.js
export default defineConfig({
  base: '/pf/', // nombre del repositorio
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false, // reduce tamaño
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion']
        }
      }
    }
  }
})
```

## 📱 Optimizaciones de Rendimiento

### 1. **Lazy Loading**
- Secciones se cargan cuando entran en viewport
- Imágenes con loading="lazy"
- Componentes con React.lazy() si es necesario

### 2. **Code Splitting**
- Separación de vendor libraries
- Chunks manuales en Vite config

### 3. **Compresión de Assets**
- SVGs optimizados
- Imágenes en formato WebP
- CSS/JS minificado automáticamente

## 🎥 Alternativas para Videos Pesados

### Opción 1: YouTube Integration
```jsx
// Componente de video optimizado
const VideoPlayer = ({ videoId }) => (
  <div className="video-container">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      frameborder="0"
      allowfullscreen
    />
  </div>
);
```

### Opción 2: Video Thumbnails + Enlaces
```jsx
// Implementado en VideoClips.jsx
const VideoCard = ({ clip }) => (
  <div onClick={() => window.open(clip.youtubeUrl, '_blank')}>
    <img src={clip.thumbnail} alt={clip.title} />
    <PlayButton />
  </div>
);
```

### Opción 3: GIFs Cortos para Previews
- Videos de 3-5 segundos como GIF
- Máximo 5MB por archivo
- Calidad optimizada para web

## 🔧 Configuración Técnica

### Variables de Entorno para Production:
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

### Optimización de Bundle:
- Bundle splitting implementado
- Tree shaking automático
- Assets optimization

## 📊 Métricas de Rendimiento Objetivo

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Bundle Size**: < 500KB (gzipped)
- **Lighthouse Score**: > 90

## 🚨 Recomendaciones Finales

1. **Videos**: Mantener enlaces a YouTube para videos completos
2. **Imágenes**: Comprimir y optimizar todas las imágenes
3. **Caching**: GitHub Pages cachea automáticamente assets estáticos
4. **CDN**: Consider Cloudflare para mejorar velocidad global
5. **Monitoring**: Usar Lighthouse para monitorear rendimiento

## 📁 Estructura de Assets Recomendada

```
src/assets/
├── images/
│   ├── compressed/     # Imágenes optimizadas
│   ├── thumbnails/     # Previews de videos
│   └── icons/          # SVGs optimizados
├── videos/
│   ├── short-clips/    # Videos < 10MB
│   └── gifs/           # Animaciones cortas
└── documents/
    └── portfolios/     # PDFs < 25MB
```

## 🔗 Enlaces Útiles

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Web Performance Best Practices](https://web.dev/performance/)
- [Image Optimization Tools](https://tinypng.com/)
