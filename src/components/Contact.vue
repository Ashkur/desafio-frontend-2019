<template>
    <div class="flex justify-center" style="margin-top: 20px; margin-bottom:20px;">
        <div class="flex default-width">
            <div class="p-2">
                <div class="py-4 px-2">
                    <div class="contact-label ">CONTATO</div>
                    <div class="contact-description text-sm text-justify">Ut vitae volutpat risus. Nam vitae congue odio, mattis dignissim neque. Nam eros sapien, semper in pellentesque ut, suscipit eu nunc. Donec malesuada egestas ligula, non malesuada sapien suscipit ut. </div>
                </div>
                
                <!-- form -->
                <div class="md:flex">
                    <div class="w-full w-1/2 ">

                        <div class="p-2">
                            <label for="name">Nome*</label>
                            <input
                                v-model="form.name" 
                                type="text" 
                                name="name" 
                                id="name"                         
                                placeholder="Nome"
                                required
                                class="block w-full h-10 input-style">
                        </div>
                        
                        <div class="p-2">
                            <label for="email">E-mail*</label>
                            <input
                                v-model="form.email" 
                                type="email" 
                                name="email" 
                                id="email"                         
                                placeholder="E-mail"
                                required
                                class="block w-full h-10 input-style">
                        </div>

                        <div class="p-2">
                            <label for="city">Cidade</label>
                            <input
                                v-model="form.city" 
                                type="text" 
                                name="city" 
                                id="city"                         
                                placeholder="Cidade"
                                class="block w-full h-10 input-style">
                        </div>

                        <div class="p-2">
                            <label for="tel">Telefone*</label>
                            <input
                                v-model="form.tel" 
                                type="text" 
                                name="tel" 
                                id="tel"                         
                                placeholder="(99) 99999999"
                                required                        
                                v-mask="telMask"                        
                                class="block w-full h-10 input-style">
                        </div>

                    </div>
                    <div class="w-full w-1/2">
                        <div class="p-2">
                            <label for="subject">Assunto*</label>
                            <input
                                v-model="form.subject" 
                                type="text" 
                                name="subject" 
                                id="subject"                         
                                placeholder="Assunto"
                                required                        
                                class="block w-full h-10 input-style">
                        </div>

                        <div class="p-2">
                            <label for="message">Mensagem*</label>
                            <textarea
                                v-model="form.message" 
                                name="message" 
                                id="message" 
                                cols="30" 
                                rows="7"
                                placeholder="Digite aqui sua mensagem..."
                                required
                                class="block w-full input-style">
                            </textarea>
                        </div>                
                    </div>                        
                </div>

                <div class="md:flex justify-end px-2">
                    <button class="submit-button h-8 w-32" @click="sendForm()">Enviar</button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss">
@import '../assets/scss/main.scss';

.input-label {
    color: $grey-light;
}

.input-style {
    border-width: 1px;
    border-color: $grey-light-2;
    padding-left: 10px;
}

.contact-label {
    font-weight: bold;
    color: $brown-dark;
}

.contact-description {
    color: $grey-light;
}

.submit-button {
    background-color: $brown-dark;
    color: #ffffff;
    font-size: 0.812rem;
}
</style>

<script>
export default {
    data() {
        return {
            telMask: "(##) ########",
            form: {
                name: '',
                email: '',
                city: '',
                tel: '',
                subject: '',
                message: ''
            }
        }
    },

    methods: {
        async sendForm() {
            //do request
        }
    }
}
</script>
