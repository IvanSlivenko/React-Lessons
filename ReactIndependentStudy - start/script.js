


// // Отримуємо в константу елемент для виводу 
// const rootElement = document.getElementById('root');

// // Виводимо (відмальовуємо) нашу розмітку
// ReactDOM.createRoot(rootElement).render(

//     <h1>Мій перший React застосунок !!</h1>

    
// );



const root = ReactDOM.createRoot(document.getElementById("root"));



// Level Oun
// const element = <h1>React independet study</h1>;   
// root.render(element);

//Level Two
function tick() {
  const element = (
    <div>
          
      <h1>React independet study</h1>

      <h2>Зараз {new Date().toLocaleTimeString()}</h2>
      

      <h3>OK ?</h3>
      
          
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);