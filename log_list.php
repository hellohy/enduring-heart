<?php
/**
 * 站点列表页
 */
if(!defined('EMLOG_ROOT')) {exit('error!');}
?>
		<div class="content-body">
			<div class="container">
				<div class="row">
					<main class="col-md-12">
						<?php if (!empty($logs)): foreach($logs as $value): ?>
						<article class="post post-1">
							<header class="entry-header">
								<h1 class="entry-title cl-effect-5">
									<a href="<?php echo $value['log_url']; ?>"><span data-hover="<?php echo $value['log_title']; ?>"><?php echo $value['log_title']; ?></span></a>
								</h1>
								<div class="entry-meta">
									<span class="post-category"><?php blog_sort($value['logid']); ?></span>
									<span class="post-date"><a href="#">&nbsp;<?php echo gmdate('Y-n-j', $value['date']); ?></a></span>
									<span class="post-author"><?php blog_author($value['author']); ?></span>
									<span class="comments-link"><a href="<?php echo $value['log_url']; ?>"><?php echo $value['comnum']; ?> Comments</a></span>
								</div>
							</header>
							<div class="entry-content clearfix">
								<p><?php echo $value['log_description'] = handlearticledes(subString(trim(strip_tags($value['log_description'])), 0,100));?>...</p>
								<div class="read-more cl-effect-14">
									<a href="<?php echo $value['log_url']; ?>" class="more-link">Continue reading <span class="meta-nav">→</span></a>
								</div>
							</div>
						</article>
						<?php endforeach; else:?><a class="find-nothing" href="#" onclick="javascript :history.back(-1);">很抱歉，没有找到相关内容! <br>点击返回上一页</a><?php endif;?>
					</main>
				</div>
			</div>
		</div>
<?php include View::getView('footer');?>