<?php

namespace app\controllers;

use Yii;
use yii\rest\Controller;

class PlzController extends Controller
{

    public function actionIndex(int $plz)
    {
        $sql = "
            SELECT * 
            FROM plz_gemeinde
            WHERE plz4 LIKE :plz
            ORDER BY in_gde DESC, gdenr ASC;
        ";
        $params = ['plz' => $plz . '%'];

        $rows = Yii::$app->db->createCommand($sql)
            ->bindValues($params)
            ->queryAll();

        return $rows;
    }
}
