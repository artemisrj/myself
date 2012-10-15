 <!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>d3/src/geom/geom.js at master · mbostock/d3 · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.png" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="3HvMqXNJIWvij2HHtImuCF4MXsoBVhiK4DMAT/d0tvs=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-3777cc4451cda1ac4e4f8f2ba6de0bd6b17af5d7.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-a2b11aabdd670190f1de682e5367153bcf2ac02c.css" media="screen" rel="stylesheet" type="text/css" />
    


    <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-ac63e4a1fc7b5030f8c99d5200722f51ed8e7baa.js" type="text/javascript"></script>
    <script defer="defer" src="https://a248.e.akamai.net/assets.github.com/assets/github-b4c07f78e6c6bbda967b3071f067d7fe7587ab18.js" type="text/javascript"></script>
    

      <link rel='permalink' href='/mbostock/d3/blob/e01f789017e7de784811c7c97edc3ddfc9568111/src/geom/geom.js'>
    <meta property="og:title" content="d3"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/mbostock/d3"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-user-420.png?1345673561"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="d3 - A JavaScript visualization library for HTML and SVG."/>

    <meta name="description" content="d3 - A JavaScript visualization library for HTML and SVG." />
  <link href="https://github.com/mbostock/d3/commits/master.atom" rel="alternate" title="Recent Commits to d3:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob windows vis-public env-production ">
    <div id="wrapper">

    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo " href="https://github.com/">
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1337118066" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1337118066" />
          </a>


                  <!--
      make sure to use fully qualified URLs here since this nav
      is used on error pages on other domains
    -->
    <ul class="top-nav logged_out">
        <li class="pricing"><a href="https://github.com/plans">Signup and Pricing</a></li>
        <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
      <li class="features"><a href="https://github.com/features">Features</a></li>
        <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      <li class="login"><a href="https://github.com/login?return_to=%2Fmbostock%2Fd3%2Fblob%2Fmaster%2Fsrc%2Fgeom%2Fgeom.js">Sign in</a></li>
    </ul>



          
        </div>
      </div>

      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="container hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          


              <ul class="pagehead-actions">


          <li>
            <span class="star-button"><a href="/login?return_to=%2Fmbostock%2Fd3" class="minibutton js-toggler-target entice tooltipped leftwards" title="You must be signed in to use this feature" rel="nofollow"><span class="mini-icon mini-icon-star"></span>Star</a><a class="social-count js-social-count" href="/mbostock/d3/stargazers">8,612</a></span>
          </li>
          <li>
            <a href="/login?return_to=%2Fmbostock%2Fd3" class="minibutton js-toggler-target fork-button entice tooltipped leftwards"  title="You must be signed in to fork a repository" rel="nofollow"><span class="mini-icon mini-icon-fork"></span>Fork</a><a href="/mbostock/d3/network" class="social-count">1,213</a>
          </li>
    </ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
            <span class="repo-label"><span>public</span></span>
            <span class="mega-icon mega-icon-public-repo"></span>
            <span class="author vcard">
              <a href="/mbostock" class="url fn" itemprop="url" rel="author">
              <span itemprop="title">mbostock</span>
              </a></span> /
            <strong><a href="/mbostock/d3" class="js-current-repository">d3</a></strong>
          </h1>
        </div>

          

  <ul class="tabs">
    <li><a href="/mbostock/d3" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/mbostock/d3/network" highlight="repo_network">Network</a></li>
    <li><a href="/mbostock/d3/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>42</span></a></li>

      <li><a href="/mbostock/d3/issues" highlight="repo_issues">Issues <span class='counter'>126</span></a></li>

      <li><a href="/mbostock/d3/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/mbostock/d3/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/mbostock/d3/tree-list/e01f789017e7de784811c7c97edc3ddfc9568111"
      data-blob-url-prefix="/mbostock/d3/blob/e01f789017e7de784811c7c97edc3ddfc9568111"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/mbostock/d3">d3</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/mbostock/d3/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        Go
      </button>
    </div>
  </form>
</div>


