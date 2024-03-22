export const fetchData = async (url) => {
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response)
        if (!response.ok) {
            throw new Error('Erreur lors de la requête');
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
};
