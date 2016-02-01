<?php
/**
 * 阅读文章页面
 */
if(!defined('EMLOG_ROOT')) {exit('error!');}
?>
		<div class="content-body">
			<div class="container">
				<div class="row">
					<main class="col-md-12">
						<article class="post post-1">
							<header class="entry-header">
								<h1 class="entry-title"><?php echo $log_title; ?></h1>
								<div class="entry-meta">
									<span class="post-category"><?php blog_sort($logid); ?></span>
									<span class="post-date"><a href="#"><time class="entry-date"><?php echo gmdate('Y-n-j G:i', $date); ?> </time></a></span>
									<span class="post-author"><?php blog_author($author); ?></span>
									<span class="comments-link"><a href="#"><?php echo $comnum; ?> Comments</a></span>
								</div>
							</header>
							<div class="entry-content clearfix">
								<?php echo $log_content; ?>
							</div>
						</article>
						<div class="comment-container">
						<?php blog_comments_post($logid,$ckname,$ckmail,$ckurl,$verifyCode,$allow_remark); ?>
						<?php blog_comments($comments); ?>
						</div>
					</main>
				</div>
			</div>
		</div>

<?php
 include View::getView('footer');
?>