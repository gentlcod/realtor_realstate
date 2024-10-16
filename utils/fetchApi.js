import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async function(url) {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-key': 'eefee5e847msh115bc8c27dd757cp16e83cjsnc190781f7b94',
            'x-rapidapi-host': 'bayut.p.rapidapi.com'
          }
    })

    return data;
}