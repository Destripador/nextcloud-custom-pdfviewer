<?php

/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\CustomPDFViewer\AppInfo;

use OCA\CustomPDFViewer\Listeners\CSPListener;
use OCA\CustomPDFViewer\Listeners\LoadViewerListener;

use OCA\Viewer\Event\LoadViewer;

use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\Security\CSP\AddContentSecurityPolicyEvent;

// Listener
use OCA\CustomPDFViewer\Listeners\LoadFileListListener;
use OCA\Files\Event\LoadAdditionalScriptsEvent;


class Application extends App implements IBootstrap {
	public const APP_ID = 'custompdfviewer';

	public function __construct() {
		parent::__construct(self::APP_ID);
	}

	public function register(IRegistrationContext $context): void {

		$context->registerEventListener(LoadAdditionalScriptsEvent::class, LoadFileListListener::class);

		$context->registerEventListener(LoadViewer::class, LoadViewerListener::class);
		$context->registerEventListener(AddContentSecurityPolicyEvent::class, CSPListener::class);
	}

	public function boot(IBootContext $context): void {
	}
}
