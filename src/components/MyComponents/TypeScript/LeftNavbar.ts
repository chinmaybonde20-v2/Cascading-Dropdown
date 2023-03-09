
import { ref, reactive } from "vue";

 export const openAparmentform =ref (false);

export const openAparmentformfunction = () => {
  console.log(8,openAparmentform.value)
  openAparmentform.value = !openAparmentform.value;
  console.log(9,openAparmentform.value)
 // emits('openApartmentformemit',openAparmentform);
}