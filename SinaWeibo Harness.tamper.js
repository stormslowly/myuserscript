// ==UserScript==
// @name       SinaWeibo Harness
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @require    http://lib.sinaapp.com/js/jquery/1.8.2/jquery.js
// @description  enter something useful
// @match      http://www.weibo.com/*
// @match      http://weibo.com/*
// @copyright  2012+, You
// ==/UserScript==

(function(){



  $(func)


function  func(){
    
  var ele = document.querySelector("div[node-type=moreList]");
  if(ele!==null){
    ele.style.cssText="";
  }

//  document.getElementById("pl_rightmod_myinfo").style.cssText="display:none"

  blockBySelector("a[node-type=moreBtn]");
  var block_id_list =[ 
    "pl_content_setSkin",
    "pl_business_enterpriseWeiboNew",
    "trustPagelet_checkin_lotteryv5",
    "pl_rightmod_userguide",
    "trustPagelet_indexright_recom",
    "trustPagelet_recom_memberv5",
    "pl_rightmod_ads36",
    "pl_rightmod_vservice",
    "pl_rightmod_noticeboard",
    "pl_content_bubBox",
  ]
      
  for (var i = block_id_list.length - 1; i >= 0; i--) {
     blockElementById(block_id_list[i]);
  }
}

  function blockElementById(id){
    if(document.getElementById(id)!==null){
      document.getElementById(id).style.cssText="display:none";
    }

  }

  function blockBySelector(sel){
    if(document.querySelector(sel)!==null){
      document.querySelector(sel).style.cssText="display:none";
    }
  }







})()