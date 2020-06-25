import api from '@/services/api'

import AppContent from '@/components/AppContent'

async function handleSubmit(email) {
    const response = await api.post('/sessions',{email})
    const {_id} = response.data

    return _id
}

export default {
    components:{AppContent},
    data() { return {email:''} },
    created() {
        const userId = localStorage.getItem('user')

        if(userId) this.$router.push(`/dashboard/${userId}`)
    },
    methods:{
        login() {
            handleSubmit(this.email).then(userId => {
                localStorage.setItem('user',userId)
                this.$router.push(`/dashboard/${userId}`)
            })
        }
    }
}
