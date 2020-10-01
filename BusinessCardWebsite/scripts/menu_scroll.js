var prevScrollpos = window.pageYOffset;
window.onscroll = function()
{
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos)
  {
    document.getElementsByClassName("menu")[0].style.top = "0";
  } else
  {
    document.getElementsByClassName("menu")[0].style.top = "-8vh";
  }
  prevScrollpos = currentScrollPos;
}
