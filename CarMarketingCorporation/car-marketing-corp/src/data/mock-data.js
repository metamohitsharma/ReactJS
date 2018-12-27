
function brand(id, brandName) {
    this.id = id
    this.brandName = brandName
}
const brandList = [
    new brand(1, "Hyundai"),
    new brand(2, "Toyota"),
    new brand(3, "Mercedes-Benz")
]

const sortBy = ["Title", "Description", "Launch Date"]

function car(id, brandId, image, title, desciption, launchDate) {
    this.id = id
    this.brandId = brandId
    this.image = image
    this.title = title
    this.desciption = desciption
    this.launchDate = launchDate
}

const carList = [
    new car(1, 1, "", "I10", "HatchBack", new Date(2016, 11, 11)),
    new car(2, 1, "", "Elantra", "Sedan", new Date(2017, 12, 12)),
    new car(3, 2, "", "Etios", "HatchBack", new Date(2016, 10, 1)),
    new car(4, 2, "", "Innova", "SUV", new Date(2014, 1, 1)),
    new car(5, 3, "", "C-Class", "Sedan", new Date(2018, 5, 1)),
    new car(6, 3, "", "G-Class", "SUV", new Date(2018, 2, 1)),
]
