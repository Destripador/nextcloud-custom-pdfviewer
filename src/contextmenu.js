import { registerFileAction } from '@nextcloud/files'
import { translate as t } from '@nextcloud/l10n'

import icon from '../img/document.svg'

registerFileAction({
	id: 'custompdf',
	apps: ['files'],
	mimes: ['application/pdf'],
	permissions: OC.PERMISSION_READ,
	displayName: () => t('custompdfviewer', 'Abrir visor PDF'),
	iconSvgInline: () => icon,
	enabled: (nodes, view) => {
		if (!nodes || nodes.length !== 1) {
			return false
		}

		const node = nodes[0]

		// Validar que no sea carpeta y sea mimetype PDF
		return node.type === 'file' && (
			node.mimetype === 'application/pdf'
		|| node._data?.mime === 'application/pdf'
		|| node.attributes?.mime === 'application/pdf'
		)
	},
	exec: (node) => {
		// Obtener valores seguros
		const fileid = node.fileid ?? node.id
		const basename = node.name ?? node._data?.displayname ?? node.attributes?.displayname
		const mime = node.mimetype ?? node._data?.mime ?? node.attributes?.mime
		const size = node.size ?? node._data?.size
		const path = node.path ?? ''
		const source = node.source ?? ''
		const permissions = node.permissions ?? node._data?.permissions
		const type = node.type ?? 'file'

		const fileInfo = {
			id: fileid,
			fileid,
			mime,
			basename,
			filename: path.startsWith('/') ? path : '/' + path,
			source,
			size,
			type,
			permissions: permissionToString(permissions), // 🔧 Aquí se corrige
		}

		// Depuración
		// eslint-disable-next-line no-console
		console.log('📤 Enviando a visor PDF:', fileInfo)

		if (!fileInfo.basename || !fileInfo.mime) {
			console.error('❌ Faltan campos obligatorios en fileInfo', fileInfo)
			return
		}

		OCA.Viewer.openWith('pdf', {
			fileInfo,
			list: [fileInfo],
			enableSidebar: true,
			canLoop: false,
			// eslint-disable-next-line no-console
			onClose: () => console.log('👋 Visor cerrado'),
		})
	},
})

// eslint-disable-next-line jsdoc/require-jsdoc
function permissionToString(perm) {
	let out = ''
	if ((perm & OC.PERMISSION_READ) !== 0) out += 'r'
	if ((perm & OC.PERMISSION_UPDATE) !== 0) out += 'u'
	if ((perm & OC.PERMISSION_CREATE) !== 0) out += 'c'
	if ((perm & OC.PERMISSION_DELETE) !== 0) out += 'd'
	if ((perm & OC.PERMISSION_SHARE) !== 0) out += 's'
	if ((perm & OC.PERMISSION_MOVE) !== 0) out += 'm'
	if ((perm & OC.PERMISSION_RESHARE) !== 0) out += 'R'
	if ((perm & OC.PERMISSION_ALL) === OC.PERMISSION_ALL) out = 'rudcs'
	return out
}
