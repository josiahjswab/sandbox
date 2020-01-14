function moveVowel(input) 
{
  var cs = "";
  var vs = "";
  for(var i=0;i<input.length;i++)
  {
    if("aeiouAEIOU".indexOf(input.charAt(i)) == -1)
    {
      cs += input.charAt(i);
    }
    else
    {
      vs += input.charAt(i);
    }
  }
  return cs + vs;
}