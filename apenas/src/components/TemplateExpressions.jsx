const TemplateExpressions = () => {
    const name = "Lil bro"
    const data = {
        age: 20,
        job: "programmer",
    }
     return(
        <div>
            <p>iae {name}, como vc esta?</p>
            <p>pow {data.age} anos agora, sabe como é</p>
            <p>coisa de quem trabalha como {data.job}</p>
        </div>
    )
}
 export default TemplateExpressions;