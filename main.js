function Product(name, id, type, description, price){
    this.name = name;
    this.id = id;
    this.type = type;
    this.description = description;
    this.price = price;
}


$(document).ready(function(){

    $('select#selectType').change(function(e){
        let selected_type = e.target.value;

        $.ajax({
            method: 'GET',
            url: './products.json',
            dataType: 'json'
        }).done(function(data)
        {
            $('.container').empty();
            let sub_array = data.filter(item => item.type == selected_type);

            sub_array.forEach(item => {
                if(item.type == selected_type)
                {
                    let str = "";
                    let divElem = $('<div></div>')
                    divElem.addClass("item");
                    divElem.addClass("card border-primary mb-3");
                    str += "<b>Name:</b> " + item.name + "<br>";
                    str += "<b>Description:</b> " + item.description + "<br>";
                    str += "<b>Price:</b> " + item.price;
                    console.log(str);
                    divElem.html(str);
                
                    imgUrl = item.image;
                    let img = $('<img>');
                    img.addClass("image");
                    img.attr("src", imgUrl);
                    divElem.append(img);

                    $('.container').append(divElem);
                };
  
            }); 
               
        });
                
    });

});