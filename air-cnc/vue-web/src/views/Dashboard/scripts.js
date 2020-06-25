import api from '@/services/api'
import socketIOC from '@/services/socket'

import AppContent from '@/components/AppContent'
import BookList from '@/components/BookList'
import SpotList from '@/components/SpotList'

async function loadSpots(user_id) {
    const response = await api.get('/dashboard',{
        headers:{user_id}
    })
    
    return response.data
}

async function approvals(user_id,book_id,approved) {
    await api.put(`/bookings/${book_id}`,{approved},{
        headers:{user_id}
    })
}

export default {
    props:['userId'],
    components:{AppContent,BookList,SpotList},
    data() { return {books:[], spots:[]} },
    created() {
        const sioc = socketIOC({user_id:this.userId})

        sioc.on('booking_create', it => {
            this.books.push(it)
        })

        loadSpots(this.userId).then(spots => this.spots = spots)
    },
    methods:{
        handleApproved(event) {
            approvals(this.userId,event.id,event.approved).then(() => {
                this.books = this.books.filter(it => it._id !== event.id)
            })
        }
    }
}
