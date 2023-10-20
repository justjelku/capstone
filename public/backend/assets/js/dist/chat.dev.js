"use strict";

$(function () {
  'use strict'; // Applying perfect-scrollbar 

  if ($('.chat-aside .tab-content #chats').length) {
    var sidebarBodyScroll = new PerfectScrollbar('.chat-aside .tab-content #chats');
  }

  if ($('.chat-aside .tab-content #calls').length) {
    var _sidebarBodyScroll = new PerfectScrollbar('.chat-aside .tab-content #calls');
  }

  if ($('.chat-aside .tab-content #contacts').length) {
    var _sidebarBodyScroll2 = new PerfectScrollbar('.chat-aside .tab-content #contacts');
  }

  if ($('.chat-content .chat-body').length) {
    var _sidebarBodyScroll3 = new PerfectScrollbar('.chat-content .chat-body');
  }

  $('.chat-list .chat-item').each(function (index) {
    $(this).on('click', function () {
      $('.chat-content').toggleClass('show');
    });
  });
  $('#backToChatList').on('click', function (index) {
    $('.chat-content').toggleClass('show');
  });
});