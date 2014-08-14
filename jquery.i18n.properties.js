



<!DOCTYPE html>
<html lang="en" class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>jquery-i18n-properties/jquery.i18n.properties.js at master · jquery-i18n-properties/jquery-i18n-properties · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jquery-i18n-properties/jquery-i18n-properties" name="twitter:title" /><meta content="jquery-i18n-properties - lightweight jQuery plugin for providing internationalization to javascript from ‘.properties’ files" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/7836696?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/7836696?v=2&amp;s=400" property="og:image" /><meta content="jquery-i18n-properties/jquery-i18n-properties" property="og:title" /><meta content="https://github.com/jquery-i18n-properties/jquery-i18n-properties" property="og:url" /><meta content="jquery-i18n-properties - lightweight jQuery plugin for providing internationalization to javascript from ‘.properties’ files" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="C9350069:7B60:536973D:53ECBDDD" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="LAZxaG1KuFZ88jZP23FI154aQUpKt3KMaF9nbYsdG/G8zNUouAOZ2VAQIPFdCerRTkG7yZ+uuycmwkDFa0fJsQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-9292d024f6948334bdb496c5e7a55d8df86fb80e.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-fe2778113a79ed0985eedf979a34188ceea23f97.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="f4d07a70fe9c693bc8f53c5731e8976d">

      
  <meta name="description" content="jquery-i18n-properties - lightweight jQuery plugin for providing internationalization to javascript from ‘.properties’ files">


  <meta content="7836696" name="octolytics-dimension-user_id" /><meta content="jquery-i18n-properties" name="octolytics-dimension-user_login" /><meta content="20641203" name="octolytics-dimension-repository_id" /><meta content="jquery-i18n-properties/jquery-i18n-properties" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="20641203" name="octolytics-dimension-repository_network_root_id" /><meta content="jquery-i18n-properties/jquery-i18n-properties" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jquery-i18n-properties/jquery-i18n-properties/commits/master.atom" rel="alternate" title="Recent Commits to jquery-i18n-properties:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production  vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fjquery-i18n-properties%2Fjquery-i18n-properties%2Fblob%2Fmaster%2Fjquery.i18n.properties.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
          <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
    data-repo="jquery-i18n-properties/jquery-i18n-properties"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="jquery-i18n-properties/jquery-i18n-properties">

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked">
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global">
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Fjquery-i18n-properties%2Fjquery-i18n-properties"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/jquery-i18n-properties/jquery-i18n-properties/stargazers">
      10
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fjquery-i18n-properties%2Fjquery-i18n-properties"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/jquery-i18n-properties/jquery-i18n-properties/network" class="social-count">
        8
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/jquery-i18n-properties" class="url fn" itemprop="url" rel="author"><span itemprop="title">jquery-i18n-properties</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/jquery-i18n-properties/jquery-i18n-properties" class="js-current-repository js-repo-home-link">jquery-i18n-properties</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/jquery-i18n-properties/jquery-i18n-properties/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/jquery-i18n-properties/jquery-i18n-properties" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jquery-i18n-properties/jquery-i18n-properties">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/jquery-i18n-properties/jquery-i18n-properties/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /jquery-i18n-properties/jquery-i18n-properties/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/jquery-i18n-properties/jquery-i18n-properties/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /jquery-i18n-properties/jquery-i18n-properties/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/jquery-i18n-properties/jquery-i18n-properties/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /jquery-i18n-properties/jquery-i18n-properties/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/jquery-i18n-properties/jquery-i18n-properties/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /jquery-i18n-properties/jquery-i18n-properties/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/jquery-i18n-properties/jquery-i18n-properties/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /jquery-i18n-properties/jquery-i18n-properties/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/jquery-i18n-properties/jquery-i18n-properties.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jquery-i18n-properties/jquery-i18n-properties.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/jquery-i18n-properties/jquery-i18n-properties" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jquery-i18n-properties/jquery-i18n-properties" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>



                <a href="/jquery-i18n-properties/jquery-i18n-properties/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download jquery-i18n-properties/jquery-i18n-properties as a zip file"
                   title="Download jquery-i18n-properties/jquery-i18n-properties as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/jquery-i18n-properties/jquery-i18n-properties/blob/37253fedaeba11c88fd735685987e3c57b1961fe/jquery.i18n.properties.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:ffe31d9b31e9b4cee646156f7591789c -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery-i18n-properties/jquery-i18n-properties/blob/master/jquery.i18n.properties.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery-i18n-properties/jquery-i18n-properties/tree/1.1.0/jquery.i18n.properties.js"
                 data-name="1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.0">1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery-i18n-properties/jquery-i18n-properties/tree/1.0.9/jquery.i18n.properties.js"
                 data-name="1.0.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.9">1.0.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery-i18n-properties/jquery-i18n-properties/tree/1.0.8/jquery.i18n.properties.js"
                 data-name="1.0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.8">1.0.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery-i18n-properties/jquery-i18n-properties/tree/1.0.7/jquery.i18n.properties.js"
                 data-name="1.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.7">1.0.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery-i18n-properties/jquery-i18n-properties/tree/1.0.6/jquery.i18n.properties.js"
                 data-name="1.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.6">1.0.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jquery-i18n-properties/jquery-i18n-properties/tree/1.0.5/jquery.i18n.properties.js"
                 data-name="1.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.5">1.0.5</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/jquery-i18n-properties/jquery-i18n-properties/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="jquery.i18n.properties.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jquery-i18n-properties/jquery-i18n-properties" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery-i18n-properties</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.i18n.properties.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="mlohbihler" class="main-avatar" data-user="1182059" height="24" src="https://avatars1.githubusercontent.com/u/1182059?s=48" width="24" />
      <span class="author"><a href="/mlohbihler" rel="contributor">mlohbihler</a></span>
      <time datetime="2011-06-23T20:37:01Z" is="relative-time">June 23, 2011</time>
      <div class="commit-title">
          <a href="/jquery-i18n-properties/jquery-i18n-properties/commit/92b9538bb177bad9788ee627058f80806c680dd8" class="message" data-pjax="true" title="- Changed version to 1.1
