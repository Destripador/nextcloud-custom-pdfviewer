<?php

declare(strict_types=1);

namespace OCA\Files_PDFViewer\Listeners;

use OCA\Files\Event\LoadAdditionalScriptsEvent;
use OCA\Files_PDFViewer\AppInfo\Application;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Util;

/**
 * @template-implements IEventListener<LoadAdditionalScriptsEvent>
 */
class LoadFileListListener implements IEventListener {
	public function handle(Event $event): void {
		if (!$event instanceof LoadAdditionalScriptsEvent) {
			return;
		}

		// Cargar el script del menú contextual personalizado
		Util::addScript(Application::APP_ID, 'files_pdfviewer-contextmenu');
	}
}
