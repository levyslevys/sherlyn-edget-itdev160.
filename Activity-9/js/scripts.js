var data = [
    {
    id: 1,
    title:'Living',
    body: 'Get busy living or get busy dying.',
    author: 'Stephen King'
    },
    {
    id: 2,
    title:'Opportunities',
    body: 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.',
    author: 'Helen Keller'
    },
    {
    id: 3,
    title:'Failure',
    body: 'Those who dare to fail miserably can achieve greatly.',
    author: 'John F. Kennedy'
    },
    {
    id: 4,
    title:'Friendship',
    body:'I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down.',
    author: 'Abraham Lincoln'
    },
    {
    id: 5,
    title:'Love yourself',
    body:'Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.,
    author: 'Lucille Ball'
    }
  ]
var $nav = $('#nav-container')
var $intro = $('#intro')
var $posts = $('#post-container')

function initPosts() {
  for (var i = 0; i < data.length; i++) {
    // Create elements
    var postId = 'post-' + data[i].id,
      $post = $('<section class="post"></section'),
      $title = $('<h2 class="title"></h2>'),
      $body = $('<p class="quote"></p>'),
      $body = $('<blockquote></blockquote>'),
      $author = $('<span class="author"></span>'),
      $navItem = $('<li></li>')

    // Add post data
    $title.text(data[i].title)
    $body.text(data[i].body)
    $author.text(data[i].author)

    // Add nav item data
    $navItem.attr('id', data[i].id)
    $navItem.text(data[i].title)

    // Combine post elements
    $post.attr('id', postId)
    $post.append($title)
    $post.append($body)
    $post.append($author)

    // Add post and nav elements to page
    $posts.append($post)
    $nav.append($navItem)

    // Wire up nav item click event
    $navItem.on('click', function() {
      var id = $(this).attr('id')
      $posts.children().hide()
      $posts.find('#post-' + id).fadeIn()
    })

    // Hide all posts and show the intro
    $posts.children('.post').hide()
    $intro.fadeIn(1000)
  }
}
initPosts()