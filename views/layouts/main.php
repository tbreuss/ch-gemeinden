<?php use yii\helpers\Url; ?>
<!doctype html>
<html lang="de">
<head>
    <title>Gemeindeverzeichnis der Schweiz</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="index, follow">
    <link rel="stylesheet" href="<?= Url::home() ?>static/app.css">
    <link rel="stylesheet" href="<?= Url::home() ?>static/css/pure-min.css">
    <!--[if lte IE 8]>
    <link rel="stylesheet" href="<?= Url::home() ?>static/css/grids-responsive-old-ie-min.css">
    <![endif]-->
    <!--[if gt IE 8]><!-->
    <link rel="stylesheet" href="<?= Url::home() ?>static/css/grids-responsive-min.css">
    <!--<![endif]-->
    <link rel="stylesheet" href="<?= Url::home() ?>static/css/styles.css">
</head>
<body>
<?= $content ?>
</body>
</html>
