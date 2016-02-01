<?php
/*
Template Name:永恒之心
Description:永恒之心<br><a target="_blank" href="http://hihy.top">作者的blog</a>
Version:1.0
Author:hellohy
Author Url:http://hihy.top
Sidebar Amount:1
*/
if(!defined('EMLOG_ROOT')) {exit('error!');}
require_once View::getView('module');
?>

<!DOCTYPE html>
<html>
	<head>
		<title><?php echo $site_title; ?></title>

		<!-- meta -->
		<meta charset="UTF-4">
	    <meta name="viewport" content="width=device-width, initial-scale=1">

	    <!-- css -->
		<!-- <link rel="stylesheet" href="<?php echo TEMPLATE_URL; ?>css/normalize.css"> -->
		<!-- <link rel="stylesheet" href="<?php echo TEMPLATE_URL; ?>css/pace.css"> -->
		<link rel="stylesheet" href="<?php echo TEMPLATE_URL; ?>css/bootstrap.min.css">
		<!-- <link rel="stylesheet" href="<?php echo TEMPLATE_URL; ?>css/ionicons.min.css"> -->
	    <!-- <link rel="stylesheet" href="<?php echo TEMPLATE_URL; ?>css/custom.css"> -->
	    <link rel="stylesheet" href="<?php echo TEMPLATE_URL; ?>css/style.css">

	    <!-- js -->
	    <script src="<?php echo TEMPLATE_URL; ?>js/jquery-2.1.3.min.js"></script>
	    <!-- <script src="<?php echo TEMPLATE_URL; ?>js/pace.min.js"></script> -->
	    <script src="<?php echo TEMPLATE_URL; ?>js/bootstrap.min.js"></script>
	    <!-- <script src="<?php echo TEMPLATE_URL; ?>js/modernizr.custom.js"></script> -->
	    <script>
	    window.onload = function(){
	    	if (window.location.href == "<?php echo BLOG_URL; ?>") {
			    var script = document.createElement("script");
			    script.src = "<?php echo TEMPLATE_URL; ?>js/heart.js";
			    document.body.appendChild(script);
			}else {
				var canvas = document.getElementById("heart");
				document.body.removeChild(canvas);
			}
	    }
	    </script>
	</head>

	<body>
		<canvas id="heart">您所用的浏览器版本太低，请升级！推荐使用Chrome,firefox浏览器</canvas>
		<header class="navbar navbar-inverse navbar-fixed-top" id="top" role="banner">
		  <div class="container">
		    <div class="navbar-header">
		      <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">
		        <span class="sr-only">Toggle navigation</span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		      </button>
		      <a class="navbar-brand" href="<?php echo BLOG_URL; ?>"><?php echo $blogname; ?></a>
		    </div>
		    <nav id="bs-navbar" class="collapse navbar-collapse">
		      <ul class="nav navbar-nav">
				<?php blog_navi();?>
		      </ul>
		      <ul class="nav navbar-nav navbar-right">
				<li id="search-form" class="search-form">
					<form role="search" method="get" id="searchform" action="<?php echo BLOG_URL; ?>index.php">
						<input name="keyword" type="search" placeholder="Search" required>
						<button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
					</form>
				</li>
		      </ul>
		    </nav>
		  </div>
		</header>