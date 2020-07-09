import {mapState} from 'vuex'

import api from '@/services/api'
import socket from '@/services/socket'

import AppContent from '@/components/AppContent'
import SpotList from '@/components/SpotList'

function alertBooking(book) {
    alert(`Sua reserva em ${book.spot.company} em ${book.date} foi ${book.approved ? 'APROVADA' : 'REJEITADA'}.`)
}
async function loadSpots(tech) {
    const {data} = await api.get('/spots',{params:{tech}})

    return {tech, spots:data}
}

export default {
    components:{AppContent,SpotList},
    data() { return {techList:[]} },
    computed:{
        ...mapState(['user','techs'])
    },
    created() {
        const sioc = socket({user_id:this.user})

        sioc.on('booking_save', it => alertBooking(it))

        this.techs.split(/,+/).forEach(it => {
            const tech = it.trim()

            if(!tech) return
            
            loadSpots(tech).then(it => this.techList.push(it))
        })
    },
    methods:{
        handleNavigate(event) {
            this.$router.push(`/book/${event.spotId}`)
        }
    }
}
