const brandList = [
    {
        id: 1,
        name: "Hyundai"
    },
    {
        id: 2,
        name: "Toyota"
    },
    {
        id: 3,
        name: "Mercedes-Benz"
    }
]

const sortBy = [
    {
        id: 1,
        name: "Title"
    },
    {
        id: 2,
        name: "Description"
    },
    {
        id: 3,
        name: "Launch Date"
    }
]

const carList = [
    {
        id: 1,
        brandId: 1,
        img: "",
        title: "I10",
        description: "HatchBack",
        launchDate: new Date(2016, 11, 11)
    },
    {
        id: 2,
        brandId: 1,
        img: "",
        title: "Elantra",
        description: "Sedan",
        launchDate: new Date(2017, 12, 12)
    },
    {
        id: 3,
        brandId: 2,
        img: "",
        title: "Etios",
        description: "HatchBack",
        launchDate: new Date(2016, 10, 1)
    },
    {
        id: 4,
        brandId: 2,
        img: "",
        title: "Innova",
        description: "SUV",
        launchDate: new Date(2014, 1, 1)
    },
    {
        id: 5,
        brandId: 3,
        img: "",
        title: "C-Class",
        description: "Sedan",
        launchDate: new Date(2018, 5, 1)
    },
    {
        id: 6,
        brandId: 3,
        img: "",
        title: "G-Class",
        description: "SUV",
        launchDate: new Date(2018, 2, 1)
    }
]

export default brandList;