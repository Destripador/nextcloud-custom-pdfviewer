<!--
  - SPDX-FileCopyrightText: 2025 Tu Nombre o Empresa
  - SPDX-License-Identifier: MIT
-->
# Visor PDF Personalizado para Nextcloud

Este módulo independiente integra la librería [PDF.js](https://mozilla.github.io/pdf.js/) en Nextcloud con mejoras visuales y funcionales. Es ideal para quienes desean un visor PDF ligero, visualmente optimizado y que funcione tanto en la vista de archivos como en enlaces públicos.

> 🔧 Compatible con Nextcloud 25–32.

---

![PDF Viewer personalizado](https://user-images.githubusercontent.com/youruser/screenshot.png)

## ✨ Características destacadas

- Visor PDF totalmente integrado en Nextcloud
- Soporte para enlaces públicos (`/s/`)
- Compatible con impresión y guardado
- Estilo visual optimizado (botones personalizados)
- Puede reemplazar la acción por defecto de "Ver" (evita conflicto con OnlyOffice)

---

## 🚀 Instalación rápida

1. Clona el repositorio en tu servidor Nextcloud:

```bash
git clone https://github.com/destripador/custom_pdfviewer.git /var/www/html/custom_apps/custom_pdfviewer
