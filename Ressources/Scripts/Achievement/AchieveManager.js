//////CLASS_Boutique\\\\\\\\\\\\\\\\\\
//gere le prix des differents items
function AchievementManager(name, theRelatedProps) {
  // activation rules
  this.ACTIVE_IF_GREATER_THAN = ">";
  this.ACTIVE_IF_LESS_THAN = "<";
  this.ACTIVE_IF_EQUALS_TO ="==";
  this.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO=">=";
 
  this.mProps={}; // dictionary of properties
  this.mAchievements ={}; // dictionary of achievements
}

AchievementManager.prototype.defineProperty= function (theName, theInitialValue, theaActivationMode, theValue)
{
  this.mProps[theName] = new AchievementProperties(theName, theInitialValue, theaActivationMode, theValue);
}
 
AchievementManager.prototype.defineAchievement= function(theName, theRelatedProps)
{
  this.mAchievements[theName] = new Achievement(theName, theRelatedProps);
}

AchievementManager.prototype.getValue=function(theProp)
{
  return this.mProps[theProp].mValue;
}
 
AchievementManager.prototype.setValue=function (theProp, theValue)
{
   // Which activation rule?
   switch(this.mProps[theProp].activation) {
     case this.ACTIVE_IF_GREATER_THAN:
         theValue = theValue > mProps[theProp].value ? theValue : mProps[theProp].value;
         break;
     case this.ACTIVE_IF_LESS_THAN:
         theValue = theValue < mProps[theProp].value ? theValue : mProps[theProp].value;
         break;
     case this.ACTIVE_IF_GREATER_THAN_OR_EQUALS_TO:
         theValue = theValue < mProps[theProp].value ? theValue : mProps[theProp].value;
         break;
  }
  this.mProps[theProp].mValue = theValue;
    //console.log(this.mProps[theProp]);
  this.checkAchievements();
}
AchievementManager.prototype.addValue=function (theProps, theValue)
{
  for (var i=0; i < theProps.length; i++) {
    var aPropName= theProps[i];
    this.setValue(aPropName, this.getValue(aPropName) + theValue);
  }
}

AchievementManager.prototype.checkAchievements= function (){
  var aRet = [];
  
 
  for (var n in this.mAchievements) {
    var aAchivement = this.mAchievements[n];
     //console.log("list avnt check : ");
     //console.log(aAchivement);
     //console.log(aAchivement.mUnlocked);
    if (aAchivement.mUnlocked == false) {
      var aActiveProps = 0;

      for (var p = 0; p < aAchivement.mProps.length; p++) {
        var aProp = this.mProps[aAchivement.mProps[p]];
       // console.log(aProp);
        if (aProp.isActive()) {
          aActiveProps++;
        }
      }
 
      if (aActiveProps == aAchivement.mProps.length) {
        aAchivement.mUnlocked = true;
        console.log(aAchivement);
        var audio = new Audio('Ressources/Sound/Surprise.mp3');
        audio.play();

        $('.achievement').html("");
        $('.achievement').append(aAchivement.mName);
        $('.achievement').show();
        $('.achievement').hide(3000);

        aRet.push(aAchivement);
      }
    }
  }
  return aRet;
}

AchievementManager.prototype.Afficher= function (){
  $('#displayAchievements').html("");

  for (var n in this.mAchievements) {
    if(this.mAchievements[n].mUnlocked == true){
      var aAchivement = this.mAchievements[n];
      console.log("index");
      $('#displayAchievements').append("<div>"+aAchivement.mName+"</div>");
    }
  }

}