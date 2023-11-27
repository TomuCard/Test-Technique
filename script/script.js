document.addEventListener('DOMContentLoaded', function() {
    

    
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // On récupère les valeurs des champs du formulaire
        var type = document.getElementById('type').value;
        var free = document.getElementById('free').checked;
        var department = document.getElementById('department').value;
        var openNow = document.getElementById('checkbox').checked;
        
        var dataset = ""
        
        // Filtre du type 
        switch (type) {
            case "allActivity" :
                type = ""
                dataset = "ilots-de-fraicheur-equipements-activites"
                break
            case "baignade_exterieure" :
                type = "&refine=type%3A%22Baignade%20ext%C3%A9rieure%22"
                dataset = "ilots-de-fraicheur-equipements-activites"
                break
            case "bains-douches" :
                type = "&refine=type%3A%22Bains-douches%22"
                dataset = "ilots-de-fraicheur-equipements-activites"
                break
            case "bibliotheque" :
                type = "&refine=type%3A%22Biblioth%C3%A8que%22"
                dataset = "ilots-de-fraicheur-equipements-activites"
                break
            case "brumisateur" :
                type = "&refine=type%3A%22Brumisateur%22"
                dataset = "ilots-de-fraicheur-equipements-activites"
                break
            case "decouverte_initiation" :
                type = "&refine=type%3A%22D%C3%A9couverte%20et%20Initiation%22"
                dataset = "ilots-de-fraicheur-equipements-activites"
                break
            case "lieux_culte" :
                type = "&refine=type%3A%22Lieux%20de%20culte%22"
                dataset = "ilots-de-fraicheur-equipements-activites"
                break
            case "mairie_arrondissement" :
                type = "&refine=type%3A%22Mairie%20d'arrondissement%22"
                dataset = "ilots-de-fraicheur-equipements-activites"
                break
            case "musee" :
                type = "&refine=type%3A%22Mus%C3%A9e%22"
                dataset = "ilots-de-fraicheur-equipements-activites"
                break
            case "ombriere_perenne" :
                type = "&refine=type%3A%22Ombri%C3%A8re%20p%C3%A9renne%22"
                dataset = "ilots-de-fraicheur-equipements-activites"
                break
            case "ombriere_perenne" :
                type = "&refine=type%3A%22Ombri%C3%A8re%20temporaire%22"
                dataset = "ilots-de-fraicheur-equipements-activites"
                break
            case "piscine" :
                type = "&refine=type%3A%22Piscine%22"
                dataset = "ilots-de-fraicheur-equipements-activites"
                break
            case "terrain_boules" :
                type = "&refine=type%3A%22Terrain%20de%20boules%22"
                dataset = "ilots-de-fraicheur-equipements-activites"
                break
            case "allGreenPlaces" :
                type = ""
                dataset = "ilots-de-fraicheur-espaces-verts-frais"
                break
            case "bois" :
                type = "&refine=type%3A%22Bois%22"
                dataset = "ilots-de-fraicheur-espaces-verts-frais"
                break
            case "cimetieres" :
                type = '&refine=type%3A"Cimetières%20non%20parisiens"&refine=type%3A"Cimetières"'
                dataset = "ilots-de-fraicheur-espaces-verts-frais"
                break
            case "decoration" :
                type = '&refine=type%3A"Décorations%20sur%20la%20voie%20publique"'
                dataset = "ilots-de-fraicheur-espaces-verts-frais"
                break
            case "ephemeres" :
                type = '&refine=type%3A"Ephémères%2C%20partagés%2C%20pédagogiques"'
                dataset = "ilots-de-fraicheur-espaces-verts-frais"
                break
            case "jardins" :
                type = '&refine=type%3A"Jardinets%20décoratifs"&refine=type%3A"Jardins%20d%27Etat"&refine=type%3A"Jardins%20grandes%20institutions"&refine=type%3A"Jardins%20privatifs"'
                dataset = "ilots-de-fraicheur-espaces-verts-frais"
                break
            case "promenades" : 
                type = "&refine=type%3A%22Promenades%20ouvertes%22"
                dataset = "ilots-de-fraicheur-espaces-verts-frais"
                break
            case "allFontaines" :
                type = ""
                dataset = "fontaines-a-boire"
                break
            case "BORNE_FONTAINE" :
                type = "&refine=type_objet%3A%22BORNE_FONTAINE%22"
                dataset = "fontaines-a-boire"
                break
            case "FONTAINE_2EN1" :
                type = "&refine=type_objet%3A%22FONTAINE_2EN1%22"
                dataset = "fontaines-a-boire"
                break
            case "FONTAINE_ALBIEN" :
                type = "&refine=type_objet%3A%22FONTAINE_ALBIEN%22"
                dataset = "fontaines-a-boire"
                break
            case "FONTAINE_ARCEAU" :
                type = "&refine=type_objet%3A%22FONTAINE_ARCEAU%22"
                dataset = "fontaines-a-boire"
                break
            case "FONTAINE_BOIS" :
                type = "&refine=type_objet%3A%22FONTAINE_BOIS%22"
                dataset = "fontaines-a-boire"
                break
            case "FONTAINE_TOTEM" :
                type = "&refine=type_objet%3A%22FONTAINE_TOTEM%22"
                dataset = "fontaines-a-boire"
                break
            case "FONTNE_WALLACE" :
                type = "&refine=type_objet%3A%22FONTNE_WALLACE%22"
                dataset = "fontaines-a-boire"
                break
            case "FTNE_MILLENAIRE" :
                type = "&refine=type_objet%3A%22FTNE_MILLENAIRE%22"
                dataset = "fontaines-a-boire"
                break
            case "FTNE_PETILLANTE" :
                type = "&refine=type_objet%3A%22FTNE_PETILLANTE%22"
                dataset = "fontaines-a-boire"
                break
            case "FTNE_POING_EAU" :
                type = "&refine=type_objet%3A%22FTNE_POING_EAU%22"
                dataset = "fontaines-a-boire"
                break
            default : 
                type = "";  
        }

        // Filtre gratuit
        if (free == true && dataset == "ilots-de-fraicheur-equipements-activites") {
            free = "&refine=payant%3A%22Non%22"
        }else {
            free = ""
        }

        if (dataset == "fontaines-a-boire") {
            department = ""
        }else {
                    // Filtre du département 
        switch (department) {
            case "75001" :
                department = "&refine=arrondissement%3A%2275001%22";
                break
            case "75002" :
                department = "&refine=arrondissement%3A%2275002%22"
                break
            case "75003" :
                department = "&refine=arrondissement%3A%2275003%22"
                break
            case "75004" :
                department = "&refine=arrondissement%3A%2275004%22"
                break
            case "75005" :
                department = "&refine=arrondissement%3A%2275005%22"
                break
            case "75006" :
                department = "&refine=arrondissement%3A%2275006%22"
                break
            case "75007" :
                department = "&refine=arrondissement%3A%2275007%22"
                break
            case "75008" :
                department = "&refine=arrondissement%3A%2275008%22"
                break
            case "75009" :
                department = "&refine=arrondissement%3A%2275009%22"
                break
            case "75010" :
                department = "&refine=arrondissement%3A%2275010%22"
                break
            case "75011" :
                department = "&refine=arrondissement%3A%2275011%22"
                break
            case "75012" :
                department = "&refine=arrondissement%3A%2275012%22"
                break
            case "75013" :
                department = "&refine=arrondissement%3A%2275013%22"
                break
            case "75014" :
                department = "&refine=arrondissement%3A%2275014%22"
                break
            case "75015" :
                department = "&refine=arrondissement%3A%2275015%22"
                break
            case "75016" :
                department = "&refine=arrondissement%3A%2275016%22"
                break
            case "75017" :
                department = "&refine=arrondissement%3A%2275017%22"
                break
            case "75018" :
                department = "&refine=arrondissement%3A%2275018%22"
                break
            case "75019" :
                department = "&refine=arrondissement%3A%2275019%22"
                break
            case "75020" :
                department = "&refine=arrondissement%3A%2275020%22"
                break
            default : 
                department = "";
        }
        }

        // Filtre Ouvert
        if (openNow == true && dataset == "ilots-de-fraicheur-equipements-activites") {
            openNow = "&refine=statut_ouverture%3A%22Ouvert%22"
        }else {
            openNow = ""
        }

        // On récupère l'API et on lui ajoute les filtres
        const url = "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/" + dataset + "/records?limit=100" + free + type + openNow + department;


        // On vérifie si un tableau existe déja et si oui on le supprime
        const existingTable = document.querySelector("table");
        if (existingTable) {
            existingTable.parentNode.removeChild(existingTable);
        }

        // Affiche un message Loading en attendant les données
        document.getElementById("stringError").innerHTML = "Chargement . . .";

        // On récupère le JSON de l'API
        fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data.results);
            // Création du tableau
            let table = document.createElement("table");
            
            // Création de la ligne d'en-tête
            let headerRow = table.insertRow();
            
            // Remplacer les colonnes en fonction du dataset
            if (dataset == "ilots-de-fraicheur-equipements-activites") {
                
                var columns = ["Nom", "Type", "Payant", "Adresse", "Arrondissement", "Statut Ouverture", "Horaires Période"];

            } else if (dataset == "ilots-de-fraicheur-espaces-verts-frais") {

                var columns = ["Nom", "Type", "Adresse", "Arrondissement", "Ouvert H24", "Canicule Ouverture", "Catégorie"];

            }else if (dataset == "fontaines-a-boire") {
                var columns = ["Modele", "Voie", "Commune", "Disponible"];
            }

            // Ajout des noms dans les colonnes
            columns.forEach(columnName => {
                let headerCell = headerRow.insertCell();
                headerCell.innerHTML = `<b>${columnName}</b>`;
            });

            // On récupère juste les données du JSON qui nous intéressent (celles du tableau)
            data.results.forEach(result => {

                // On crée les rangées
                const row = table.insertRow();

                // Remplacer les noms des données en fonction du dataset
                if (dataset == "ilots-de-fraicheur-equipements-activites") {
                    var columnsData = ["nom", "type", "payant", "adresse", "arrondissement", "statut_ouverture", "horaires_periode"];
    
                } else if (dataset == "ilots-de-fraicheur-espaces-verts-frais") {
                    var columnsData = ["nom", "type", "adresse", "arrondissement", "ouvert_24h", "canicule_ouverture", "categorie"];
    
                }else if (dataset == "fontaines-a-boire") {
                    var columnsData = ["modele", "voie", "commune", "dispo"];
                }

                // Puis on ajoute les données dans les rangées
                columnsData.forEach(column => {
                    let cell = row.insertCell();
                    cell.innerHTML = result[column];
                });
            });

            
            if (data.results.length == 0){
                document.getElementById("stringError").innerHTML = "Il n'y a pas de données correspondantes à votre recherche.";
            }else {
                document.getElementById("stringError").innerHTML = "";
                // Et enfin on ajoute le tableau dans le html
                document.body.appendChild(table);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
    });
});

