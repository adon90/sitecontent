// Generic/Common javascript functions

// Functions, some use jquery

// On document ready
$(document).ready(function() {

  // highlight.js
  $('.code pre').each(function(i, e) {hljs.highlightBlock(e)});

  // Enable comment form toggle pane link
  $("#addCommentLink").click(function() {
      $("#addCommentPane").toggle();
      // if shown then fetch a captcha image now
      if($("#addCommentPane").is(":visible"))
        $("#captchca").attr("src", "/_/captcha");
      return false;
  });

  // Enable comment form Ajax submit
  $("#addCommentForm").submit(function(event) {
    event.preventDefault();

    $.post('/_/commentAdd', $("#addCommentForm").serialize() ,
      function( data ) {
        // if success, hide comment box and refresh comments
        $("#addCommentPane").hide();
        fetchComments(0);
      }
    ).error(function(data) { alert(data.responseText); })
  });

  // Fetch the latest comments upon page load
  fetchComments(0);
});

// function to fetch comments via Ajax / Json */
function fetchComments(offset)
{
  $.getJSON('/_/comments?offset='+offset, function(data) {
    if(typeof data.first === 'undefined') {return ;}
    var pagination = '<b>Showing comments '+(data.first+1)+' - ' +
               (data.first + data.comments.length)+' of '+data.total+'</b>';
    if(data.first > 0)
    {
      pagination += ' | <a href="#" onClick="javascript:fetchComments(' +
               (data.first - data.pageSize)+');return false;">newer comments</a>';
    }
    if(data.total > data.first + data.comments.length)
    {
      pagination += ' | <a href="#" onClick="javascript:fetchComments(' +
               (data.first + data.pageSize)+');return false;">older comments</a>';
    }
    pagination += '<hr/>';
    var comments = [];
    $.each(data.comments, function(idx, comment) {
      comments.push('<div><b>Post time:</b> '+comment.date+' <b>By:</b> '+comment.author+
        '<br/><b>Title: '+comment.title+'</b><br/><pre class="wrapped_pre">'+comment.text+'</pre></div><hr/>');
    });
    $("#comments").html(pagination + comments.join('\n'));
  });
  return false;
};

function openAddThis(publisher)
{
  var url='http://www.addthis.com/bookmark.php?v=1&pub='+publisher+'&url='+encodeURIComponent(document.location)+'&title='+encodeURIComponent(document.title);
  window.open(url);
  return;
}




