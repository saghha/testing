<template>
    <section class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h4>Tabla con información</h4>
                        <b-table :items="datos" :fields="fields" responsive hover striped>
                            <template v-slot:cell(options)="row">
                                <b-button @click="agergarVuex(row.item)" variant="warning" class="btn btn-sm">Ver</b-button> 
                            </template>
                        </b-table>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
//Dar paginación a la tabla
export default {
    name: 'todos',
    components: {

    },
    data () {
        return {
            datos: [],
            currentPage: 1,
            perPage: 10,
            fields: [
                {key:'name', label: 'Name', sortable: true},
                {key: 'zipcode', label: 'ZipCode'},
                {key: 'neighborhood', label: 'Neighborhood'},
                {key: 'councildistrict', label: 'Council District', sortable: true},
                {key: 'policedistrict', label: 'Police District'},
                {key: 'options', label: 'Options'}
            ]
        }
    },
    computed: {
        rows () {
            return this.datos.length
        }
    },
    created () {
        this.$nextTick(function () {
            this.getData()
        })
    },
    methods: {
        getData: function () {
            axios.get('https://data.baltimorecity.gov/resource/k5ry-ef3g.json').then((response) => {
                this.datos = response.data
            })
        },
        agergarVuex: function (data) {
            console.log(data)
            //agregar a vuex y redireccionar a pagina Ver
        }
    }
}
</script>