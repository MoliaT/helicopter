import { defineConfig } from 'vite';

export default defineConfig({
  // Configuración del servidor de desarrollo
  server: {
    port: 3000, // Puerto del servidor de desarrollo (predeterminado: 3000)
  },
  
  // Configuración de rutas
  // Puedes utilizar esto para configurar rutas personalizadas
  // Consulta la documentación de Vite para obtener más detalles
  // sobre la configuración de rutas.
  // https://vitejs.dev/guide/build.html#public-base-path
  base: '/', 

  plugins: [
  ],
  build: {
    outDir: 'dist', // Directorio de salida de la versión de producción
    assetsDir: 'assets', // Directorio de recursos estáticos (imágenes, etc.)
    minify: true, // Minificación de archivos en producción
    sourcemap: false, // Generar sourcemaps en producción
  },
});
