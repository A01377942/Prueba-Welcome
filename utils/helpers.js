export const formatDate = language =>{
    const fechaNueva = new Date()
    const opciones = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    return fechaNueva.toLocaleDateString(language, opciones)
}