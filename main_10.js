Vue.component('modal',{
    template:`
    <div id="root" class="container">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <p>
                        testejio jowi j ewoijt oiw
                    </p>
                </div>
            </div>
            <button class="modal-close" @click="$emit('close')"></button>
        </div>
    </div>
    `
});


new Vue({
    el:'#root',
    data: {
        showModal: false
    }
});