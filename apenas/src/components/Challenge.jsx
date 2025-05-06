const Challenge = () => {

   const a = Math.floor(Math.random() * 10);
   const b = Math.floor(Math.random() * 10);
    function eventoSoma(){
        console.log('C = '+ (a + b));
    }

  return (
    <div>
        <h1>Desafio</h1>
        <p>A = {a}</p>
        <p>B = {b}</p>
        <h3>C = A + B</h3>
        <button onClick={eventoSoma}>SOMAR</button>
    </div>
  );
}
export default Challenge;