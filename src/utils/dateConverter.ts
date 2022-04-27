 const dateConverter = (dateTime: String) => {
    const date = new Date(String(dateTime))
    return date.getHours() + ":" + date.getMinutes() + " , " + date.toLocaleDateString('fa-IR')
}
export default dateConverter