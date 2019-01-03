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

const baseImage = "iVBORw0KGgoAAAANSUhEUgAAASwAAAEsBAMAAACLU5NGAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAD90lEQVR4nO3cwW+bSBQH4AcGw5HnJDhHaN3dHO1su9ojNGnPtrUb7dFuIiVHnEo5263Uv3vfGwab1myVA5DV6vcpgeD35HmeGYbJxUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/zOb3N5BRexlu9/Jo+NCQFl/HbWrRK7s6Amcdy3jCfaftyOT/OmsnLxSFqkzu04Ns1Z+RxPOMtUc63fH6U5HP8O5/uo1Vyh9IJhTylwSjz0pV0y4Tex0dJ7iij3ck+WiV3J9RPvVhRLgO5O5V+KOSl7MesnXSRH++jNrlDAWurEW0i6ZOz8jI9mlwaDXkftckd8nXEdgnNVjI2sf6Q+VvLSMiMHJnupHC0j9rkrmlL87Lhs7JK86oM1fowVFq0jdrkjn2QKbMuTEvD8aGsfCQ9th9PbzHeR21yt1KWkUq3et+Tq4tDHpnXfZ67+7Zdltu1itrkbrEuRWVLWdmwHbl0shlXSQ7LLVtFbXLXZUmLphHOHK3IsWVtTg6Lk6PFV1Gb3G1Z9I1Xjb015NpSHq7jfntL7reoaW7JhD+pJQ2537llVuyGO1Em17iWJMt7f3ei/zeZcdGlKLDr1saW5XPV9F9bM2pV1CZ3yDxDZFx0HZcF0z+s8rpwVcuWPo5k1KqoTe7QwD58mp6Js/PUTn4tVEatx2ei3lAzu4M4t3uErQl5PN3YOb84NR+gitrkDnl8J51QNO23hjLH7SqQxxnp0trbfotmo9t0RE27U9k9hFw2PuBfLnVD0d/u9KMs8hNq2svrxFqXJXprZtmg9riXp5v0jTRI4afyn5lv1X8+gRaQ22XA/zT6sxatkgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD65tjf/5gXLYtHb/8l8kNZkVw5zEwjIjei8ru7rtJ7/YqcO3ISorTFsiLvt+eXZY7xlp5sWd6b7KscrpeZ80DBus2y6D1dviY3C+QP/9WUnGWkp8GrhZa1fE3DQiK1ssYrurdlDeblwZ86TzTctFuWf/dxPihy+kw31+/IuTOnm2v98I6EwoTe1cuKLsLEluVm5cFLHHf7pc2JKIPoZl4STpfFHzSRfnEyc5pQrmVJiO7l13yRHpdlPQ0LW5ZTHSInWN23WZZMedMJycUq0aa1FT1F1dyK6MugoHpvuY903Fv0a9Jqb+n7apesHlY0KSvRU6233CV9V5Z/RsdzixbzlsvSuUXL4nFOT9mVtq2nw9yiYPx9WebCHGt3IrW7yOnby51IuyzPKEgv9M31dLgTKUgayioH+oqrdavlsp5hWPTb3jM9vnQBjZyLl64AAP43/gHVSaMe2vmdiAAAAABJRU5ErkJggg=="
const carList = [
    {
        id: 1,
        brandId: 1,
        img: baseImage,
        title: "I 10",
        description: "HatchBack",
        launchDate: new Date(2016, 11, 11)
    },
    {
        id: 2,
        brandId: 1,
        img: baseImage,
        title: "Elantra",
        description: "Sedan",
        launchDate: new Date(2017, 12, 12)
    },
    {
        id: 3,
        brandId: 2,
        img: baseImage,
        title: "Etios",
        description: "HatchBack",
        launchDate: new Date(2016, 10, 1)
    },
    {
        id: 4,
        brandId: 2,
        img: baseImage,
        title: "Innova",
        description: "SUV",
        launchDate: new Date(2014, 1, 1)
    },
    {
        id: 5,
        brandId: 3,
        img: baseImage,
        title: "C-Class",
        description: "Sedan",
        launchDate: new Date(2018, 5, 1)
    },
    {
        id: 6,
        brandId: 3,
        img: baseImage,
        title: "G-Class",
        description: "SUV",
        launchDate: new Date(2018, 2, 1)
    }
]

const metaData = {
    car: {
        title: {
            name: "title",
            label: "Title"
        },
        description: {
            name: "description",
            label: "Description"
        },
        launchDate: {
            name: "launchDate",
            label: "Launch Date"
        }
    }
}

module.exports = {
    carList,
    sortBy,
    brandList,
    metaData
}