const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log('Ativou o evento!');
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>Renderizando aquilo</h1>
        }
    }

  return (
    <div>
        <div>
            <button onClick = {handleMyEvent}>Não clique</button>
        </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
}

export default Events;