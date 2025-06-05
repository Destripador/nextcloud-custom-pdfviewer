import PDFView from './views/PDFView.vue'

const isPublicLink = window.location.pathname.startsWith('/s/')

OCA.Viewer.registerHandler({
	id: 'pdf',
	mimes: ['application/x-custom-pdf', 'application/pdf'], // puedes incluir 'application/pdf' si estás listo
	component: PDFView,
	canCompare: true,
	isPublic: isPublicLink, // <- importante si quieres comportamientos distintos
})
