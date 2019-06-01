<?php

use yii\db\Migration;

class m190601_131230_create_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $this->createTable('plz_gemeinde', [
            'id' => $this->primaryKey(),
            'plz4' => $this->integer()->defaultValue(NULL),
            'in_gde' => $this->float()->defaultValue(NULL),
            'ktkz' => $this->char(2)->defaultValue(NULL),
            'gdenr' => $this->integer()->defaultValue(NULL),
            'gdenamk' => $this->char(100)->defaultValue(NULL)
        ]);
    }

    public function down()
    {
        $this->dropTable('plz_gemeinde');
    }
}
