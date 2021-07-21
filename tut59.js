// console.log("Hello World");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is Saswata');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS Grid + Media Queries</title>
      <style>
          .container {
              display: grid;
              grid-gap: 1rem;
              grid-template-areas:
                  'navbar navbar navbar navbar'
                  'section section section aside'
                  'footer footer footer footer ';
          }
  
          @media only screen and (max-width:300px) {
              body {
                  background-color: red;
              }
  
              .container {
                  grid-template-areas:
                      'navbar navbar navbar navbar'
                      'section section section section'
                      'aside aside aside aside'
                      'footer footer footer footer ';
              }
  
              aside {
                  display: none;
              }
  
              span {
                  display: block;
                  text-align: center;
              }
          }
  
          @media only screen and (min-width: 300px) and (max-width:500px) {
              body {
                  background-color: blue;
              }
  
              .container {
                  grid-template-areas:
                      'navbar navbar navbar navbar'
                      'section section section section'
                      'aside aside aside aside'
                      'footer footer footer footer ';
              }
  
              aside {
                  display: none;
              }
  
              span {
                  display: block;
                  text-align: center;
              }
          }
  
          @media (min-width: 500px) and (max-width:800px) {
              body {
                  background-color: yellow;
              }
  
              .container {
                  grid-template-areas:
                      'navbar navbar navbar navbar'
                      'section section section section'
                      'aside aside aside aside'
                      'footer footer footer footer ';
              }
  
              span {
                  display: block;
                  text-align: center;
              }
          }
  
          @media (min-width: 800px) {
              body {
                  background-color: green;
              }
          }
  
          .bdr {
              border: 2px solid black;
              padding: 10px 23px;
              background-color: wheat;
          }
  
          nav {
              grid-area: navbar;
          }
  
          section {
              grid-area: section;
          }
  
          aside {
              grid-area: aside;
          }
  
          footer {
              grid-area: footer;
              text-align: center;
          }
      </style>
  
  <body>
      <div class="container ">
          <nav class="bdr">
              <span>Home</span>
              <span>About</span>
              <span>Services</span>
              <span>Contact</span>
          </nav>
          <section class="bdr">
              <h2>Learn CSS in hindi</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque nemo cupiditate distinctio et
                  expedita. Delectus quaerat accusamus inventore tenetur error quam minus, provident fugit repellat
                  necessitatibus? Architecto itaque quidem sequi blanditiis, facere accusantium hic.lorem122 Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Eligendi dignissimos ut rerum aut. Fuga delectus suscipit
                  debitis libero. Itaque, ipsum dignissimos consequatur repellat distinctio enim dolorem, facilis esse
                  dolorum illum earum aliquid numquam blanditiis ipsam reiciendis iure nobis quo cum maiores aperiam
                  pariatur. Quas aliquam, quae non rerum, architecto eligendi blanditiis officia placeat dolor soluta
                  explicabo. Voluptatem tenetur perspiciatis neque quidem ducimus velit id explicabo, illo magni quis
                  voluptatum. Tempora quod, dicta illum ratione quo at dolores cupiditate aperiam laboriosam amet sequi
                  quaerat similique incidunt eius deleniti deserunt accusamus eligendi nemo est veritatis fugiat ducimus!
                  Modi ut vel et nihil asperiores mollitia obcaecati, neque accusantium corrupti, quisquam voluptatem rem?
                  Possimus tempore et fugit cumque culpa aliquam doloremque odio hic, cum, minima nostrum!</p>
          </section>
          <aside class="bdr">
              <h1>More about us</h1>
          </aside>
      </div>
      <footer class="bdr">Copyright Me 2021</footer>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});