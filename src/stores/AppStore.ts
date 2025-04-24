import { defineStore } from "pinia";

export interface AppStoreState {
    isLightTheme: boolean
}

export const useAppStore = defineStore('appStore', {
    state :(): AppStoreState=>({
        isLightTheme : true
    }),
    getters:{
        getIsLightTheme :(state)=> state.isLightTheme
    },
    actions : {
        changeTheme(value:boolean){
            console.log(value)
            this.isLightTheme = value
        }
    }
})

