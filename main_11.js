Vue.component('tabs',{
    template:`
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive}">
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
            </ul>
        </div>
        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
    `,
    mounted() {
        //console.log(this.$children);
    },
    data() {
        return {tabs: []}
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = tab.name === selectedTab.name;
            });
        }
    }
});

Vue.component('tab',{
    template:`
        <div>
            <slot></slot>
        </div>
    `,
    props:{
        name: {require:true},
        selected: {
            default:false
        }
    },
    data() {
        return {isActive: false};
    },
    mounted() {
        let hash_tag = location.href.split('#').pop();
        //return this.name.toLowerCase().replace(/ /g, '-') === hash_tag;
        if (hash_tag)
        {
            this.isActive = this.name.toLowerCase().replace(/ /g, '-') === hash_tag;
        }
        else
        {
            this.isActive = this.selected;
        }
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    }
});

new Vue({
    el:'#root'
});