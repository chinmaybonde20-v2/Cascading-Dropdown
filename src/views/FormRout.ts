
import * as yup from "yup";
import { defineProps, ref, watch, defineEmits } from "vue";
import { openAparmentform } from "@/components/MyComponents/TypeScript/LeftNavbar";
import {submittedDataarray} from './HomeView'

export const schema: yup.Schema<any> = yup.object({
    selectedCountry: yup.string().required("required"),
    selectedState: yup.string().required("required"),
    selectedDistrict: yup.string().required("required"),
    apartName: yup.string().required("required").min(3, "min3").matches(/^[^0-9]+$/, 'Not be a number'),

    
});


export const submitApartmentdetailformfunc = () => {
    openAparmentform.value = false;

    const submittedDataobj = {
        selectedCountry: selectedCountry.value.name,
        selectedState: selectedState.value.name,
        selectedDistrict: selectedDistrict.value.name,
        apartName: apartName.value,
        floorNo: floorNo.value,
        flatNo:flatNo.value
    };
    submittedDataarray.push(submittedDataobj);
    console.log(submittedDataobj);

    selectedCountry.value = '';
    selectedState.value = '';
    selectedDistrict.value = '';
    // floorNo.value = '';
    // flatNo.value = '';
    emits("subdataObj", submittedDataobj);
    handleReset();
};

export const emits = defineEmits<{
    (e: "subdataObj", submittedDataobj: object): void;
}>();

// Dropdown

export const areas = ref([
    {
        name: "Pune",
        cities: [
            {
                name: "Wakad",
                sectors: [
                    { name: "Sector-1" },
                    { name: "Sector-2" },
                    { name: "Sector-3" },
                    { name: "Sector-4" },
                ],
            },
            {
                name: "Baner",
                sectors: [
                    { name: "Sector-1" },
                    { name: "Sector-2" },
                    { name: "Sector-3" },
                    { name: "Sector-4" },
                ],
            },
            {
                name: "Aundh",
                sectors: [
                    { name: "Sector-1" },
                    { name: "Sector-2" },
                    { name: "Sector-3" },
                    { name: "Sector-4" },
                ],
            },
        ],
    },
    {
        name: "Mumbai",
        cities: [
            {
                name: "Vashi",
                sectors: [
                    { name: "Sector-1" },
                    { name: "Sector-2" },
                    { name: "Sector-3" },
                    { name: "Sector-4" },
                ],
            },
            {
                name: "Nerul",
                sectors: [
                    { name: "Sector-1" },
                    { name: "Sector-2" },
                    { name: "Sector-3" },
                    { name: "Sector-4" },
                ],
            },
            {
                name: "Seawoods",
                sectors: [
                    { name: "Sector-1" },
                    { name: "Sector-2" },
                    { name: "Sector-3" },
                    { name: "Sector-4" },
                ],
            },
        ],
    },
    {
        name: "Nasik",
        cities: [
            {
                name: "Ozar",
                sectors: [
                    { name: "Sector-1" },
                    { name: "Sector-2" },
                    { name: "Sector-3" },
                    { name: "Sector-4" },
                ],
            },
            {
                name: "Dwarka",
                sectors: [
                    { name: "Sector-1" },
                    { name: "Sector-2" },
                    { name: "Sector-3" },
                    { name: "Sector-4" },
                ],
            },
            {
                name: "Trimurti",
                sectors: [
                    { name: "Sector-1" },
                    { name: "Sector-2" },
                    { name: "Sector-3" },
                    { name: "Sector-4" },
                ],
            },
        ],
    },
]);

export const selectedCountry = ref(null);
export const selectedState = ref(null);
export const selectedDistrict = ref(null);
export const cities = ref(null);
export const sectors = ref(null);

export const onCountryChange = () => {
    selectedState.value = null;
    selectedDistrict.value = null;
    cities.value = null;
    sectors.value = null;
    if (selectedCountry.value) {
        cities.value = selectedCountry.value.cities;
    }
    console.log(selectedCountry.value);

    // console.log(selectedCountry.value);
};
