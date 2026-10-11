# Dashboard

Aplicación web desarrollada en **Angular** (versión 22) diseñada para la visualización, seguimiento y filtrado interactivo de métricas e incidencias del sistema.

---

## 🚀 Características Principales

- **Arquitectura Standalone:** Basada en componentes independientes y modulares de Angular.
- **Gestión Reactiva del Estado:** Uso de Angular **Signals** (`signal` y `computed`) para un control reactivo y filtrado en tiempo real sin sobrecarga de renderizado.
- **Panel de Incidencias:**
  - Visualización en cuadrícula interactiva de incidencias.
  - Clasificación por prioridad (`LOW`, `MEDIUM`, `HIGH`, `URGENT`) y estado (`PENDING`, `RESOLVED`).
  - Búsqueda y filtrado instantáneo por título.
- **Pruebas Unitarias:** Configuración con **Jest** para testing de servicios y componentes.
- **Despliegue Contenedorizado:** Soporte listo para producción con **Docker** y **Nginx** (multi-stage build).

---

## 🛠️ Tecnologías y Herramientas

- **Framework:** [Angular 22](https://angular.dev/)
- **Lenguaje:** TypeScript 5.9+ / 6.0
- **Estilos:** SCSS
- **Testing:** Jest
- **Contenedores:** Docker (Node.js Alpine + Nginx Alpine)

---

## 📁 Estructura del Proyecto

```text
dashboard-metrica/
├── public/                 # Recursos estáticos de la aplicación
├── src/
│   ├── app/
│   │   ├── core/           # Modelos, servicios e interceptores globales
│   │   │   ├── interceptors/ # Interceptores HTTP (ej. autenticación)
│   │   │   ├── models/       # Interfaces y tipos de datos (ej. Incident)
│   │   │   └── services/     # Servicios de negocio (ej. IncidentService)
│   │   ├── features/       # Módulos y páginas funcionales
│   │   │   └── dashboard/  # Página y componentes del panel de incidencias
│   │   ├── app.config.ts   # Configuración global de la aplicación y proveedores
│   │   ├── app.routes.ts   # Definición de rutas del frontend
│   │   ├── app.ts          # Componente raíz
│   │   └── app.html / scss # Plantilla y estilos raíz
│   ├── main.ts             # Punto de entrada de la aplicación
│   └── styles.scss         # Estilos globales
├── Dockerfile              # Configuración de imagen Docker para despliegue
├── .dockerignore           # Archivos excluidos del contexto Docker
├── .gitignore              # Archivos y directorios excluidos en Git
└── package.json            # Dependencias y scripts del proyecto
```

---

## ⚙️ Requisitos Previos

- **Node.js:** Versión 22.x o superior recomendada
- **NPM:** Gestor de paquetes compatible

---

## 🚀 Puesta en Marcha (Desarrollo)

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm start
   # o bien: ng serve
   ```

3. **Abrir en el navegador:**
   Navega a [http://localhost:4200/](http://localhost:4200/). La aplicación se recargará automáticamente al detectar cambios en el código fuente.

---

## 🧪 Pruebas Unitarias

Para ejecutar la suite de pruebas unitarias con Jest:

```bash
npm test
```

Para ejecutar pruebas en modo continuo (watch):
```bash
npm run test:watch
```

Para generar reporte de cobertura de pruebas:
```bash
npm run test:coverage
```

---

## 📦 Compilación para Producción

Para compilar la aplicación para su distribución:

```bash
npm run build
```

Los archivos resultantes se generarán en la carpeta `dist/dashboard-metrica/browser`.

---

## 🐳 Despliegue con Docker

El proyecto incluye un `Dockerfile` optimizado en dos fases: compilación con Node.js y distribución de archivos estáticos con servidor Nginx.

1. **Construir la imagen Docker:**
   ```bash
   docker build -t dashboard-metrica .
   ```

2. **Ejecutar el contenedor:**
   ```bash
   docker run -d -p 8080:80 --name dashboard-metrica-app dashboard-metrica
   ```

3. **Acceder a la aplicación:**
   Visita [http://localhost:8080](http://localhost:8080) en tu navegador.