- Fixed issue with IE (string[i] not supported, changed to string.charAt(i)
- Detect previous usage of array of parameters for backward compatibility


git-svn-id: http://jquery-i18n-properties.googlecode.com/svn/trunk@9 60ed876c-c37a-d86c-05f3-22939075770b">- Changed version to 1.1</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="mlohbihler" href="/jquery-i18n-properties/jquery-i18n-properties/commits/master/jquery.i18n.properties.js?author=mlohbihler"><img alt="mlohbihler" data-user="1182059" height="20" src="https://avatars3.githubusercontent.com/u/1182059?s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="nfgrilo" href="/jquery-i18n-properties/jquery-i18n-properties/commits/master/jquery.i18n.properties.js?author=nfgrilo"><img alt="nfgrilo" data-user="2744944" height="20" src="https://avatars1.githubusercontent.com/u/2744944?s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="mlohbihler" data-user="1182059" height="24" src="https://avatars1.githubusercontent.com/u/1182059?s=48" width="24" />
            <a href="/mlohbihler">mlohbihler</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="nfgrilo" data-user="2744944" height="24" src="https://avatars3.githubusercontent.com/u/2744944?s=48" width="24" />
            <a href="/nfgrilo">nfgrilo</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>471 lines (424 sloc)</span>
          <span class="meta-divider"></span>
        <span>17.801 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/jquery-i18n-properties/jquery-i18n-properties/raw/master/jquery.i18n.properties.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/jquery-i18n-properties/jquery-i18n-properties/blame/master/jquery.i18n.properties.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/jquery-i18n-properties/jquery-i18n-properties/commits/master/jquery.i18n.properties.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->


            <a class="octicon-button disabled tooltipped tooltipped-w" href="#"
               aria-label="You must be signed in to make or propose changes"><span class="octicon octicon-pencil"></span></a>

          <a class="octicon-button danger disabled tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-line-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-line-code js-file-line"><span class="cm">/******************************************************************************</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-line-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-line-code js-file-line"><span class="cm"> * jquery.i18n.properties</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-line-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-line-code js-file-line"><span class="cm"> * </span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-line-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-line-code js-file-line"><span class="cm"> * Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and </span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-line-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-line-code js-file-line"><span class="cm"> * MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses.</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-line-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-line-code js-file-line"><span class="cm"> * </span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-line-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-line-code js-file-line"><span class="cm"> * @version     1.1.x</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-line-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-line-code js-file-line"><span class="cm"> * @author      Nuno Fernandes</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-line-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-line-code js-file-line"><span class="cm"> *              Matthew Lohbihler</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-line-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-line-code js-file-line"><span class="cm"> * @url         www.codingwithcoffee.com</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-line-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-line-code js-file-line"><span class="cm"> * @inspiration Localisation assistance for jQuery (http://keith-wood.name/localisation.html)</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-line-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-line-code js-file-line"><span class="cm"> *              by Keith Wood (kbwood{at}iinet.com.au) June 2007</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-line-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-line-code js-file-line"><span class="cm"> * </span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-line-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-line-code js-file-line"><span class="cm"> *****************************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-line-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-line-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-line-code js-file-line"><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-line-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-line-code js-file-line"><span class="nx">$</span><span class="p">.</span><span class="nx">i18n</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-line-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-line-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-line-code js-file-line"><span class="cm">/** Map holding bundle keys (if mode: &#39;map&#39;) */</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-line-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-line-code js-file-line"><span class="nx">$</span><span class="p">.</span><span class="nx">i18n</span><span class="p">.</span><span class="nx">map</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-line-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-line-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L22" class="blob-line-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-line-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-line-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-line-code js-file-line"><span class="cm"> * Load and parse message bundle files (.properties),</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-line-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-line-code js-file-line"><span class="cm"> * making bundles keys available as javascript variables.</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-line-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-line-code js-file-line"><span class="cm"> * </span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-line-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-line-code js-file-line"><span class="cm"> * i18n files are named &lt;name&gt;.js, or &lt;name&gt;_&lt;language&gt;.js or &lt;name&gt;_&lt;language&gt;_&lt;country&gt;.js</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-line-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-line-code js-file-line"><span class="cm"> * Where:</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-line-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-line-code js-file-line"><span class="cm"> *      The &lt;language&gt; argument is a valid ISO Language Code. These codes are the lower-case, </span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-line-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-line-code js-file-line"><span class="cm"> *      two-letter codes as defined by ISO-639. You can find a full list of these codes at a </span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-line-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-line-code js-file-line"><span class="cm"> *      number of sites, such as: http://www.loc.gov/standards/iso639-2/englangn.html</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-line-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-line-code js-file-line"><span class="cm"> *      The &lt;country&gt; argument is a valid ISO Country Code. These codes are the upper-case,</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-line-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-line-code js-file-line"><span class="cm"> *      two-letter codes as defined by ISO-3166. You can find a full list of these codes at a</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-line-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-line-code js-file-line"><span class="cm"> *      number of sites, such as: http://www.iso.ch/iso/en/prods-services/iso3166ma/02iso-3166-code-lists/list-en1.html</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-line-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-line-code js-file-line"><span class="cm"> * </span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-line-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-line-code js-file-line"><span class="cm"> * Sample usage for a bundles/Messages.properties bundle:</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-line-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-line-code js-file-line"><span class="cm"> * $.i18n.properties({</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-line-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-line-code js-file-line"><span class="cm"> *      name:      &#39;Messages&#39;, </span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-line-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-line-code js-file-line"><span class="cm"> *      language:  &#39;en_US&#39;,</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-line-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-line-code js-file-line"><span class="cm"> *      path:      &#39;bundles&#39;</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-line-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-line-code js-file-line"><span class="cm"> * });</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-line-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-line-code js-file-line"><span class="cm"> * @param  name			(string/string[], optional) names of file to load (eg, &#39;Messages&#39; or [&#39;Msg1&#39;,&#39;Msg2&#39;]). Defaults to &quot;Messages&quot;</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-line-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-line-code js-file-line"><span class="cm"> * @param  language		(string, optional) language/country code (eg, &#39;en&#39;, &#39;en_US&#39;, &#39;pt_PT&#39;). if not specified, language reported by the browser will be used instead.</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-line-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-line-code js-file-line"><span class="cm"> * @param  path			(string, optional) path of directory that contains file to load</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-line-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-line-code js-file-line"><span class="cm"> * @param  mode			(string, optional) whether bundles keys are available as JavaScript variables/functions or as a map (eg, &#39;vars&#39; or &#39;map&#39;)</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-line-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-line-code js-file-line"><span class="cm"> * @param  cache        (boolean, optional) whether bundles should be cached by the browser, or forcibly reloaded on each page load. Defaults to false (i.e. forcibly reloaded)</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-line-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-line-code js-file-line"><span class="cm"> * @param  encoding 	(string, optional) the encoding to request for bundles. Property file resource bundles are specified to be in ISO-8859-1 format. Defaults to UTF-8 for backward compatibility.</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-line-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-line-code js-file-line"><span class="cm"> * @param  callback     (function, optional) callback function to be called after script is terminated</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-line-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-line-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-line-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-line-code js-file-line"><span class="nx">$</span><span class="p">.</span><span class="nx">i18n</span><span class="p">.</span><span class="nx">properties</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">settings</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-line-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-line-code js-file-line">	<span class="c1">// set up settings</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-line-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-line-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-line-code js-file-line">        <span class="nx">name</span><span class="o">:</span>           <span class="s1">&#39;Messages&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-line-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-line-code js-file-line">        <span class="nx">language</span><span class="o">:</span>       <span class="s1">&#39;&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-line-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-line-code js-file-line">        <span class="nx">path</span><span class="o">:</span>           <span class="s1">&#39;&#39;</span><span class="p">,</span>  </td>
      </tr>
      <tr>
        <td id="L55" class="blob-line-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-line-code js-file-line">        <span class="nx">mode</span><span class="o">:</span>           <span class="s1">&#39;vars&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-line-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-line-code js-file-line">        <span class="nx">cache</span><span class="o">:</span>			<span class="kc">false</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-line-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-line-code js-file-line">        <span class="nx">encoding</span><span class="o">:</span>       <span class="s1">&#39;UTF-8&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-line-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-line-code js-file-line">        <span class="nx">callback</span><span class="o">:</span>       <span class="kc">null</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-line-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-line-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-line-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-line-code js-file-line">    <span class="nx">settings</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">settings</span><span class="p">);</span>    </td>
      </tr>
      <tr>
        <td id="L61" class="blob-line-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-line-code js-file-line">    <span class="k">if</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">language</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">||</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">language</span> <span class="o">==</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-line-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-line-code js-file-line">	   <span class="nx">settings</span><span class="p">.</span><span class="nx">language</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">i18n</span><span class="p">.</span><span class="nx">browserLang</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-line-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-line-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-line-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-line-code js-file-line">	<span class="k">if</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">language</span> <span class="o">===</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span><span class="nx">settings</span><span class="p">.</span><span class="nx">language</span><span class="o">=</span><span class="s1">&#39;&#39;</span><span class="p">;}</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-line-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-line-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L66" class="blob-line-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-line-code js-file-line">	<span class="c1">// load and parse bundle files</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-line-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-line-code js-file-line">	<span class="kd">var</span> <span class="nx">files</span> <span class="o">=</span> <span class="nx">getFiles</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">name</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-line-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-line-code js-file-line">	<span class="k">for</span><span class="p">(</span><span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">files</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-line-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-line-code js-file-line">		<span class="c1">// 1. load base (eg, Messages.properties)</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-line-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-line-code js-file-line">		<span class="nx">loadAndParseFile</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">path</span> <span class="o">+</span> <span class="nx">files</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;.properties&#39;</span><span class="p">,</span> <span class="nx">settings</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-line-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-line-code js-file-line">        <span class="c1">// 2. with language code (eg, Messages_pt.properties)</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-line-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-line-code js-file-line">		<span class="k">if</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">language</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="mi">2</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-line-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-line-code js-file-line">            <span class="nx">loadAndParseFile</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">path</span> <span class="o">+</span> <span class="nx">files</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;_&#39;</span> <span class="o">+</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">language</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span><span class="s1">&#39;.properties&#39;</span><span class="p">,</span> <span class="nx">settings</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-line-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-line-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-line-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-line-code js-file-line">		<span class="c1">// 3. with language code and country code (eg, Messages_pt_PT.properties)</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-line-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-line-code js-file-line">        <span class="k">if</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">language</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="mi">5</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-line-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-line-code js-file-line">            <span class="nx">loadAndParseFile</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">path</span> <span class="o">+</span> <span class="nx">files</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;_&#39;</span> <span class="o">+</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">language</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">5</span><span class="p">)</span> <span class="o">+</span><span class="s1">&#39;.properties&#39;</span><span class="p">,</span> <span class="nx">settings</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-line-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-line-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-line-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-line-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-line-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L81" class="blob-line-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-line-code js-file-line">	<span class="c1">// call callback</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-line-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-line-code js-file-line">	<span class="k">if</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">callback</span><span class="p">){</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">callback</span><span class="p">();</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-line-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-line-code js-file-line"><span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-line-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L85" class="blob-line-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L86" class="blob-line-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-line-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-line-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-line-code js-file-line"><span class="cm"> * When configured with mode: &#39;map&#39;, allows access to bundle values by specifying its key.</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-line-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-line-code js-file-line"><span class="cm"> * Eg, jQuery.i18n.prop(&#39;com.company.bundles.menu_add&#39;)</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-line-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-line-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-line-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-line-code js-file-line"><span class="nx">$</span><span class="p">.</span><span class="nx">i18n</span><span class="p">.</span><span class="nx">prop</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span> <span class="cm">/* Add parameters as function arguments as necessary  */</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-line-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-line-code js-file-line">	<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">i18n</span><span class="p">.</span><span class="nx">map</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-line-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-line-code js-file-line">	<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-line-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-line-code js-file-line">		<span class="k">return</span> <span class="s1">&#39;[&#39;</span> <span class="o">+</span> <span class="nx">key</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-line-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-line-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L95" class="blob-line-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-line-code js-file-line">	<span class="kd">var</span> <span class="nx">phvList</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-line-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-line-code js-file-line">	<span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">2</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">arguments</span><span class="p">[</span><span class="mi">1</span><span class="p">]))</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-line-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-line-code js-file-line">		<span class="c1">// An array was passed as the only parameter, so assume it is the list of place holder values.</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-line-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-line-code js-file-line">		<span class="nx">phvList</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-line-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L100" class="blob-line-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-line-code js-file-line">	<span class="c1">// Place holder replacement</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-line-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-line-code js-file-line">	<span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-line-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-line-code js-file-line"><span class="cm">	 * Tested with:</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-line-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-line-code js-file-line"><span class="cm">	 *   test.t1=asdf &#39;&#39;{0}&#39;&#39;</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-line-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-line-code js-file-line"><span class="cm">	 *   test.t2=asdf &#39;{0}&#39; &#39;{1}&#39;{1}&#39;zxcv</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-line-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-line-code js-file-line"><span class="cm">	 *   test.t3=This is \&quot;a quote&quot; &#39;a&#39;&#39;{0}&#39;&#39;s&#39;d{fgh{ij&#39;</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-line-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-line-code js-file-line"><span class="cm">	 *   test.t4=&quot;&#39;&#39;&#39;{&#39;0}&#39;&#39;&quot; {0}{a}</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-line-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-line-code js-file-line"><span class="cm">	 *   test.t5=&quot;&#39;&#39;&#39;{0}&#39;&#39;&#39;&quot; {1}</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-line-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-line-code js-file-line"><span class="cm">	 *   test.t6=a {1} b {0} c</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-line-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-line-code js-file-line"><span class="cm">	 *   test.t7=a &#39;quoted \\ s\ttringy&#39; \t\t x</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-line-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-line-code js-file-line"><span class="cm">	 *</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-line-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-line-code js-file-line"><span class="cm">	 * Produces:</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-line-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-line-code js-file-line"><span class="cm">	 *   test.t1, p1 ==&gt; asdf &#39;p1&#39;</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-line-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-line-code js-file-line"><span class="cm">	 *   test.t2, p1 ==&gt; asdf {0} {1}{1}zxcv</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-line-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-line-code js-file-line"><span class="cm">	 *   test.t3, p1 ==&gt; This is &quot;a quote&quot; a&#39;{0}&#39;sd{fgh{ij</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-line-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-line-code js-file-line"><span class="cm">	 *   test.t4, p1 ==&gt; &quot;&#39;{0}&#39;&quot; p1{a}</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-line-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-line-code js-file-line"><span class="cm">	 *   test.t5, p1 ==&gt; &quot;&#39;{0}&#39;&quot; {1}</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-line-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-line-code js-file-line"><span class="cm">	 *   test.t6, p1 ==&gt; a {1} b p1 c</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-line-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-line-code js-file-line"><span class="cm">	 *   test.t6, p1, p2 ==&gt; a p2 b p1 c</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-line-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-line-code js-file-line"><span class="cm">	 *   test.t6, p1, p2, p3 ==&gt; a p2 b p1 c</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-line-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-line-code js-file-line"><span class="cm">	 *   test.t7 ==&gt; a quoted \ s	tringy 		 x</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-line-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-line-code js-file-line"><span class="cm">	 */</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-line-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-line-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L123" class="blob-line-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-line-code js-file-line">	<span class="kd">var</span> <span class="nx">i</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-line-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-line-code js-file-line">	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-line-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-line-code js-file-line">        <span class="c1">// Handle escape characters. Done separately from the tokenizing loop below because escape characters are </span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-line-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-line-code js-file-line">		<span class="c1">// active in quoted strings.</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-line-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-line-code js-file-line">        <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-line-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-line-code js-file-line">        <span class="k">while</span> <span class="p">((</span><span class="nx">i</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;\\&#39;</span><span class="p">,</span> <span class="nx">i</span><span class="p">))</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-line-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-line-code js-file-line"> 		    <span class="k">if</span> <span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;t&#39;</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-line-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-line-code js-file-line"> 			    <span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;\t&#39;</span> <span class="o">+</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">((</span><span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="o">+</span> <span class="mi">2</span><span class="p">);</span> <span class="c1">// tab</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-line-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-line-code js-file-line"> 		    <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;r&#39;</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-line-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-line-code js-file-line"> 			    <span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;\r&#39;</span> <span class="o">+</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">((</span><span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="o">+</span> <span class="mi">2</span><span class="p">);</span> <span class="c1">// return</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-line-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-line-code js-file-line"> 		    <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;n&#39;</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-line-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-line-code js-file-line"> 			    <span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;\n&#39;</span> <span class="o">+</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">((</span><span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="o">+</span> <span class="mi">2</span><span class="p">);</span> <span class="c1">// line feed</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-line-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-line-code js-file-line"> 		    <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;f&#39;</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-line-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-line-code js-file-line"> 			    <span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;\f&#39;</span> <span class="o">+</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">((</span><span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="o">+</span> <span class="mi">2</span><span class="p">);</span> <span class="c1">// form feed</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-line-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-line-code js-file-line"> 		    <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;\\&#39;</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-line-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-line-code js-file-line"> 			    <span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;\\&#39;</span> <span class="o">+</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">((</span><span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="o">+</span> <span class="mi">2</span><span class="p">);</span> <span class="c1">// \</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-line-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-line-code js-file-line"> 		    <span class="k">else</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-line-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-line-code js-file-line"> 			    <span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="o">+</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">);</span> <span class="c1">// Quietly drop the character</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-line-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-line-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-line-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L143" class="blob-line-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-line-code js-file-line">		<span class="c1">// Lazily convert the string to a list of tokens.</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-line-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-line-code js-file-line">		<span class="kd">var</span> <span class="nx">arr</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">j</span><span class="p">,</span> <span class="nx">index</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-line-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-line-code js-file-line">		<span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-line-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-line-code js-file-line">		<span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-line-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-line-code js-file-line">			<span class="k">if</span> <span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;\&#39;&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-line-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-line-code js-file-line">				<span class="c1">// Handle quotes</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-line-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-line-code js-file-line">				<span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">==</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-line-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-line-code js-file-line">					<span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">i</span><span class="p">);</span> <span class="c1">// Silently drop the trailing quote</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-line-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-line-code js-file-line">				<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;\&#39;&#39;</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-line-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-line-code js-file-line">					<span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="o">+</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="o">++</span><span class="nx">i</span><span class="p">);</span> <span class="c1">// Escaped quote</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-line-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-line-code js-file-line">				<span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-line-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-line-code js-file-line">					<span class="c1">// Quoted string</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-line-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-line-code js-file-line">					<span class="nx">j</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-line-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-line-code js-file-line">					<span class="k">while</span> <span class="p">((</span><span class="nx">j</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;\&#39;&#39;</span><span class="p">,</span> <span class="nx">j</span><span class="p">))</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-line-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-line-code js-file-line">						<span class="k">if</span> <span class="p">(</span><span class="nx">j</span> <span class="o">==</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span> <span class="o">||</span> <span class="nx">value</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">j</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span> <span class="o">!=</span> <span class="s1">&#39;\&#39;&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-line-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-line-code js-file-line">							<span class="c1">// Found start and end quotes. Remove them</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-line-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-line-code js-file-line">							<span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span> <span class="o">+</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">,</span> <span class="nx">j</span><span class="p">)</span> <span class="o">+</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">j</span><span class="o">+</span><span class="mi">1</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-line-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-line-code js-file-line">							<span class="nx">i</span> <span class="o">=</span> <span class="nx">j</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-line-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-line-code js-file-line">							<span class="k">break</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-line-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-line-code js-file-line">						<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-line-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-line-code js-file-line">						<span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-line-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-line-code js-file-line">							<span class="c1">// Found a double quote, reduce to a single quote.</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-line-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-line-code js-file-line">							<span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nx">j</span><span class="p">)</span> <span class="o">+</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="o">++</span><span class="nx">j</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-line-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-line-code js-file-line">						<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-line-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-line-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-line-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-line-code js-file-line">					</td>
      </tr>
      <tr>
        <td id="L169" class="blob-line-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-line-code js-file-line">					<span class="k">if</span> <span class="p">(</span><span class="nx">j</span> <span class="o">==</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-line-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-line-code js-file-line">						<span class="c1">// There is no end quote. Drop the start quote</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-line-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-line-code js-file-line">						<span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span> <span class="o">+</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-line-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-line-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-line-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-line-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-line-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-line-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-line-code js-file-line">			<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;{&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-line-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-line-code js-file-line">				<span class="c1">// Beginning of an unquoted place holder.</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-line-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-line-code js-file-line">				<span class="nx">j</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;}&#39;</span><span class="p">,</span> <span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-line-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-line-code js-file-line">				<span class="k">if</span> <span class="p">(</span><span class="nx">j</span> <span class="o">==</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-line-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-line-code js-file-line">					<span class="nx">i</span><span class="o">++</span><span class="p">;</span> <span class="c1">// No end. Process the rest of the line. Java would throw an exception</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-line-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-line-code js-file-line">				<span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-line-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-line-code js-file-line">					<span class="c1">// Add 1 to the index so that it aligns with the function arguments.</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-line-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-line-code js-file-line">					<span class="nx">index</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">,</span> <span class="nx">j</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-line-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-line-code js-file-line">					<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">index</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">index</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-line-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-line-code js-file-line">						<span class="c1">// Put the line thus far (if it isn&#39;t empty) into the array</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-line-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-line-code js-file-line">						<span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">i</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-line-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-line-code js-file-line">						<span class="k">if</span> <span class="p">(</span><span class="nx">s</span> <span class="o">!=</span> <span class="s2">&quot;&quot;</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-line-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-line-code js-file-line">							<span class="nx">arr</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">s</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-line-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-line-code js-file-line">						<span class="c1">// Put the parameter reference into the array</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-line-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-line-code js-file-line">						<span class="nx">arr</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">index</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-line-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-line-code js-file-line">						<span class="c1">// Start the processing over again starting from the rest of the line.</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-line-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-line-code js-file-line">						<span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-line-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-line-code js-file-line">						<span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">j</span><span class="o">+</span><span class="mi">1</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-line-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-line-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-line-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-line-code js-file-line">					<span class="k">else</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-line-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-line-code js-file-line">						<span class="nx">i</span> <span class="o">=</span> <span class="nx">j</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span> <span class="c1">// Invalid parameter. Leave as is.</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-line-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-line-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-line-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-line-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-line-code js-file-line">			<span class="k">else</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-line-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-line-code js-file-line">				<span class="nx">i</span><span class="o">++</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-line-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-line-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-line-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-line-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L202" class="blob-line-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-line-code js-file-line">		<span class="c1">// Put the remainder of the no-empty line into the array.</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-line-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-line-code js-file-line">		<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">!=</span> <span class="s2">&quot;&quot;</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-line-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-line-code js-file-line">			<span class="nx">arr</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-line-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-line-code js-file-line">		<span class="nx">value</span> <span class="o">=</span> <span class="nx">arr</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-line-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-line-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L207" class="blob-line-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-line-code js-file-line">		<span class="c1">// Make the array the value for the entry.</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-line-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-line-code js-file-line">		<span class="nx">$</span><span class="p">.</span><span class="nx">i18n</span><span class="p">.</span><span class="nx">map</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">arr</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-line-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-line-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-line-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-line-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L211" class="blob-line-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-line-code js-file-line">	<span class="k">if</span> <span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-line-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-line-code js-file-line">		<span class="k">return</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-line-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-line-code js-file-line">	<span class="k">if</span> <span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nx">lengh</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span><span class="p">(</span><span class="nx">value</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">==</span> <span class="s2">&quot;string&quot;</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-line-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-line-code js-file-line">		<span class="k">return</span> <span class="nx">value</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-line-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-line-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L216" class="blob-line-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-line-code js-file-line">	<span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-line-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-line-code js-file-line">	<span class="k">for</span> <span class="p">(</span><span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">value</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-line-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-line-code js-file-line">		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">value</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="o">==</span> <span class="s2">&quot;string&quot;</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-line-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-line-code js-file-line">			<span class="nx">s</span> <span class="o">+=</span> <span class="nx">value</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-line-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-line-code js-file-line">		<span class="c1">// Must be a number</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-line-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-line-code js-file-line">		<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">phvList</span> <span class="o">&amp;&amp;</span> <span class="nx">value</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">&lt;</span> <span class="nx">phvList</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-line-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-line-code js-file-line">			<span class="nx">s</span> <span class="o">+=</span> <span class="nx">phvList</span><span class="p">[</span><span class="nx">value</span><span class="p">[</span><span class="nx">i</span><span class="p">]];</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-line-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-line-code js-file-line">		<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">phvList</span> <span class="o">&amp;&amp;</span> <span class="nx">value</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">+</span> <span class="mi">1</span> <span class="o">&lt;</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-line-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-line-code js-file-line">			<span class="nx">s</span> <span class="o">+=</span> <span class="nx">arguments</span><span class="p">[</span><span class="nx">value</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">+</span> <span class="mi">1</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-line-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-line-code js-file-line">		<span class="k">else</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-line-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-line-code js-file-line">			<span class="nx">s</span> <span class="o">+=</span> <span class="s2">&quot;{&quot;</span><span class="o">+</span> <span class="nx">value</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">+</span><span class="s2">&quot;}&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-line-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-line-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-line-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-line-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L229" class="blob-line-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-line-code js-file-line">	<span class="k">return</span> <span class="nx">s</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-line-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-line-code js-file-line"><span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-line-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L232" class="blob-line-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-line-code js-file-line"><span class="cm">/** Language reported by browser, normalized code */</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-line-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-line-code js-file-line"><span class="nx">$</span><span class="p">.</span><span class="nx">i18n</span><span class="p">.</span><span class="nx">browserLang</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-line-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-line-code js-file-line">	<span class="k">return</span> <span class="nx">normaliseLanguageCode</span><span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">language</span> <span class="cm">/* Mozilla */</span> <span class="o">||</span> <span class="nx">navigator</span><span class="p">.</span><span class="nx">userLanguage</span> <span class="cm">/* IE */</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-line-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-line-code js-file-line"><span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-line-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L237" class="blob-line-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L238" class="blob-line-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-line-code js-file-line"><span class="cm">/** Load and parse .properties files */</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-line-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-line-code js-file-line"><span class="kd">function</span> <span class="nx">loadAndParseFile</span><span class="p">(</span><span class="nx">filename</span><span class="p">,</span> <span class="nx">settings</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-line-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-line-code js-file-line">	<span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-line-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-line-code js-file-line">        <span class="nx">url</span><span class="o">:</span>        <span class="nx">filename</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-line-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-line-code js-file-line">        <span class="nx">async</span><span class="o">:</span>      <span class="kc">false</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L243" class="blob-line-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-line-code js-file-line">        <span class="nx">cache</span><span class="o">:</span>		<span class="nx">settings</span><span class="p">.</span><span class="nx">cache</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-line-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-line-code js-file-line">        <span class="nx">contentType</span><span class="o">:</span><span class="s1">&#39;text/plain;charset=&#39;</span><span class="o">+</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">encoding</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-line-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-line-code js-file-line">        <span class="nx">dataType</span><span class="o">:</span>   <span class="s1">&#39;text&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-line-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-line-code js-file-line">        <span class="nx">success</span><span class="o">:</span>    <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">status</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-line-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-line-code js-file-line">        				<span class="nx">parseData</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">mode</span><span class="p">);</span> </td>
      </tr>
      <tr>
        <td id="L248" class="blob-line-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-line-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-line-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-line-code js-file-line">    <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-line-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-line-code js-file-line"><span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-line-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L252" class="blob-line-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-line-code js-file-line"><span class="cm">/** Parse .properties files */</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-line-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-line-code js-file-line"><span class="kd">function</span> <span class="nx">parseData</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">mode</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-line-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-line-code js-file-line">   <span class="kd">var</span> <span class="nx">parsed</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-line-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-line-code js-file-line">   <span class="kd">var</span> <span class="nx">parameters</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span> <span class="sr">/\n/</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-line-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-line-code js-file-line">   <span class="kd">var</span> <span class="nx">regPlaceHolder</span> <span class="o">=</span> <span class="sr">/(\{\d+\})/g</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-line-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-line-code js-file-line">   <span class="kd">var</span> <span class="nx">regRepPlaceHolder</span> <span class="o">=</span> <span class="sr">/\{(\d+)\}/g</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L258" class="blob-line-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-line-code js-file-line">   <span class="kd">var</span> <span class="nx">unicodeRE</span> <span class="o">=</span> <span class="sr">/(\\u.{4})/ig</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-line-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-line-code js-file-line">   <span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">parameters</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-line-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-line-code js-file-line">       <span class="nx">parameters</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">parameters</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span> <span class="sr">/^\s\s*/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span> <span class="p">).</span><span class="nx">replace</span><span class="p">(</span> <span class="sr">/\s\s*$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span> <span class="p">);</span> <span class="c1">// trim</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-line-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-line-code js-file-line">       <span class="k">if</span><span class="p">(</span><span class="nx">parameters</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">parameters</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">match</span><span class="p">(</span><span class="s2">&quot;^#&quot;</span><span class="p">)</span><span class="o">!=</span><span class="s2">&quot;#&quot;</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// skip comments</span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-line-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-line-code js-file-line">           <span class="kd">var</span> <span class="nx">pair</span> <span class="o">=</span> <span class="nx">parameters</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;=&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-line-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-line-code js-file-line">           <span class="k">if</span><span class="p">(</span><span class="nx">pair</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-line-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-line-code js-file-line">               <span class="cm">/** Process key &amp; value */</span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-line-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-line-code js-file-line">               <span class="kd">var</span> <span class="nx">name</span> <span class="o">=</span> <span class="nx">unescape</span><span class="p">(</span><span class="nx">pair</span><span class="p">[</span><span class="mi">0</span><span class="p">]).</span><span class="nx">replace</span><span class="p">(</span> <span class="sr">/^\s\s*/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span> <span class="p">).</span><span class="nx">replace</span><span class="p">(</span> <span class="sr">/\s\s*$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span> <span class="p">);</span> <span class="c1">// trim</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-line-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-line-code js-file-line">               <span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">pair</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">?</span> <span class="s2">&quot;&quot;</span> <span class="o">:</span> <span class="nx">pair</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-line-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-line-code js-file-line">               <span class="c1">// process multi-line values</span></td>
      </tr>
      <tr>
        <td id="L268" class="blob-line-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-line-code js-file-line">               <span class="k">while</span><span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/\\$/</span><span class="p">)</span><span class="o">==</span><span class="s2">&quot;\\&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-line-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-line-code js-file-line">               		<span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-line-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-line-code js-file-line">               		<span class="nx">value</span> <span class="o">+=</span> <span class="nx">parameters</span><span class="p">[</span><span class="o">++</span><span class="nx">i</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span> <span class="sr">/\s\s*$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span> <span class="p">);</span> <span class="c1">// right trim</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-line-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-line-code js-file-line">               <span class="p">}</span>               </td>
      </tr>
      <tr>
        <td id="L272" class="blob-line-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-line-code js-file-line">               <span class="c1">// Put values with embedded &#39;=&#39;s back together</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-line-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-line-code js-file-line">               <span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">s</span><span class="o">=</span><span class="mi">2</span><span class="p">;</span><span class="nx">s</span><span class="o">&lt;</span><span class="nx">pair</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">s</span><span class="o">++</span><span class="p">){</span> <span class="nx">value</span> <span class="o">+=</span><span class="s1">&#39;=&#39;</span> <span class="o">+</span> <span class="nx">pair</span><span class="p">[</span><span class="nx">s</span><span class="p">];</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-line-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-line-code js-file-line">               <span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="sr">/^\s\s*/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span> <span class="p">).</span><span class="nx">replace</span><span class="p">(</span> <span class="sr">/\s\s*$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span> <span class="p">);</span> <span class="c1">// trim</span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-line-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-line-code js-file-line">               </td>
      </tr>
      <tr>
        <td id="L276" class="blob-line-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-line-code js-file-line">               <span class="cm">/** Mode: bundle keys in a map */</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-line-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-line-code js-file-line">               <span class="k">if</span><span class="p">(</span><span class="nx">mode</span> <span class="o">==</span> <span class="s1">&#39;map&#39;</span> <span class="o">||</span> <span class="nx">mode</span> <span class="o">==</span> <span class="s1">&#39;both&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-line-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-line-code js-file-line">                   <span class="c1">// handle unicode chars possibly left out</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-line-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-line-code js-file-line">                   <span class="kd">var</span> <span class="nx">unicodeMatches</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">unicodeRE</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-line-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-line-code js-file-line">                   <span class="k">if</span><span class="p">(</span><span class="nx">unicodeMatches</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-line-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-line-code js-file-line">                     <span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">u</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">u</span><span class="o">&lt;</span><span class="nx">unicodeMatches</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">u</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-line-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-line-code js-file-line">                        <span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">unicodeMatches</span><span class="p">[</span><span class="nx">u</span><span class="p">],</span> <span class="nx">unescapeUnicode</span><span class="p">(</span><span class="nx">unicodeMatches</span><span class="p">[</span><span class="nx">u</span><span class="p">]));</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-line-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-line-code js-file-line">                     <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-line-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-line-code js-file-line">                   <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-line-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-line-code js-file-line">                   <span class="c1">// add to map</span></td>
      </tr>
      <tr>
        <td id="L286" class="blob-line-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-line-code js-file-line">                   <span class="nx">$</span><span class="p">.</span><span class="nx">i18n</span><span class="p">.</span><span class="nx">map</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-line-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-line-code js-file-line">               <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-line-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-line-code js-file-line">               </td>
      </tr>
      <tr>
        <td id="L289" class="blob-line-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-line-code js-file-line">               <span class="cm">/** Mode: bundle keys as vars/functions */</span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-line-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-line-code js-file-line">               <span class="k">if</span><span class="p">(</span><span class="nx">mode</span> <span class="o">==</span> <span class="s1">&#39;vars&#39;</span> <span class="o">||</span> <span class="nx">mode</span> <span class="o">==</span> <span class="s1">&#39;both&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L291" class="blob-line-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-line-code js-file-line">                   <span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="sr">/&quot;/g</span><span class="p">,</span> <span class="s1">&#39;\\&quot;&#39;</span> <span class="p">);</span> <span class="c1">// escape quotation mark (&quot;)</span></td>
      </tr>
      <tr>
        <td id="L292" class="blob-line-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-line-code js-file-line">                   </td>
      </tr>
      <tr>
        <td id="L293" class="blob-line-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-line-code js-file-line">                   <span class="c1">// make sure namespaced key exists (eg, &#39;some.key&#39;) </span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-line-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-line-code js-file-line">                   <span class="nx">checkKeyNamespace</span><span class="p">(</span><span class="nx">name</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-line-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-line-code js-file-line">                   </td>
      </tr>
      <tr>
        <td id="L296" class="blob-line-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-line-code js-file-line">                   <span class="c1">// value with variable substitutions</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-line-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-line-code js-file-line">                   <span class="k">if</span><span class="p">(</span><span class="nx">regPlaceHolder</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-line-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-line-code js-file-line">                       <span class="kd">var</span> <span class="nx">parts</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="nx">regPlaceHolder</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-line-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-line-code js-file-line">                       <span class="c1">// process function args</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-line-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-line-code js-file-line">                       <span class="kd">var</span> <span class="nx">first</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L301" class="blob-line-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-line-code js-file-line">                       <span class="kd">var</span> <span class="nx">fnArgs</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-line-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-line-code js-file-line">                       <span class="kd">var</span> <span class="nx">usedArgs</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-line-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-line-code js-file-line">                       <span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">p</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">p</span><span class="o">&lt;</span><span class="nx">parts</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">p</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L304" class="blob-line-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-line-code js-file-line">                           <span class="k">if</span><span class="p">(</span><span class="nx">regPlaceHolder</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">parts</span><span class="p">[</span><span class="nx">p</span><span class="p">])</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">usedArgs</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">usedArgs</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">parts</span><span class="p">[</span><span class="nx">p</span><span class="p">])</span> <span class="o">==</span> <span class="o">-</span><span class="mi">1</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-line-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-line-code js-file-line">                               <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">first</span><span class="p">)</span> <span class="p">{</span><span class="nx">fnArgs</span> <span class="o">+=</span> <span class="s1">&#39;,&#39;</span><span class="p">;}</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-line-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-line-code js-file-line">                               <span class="nx">fnArgs</span> <span class="o">+=</span> <span class="nx">parts</span><span class="p">[</span><span class="nx">p</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span><span class="nx">regRepPlaceHolder</span><span class="p">,</span> <span class="s1">&#39;v$1&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-line-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-line-code js-file-line">                               <span class="nx">usedArgs</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">parts</span><span class="p">[</span><span class="nx">p</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-line-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-line-code js-file-line">                               <span class="nx">first</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-line-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-line-code js-file-line">                           <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-line-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-line-code js-file-line">                       <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L311" class="blob-line-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-line-code js-file-line">                       <span class="nx">parsed</span> <span class="o">+=</span> <span class="nx">name</span> <span class="o">+</span> <span class="s1">&#39;=function(&#39;</span> <span class="o">+</span> <span class="nx">fnArgs</span> <span class="o">+</span> <span class="s1">&#39;){&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-line-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-line-code js-file-line">                       <span class="c1">// process function body</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-line-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-line-code js-file-line">                       <span class="kd">var</span> <span class="nx">fnExpr</span> <span class="o">=</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span> <span class="nx">value</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">regRepPlaceHolder</span><span class="p">,</span> <span class="s1">&#39;&quot;+v$1+&quot;&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-line-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-line-code js-file-line">                       <span class="nx">parsed</span> <span class="o">+=</span> <span class="s1">&#39;return &#39;</span> <span class="o">+</span> <span class="nx">fnExpr</span> <span class="o">+</span> <span class="s1">&#39;;&#39;</span> <span class="o">+</span> <span class="s1">&#39;};&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-line-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-line-code js-file-line">                       </td>
      </tr>
      <tr>
        <td id="L316" class="blob-line-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-line-code js-file-line">                   <span class="c1">// simple value</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-line-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-line-code js-file-line">                   <span class="p">}</span><span class="k">else</span><span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-line-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-line-code js-file-line">                       <span class="nx">parsed</span> <span class="o">+=</span> <span class="nx">name</span><span class="o">+</span><span class="s1">&#39;=&quot;&#39;</span><span class="o">+</span><span class="nx">value</span><span class="o">+</span><span class="s1">&#39;&quot;;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-line-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-line-code js-file-line">                   <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-line-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-line-code js-file-line">               <span class="p">}</span> <span class="c1">// END: Mode: bundle keys as vars/functions</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-line-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-line-code js-file-line">           <span class="p">}</span> <span class="c1">// END: if(pair.length &gt; 0)</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-line-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-line-code js-file-line">       <span class="p">}</span> <span class="c1">// END: skip comments</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-line-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-line-code js-file-line">   <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-line-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-line-code js-file-line">   <span class="nb">eval</span><span class="p">(</span><span class="nx">parsed</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-line-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-line-code js-file-line"><span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-line-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L327" class="blob-line-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-line-code js-file-line"><span class="cm">/** Make sure namespace exists (for keys with dots in name) */</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-line-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-line-code js-file-line"><span class="c1">// TODO key parts that start with numbers quietly fail. i.e. month.short.1=Jan</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-line-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-line-code js-file-line"><span class="kd">function</span> <span class="nx">checkKeyNamespace</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-line-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-line-code js-file-line">	<span class="kd">var</span> <span class="nx">regDot</span> <span class="o">=</span> <span class="sr">/\./</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L331" class="blob-line-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-line-code js-file-line">	<span class="k">if</span><span class="p">(</span><span class="nx">regDot</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">key</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-line-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-line-code js-file-line">		<span class="kd">var</span> <span class="nx">fullname</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-line-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-line-code js-file-line">		<span class="kd">var</span> <span class="nx">names</span> <span class="o">=</span> <span class="nx">key</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span> <span class="sr">/\./</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-line-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-line-code js-file-line">		<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">names</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L335" class="blob-line-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-line-code js-file-line">			<span class="k">if</span><span class="p">(</span><span class="nx">i</span><span class="o">&gt;</span><span class="mi">0</span><span class="p">)</span> <span class="p">{</span><span class="nx">fullname</span> <span class="o">+=</span> <span class="s1">&#39;.&#39;</span><span class="p">;}</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-line-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-line-code js-file-line">			<span class="nx">fullname</span> <span class="o">+=</span> <span class="nx">names</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L337" class="blob-line-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-line-code js-file-line">			<span class="k">if</span><span class="p">(</span><span class="nb">eval</span><span class="p">(</span><span class="s1">&#39;typeof &#39;</span><span class="o">+</span><span class="nx">fullname</span><span class="o">+</span><span class="s1">&#39; == &quot;undefined&quot;&#39;</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-line-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-line-code js-file-line">				<span class="nb">eval</span><span class="p">(</span><span class="nx">fullname</span> <span class="o">+</span> <span class="s1">&#39;={};&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-line-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-line-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-line-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-line-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-line-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-line-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-line-code js-file-line"><span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-line-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L344" class="blob-line-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-line-code js-file-line"><span class="cm">/** Make sure filename is an array */</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-line-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-line-code js-file-line"><span class="kd">function</span> <span class="nx">getFiles</span><span class="p">(</span><span class="nx">names</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-line-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-line-code js-file-line">	<span class="k">return</span> <span class="p">(</span><span class="nx">names</span> <span class="o">&amp;&amp;</span> <span class="nx">names</span><span class="p">.</span><span class="nx">constructor</span> <span class="o">==</span> <span class="nb">Array</span><span class="p">)</span> <span class="o">?</span> <span class="nx">names</span> <span class="o">:</span> <span class="p">[</span><span class="nx">names</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L347" class="blob-line-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-line-code js-file-line"><span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-line-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L349" class="blob-line-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-line-code js-file-line"><span class="cm">/** Ensure language code is in the format aa_AA. */</span></td>
      </tr>
      <tr>
        <td id="L350" class="blob-line-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-line-code js-file-line"><span class="kd">function</span> <span class="nx">normaliseLanguageCode</span><span class="p">(</span><span class="nx">lang</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L351" class="blob-line-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-line-code js-file-line">    <span class="nx">lang</span> <span class="o">=</span> <span class="nx">lang</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-line-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-line-code js-file-line">    <span class="k">if</span><span class="p">(</span><span class="nx">lang</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">3</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-line-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-line-code js-file-line">        <span class="nx">lang</span> <span class="o">=</span> <span class="nx">lang</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span> <span class="o">+</span> <span class="nx">lang</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">3</span><span class="p">).</span><span class="nx">toUpperCase</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L354" class="blob-line-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-line-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="nx">lang</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-line-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-line-code js-file-line"><span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-line-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L358" class="blob-line-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-line-code js-file-line"><span class="cm">/** Unescape unicode chars (&#39;\u00e3&#39;) */</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-line-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-line-code js-file-line"><span class="kd">function</span> <span class="nx">unescapeUnicode</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-line-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-line-code js-file-line">  <span class="c1">// unescape unicode codes</span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-line-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">codes</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-line-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">code</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">str</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">2</span><span class="p">),</span> <span class="mi">16</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L363" class="blob-line-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-line-code js-file-line">  <span class="k">if</span> <span class="p">(</span><span class="nx">code</span> <span class="o">&gt;=</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">code</span> <span class="o">&lt;</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">16</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-line-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-line-code js-file-line">     <span class="nx">codes</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">code</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L365" class="blob-line-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-line-code js-file-line">  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-line-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-line-code js-file-line">  <span class="c1">// convert codes to text</span></td>
      </tr>
      <tr>
        <td id="L367" class="blob-line-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">unescaped</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L368" class="blob-line-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-line-code js-file-line">  <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">codes</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L369" class="blob-line-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-line-code js-file-line">    <span class="nx">unescaped</span> <span class="o">+=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">codes</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L370" class="blob-line-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-line-code js-file-line">  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L371" class="blob-line-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-line-code js-file-line">  <span class="k">return</span> <span class="nx">unescaped</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-line-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-line-code js-file-line"><span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-line-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L374" class="blob-line-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-line-code js-file-line"><span class="cm">/* Cross-Browser Split 1.0.1</span></td>
      </tr>
      <tr>
        <td id="L375" class="blob-line-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-line-code js-file-line"><span class="cm">(c) Steven Levithan &lt;stevenlevithan.com&gt;; MIT License</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-line-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-line-code js-file-line"><span class="cm">An ECMA-compliant, uniform cross-browser split method */</span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-line-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-line-code js-file-line"><span class="kd">var</span> <span class="nx">cbSplit</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L378" class="blob-line-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-line-code js-file-line"><span class="c1">// avoid running twice, which would break `cbSplit._nativeSplit`&#39;s reference to the native `split`</span></td>
      </tr>
      <tr>
        <td id="L379" class="blob-line-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-line-code js-file-line"><span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">cbSplit</span><span class="p">)</span> <span class="p">{</span>    </td>
      </tr>
      <tr>
        <td id="L380" class="blob-line-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-line-code js-file-line">  <span class="nx">cbSplit</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">,</span> <span class="nx">separator</span><span class="p">,</span> <span class="nx">limit</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L381" class="blob-line-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-line-code js-file-line">      <span class="c1">// if `separator` is not a regex, use the native `split`</span></td>
      </tr>
      <tr>
        <td id="L382" class="blob-line-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">separator</span><span class="p">)</span> <span class="o">!==</span> <span class="s2">&quot;[object RegExp]&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-line-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-line-code js-file-line">        <span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">cbSplit</span><span class="p">.</span><span class="nx">_nativeSplit</span> <span class="o">==</span> <span class="s2">&quot;undefined&quot;</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-line-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">str</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="nx">separator</span><span class="p">,</span> <span class="nx">limit</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-line-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-line-code js-file-line">        <span class="k">else</span></td>
      </tr>
      <tr>
        <td id="L386" class="blob-line-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">cbSplit</span><span class="p">.</span><span class="nx">_nativeSplit</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">str</span><span class="p">,</span> <span class="nx">separator</span><span class="p">,</span> <span class="nx">limit</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-line-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-line-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-line-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L389" class="blob-line-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">output</span> <span class="o">=</span> <span class="p">[],</span></td>
      </tr>
      <tr>
        <td id="L390" class="blob-line-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-line-code js-file-line">          <span class="nx">lastLastIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-line-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-line-code js-file-line">          <span class="nx">flags</span> <span class="o">=</span> <span class="p">(</span><span class="nx">separator</span><span class="p">.</span><span class="nx">ignoreCase</span> <span class="o">?</span> <span class="s2">&quot;i&quot;</span> <span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">)</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L392" class="blob-line-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-line-code js-file-line">                  <span class="p">(</span><span class="nx">separator</span><span class="p">.</span><span class="nx">multiline</span>  <span class="o">?</span> <span class="s2">&quot;m&quot;</span> <span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">)</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L393" class="blob-line-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-line-code js-file-line">                  <span class="p">(</span><span class="nx">separator</span><span class="p">.</span><span class="nx">sticky</span>     <span class="o">?</span> <span class="s2">&quot;y&quot;</span> <span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-line-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-line-code js-file-line">          <span class="nx">separator</span> <span class="o">=</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">separator</span><span class="p">.</span><span class="nx">source</span><span class="p">,</span> <span class="nx">flags</span> <span class="o">+</span> <span class="s2">&quot;g&quot;</span><span class="p">),</span> <span class="c1">// make `global` and avoid `lastIndex` issues by working with a copy</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-line-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-line-code js-file-line">          <span class="nx">separator2</span><span class="p">,</span> <span class="nx">match</span><span class="p">,</span> <span class="nx">lastIndex</span><span class="p">,</span> <span class="nx">lastLength</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-line-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-line-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L397" class="blob-line-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-line-code js-file-line">      <span class="nx">str</span> <span class="o">=</span> <span class="nx">str</span> <span class="o">+</span> <span class="s2">&quot;&quot;</span><span class="p">;</span> <span class="c1">// type conversion</span></td>
      </tr>
      <tr>
        <td id="L398" class="blob-line-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">cbSplit</span><span class="p">.</span><span class="nx">_compliantExecNpcg</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L399" class="blob-line-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-line-code js-file-line">          <span class="nx">separator2</span> <span class="o">=</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;^&quot;</span> <span class="o">+</span> <span class="nx">separator</span><span class="p">.</span><span class="nx">source</span> <span class="o">+</span> <span class="s2">&quot;$(?!\\s)&quot;</span><span class="p">,</span> <span class="nx">flags</span><span class="p">);</span> <span class="c1">// doesn&#39;t need /g or /y, but they don&#39;t hurt</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-line-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-line-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-line-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L402" class="blob-line-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-line-code js-file-line">      <span class="cm">/* behavior for `limit`: if it&#39;s...</span></td>
      </tr>
      <tr>
        <td id="L403" class="blob-line-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-line-code js-file-line"><span class="cm">      - `undefined`: no limit.</span></td>
      </tr>
      <tr>
        <td id="L404" class="blob-line-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-line-code js-file-line"><span class="cm">      - `NaN` or zero: return an empty array.</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-line-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-line-code js-file-line"><span class="cm">      - a positive number: use `Math.floor(limit)`.</span></td>
      </tr>
      <tr>
        <td id="L406" class="blob-line-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-line-code js-file-line"><span class="cm">      - a negative number: no limit.</span></td>
      </tr>
      <tr>
        <td id="L407" class="blob-line-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-line-code js-file-line"><span class="cm">      - other: type-convert, then use the above rules. */</span></td>
      </tr>
      <tr>
        <td id="L408" class="blob-line-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">limit</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">||</span> <span class="o">+</span><span class="nx">limit</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L409" class="blob-line-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-line-code js-file-line">          <span class="nx">limit</span> <span class="o">=</span> <span class="kc">Infinity</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L410" class="blob-line-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-line-code js-file-line">      <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L411" class="blob-line-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-line-code js-file-line">          <span class="nx">limit</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="o">+</span><span class="nx">limit</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-line-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">limit</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-line-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-line-code js-file-line">              <span class="k">return</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-line-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L415" class="blob-line-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L416" class="blob-line-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-line-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L417" class="blob-line-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-line-code js-file-line">      <span class="k">while</span> <span class="p">(</span><span class="nx">match</span> <span class="o">=</span> <span class="nx">separator</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">str</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-line-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-line-code js-file-line">          <span class="nx">lastIndex</span> <span class="o">=</span> <span class="nx">match</span><span class="p">.</span><span class="nx">index</span> <span class="o">+</span> <span class="nx">match</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span> <span class="c1">// `separator.lastIndex` is not reliable cross-browser</span></td>
      </tr>
      <tr>
        <td id="L419" class="blob-line-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-line-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L420" class="blob-line-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">lastIndex</span> <span class="o">&gt;</span> <span class="nx">lastLastIndex</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L421" class="blob-line-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-line-code js-file-line">              <span class="nx">output</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">str</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="nx">lastLastIndex</span><span class="p">,</span> <span class="nx">match</span><span class="p">.</span><span class="nx">index</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-line-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-line-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L423" class="blob-line-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-line-code js-file-line">              <span class="c1">// fix browsers whose `exec` methods don&#39;t consistently return `undefined` for nonparticipating capturing groups</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-line-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">cbSplit</span><span class="p">.</span><span class="nx">_compliantExecNpcg</span> <span class="o">&amp;&amp;</span> <span class="nx">match</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-line-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-line-code js-file-line">                  <span class="nx">match</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span><span class="nx">separator2</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-line-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-line-code js-file-line">                      <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">2</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L427" class="blob-line-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-line-code js-file-line">                          <span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L428" class="blob-line-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-line-code js-file-line">                              <span class="nx">match</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-line-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-line-code js-file-line">                          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-line-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-line-code js-file-line">                      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-line-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-line-code js-file-line">                  <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-line-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-line-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-line-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L434" class="blob-line-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">match</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">match</span><span class="p">.</span><span class="nx">index</span> <span class="o">&lt;</span> <span class="nx">str</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L435" class="blob-line-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-line-code js-file-line">                  <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">output</span><span class="p">,</span> <span class="nx">match</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L436" class="blob-line-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L437" class="blob-line-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-line-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L438" class="blob-line-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-line-code js-file-line">              <span class="nx">lastLength</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-line-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-line-code js-file-line">              <span class="nx">lastLastIndex</span> <span class="o">=</span> <span class="nx">lastIndex</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L440" class="blob-line-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-line-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L441" class="blob-line-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">output</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="nx">limit</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-line-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-line-code js-file-line">                  <span class="k">break</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L443" class="blob-line-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-line-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-line-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-line-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L446" class="blob-line-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">separator</span><span class="p">.</span><span class="nx">lastIndex</span> <span class="o">===</span> <span class="nx">match</span><span class="p">.</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-line-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-line-code js-file-line">              <span class="nx">separator</span><span class="p">.</span><span class="nx">lastIndex</span><span class="o">++</span><span class="p">;</span> <span class="c1">// avoid an infinite loop</span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-line-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-line-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L450" class="blob-line-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-line-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L451" class="blob-line-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-line-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">lastLastIndex</span> <span class="o">===</span> <span class="nx">str</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-line-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">lastLength</span> <span class="o">||</span> <span class="o">!</span><span class="nx">separator</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L453" class="blob-line-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-line-code js-file-line">              <span class="nx">output</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-line-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-line-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-line-code js-file-line">      <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L456" class="blob-line-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-line-code js-file-line">          <span class="nx">output</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">str</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="nx">lastLastIndex</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L457" class="blob-line-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L458" class="blob-line-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-line-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L459" class="blob-line-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-line-code js-file-line">      <span class="k">return</span> <span class="nx">output</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="nx">limit</span> <span class="o">?</span> <span class="nx">output</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">limit</span><span class="p">)</span> <span class="o">:</span> <span class="nx">output</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L460" class="blob-line-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-line-code js-file-line">  <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-line-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-line-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L462" class="blob-line-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-line-code js-file-line">  <span class="nx">cbSplit</span><span class="p">.</span><span class="nx">_compliantExecNpcg</span> <span class="o">=</span> <span class="sr">/()??/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">)[</span><span class="mi">1</span><span class="p">]</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">;</span> <span class="c1">// NPCG: nonparticipating capturing group</span></td>
      </tr>
      <tr>
        <td id="L463" class="blob-line-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-line-code js-file-line">  <span class="nx">cbSplit</span><span class="p">.</span><span class="nx">_nativeSplit</span> <span class="o">=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">split</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L464" class="blob-line-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L465" class="blob-line-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-line-code js-file-line"><span class="p">}</span> <span class="c1">// end `if (!cbSplit)`</span></td>
      </tr>
      <tr>
        <td id="L466" class="blob-line-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-line-code js-file-line"><span class="nb">String</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">split</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">separator</span><span class="p">,</span> <span class="nx">limit</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-line-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-line-code js-file-line">    <span class="k">return</span> <span class="nx">cbSplit</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">separator</span><span class="p">,</span> <span class="nx">limit</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L468" class="blob-line-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-line-code js-file-line"><span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-line-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L470" class="blob-line-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-line-code js-file-line"><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L471" class="blob-line-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-line-code js-file-line">                </td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.06247s from github-fe130-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-12d5fda141e78e513749dddbc56445fe172cbd9a.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-f8cf379f177c2fd3562514979aef2b0ea1ccc9a2.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

