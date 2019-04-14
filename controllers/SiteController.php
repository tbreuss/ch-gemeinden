<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;

class SiteController extends Controller
{
    public function actionIndex()
    {
        return $this->render('index');
    }

    public function actionError()
    {
        $accept = Yii::$app->request->acceptableContentTypes;

        if (array_key_exists('text/html', $accept)) {
            return 'Undefined Error';
        }
        return [
            'Undefined Error'
        ];
    }

}
