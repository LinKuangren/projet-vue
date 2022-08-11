<template>
<div class="conteneur">
    <div class="contenu">
        <h1>Rajouter une ressource</h1>
        <div class="formulaire">
            <div class="bloc">
                <label for="name">Nom :</label>
                <input type="text" name="name" id="name" v-model="newRessources.name">
            </div>
            <div class="bloc">
                <label for="link">Lien :</label>
                <input type="text" name="link" id="link" v-model="newRessources.link">
            </div>
            <div class="bloc">
                <label for="dossier">Dossier :</label>
                <select  name="dossier" id="dossier" v-model="selected">
                    <option disabled value="">Choisissez</option>
                    <option>veille</option>
                    <option>icones</option>
                    <option>documentation</option>
                </select>
            </div>
            <div class="bloc">
                <label for="pinned">Epingler :</label> 
                <div class="checkbox-Pin">
                    <input type="checkbox" name="pinned" id="pinned" v-model="newRessources.isPin"> Ajouter dans l'accès rapide
                </div>
            </div>
            <button class="Ajouter" type="submit" @click="addRessources()">Ajouter</button>
        </div>
    </div>
    <div class="contenu">
        <h1>Ressources epinglé</h1>
        <div class="grid-Ressources">
            <div class="Ressources" :key="index" v-for="(Ressources, index) in pinOnRessources">
                <div class="Ressources-content" v-if="Ressources.isPin == true">
                    <p><a class="titre-ressources" :href="Ressources.link" target="_blank">{{ Ressources.name }}</a></p>
                    <button class="pin" @click="unpinRessources(Ressources)">epinglé</button>
                    <button class="supprimer" @click="deleteRessources(Ressources.id)">supprimer</button>
                </div>
            </div>
        </div>
        <h1>Ressources existant</h1>
        <div class="grid-Ressources">
            <div class="Ressources" :key="index" v-for="(Ressources, index) in pinOffRessources">
                <div class="Ressources-content" v-if="Ressources.isPin == false">
                    <p><a :href="Ressources.link" class="titre-ressources" target="_blank">{{ Ressources.name }}</a></p>
                    <p>{{ Ressources.folderId }} </p>
                    <button class="pin" @click="pinRessources(Ressources)">epinglé</button>
                    <button class="supprimer" @click="deleteRessources(Ressources.id)">supprimer</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'MyRessources',
    mounted() {
        this.getRessources();
        this.getFolders();
    },
    data() {
        return {
            selected:'',
            newRessources: {
                id:'',
                name:'',
                link:'',
                isPin:'',
                folderId:'',
            },
            newFolders: {
                id:'',
                name:'',
            },
            Ressources: [],
            folders: []
        }
    },
    methods: {
        async addRessources() {
                this.newRessources.id = this.Ressources.length + 1;
                this.Ressources.push(this.newRessources);
    
                await localStorage.setItem("Ressources", JSON.stringify(this.Ressources));
    
                this.getRessources();
    
                //Reinnisialisé la data newRessources
                this.newRessources.id = '';
                this.newRessources.name = '';
                this.newRessources.link = '';
                this.newRessources.isPin = false;
        },
        async addFolders() {
                this.newFolders.id = this.Folders.length + 1;
                this.Folders.push(this.newFolders);
    
                await localStorage.setItem("Folders", JSON.stringify(this.Folders));
    
                this.getFolders();
    
                //Reinnisialisé la data newFolders
                this.newFolders.id = '';
                this.newFolders.name = '';
        },
        getRessources(){
            this.Ressources = JSON.parse(localStorage.getItem("Ressources"))
        },
        getFolders(){
            this.Folders = JSON.parse(localStorage.getItem("Folders")); 
        },
        async deleteRessources(idRessources) {
            const index = this.Ressources.findIndex(
                (elt) => elt.id === idRessources
            );

            this.Ressources.splice(index, 1);
            await localStorage.setItem("Ressources", JSON.stringify(this.Ressources));
        },
        async deleteFolders(idFolders) {
            const index = this.Folders.findIndex(
                (elt) => elt.id === idFolders
            );

            this.Folders.splice(index, 1);
            await localStorage.setItem("Folders", JSON.stringify(this.Folders));
        },
    },
    computed: {
        pinOnRessources() {
            let tab = [];
            let RessourcesTab = this.Ressources;

            tab = RessourcesTab.filter((Ressources) => {
                return Ressources.isPin == true
            });

            return tab;
        },

        pinOffRessources() {
            let tab = [];
            let RessourcesTab = this.Ressources;

            tab = RessourcesTab.filter((Ressources) => {
                return Ressources.isPin == false
            });

            return tab;
        }
    },
}
</script>

<style scoped>

#name, #link, #dossier {
    border-color: #4C5F6B;
    border-radius: 5px;
    padding: 5px 20px;
    font-size: 1.5rem;
    background-color: #F0F4EF;
}

#pinned {
    width: 1rem;
    height: 1rem;
    margin-right: 10px;
}

h1 {
    font-size: 2rem;
    padding: 25px 0px;
    background-color: #F0F4EF;
    margin: 30px 0 30px 0;
}

label {
    font-size: 1.25rem;
    font-weight: 600;
}

.formulaire {
    display: inline-grid;
}

.bloc {
    display: inline-grid;
    text-align: left;
    margin: 10px 0;
}

.checkbox-Pin {
    display: flex;
    align-items: center;
    margin-top: 5px;
}

.Ajouter {
    background-color: #4C5F6B;
    color: white;
    font-size: 1.5rem;
    border-radius: 20px;
    padding: 11px 0px;
    margin: 1px 76px;
}

.grid-Ressources {
    display: flex;
    padding: 15px;
}

.Ressources-content {
    background-color: #F0F4EF;
    border-radius: 10px;
    margin: 0 10px 10px 10px;
    padding: 5px;
}

.titre-ressources {
    color: #2c3e50;
    margin: 10px 10px 0 10px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 700;
}

.pin {
    background-color: #4C5F6B;
    color: white;
    font-size: 1.5rem;
    border-radius: 10px;
    padding: 9px 16px;
    margin: 0 10px 10px 10px;
}

.supprimer {
        background-color: #4C5F6B;
    color: white;
    font-size: 1.5rem;
    border-radius: 10px;
    padding: 9px 14px;
    margin: 0 10px 10px 10px;
}
</style>