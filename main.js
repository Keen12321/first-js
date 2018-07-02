alert("The time period is 1940. You are a British soldier about to advance onto the beaches of Dunkirk.")

var intro = confirm("You're getting close to the shore. Are you ready?")

if(intro) {
	alert("Immediately shots start firing. As you step off the boat you see your friends close to you fall to the ground. You run to cover and see that the air is filled with tracers. Your heart is pounding.")
	var helpingfriend = confirm("You see a soldier dying next to you. Will you give up your cover to try to rescue him? Press ok for yes and cancel for no.")
		if(helpingfriend) {
		alert("You rush out of cover to drag him to your cover. While dragging him you feel a sharp pain in your shoulder. The good new is you both got back to cover safely.")
		var gettinghelp = confirm("Both you and the solder you saved need medical attention. If you want to wait for medical attention press ok. If you want to leave your cover to try and find a medic press cancel")
			if(gettinghelp) {
			alert("You start slipping conciousness no medic has come and both you and the soldier die.")
		} else {
			alert("You see a medic in the distance and try to signal him over. He doesn't notice so you sprint to him and tell him that you have another soldier in cover that needs attention.")
			var medic = confirm("The medic says that he's busy and can't come. Do you threaten the medic or accept the wounded soldier's fate and leave him to die")
				if(medic) {
				alert("You tell the medic that you are willing to kill him if he doesn't come. He changes his mind and ends up helping both you and the soldier.")
				var helpedfriend = confirm("Now that both you and your fellow soldier are ok decide. Do you want to join the battle and risk your life again. Or wait for help")
					if (helpedfriend) {
					alert("You join the battle and do incredibly well fighting until a german and you become face to face.")
					alert("The shot in your shoulder doesnt allow you to raise your rifle fast enough and you die a valiant death.")
				} else {
					alert("You wait for help and it finally comes. Both you and the soldier survive.")
}
			} else {
				alert("You stick with the medic and his squad. You end up dead because of a mortar")
			}
}
	} else {
		alert("You watch the soldier die as bullets are rained from the opposing side")
		var didnthelp = confirm("Do you try to be Rambo and rush straight towards the nazis and one man army the battle")
			if(didnthelp) {
			alert("You run from cover to cover shooting and moving pushing along the beach clearing the way for fellow soldiers")
			var bunker = confirm("You end up right below a German bunker where you hear one of the dreaded MG-42's shooting from. Do you toss a grenade inside or clear it out with the soldiers behind you.")
				if(bunker) {
				alert("You toss a grenade and miss. The grenade blows you and your squad up")
			} else {
				alert("After clearing the bunker you realize the battle is turning in favor of the Allied Forces. You end up winning the battle from your bravory you earn the medal of honor and a promotion.")
}		
		} else {
			alert("You chose to stay safe and wait. Help has arrived and you survived")
}

	}
} else {
	alert("You failed your mission by jumping off the boat.")
}
