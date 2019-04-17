<?php

namespace app\controllers;

use yii\db\Query;
use yii\rest\Controller;

class SearchController extends Controller
{

    public function actionIndex(string $plz4 = '', string $ktkz = '', string $gdenr = '', string $gdenamk = '')
    {
        $query = (new Query())
            ->select('*')
            ->from('plz_gemeinde')
            ->orderBy('plz4 ASC, in_gde DESC');

        if (!empty($plz4)) {
            $query->andWhere(['like', 'plz4', $plz4]);
        }

        if (!empty($ktkz)) {
            $query->andWhere('ktkz=:ktkz', ['ktkz' => $ktkz]);
        }

        if (!empty($gdenr)) {
            $query->andWhere(['like', 'gdenr', $gdenr]);
        }

        if (!empty($gdenamk)) {
            $query->andWhere(['like', 'gdenamk', $gdenamk]);
        }

        $rows = $query->all();

        return $rows;
    }
}
