/**
 * Created by Skyler DeGrote on 8/6/15.
 */

//////MAKE VARIABLES HERE


//declare 3 arrays that match json files
var adjectivesArray = [];
var modadjectivesArray = [];
var topicsArray = [];
var min = 1;
var max = 26;


//////MAKE FUNCTIONS HERE
function appendWords(text){
    $(".everything").append("<p>"+ text +"</p>");
}
//random number function to be used three times
function randomNum(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);

}

//push json data into the arrays - DONE
//call random number function on each array and choose one from each one and save to local variable - DONE
//string those three words together
//append to DOM with jquery
//at beginning of calling function we need to clear the dom before putting another string on - DONE

///////CLICK EVENTS AND OTHER THINGS IN DOC.READY
$(document).ready(function(){
    console.log("working!");
    //ajax call for adjectives.json
    $.ajax({
        url: "/adjectives",
        success: function(adj){
            adjectivesArray = adj;
            console.log(adjectivesArray);
        }
    });
//ajax call for modadjectives.json
    $.ajax({
        url: "/modadjectives",
        success: function(adv){
            modadjectivesArray = adv;
            console.log(modadjectivesArray);
        }
    });
//ajax call for topics.json
    $.ajax({
        url: "/topics",
        success: function(topic){
            topicsArray = topic;
            console.log(topicsArray);
        }
    });
    $(".generateBtn").on("click", function(){
        var adj = adjectivesArray[randomNum(0, adjectivesArray.length-1)];//the randomNum is being used as the index of the array
        var adv = modadjectivesArray[randomNum(0, modadjectivesArray.length-1)];
        var topic = topicsArray[randomNum(0, topicsArray.length-1)];
        //console.log(adv +" "+ adj +" "+topic);
        $(".everything").empty(); //empties out the div without removing the div from the DOM
        var stringWords = adv +" "+adj+" "+topic+"!";
        appendWords(stringWords);
    });
});