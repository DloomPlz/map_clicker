
//////CLASS_Boutique\\\\\\\\\\\\\\\\\\
//gere le prix des differents items
function AchievementProperties(name,val,activation,activationval,initialval) {
  this.mName =name;
  this.mValue =val;
  this.mActivation =activation;
  this.mActivationValue =activationval;
  this.mInitialValue =initialval;
}
AchievementProperties.prototype.isActive= function ()
{
    var aRet = false;
 
    switch(this.mActivation) {
      case AchievementManager.ACTIVE_IF_GREATER_THAN:
	      aRet = this.mValue > this.mActivationValue; 
	      break;
      case AchievementManager.ACTIVE_IF_LESS_THAN:
	      aRet = this.mValue < this.mActivationValue; 
	      break;
      case AchievementManager.ACTIVE_IF_EQUALS_TO: 
	      aRet = this.mValue == this.mActivationValue; 
	      break;
    }
 
    return aRet;
  }