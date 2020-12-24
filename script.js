//Object value 
objects = document.querySelectorAll(".views-field-nothing .field-content p font font")[0].innerHTML;
console.log("Object Value :" , objects);

//Publication Date
publication = document.querySelectorAll(".lbl-licitacao font font")[1].innerHTML;
console.log("Publication Date Value :" , publication);

//Bidding Date
bidding = document.querySelectorAll(".lbl-licitacao font font")[9].innerHTML;
console.log("Bidding Date Value :" , bidding);

//Link
link = document.querySelectorAll(".field .field__item a")[0].getAttribute("href");
console.log("Links : ", link);