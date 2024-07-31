<?php

namespace antenna\craftassistance\models;

use Craft;
use craft\base\Model;
use craft\elements\Asset;

/**
 * Assistance  settings
 */
class Settings extends Model
{
    public $agencyLogo;
    public $primaryColor;
    public $secondaryColor;
    public $assistanceTitle;
    public $assistanceText;
    public $assistanceEmail;
}
