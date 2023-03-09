import { reactive,ref } from "vue";

export const submittedDataarray = reactive([]);

export const buyer = ref([]);
export const editDetail = (user:any) =>{
  buyer.value = user;
}