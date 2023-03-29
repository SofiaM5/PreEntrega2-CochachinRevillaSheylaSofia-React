const FetchSimulation = (database, time) => {
    return new Promise((resolve, rejact) => {
        setTimeout(() => {
            resolve(database);
            rejact(new Error("Algo salió mal"))
        }, time)

    })
}
export default FetchSimulation;