<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
      <li><a href="/mbostock/d3/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">118</span></a></li>
      <li><a href="/mbostock/d3/downloads" class="tabnav-tab" highlight="repo_downloads">Downloads <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">

    <div class="context-menu-container js-menu-container js-context-menu">
      <a href="#"
         class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
         data-hotkey="w"
         data-master-branch="master"
         data-ref="master">
         <span><em class="mini-icon mini-icon-branch"></em><i>branch:</i> master</span>
      </a>

      <div class="context-pane commitish-context js-menu-content">
        <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
        <div class="context-title">Switch branches/tags</div>
        <div class="context-body pane-selector commitish-selector js-navigation-container">
          <div class="filterbar">
            <input type="text" id="context-commitish-filter-field" class="js-navigation-enable" placeholder="Filter branches/tags" data-filterable />
            <ul class="tabs">
              <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
              <li><a href="#" data-filter="tags">Tags</a></li>
            </ul>
          </div>

          <div class="js-filter-tab js-filter-branches" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
            <div class="no-results js-not-filterable">Nothing to show</div>
              <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/adopt/src/geom/geom.js" class="js-navigation-open" data-name="adopt" rel="nofollow">adopt</a>
                </h4>
              </div>
              <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/fix-nest-rollup/src/geom/geom.js" class="js-navigation-open" data-name="fix-nest-rollup" rel="nofollow">fix-nest-rollup</a>
                </h4>
              </div>
              <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/gh-pages/src/geom/geom.js" class="js-navigation-open" data-name="gh-pages" rel="nofollow">gh-pages</a>
                </h4>
              </div>
              <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/master/src/geom/geom.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                </h4>
              </div>
              <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/projection/src/geom/geom.js" class="js-navigation-open" data-name="projection" rel="nofollow">projection</a>
                </h4>
              </div>
              <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/xhr2/src/geom/geom.js" class="js-navigation-open" data-name="xhr2" rel="nofollow">xhr2</a>
                </h4>
              </div>
          </div>

          <div class="js-filter-tab js-filter-tags" style="display:none" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
            <div class="no-results js-not-filterable">Nothing to show</div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.10.2/src/geom/geom.js" class="js-navigation-open" data-name="v2.10.2" rel="nofollow">v2.10.2</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.10.1/src/geom/geom.js" class="js-navigation-open" data-name="v2.10.1" rel="nofollow">v2.10.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.10.0/src/geom/geom.js" class="js-navigation-open" data-name="v2.10.0" rel="nofollow">v2.10.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.9.7/src/geom/geom.js" class="js-navigation-open" data-name="v2.9.7" rel="nofollow">v2.9.7</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.9.6/src/geom/geom.js" class="js-navigation-open" data-name="v2.9.6" rel="nofollow">v2.9.6</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.9.5/src/geom/geom.js" class="js-navigation-open" data-name="v2.9.5" rel="nofollow">v2.9.5</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.9.4/src/geom/geom.js" class="js-navigation-open" data-name="v2.9.4" rel="nofollow">v2.9.4</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.9.3/src/geom/geom.js" class="js-navigation-open" data-name="v2.9.3" rel="nofollow">v2.9.3</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.9.2/src/geom/geom.js" class="js-navigation-open" data-name="v2.9.2" rel="nofollow">v2.9.2</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.9.1/src/geom/geom.js" class="js-navigation-open" data-name="v2.9.1" rel="nofollow">v2.9.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.9.0/src/geom/geom.js" class="js-navigation-open" data-name="v2.9.0" rel="nofollow">v2.9.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.8.1/src/geom/geom.js" class="js-navigation-open" data-name="v2.8.1" rel="nofollow">v2.8.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.8.0/src/geom/geom.js" class="js-navigation-open" data-name="v2.8.0" rel="nofollow">v2.8.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.7.5/src/geom/geom.js" class="js-navigation-open" data-name="v2.7.5" rel="nofollow">v2.7.5</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.7.4/src/geom/geom.js" class="js-navigation-open" data-name="v2.7.4" rel="nofollow">v2.7.4</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.7.3/src/geom/geom.js" class="js-navigation-open" data-name="v2.7.3" rel="nofollow">v2.7.3</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.7.2/src/geom/geom.js" class="js-navigation-open" data-name="v2.7.2" rel="nofollow">v2.7.2</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.7.1/src/geom/geom.js" class="js-navigation-open" data-name="v2.7.1" rel="nofollow">v2.7.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.7.0/src/geom/geom.js" class="js-navigation-open" data-name="v2.7.0" rel="nofollow">v2.7.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.6.1/src/geom/geom.js" class="js-navigation-open" data-name="v2.6.1" rel="nofollow">v2.6.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.6.0/src/geom/geom.js" class="js-navigation-open" data-name="v2.6.0" rel="nofollow">v2.6.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.5.2/src/geom/geom.js" class="js-navigation-open" data-name="v2.5.2" rel="nofollow">v2.5.2</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.5.1/src/geom/geom.js" class="js-navigation-open" data-name="v2.5.1" rel="nofollow">v2.5.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.5.0/src/geom/geom.js" class="js-navigation-open" data-name="v2.5.0" rel="nofollow">v2.5.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.4.6/src/geom/geom.js" class="js-navigation-open" data-name="v2.4.6" rel="nofollow">v2.4.6</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.4.5/src/geom/geom.js" class="js-navigation-open" data-name="v2.4.5" rel="nofollow">v2.4.5</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.4.4/src/geom/geom.js" class="js-navigation-open" data-name="v2.4.4" rel="nofollow">v2.4.4</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.4.3/src/geom/geom.js" class="js-navigation-open" data-name="v2.4.3" rel="nofollow">v2.4.3</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.4.2/src/geom/geom.js" class="js-navigation-open" data-name="v2.4.2" rel="nofollow">v2.4.2</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.4.1/src/geom/geom.js" class="js-navigation-open" data-name="v2.4.1" rel="nofollow">v2.4.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.4.0/src/geom/geom.js" class="js-navigation-open" data-name="v2.4.0" rel="nofollow">v2.4.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.3.4/src/geom/geom.js" class="js-navigation-open" data-name="v2.3.4" rel="nofollow">v2.3.4</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.3.3/src/geom/geom.js" class="js-navigation-open" data-name="v2.3.3" rel="nofollow">v2.3.3</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.3.2/src/geom/geom.js" class="js-navigation-open" data-name="v2.3.2" rel="nofollow">v2.3.2</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.3.1/src/geom/geom.js" class="js-navigation-open" data-name="v2.3.1" rel="nofollow">v2.3.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.3.0/src/geom/geom.js" class="js-navigation-open" data-name="v2.3.0" rel="nofollow">v2.3.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.2.1/src/geom/geom.js" class="js-navigation-open" data-name="v2.2.1" rel="nofollow">v2.2.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.2.0/src/geom/geom.js" class="js-navigation-open" data-name="v2.2.0" rel="nofollow">v2.2.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.1.3/src/geom/geom.js" class="js-navigation-open" data-name="v2.1.3" rel="nofollow">v2.1.3</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.1.2/src/geom/geom.js" class="js-navigation-open" data-name="v2.1.2" rel="nofollow">v2.1.2</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.1.1/src/geom/geom.js" class="js-navigation-open" data-name="v2.1.1" rel="nofollow">v2.1.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.1.0/src/geom/geom.js" class="js-navigation-open" data-name="v2.1.0" rel="nofollow">v2.1.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.0.4/src/geom/geom.js" class="js-navigation-open" data-name="v2.0.4" rel="nofollow">v2.0.4</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.0.3/src/geom/geom.js" class="js-navigation-open" data-name="v2.0.3" rel="nofollow">v2.0.3</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.0.2/src/geom/geom.js" class="js-navigation-open" data-name="v2.0.2" rel="nofollow">v2.0.2</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.0.1/src/geom/geom.js" class="js-navigation-open" data-name="v2.0.1" rel="nofollow">v2.0.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v2.0.0/src/geom/geom.js" class="js-navigation-open" data-name="v2.0.0" rel="nofollow">v2.0.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.29.7/src/geom/geom.js" class="js-navigation-open" data-name="v1.29.7" rel="nofollow">v1.29.7</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.29.6/src/geom/geom.js" class="js-navigation-open" data-name="v1.29.6" rel="nofollow">v1.29.6</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.29.5/src/geom/geom.js" class="js-navigation-open" data-name="v1.29.5" rel="nofollow">v1.29.5</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.29.4/src/geom/geom.js" class="js-navigation-open" data-name="v1.29.4" rel="nofollow">v1.29.4</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.29.3/src/geom/geom.js" class="js-navigation-open" data-name="v1.29.3" rel="nofollow">v1.29.3</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.29.2/src/geom/geom.js" class="js-navigation-open" data-name="v1.29.2" rel="nofollow">v1.29.2</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.29.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.29.1" rel="nofollow">v1.29.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.29.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.29.0" rel="nofollow">v1.29.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.28.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.28.1" rel="nofollow">v1.28.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.28.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.28.0" rel="nofollow">v1.28.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.27.2/src/geom/geom.js" class="js-navigation-open" data-name="v1.27.2" rel="nofollow">v1.27.2</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.27.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.27.1" rel="nofollow">v1.27.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.27.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.27.0" rel="nofollow">v1.27.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.26.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.26.0" rel="nofollow">v1.26.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.25.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.25.0" rel="nofollow">v1.25.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.24.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.24.1" rel="nofollow">v1.24.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.24.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.24.0" rel="nofollow">v1.24.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.23.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.23.0" rel="nofollow">v1.23.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.22.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.22.1" rel="nofollow">v1.22.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.22.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.22.0" rel="nofollow">v1.22.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.21.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.21.0" rel="nofollow">v1.21.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.20.3/src/geom/geom.js" class="js-navigation-open" data-name="v1.20.3" rel="nofollow">v1.20.3</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.20.2/src/geom/geom.js" class="js-navigation-open" data-name="v1.20.2" rel="nofollow">v1.20.2</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.20.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.20.1" rel="nofollow">v1.20.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.20.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.20.0" rel="nofollow">v1.20.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.19.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.19.1" rel="nofollow">v1.19.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.19.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.19.0" rel="nofollow">v1.19.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.18.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.18.0" rel="nofollow">v1.18.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.17.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.17.1" rel="nofollow">v1.17.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.17.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.17.0" rel="nofollow">v1.17.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.16.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.16.0" rel="nofollow">v1.16.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.15.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.15.1" rel="nofollow">v1.15.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.15.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.15.0" rel="nofollow">v1.15.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.14.2/src/geom/geom.js" class="js-navigation-open" data-name="v1.14.2" rel="nofollow">v1.14.2</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.14.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.14.1" rel="nofollow">v1.14.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.14.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.14.0" rel="nofollow">v1.14.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.13.4/src/geom/geom.js" class="js-navigation-open" data-name="v1.13.4" rel="nofollow">v1.13.4</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.13.3/src/geom/geom.js" class="js-navigation-open" data-name="v1.13.3" rel="nofollow">v1.13.3</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.13.2/src/geom/geom.js" class="js-navigation-open" data-name="v1.13.2" rel="nofollow">v1.13.2</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.13.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.13.1" rel="nofollow">v1.13.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.13.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.13.0" rel="nofollow">v1.13.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.12.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.12.0" rel="nofollow">v1.12.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.11.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.11.1" rel="nofollow">v1.11.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.11.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.11.0" rel="nofollow">v1.11.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.10.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.10.1" rel="nofollow">v1.10.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.10.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.10.0" rel="nofollow">v1.10.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.9.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.9.1" rel="nofollow">v1.9.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.9.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.9.0" rel="nofollow">v1.9.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.8.5/src/geom/geom.js" class="js-navigation-open" data-name="v1.8.5" rel="nofollow">v1.8.5</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.8.4/src/geom/geom.js" class="js-navigation-open" data-name="v1.8.4" rel="nofollow">v1.8.4</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.8.3/src/geom/geom.js" class="js-navigation-open" data-name="v1.8.3" rel="nofollow">v1.8.3</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.8.2/src/geom/geom.js" class="js-navigation-open" data-name="v1.8.2" rel="nofollow">v1.8.2</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.8.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.8.1" rel="nofollow">v1.8.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.8.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.8.0" rel="nofollow">v1.8.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.7.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.7.0" rel="nofollow">v1.7.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.6.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.6.1" rel="nofollow">v1.6.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.6.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.6.0" rel="nofollow">v1.6.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.5.3/src/geom/geom.js" class="js-navigation-open" data-name="v1.5.3" rel="nofollow">v1.5.3</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.5.2/src/geom/geom.js" class="js-navigation-open" data-name="v1.5.2" rel="nofollow">v1.5.2</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.5.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.5.1" rel="nofollow">v1.5.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.5.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.5.0" rel="nofollow">v1.5.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.4.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.4.0" rel="nofollow">v1.4.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.3.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.3.0" rel="nofollow">v1.3.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.2.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.2.1" rel="nofollow">v1.2.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.2.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.2.0" rel="nofollow">v1.2.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.1.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.1.0" rel="nofollow">v1.1.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.0.3/src/geom/geom.js" class="js-navigation-open" data-name="v1.0.3" rel="nofollow">v1.0.3</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.0.2/src/geom/geom.js" class="js-navigation-open" data-name="v1.0.2" rel="nofollow">v1.0.2</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.0.1/src/geom/geom.js" class="js-navigation-open" data-name="v1.0.1" rel="nofollow">v1.0.1</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/v1.0.0/src/geom/geom.js" class="js-navigation-open" data-name="v1.0.0" rel="nofollow">v1.0.0</a>
                </h4>
              </div>
              <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/mbostock/d3/blob/semver/src/geom/geom.js" class="js-navigation-open" data-name="semver" rel="nofollow">semver</a>
                </h4>
              </div>
          </div>
        </div>
      </div><!-- /.commitish-context-context -->
    </div>
  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/mbostock/d3" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/mbostock/d3/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/mbostock/d3/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">6</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:a097a28ef5b10ce879f6d9b296838262 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:a097a28ef5b10ce879f6d9b296838262 -->

