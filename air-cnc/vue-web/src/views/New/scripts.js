import api from '@/services/api'

import AppContent from '@/components/AppContent'

async function createSpots(user_id,data) {
    await api.post('/spots',data,{
        headers:{user_id}
    })
}

export default {
    components:{AppContent},
    props:['userId'],
    data() { return {company:'', techs:'', price:'', thumbnail:null} },
    computed:{
        preview() {
            return this.thumbnail ? URL.createObjectURL(this.thumbnail) : null
        }
    },
    methods:{
        handleSubmit() {
            const data = new FormData()
            
            Object.keys(this.$data).forEach(it => data.append(it,this.$data[it]))

            createSpots(this.userId,data).then(() => this.$router.push(`/dashboard/${this.userId}`))
        },
        setThumbnail(event) { this.thumbnail = event.target.files[0] }
    }
}
