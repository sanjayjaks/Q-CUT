const menu_list = [
    {
        menu_name: "Salad",
        menu_image: "menu_1"
    },
    {
        menu_name: "Rolls",
        menu_image: "menu_2"
    },
    {
        menu_name: "Deserts",
        menu_image: "menu_3"
    },
    {
        menu_name: "Sandwich",
        menu_image: "menu_4"
    },
    {
        menu_name: "Cake",
        menu_image: "menu_5"
    },
    {
        menu_name: "Pure Veg",
        menu_image: "menu_6"
    },
    {
        menu_name: "Pasta",
        menu_image: "menu_7"
    },
    {
        menu_name: "Noodles",
        menu_image: "menu_8"
    }];

    const food_list = [
        {
            _id: "1",
            name: "Greek salad",
            image: "food_1",
            price: 120,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Salad"
        },
        {
            _id: "2",
            name: "Veg salad",
            image: "food_2",
            price: 180,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Salad"
        }, {
            _id: "3",
            name: "Clover Salad",
            image: "food_3",
            price: 160,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Salad"
        }, {
            _id: "4",
            name: "Chicken Salad",
            image: "food_4",
            price: 240,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Salad"
        }, {
            _id: "5",
            name: "Lasagna Rolls",
            image: "food_5",
            price: 140,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        }, {
            _id: "6",
            name: "Peri Peri Rolls",
            image: "food_6",
            price: 120,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        }, {
            _id: "7",
            name: "Chicken Rolls",
            image: "food_7",
            price: 200,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        }, {
            _id: "8",
            name: "Veg Rolls",
            image: "food_8",
            price: 150,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        }, {
            _id: "9",
            name: "Ripple Ice Cream",
            image: "food_9",
            price: 140,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        }, {
            _id: "10",
            name: "Fruit Ice Cream",
            image: "food_10",
            price: 220,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        }, {
            _id: "11",
            name: "Jar Ice Cream",
            image: "food_11",
            price: 100,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        }, {
            _id: "12",
            name: "Vanilla Ice Cream",
            image: "food_12",
            price: 120,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        },
        {
            _id: "13",
            name: "Chicken Sandwich",
            image: "food_13",
            price: 120,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Sandwich"
        },
        {
            _id: "14",
            name: "Vegan Sandwich",
            image: "food_14",
            price: 180,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Sandwich"
        }, {
            _id: "15",
            name: "Grilled Sandwich",
            image: "food_15",
            price: 160,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Sandwich"
        }, {
            _id: "16",
            name: "Bread Sandwich",
            image: "food_16",
            price: 240,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Sandwich"
        }, {
            _id: "17",
            name: "Cup Cake",
            image: "food_17",
            price: 140,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        }, {
            _id: "18",
            name: "Vegan Cake",
            image: "food_18",
            price: 120,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        }, {
            _id: "19",
            name: "Butterscotch Cake",
            image: "food_19",
            price: 200,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        }, {
            _id: "20",
            name: "Sliced Cake",
            image: "food_20",
            price: 150,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        }, {
            _id: "21",
            name: "Garlic Mushroom ",
            image: "food_21",
            price: 140,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        }, {
            _id: "22",
            name: "Fried Cauliflower",
            image: "food_22",
            price: 220,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        }, {
            _id: "23",
            name: "Mix Veg Pulao",
            image: "food_23",
            price: 100,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        }, {
            _id: "24",
            name: "Rice Zucchini",
            image: "food_24",
            price: 120,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        },
        {
            _id: "25",
            name: "Cheese Pasta",
            image: "food_25",
            price: 120,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pasta"
        },
        {
            _id: "26",
            name: "Tomato Pasta",
            image: "food_26",
            price: 180,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pasta"
        }, {
            _id: "27",
            name: "Creamy Pasta",
            image: "food_27",
            price: 160,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pasta"
        }, {
            _id: "28",
            name: "Chicken Pasta",
            image: "food_28",
            price: 240,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pasta"
        }, {
            _id: "29",
            name: "Buttter Noodles",
            image: "food_29",
            price: 140,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        }, {
            _id: "30",
            name: "Veg Noodles",
            image: "food_30",
            price: 120,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        }, {
            _id: "31",
            name: "Somen Noodles",
            image: "food_31",
            price: 200,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        }, {
            _id: "32",
            name: "Cooked Noodles",
            image: "food_32",
            price: 150,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        }
    ]
const food_list1= [
    {
        _id: "1",
        name: "Greek salad",
        image: "food_1",
        price: 120,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },
    {
        _id: "2",
        name: "Veg salad",
        image: "food_2",
        price: 180,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    }, {
        _id: "3",
        name: "Clover Salad",
        image: "food_3",
        price: 160,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    }, {
        _id: "4",
        name: "Chicken Salad",
        image: "food_4",
        price: 240,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    }, {
        _id: "5",
        name: "Lasagna Rolls",
        image: "food_5",
        price: 140,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "6",
        name: "Peri Peri Rolls",
        image: "food_6",
        price: 120,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "7",
        name: "Chicken Rolls",
        image: "food_7",
        price: 200,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "8",
        name: "Veg Rolls",
        image: "food_8",
        price: 150,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }]    