# Shipment Logística — Landing Page

## Estructura del proyecto

```
shipment-deploy/
├── index.html          ← Estructura de la página (textos, secciones)
├── css/
│   └── style.css       ← Todos los estilos visuales (colores, tamaños, fuentes)
├── js/
│   └── main.js         ← Comportamiento interactivo (animaciones, menú móvil)
└── assets/
    ├── logo.png        ← Logo de la empresa
    ├── hero-bg.jpg     ← Imagen de fondo del hero
    ├── foto-1.jpg      ← Foto equipo 1
    ├── foto-2.jpg      ← Foto equipo 2
    ├── foto-3.jpg      ← Foto equipo 3
    ├── foto-4.jpg      ← Foto equipo 4
    ├── foto-5.jpg      ← Foto equipo 5
    └── foto-6.jpg      ← Foto equipo 6
```

---

## ¿Cómo editar los textos?

Abrí `index.html` con cualquier editor de texto (Notepad, VS Code, etc.).

Los textos principales están en el cuerpo del HTML. Buscá la frase que querés cambiar con Ctrl+F y reemplazala directamente.

---

## ¿Cómo cambiar el logo?

1. Reemplazá el archivo `assets/logo.png` con el nuevo logo (mismo nombre)
2. Si el nuevo logo tiene otro nombre, abrí `index.html` y buscá `assets/logo.png` → reemplazá por el nuevo nombre

---

## ¿Cómo cambiar las fotos del equipo?

Reemplazá los archivos `assets/foto-1.jpg` ... `assets/foto-6.jpg` con las nuevas fotos (mismos nombres).

---

## ¿Cómo cambiar colores?

Abrí `css/style.css` y buscá la sección `:root` al inicio del archivo. Ahí están definidos los colores principales:

```css
:root {
    --blue: #004195;      /* Azul principal */
    --accent: #0052cc;    /* Azul acento */
    --yellow: #ffd200;    /* Amarillo */
    ...
}
```

---

## ¿Cómo cambiar el número de WhatsApp?

Abrí `index.html` y buscá `wa.me/` → el número que sigue es el de WhatsApp. Reemplazalo por el nuevo.

---

## ¿Cómo subir a GitHub Pages?

1. Creá un repositorio en GitHub
2. Subí todos los archivos de esta carpeta
3. En Settings → Pages → Source: seleccioná la rama `main` y carpeta `/root`
4. La página quedará disponible en `https://tu-usuario.github.io/nombre-repo/`
