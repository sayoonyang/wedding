function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  $temp.focus();
  document.execCommand("copy");
  alert(`복사되었습니다. :D`);
  $temp.remove();
}
