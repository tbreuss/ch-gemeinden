<script>
    const WEB_URL = '<?= Yii::$app->request->baseUrl ?>';
</script>
<?php if (YII_DEBUG): ?>
    <script src="./bin/app-dev.js"></script>
<?php else: ?>
    <script src="./bin/app.js"></script>
<?php endif; ?>
