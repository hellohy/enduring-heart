<?php
/**
 * 自建页面模板
 */
if(!defined('EMLOG_ROOT')) {exit('error!');}
?>
  <style>
      .content-body{
        margin-top: 80px;
      }
  </style>
  <div class="content-body">
    <div class="container">
      <div class="row">
        <main class="col-md-12">
          <h1 class="entry-title"><?php echo $log_title; ?></h1>
          <article class="post">
            <div class="entry-content clearfix">
              <p><?php echo $log_content; ?></p>
            </div>
          </article>
        </main>
      </div>
    </div>
  </div>
<?php
 include View::getView('footer');
?>