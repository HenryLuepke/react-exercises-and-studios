export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://images4.penguinrandomhouse.com/cover/9780593801970";
   let book2 = "https://images4.penguinrandomhouse.com/cover/9780593230381";
   let book3 = "https://images1.penguinrandomhouse.com/cover/9780385547994";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The City and Its Uncertain Walls by Haruki Murakami" />
         <img src={book2} alt="The Message by Ta-Nehisi Coates" />
         <img src={book3} alt="Death at the Sign of the Rook by Kate Atkinson" />
      </div>      
   );
}