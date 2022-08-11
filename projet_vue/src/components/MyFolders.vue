<template>
<div class="conteneur">
    <div class="contenu">
        <h1>Rajouter un dossier</h1>
        <div class="formulaire">
            <div class="bloc">
                <label for="name">Nom :</label>
                <input type="text" name="name" id="name" v-model="newFolders.name">
            </div>
            <button class="Ajouter" type="submit" @click="addFolders()">Ajouter</button>
        </div>
    </div>
    <div class="contenu">
        <h1>Dossier existant</h1>
        <div class="grid-Folders">
            <div class="Folders" :key="index">
                <div class="Folders-content">
                    <p><a target="_blank">{{ Folders.name }}</a></p>
                    <p>{{ Folders.folderId }} </p>
                    <button class="delete" @click="deleteFolders(Folders.id)"><i class="small-button fa-trash">
                    </i></button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'MyFolders',
    mounted() {
        this.getFolders();
    },
    data() {
        return {
            selected: false,
            newFolders: {
                id:'',
                name:'',
            },
            Folders: []
        }
    },
    methods: {
        async addFolders() {
                this.newFolders.id = this.Folders.length + 1;
                this.Folders.push(this.newFolders);
    
                await localStorage.setItem("Folders", JSON.stringify(this.Folders));
    
                this.getFolders();
    
                //Reinnisialisé la data newFolders
                this.newFolders.id = '';
                this.newFolders.name = '';
        },
        getFolders(){
            this.Folders = JSON.parse(localStorage.getItem("Folders")); 
        },
        async deleteFolders(idFolders) {
            const index = this.Folders.findIndex(
                (elt) => elt.id === idFolders
            );

            this.Folders.splice(index, 1);
            await localStorage.setItem("Folders", JSON.stringify(this.Folders));
        },
    },
}
</script>

<style scoped>
#name, #dossier {
    border-color: #4C5F6B;
    border-radius: 5px;
    padding: 5px 20px;
    font-size: 1.5rem;
    background-color: #F0F4EF;
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

.Ajouter {
    background-color: #4C5F6B;
    color: white;
    font-size: 1.5rem;
    border-radius: 20px;
    padding: 11px 0px;
    margin: 1px 76px;
}

.grid-Folders {
    display: flex;
    padding: 15px;
}

.delete {
    display: flex;
    padding: 10px;
    background-color: red;
}
</style>

