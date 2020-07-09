import {mapActions} from 'vuex'

import api from '@/services/api'

import AppContent from '@/components/AppContent'

export default {
    components:{AppContent},
    data() { return {email:'', techs:''} },
    methods:{
        ...mapActions(['setUser','setTechs']),
        async handleSubmit() {
            const response =  await api.post('/sessions',{email:this.email})
            const {_id} = response.data

            this.setUser(_id)
            this.setTechs(this.techs)
            this.$router.push('/list')
        }
    }
}
