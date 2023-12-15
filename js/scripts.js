

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});






window.addEventListener('DOMContentLoaded', event => {

    const shoppingCart = [];

    const createPizzaElement = (pizza, isLeftAligned, index) => {
        const pizzaContainer = document.getElementById('pizzaContainer');

        const alignmentClass = isLeftAligned ? '' : 'order-lg-first';

        const textAlignmentClass = isLeftAligned ? 'text-lg-left' : 'text-lg-right';

        const pizzaHTML = `
        <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
        <div class="col-lg-6 ${alignmentClass}">
            <img class="img-fluid pizza-image" src="assets/img/pizzas/demo-image-${index + 1}.png" alt="Pizza Image" />
        </div>
        <div class="col-lg-6 ${alignmentClass}">
            <div class="text-center h-100 project">
                <div class="d-flex h-100">
                    <div class="project-text w-100 my-auto text-center ${textAlignmentClass}">
                        <h4 class="text-wheat">${pizza.name}</h4>
                        <p class="text-wheat">Toppings: ${pizza.toppings.join(', ')} <br> Price: ${pizza.price}:-</p>
                        <button class="btn btn-primary purchase-btn" data-index="${index}">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

        const pizzaDiv = document.createElement('div');
        pizzaDiv.innerHTML = pizzaHTML;

        pizzaContainer.appendChild(pizzaDiv);

        const purchaseButton = pizzaDiv.querySelector('.purchase-btn');
        purchaseButton.addEventListener('click', () => addToCart(pizza, index));
    };

    const addToCart = (pizza, index) => {
        shoppingCart.push({
            name: pizza.name,
            toppings: pizza.toppings,
            price: pizza.price,
            index: index + 1,
        });
        displayShoppingCart();
    };
    

    const displayShoppingCart = () => {
        const cartItemsContainer = document.getElementById('cartItemsContainer');
        const totalPriceElement = document.getElementById('totalPrice');
    
        cartItemsContainer.innerHTML = '';
    
        let totalCartPrice = 0;
    
        shoppingCart.forEach((pizza, index) => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.innerHTML = `
                <p style="color: wheat;">${pizza.name} ${pizza.price}:-</p>
            `;
            cartItemsContainer.appendChild(cartItemDiv);

            totalCartPrice += pizza.price;
        });
        totalPriceElement.textContent = `Total: ${totalCartPrice}:-`;
    };

    const pizzaArray = [
        {
          name: "Margherita",
          toppings: ["Tomato Sauce", "Mozzarella", "Fresh Basil"],
          price: 99
        },
        {
          name: "Pepperoni",
          toppings: ["Tomato Sauce", "Mozzarella", "Pepperoni"],
          price: 119
        },
        {
          name: "Vegetarian",
          toppings: ["Tomato Sauce", "Mozzarella", "Bell Peppers", "Mushrooms", "Olives"],
          price: 109
        },
        {
          name: "Hawaiian",
          toppings: ["Tomato Sauce", "Mozzarella", "Ham", "Pineapple"],
          price: 129
        },
        {
          name: "BBQ Chicken",
          toppings: ["BBQ Sauce", "Mozzarella", "Grilled Chicken", "Red Onions"],
          price: 139
        },
        {
          name: "Meat Lovers",
          toppings: ["Tomato Sauce", "Mozzarella", "Pepperoni", "Sausage", "Bacon"],
          price: 149
        },
        {
          name: "Mushroom Delight",
          toppings: ["Creamy Garlic Sauce", "Mozzarella", "Mushrooms", "Spinach"],
          price: 119
        },
        {
          name: "Supreme",
          toppings: ["Tomato Sauce", "Mozzarella", "Pepperoni", "Sausage", "Bell Peppers", "Onions", "Olives"],
          price: 159
        }
      ];
      

    pizzaArray.forEach((pizza, index) => {
        const isLeftAligned = index % 2 === 0;
        createPizzaElement(pizza, isLeftAligned, index);
    });
});

