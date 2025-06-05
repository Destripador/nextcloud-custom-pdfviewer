<?php

declare(strict_types=1);

namespace OCA\CustomPDFViewer\Listeners;

use OCA\Files\Event\LoadAdditionalScriptsEvent;
use OCA\CustomPDFViewer\AppInfo\Application;
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
		Util::addScript(Application::APP_ID, 'custompdfviewer-contextmenu');
	}
}
