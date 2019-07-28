<?php

namespace app\controllers;

use yii\db\Query;
use yii\rest\Controller;

class SearchController extends Controller
{

    public function actionIndex(
        string $plz4 = '',
        string $ktkz = '',
        string $gdenr = '',
        string $gdenamk = '',
        int $only100 = 0,
        string $sort = ''
    ): array
    {
        $query = (new Query())
            ->select('*')
            ->from('plz_gemeinde');

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

        if (!empty($only100)) {
            $query->andWhere('in_gde > 99.99');
        }

        $orderBy = $this->getOrderBy($sort);
        $query->orderBy($orderBy);

        $rows = $query->all();

        return $rows;
    }

    private function getOrderBy($sortField)
    {
        $mapping = [
            'default' => 'plz4 ASC, in_gde DESC',
            'plz4' => 'plz4 ASC, in_gde DESC',
            'ktkz' => 'ktkz ASC, in_gde DESC',
            'gdenamk' => 'gdenamk ASC, in_gde DESC',
            'gdenr' => 'gdenr ASC, in_gde DESC',
            'in_gde' => 'in_gde DESC, plz4 ASC',
        ];
        $sortField = array_key_exists($sortField, $mapping) ? $sortField : 'default';
        return $mapping[$sortField];
    }
}
