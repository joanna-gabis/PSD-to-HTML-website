document.addEventListener('DOMContentLoaded', function() {

    var menuItem = document.getElementById('ofirmie');
    console.log(menuItem);

    menuItem.addEventListener('mouseover', function() {
        var submenu = document.querySelector('.submenu');
        submenu.classList.toggle('visible');
    });
    menuItem.addEventListener('mouseout', function() {
        var submenu = document.querySelector('.submenu');
        submenu.classList.toggle('visible');
    });


    var products = document.getElementsByClassName('product');
    for(var i=0; i<products.length; i++) {
        products[i].addEventListener('mouseover', function() {
            var itemName = this.getElementsByClassName('item_name');
            for(var j=0; j<itemName.length; j++) {
                itemName[j].classList.add('hidden');
            }
        })
    }
    for(var i=0; i<products.length; i++) {
        products[i].addEventListener('mouseout', function() {
            var itemName = this.getElementsByClassName('item_name');
            for(var j=0; j<itemName.length; j++) {
                itemName[j].classList.remove('hidden');
            }
        })
    }

    // Slider

    var next = document.getElementById('nextpic');
    var prev = document.getElementById('prevpic');
    var list = document.getElementsByClassName('slider'); // tablica
    var index = 0;


    function nextPic() {
        var visiblepic = document.querySelector('.slider_visible');

        visiblepic.classList.add('hidden');
        visiblepic.classList.remove('slider_visible');

        if(index<list.length-1) {
            index ++;
        } else {
            index = 0;
        }
        list[index].classList.remove('hidden');
        list[index].classList.add('slider_visible');
    }


    function prevPic() {
        var visiblepic = document.querySelector('.slider_visible');

        visiblepic.classList.remove('slider_visible');
        visiblepic.classList.add('hidden');

        if(index===0) {
            index = list.length-1;
        } else {
            index --;
        }
        list[index].classList.remove('hidden');
        list[index].classList.add('slider_visible');
    }

    next.addEventListener('click', nextPic);
    prev.addEventListener('click', prevPic);

    // dropdown list

    function dropdown() {
        var arrows = document.getElementsByClassName('list_arrow');

        for(var i=0; i<arrows.length; i++) {
            arrows[i].addEventListener('click', function() {
                this.nextElementSibling.classList.toggle('visible');
            });
        }


    }

    dropdown();

    var listPanelLi = document.querySelectorAll('.list_panel li');
    for(var i=0; i<listPanelLi.length; i++) {
        listPanelLi[i].addEventListener('click', function() {
            this.parentElement.parentElement.firstElementChild.innerText = this.innerText;
            this.parentElement.parentElement.firstElementChild.style.color='#595959';
        })
    }


    var chairname = document.getElementsByClassName('chairname');
    var title = document.querySelector('.title');
    var chairvalue = document.querySelector('.title.value');
    for(var i=0; i<chairname.length; i++) {
        chairname[i].addEventListener('click', function() {
            title.innerText = this.innerText;
            chairvalue.innerText = this.dataset.price;
            sumUp();
            this.parentElement.classList.remove('visible');
        })
    }

    var chaircolor = document.getElementsByClassName('chaircolor');
    var color = document.querySelector('span.color');
    var colorvalue = document.querySelector('.color.value');
    for(var i=0; i<chaircolor.length; i++) {
        chaircolor[i].addEventListener('click', function() {
            color.innerText = this.innerText;
            colorvalue.innerText = '0';
            sumUp();
            this.parentElement.classList.remove('visible');
        })
    }

    var chairfabric = document.getElementsByClassName('fabric');
    var fabric = document.querySelector('span.pattern');
    var fabricvalue = document.querySelector('.pattern.value');
    for(var i=0; i<chairfabric.length; i++) {
        chairfabric[i].addEventListener('click', function() {
            fabric.innerText = this.innerText;
            fabricvalue.innerText = '0';
            sumUp();
            this.parentElement.classList.remove('visible');
        })
    }

    var transport = document.getElementById('transport');
    var transportspan = document.querySelector('.transport');
    var transportvalue = document.querySelector('.transport.value');
    transport.addEventListener('change', function() {
        if(this.checked) {
            transportspan.innerText = 'Transport';
            transportvalue.innerText = this.dataset.transportPrice;
            sumUp();
        } else {
            transportspan.innerText = '';
            transportvalue.innerText = '';
            sumUp();
        }
    });

    var sum = document.querySelector('.sum');
    function sumUp() {
        sum.innerText = (Number(chairvalue.innerText) + Number(colorvalue.innerText) + Number(fabricvalue.innerText) + Number(transportvalue.innerText));
    }















});