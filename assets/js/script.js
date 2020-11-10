$(document).ready(function(){
    var entier = null;   // La valeur de mon number est null car pas encore saisie
    var numberA = Math.floor(Math.random()* 100);  // Choisie un nombre aléatoire entre 0 & 1 
    var counter = 0;

    $('#submit').click(function(event){       // Au clic du boutton, je veux que tu déclanches :
 
        counter = counter + 1;   
        entier = $('#number').val();    // La valeur null est remplacée par la valeur saisie
        
        if (entier == numberA){
           alert('Bien Joué, tu l\'as fait en  ' + counter + '  clics !!');
        }
        else if (entier < numberA){
           $('#response').html('C\'est plus grand loulou')
        }
        else {
           $('#response').html('C\'est plus petit loulou')
        }
        event.preventDefault();         // Pour que la page ne recharge pas à chaque clic du boutton
    });
});
