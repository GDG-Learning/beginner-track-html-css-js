/*Create variables to store the following information:
Your first name
Your last name
Your favorite color
Your birth year
Stores values whether you are a student or not
Assign appropriate values and use descriptive names for the
variables.
Follow the variable naming rules while creating variables.*/

const Fname= "Ephi";
const Lname= "Girma";
let favColor="red";
const birthYear=2006;
let isStudent=true;



/*A customer is shopping online. The customer is 22 years old and
lives in the East region. The subtotal of the items in their cart is
$150. Customers in the East region get a discount of $15. Sales tax
of 8% is applied to the subtotal. Calculate the final amount the
customer has to pay and determine whether they are eligible for
the regional discount.*/

const custAge=22;
const area="east";
let total=150;
if(area==="east"){
var discount=15;
}
else{discount=0;}
let salesTax=total*0.08;
total+=salesTax;
total-=discount;