<!-- block_view_fragment_key: views10/v8/blob:v21:fb0760ac416534abdb0776fcb995a236 -->

  <div id="slider">

    <div class="breadcrumb" data-path="src/geom/geom.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mbostock/d3/tree/e01f789017e7de784811c7c97edc3ddfc9568111" class="js-rewrite-sha" itemprop="url"><span itemprop="title">d3</span></a></b> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mbostock/d3/tree/e01f789017e7de784811c7c97edc3ddfc9568111/src" class="js-rewrite-sha" itemscope="url"><span itemprop="title">src</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mbostock/d3/tree/e01f789017e7de784811c7c97edc3ddfc9568111/src/geom" class="js-rewrite-sha" itemscope="url"><span itemprop="title">geom</span></a></span> / <strong class="final-path">geom.js</strong> <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="src/geom/geom.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>

      
  <div class="commit file-history-tease js-blob-contributors-content" data-path="src/geom/geom.js/">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/005a27e09fe946ebef64bf4d134efc0a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/mbostock">mbostock</a></span>
    <time class="js-relative-date" datetime="2010-11-07T13:49:59-08:00" title="2010-11-07 13:49:59">November 07, 2010</time>
    <div class="commit-title">
        <a href="/mbostock/d3/commit/a502859902d4be84e0a07a5efbdc67d35133acea" class="message">Add d3.geom module.</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/005a27e09fe946ebef64bf4d134efc0a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mbostock">mbostock</a>
        </li>
      </ul>
    </div>
  </div>


    <div class="frames">
      <div class="frame frame-center" data-path="src/geom/geom.js/" data-permalink-url="/mbostock/d3/blob/e01f789017e7de784811c7c97edc3ddfc9568111/src/geom/geom.js" data-title="d3/src/geom/geom.js at master · mbostock/d3 · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>2 lines (1 sloc)</span>
                <span>0.014 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter js-rewrite-sha" href="/mbostock/d3/edit/e01f789017e7de784811c7c97edc3ddfc9568111/src/geom/geom.js" data-method="post" rel="nofollow" data-hotkey="e">Edit</a>
                  </li>
                <li>
                  <a href="/mbostock/d3/raw/master/src/geom/geom.js" class="minibutton grouped-button bigger lighter" id="raw-url">Raw</a>
                </li>
                  <li>
                    <a href="/mbostock/d3/blame/master/src/geom/geom.js" class="minibutton grouped-button bigger lighter">Blame</a>
                  </li>
                <li>
                  <a href="/mbostock/d3/commits/master/src/geom/geom.js" class="minibutton grouped-button bigger lighter" rel="nofollow">History</a>
                </li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="nx">d3</span><span class="p">.</span><span class="nx">geom</span> <span class="o">=</span> <span class="p">{};</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/mbostock/d3/tree-list/e01f789017e7de784811c7c97edc3ddfc9568111" data-blob-url-prefix="/mbostock/d3/blob/e01f789017e7de784811c7c97edc3ddfc9568111">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543529" height="64" width="64">
</div>

        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Clients</h4>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://windows.github.com/">GitHub for Windows</a></li>
         <li><a href="http://eclipse.github.com/">GitHub for Eclipse</a></li>
         <li><a href="http://mobile.github.com/">GitHub Mobile Apps</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Web analytics</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>

         <h4 class="second">Extras</h4>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.10741s from fe13.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus command bar</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
        <dd>Preview comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
          <dd>Preview comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane" >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1334862345" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton download">Download</a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1334862345" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton download">Download</a>
        </li>
      </ul>
    </div>

    
    
    <span id='server_response_time' data-time='0.10977' data-host='fe13'></span>
    
  </body>
</html>

