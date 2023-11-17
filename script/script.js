document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        // On récupère les valeurs des champs du formulaire
        var type = document.getElementById('type').value;
        var gratuit = document.getElementById('payant').checked;
        var departement = document.getElementById('departement').value;
        var ouvertMaintenant = document.getElementById('checkbox').checked;
        
        // Filtre du type 
        switch (type) {
            case "baignade_exterieure" :
                type = "&refine=type%3A%22Baignade%20ext%C3%A9rieure%22"
                break
            case "bains-douches" :
                type = "&refine=type%3A%22Bains-douches%22"
                break
            case "bibliotheque" :
                type = "&refine=type%3A%22Biblioth%C3%A8que%22"
                break
            case "brumisateur" :
                type = "&refine=type%3A%22Brumisateur%22"
                break
            case "decouverte_initiation" :
                type = "&refine=type%3A%22D%C3%A9couverte%20et%20Initiation%22"
                break
            case "lieux_culte" :
                type = "&refine=type%3A%22Lieux%20de%20culte%22"
                break
            case "mairie_arrondissement" :
                type = "&refine=type%3A%22Mairie%20d'arrondissement%22"
                break
            case "musee" :
                type = "&refine=type%3A%22Mus%C3%A9e%22"
                break
            case "ombriere_perenne" :
                type = "&refine=type%3A%22Ombri%C3%A8re%20p%C3%A9renne%22"
                break
            case "ombriere_perenne" :
                type = "&refine=type%3A%22Ombri%C3%A8re%20temporaire%22"
                break
            case "piscine" :
                type = "&refine=type%3A%22Piscine%22"
                break
            case "terrain_boules" :
                type = "&refine=type%3A%22Terrain%20de%20boules%22"
                break
            default : 
                type = "";
        }

        // Filtre Gratuit
        if (gratuit == true) {
            gratuit = "&refine=payant%3A%22Non%22"
        }else {
            gratuit = ""
        }

        // Filtre du département 
        switch (departement) {
            case "75001" :
                departement = "&refine=arrondissement%3A%2275001%22";
                break
            case "75002" :
                departement = "&refine=arrondissement%3A%2275002%22"
                break
            case "75003" :
                departement = "&refine=arrondissement%3A%2275003%22"
                break
            case "75004" :
                departement = "&refine=arrondissement%3A%2275004%22"
                break
            case "75005" :
                departement = "&refine=arrondissement%3A%2275005%22"
                break
            case "75006" :
                departement = "&refine=arrondissement%3A%2275006%22"
                break
            case "75007" :
                departement = "&refine=arrondissement%3A%2275007%22"
                break
            case "75008" :
                departement = "&refine=arrondissement%3A%2275008%22"
                break
            case "75009" :
                departement = "&refine=arrondissement%3A%2275009%22"
                break
            case "75010" :
                departement = "&refine=arrondissement%3A%2275010%22"
                break
            case "75011" :
                departement = "&refine=arrondissement%3A%2275011%22"
                break
            case "75012" :
                departement = "&refine=arrondissement%3A%2275012%22"
                break
            case "75013" :
                departement = "&refine=arrondissement%3A%2275013%22"
                break
            case "75014" :
                departement = "&refine=arrondissement%3A%2275014%22"
                break
            case "75015" :
                departement = "&refine=arrondissement%3A%2275015%22"
                break
            case "75016" :
                departement = "&refine=arrondissement%3A%2275016%22"
                break
            case "75017" :
                departement = "&refine=arrondissement%3A%2275017%22"
                break
            case "75018" :
                departement = "&refine=arrondissement%3A%2275018%22"
                break
            case "75019" :
                departement = "&refine=arrondissement%3A%2275019%22"
                break
            case "75020" :
                departement = "&refine=arrondissement%3A%2275020%22"
                break
            default : 
                departement = "";
        }

        // Filtre Ouvert
        if (ouvertMaintenant == true) {
            ouvertMaintenant = "&refine=statut_ouverture%3A%22Ouvert%22"
        }else {
            ouvertMaintenant = ""
        }

        // On récupère l'API et on lui ajoute les filtres
        const url = "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/ilots-de-fraicheur-equipements-activites/records?limit=99" + gratuit + type + ouvertMaintenant + departement;

        // On vérifie si un tableau existe déja et si oui on le supprime
        const existingTable = document.querySelector("table");
        if (existingTable) {
            existingTable.parentNode.removeChild(existingTable);
        }

        // On récupère le json de l'API
        fetch(url)
        .then(response => response.json())
        .then(data => {
            // Création du tableau
            let table = document.createElement("table");

            // Création de la ligne d'en-tête
            let headerRow = table.insertRow();
            
            // Colonnes d'en-tête
            let columns = ["Nom", "Type", "Payant", "Adresse", "Arrondissement", "Statut Ouverture", "Horaires Période"];

            // Ajoute les noms dans les colonnes
            columns.forEach(columnName => {
                let headerCell = headerRow.insertCell();
                headerCell.innerHTML = `<b>${columnName}</b>`;
            });

            // On récupère juste les données du JSON qui nous intéressez (ceux du tableau)
            data.results.forEach(result => {

                // On crée les rangée
                const row = table.insertRow();

                const columnsData = ["nom", "type", "payant", "adresse", "arrondissement", "statut_ouverture", "horaires_periode"];

                // Puis on ajoute les données dans les rangée
                columnsData.forEach(column => {
                    let cell = row.insertCell();
                    cell.innerHTML = result[column];
                });
            });
            
            // Et enfin on ajoute le tableau dans mon html
            document.body.appendChild(table);
        })
        .catch(error => console.error('Error fetching data:', error));
    });
});

