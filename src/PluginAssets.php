<?php

namespace antenna\craftassistance;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

class PluginAssets extends AssetBundle
{
    public function init()
    {
        $this->sourcePath = '@antenna/craftassistance/assets';

        $this->depends = [
            CpAsset::class,
        ];

        $this->js = [
            'js/index.js',
        ];

        $this->css = [
            'css/index.css',
        ];

        parent::init();
    }
}
