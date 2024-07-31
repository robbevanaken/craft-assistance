<?php

namespace antenna\craftassistance;

use Craft;
use antenna\craftassistance\models\Settings;
use craft\base\Model;
use craft\base\Plugin as BasePlugin;
use craft\web\View;

/**
 * Assistance plugin
 *
 * @method static Plugin getInstance()
 * @method Settings getSettings()
 */
class Plugin extends BasePlugin
{
    public string $schemaVersion = '1.0.0';
    public bool $hasCpSettings = true;

    public static function config(): array
    {
        return [
            'components' => [
                // Define component configs here...
            ],
        ];
    }

    public function init(): void
    {
        parent::init();

        $this->attachEventHandlers();

        // Only register assets and pass settings in the CP
        if (Craft::$app->getRequest()->getIsCpRequest()) {
            Craft::$app->onInit(function () {
                $view = Craft::$app->getView();
                $view->registerAssetBundle(PluginAssets::class);

                // Fetch settings and pass to JS
                $settings = $this->getSettings();
                $config = [
                    'primaryColor' => $settings->primaryColor,
                    'secondaryColor' => $settings->secondaryColor,
                    'assistanceTitle' => $settings->assistanceTitle,
                    'assistanceText' => $settings->assistanceText,
                    'assistanceEmail' => $settings->assistanceEmail,
                ];

                // Pass settings as JSON to the frontend
                $view->registerJs('window.helpPopupConfig = ' . json_encode($config) . ';', View::POS_HEAD);
            });
        }
    }

    protected function createSettingsModel(): ?Model
    {
        return Craft::createObject(Settings::class);
    }

    protected function settingsHtml(): ?string
    {
        return Craft::$app->view->renderTemplate('assistance/_settings.twig', [
            'plugin' => $this,
            'settings' => $this->getSettings(),
        ]);
    }

    private function attachEventHandlers(): void
    {
        // Register event handlers here ...
        // (see https://craftcms.com/docs/5.x/extend/events.html to get started)
    }
}
