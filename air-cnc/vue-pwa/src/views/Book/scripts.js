import {mapState} from 'vuex'

import api from '@/services/api'

import AppContent from '@/components/AppContent'

export default {
    components:{AppContent},
    props:['spotId'],
    data() { return {date:''} },
    computed:mapState(['user']),
    methods:{
        async handleSubmit() {
            const user_id = this.user
            const response = await api.post(`/spots/${this.spotId}/bookings`,
                {date:this.date},{headers:{user_id}})
            
            alert(`Solicitação de Reserva: ${response.data._id}`)
            this.$router.push('/list')
        },
        handleCancel() {
            this.$router.push('/list')
        }
    }
}
