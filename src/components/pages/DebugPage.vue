<template lang="pug">
.debug-page
    div.mt-10
        div.mt-3.ml-16.black--text {{ this.status }}
</template>

<script>
import { NioOpenApiModule } from '@narrative.io/tackle-box'
import { baseUrl } from '@/utils/serviceLayer'
import axios from 'axios'
export default {
    data: () => ({
        loading: true,
    }),
    props: {
        baseUrl: {
            type: String,
            default: baseUrl
        },
        status: {
            type: String
        },
        token: {
            type: String
        }
    },
    mounted() {
        NioOpenApiModule.initCallback(this.openApiInit)
    },
    methods: {
        openApiInit(token) {
          this.token = token;
          console.log('token', token)
          this.getStatus();
        },
        getStatus() {
            console.log(`Headers: ${this.token}`);
            axios.get(`${baseUrl}/ping`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }).then(resp => {
                this.status = resp.data;
            },
            )
        }
    }
};
</script>
