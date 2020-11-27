//ajax - Asyncronous javascript and xml 
//api application programming interface

//GET requests are getting information from the solution 

//Sends the information from api/orders. Takes each order that is in the orders array (that is retrieved from the Json) and appends a new list item with a name and drink field, adding the information that comes back from the api order.name and order.drink.

$(function (){
    $.ajax({
        type:'GET',
        url:'/api/orders',//where we're getting the info from on the API 
        success: function(orders){
            $.each(orders, function(i, order){
                $('#orders').append('<li> name: '+ order.name +', drink:', order.drink +'</li>')
            })

        }, 
        error:function(){
            alert('error loading orders');
        }
    })

    $('#add-order').on('click', function() {

        var order = {
        name: $('name').val(),
        drink: $('drink').val(),
    }
    $.ajax({
        type:'POST',
        url:'/api/orders', //where the info is going to on the API. 
        data: order, //order object made on line 15. 
        success: function(newOrder){
            $('#orders').append('<li> name: '+ newOrder.name +', drink:', newOrder.drink +'</li>')
        },
        error: function () {
            alert('error saving order');            
        }
    })
    })
})

//POST adds info from the browser to the API

