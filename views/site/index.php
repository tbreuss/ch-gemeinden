<?php use yii\helpers\Url; ?>
<script>
    const WEB_URL = '<?= Url::home() ?>';
</script>
<?php if (YII_DEBUG): ?>
    <script src="./static/app-dev.js"></script>
<?php else: ?>
    <script src="./static/app.js"></script>
<?php endif; ?>
