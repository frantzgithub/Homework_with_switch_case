let total = 0;

function ajouter(){
    let fruit = document.getElementById('fruit').value;
    switch(fruit){
        case 'pomme':
            total += 10;
            alert('vous avez choisi une pomme et le prix d\'un pomme est '+ total + ' us');
            break;   
        case 'ananas':
            total += 15;
            alert('vous avez choisi un ananas et le prix d\'un ananas est '+ total + ' us');
            break;    
        case 'cerise':
            total += 5;
            alert('vous avez choisi une cerise et le prix d\'une cerise est '+ total + ' us');
            break;
        default:
            alert('vous devez faire un choix')
    }
}

function finaliser() {
    alert('le prix total est '+total+' us');
}