<?php

use yii\db\Migration;

class m190601_131300_import_data extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $sql = file_get_contents(__DIR__ . '/m190601_131300_import_data.sql');
        $this->execute($sql);
    }

    public function down()
    {
        $this->truncateTable('plz_gemeinde');
    }
}
