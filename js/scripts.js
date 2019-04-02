//First user submits a sentence.
//When its submitted we want to hide the original
//take the vowels out and return the Puzzle
//loop through the string with for  and change vowels to dashes
// loop through the array and replace each vowel with a "-"
//
// $(document).ready(function(){
//   $("form").submit(function(event) {
//     event.preventDefault();
//       var input = $("#inputString").val();
//       var vowels = ["a","e","i","o","u"];
//       var output = "";
//         console.log("after variables");
//       for(var i=0;i<=input.length; i++){
//         var trueOrFalse = false;
//
//       for(var x=0; x<=vowels.length; x++) {
//
//           if (vowels[x]===input.charAt(i)){
//             trueOrFalse =true;
//
//
//
//           }
//
//         }
//         if(output+ "-")
//       }
//
//         });
//                 });

$(document).ready(function(){
    $("form").submit(function(event) {
      event.preventDefault();

      var input = $("#inputString").val();
      var vowels = ["a","e","i","o","u"];

      input = input.split("");

      for(x=0;x< input.length; x++){
        if(vowels.includes(input[x].toLowerCase())){
          input[x]="-";
        }
      }
      input =input.join("");
      console.log(input);
   });

 });
