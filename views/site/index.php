<script>
    const WEB_URL = '<?= Yii::$app->request->baseUrl ?>';
</script>
<?php if (YII_DEBUG): ?>
    <script src="./static/app-dev.js"></script>
<?php else: ?>
    <script src="./static/app.js"></script>
<?php endif; ?>
