<template>
    <section class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Información de un dato</h4>
                        <div class="row">
                            <div class="col-6">
                                <b-form-group label-for="name" label="Name">
                                    <b-form-input :value="data.name" id="name" disabled/>
                                </b-form-group>
                            </div>
                            <div class="col-6">
                                <b-form-group label-for="zipcode" label="ZipCode">
                                    <b-form-input :value="data.zipcode" id="zipcode" disabled/>
                                </b-form-group>
                            </div>
                            <div class="col-6">
                                <b-form-group label-for="neighborhood" label="Name">
                                    <b-form-input :value="data.neighborhood" id="neighborhood" disabled/>
                                </b-form-group>
                            </div>
                            <div class="col-6">
                                <b-form-group label-for="councildistrict" label="Council District">
                                    <b-form-input :value="data.councildistrict" id="councildistrict" disabled/>
                                </b-form-group>
                            </div>
                            <div class="col-6">
                                <b-form-group label-for="policedistrict" label="Police District">
                                    <b-form-input :value="data.policedistrict" id="policedistrict" disabled/>
                                </b-form-group>
                            </div>
                            <div class="col-12">
                                <b-button variant="success" class="btn-rounded">Cambiar en Vuex</b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'One',
    data () {
        return {
            data: {
                name: null,
                zipcode: null,
                neighborhood: null,
                councildistrict: null,
                policedistrict: null
            }
        }
    },
    created () {
        //traer desde vuex
    },
    methods: {

    }
}
</script>