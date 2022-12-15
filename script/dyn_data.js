const beschikbaarId = ["Beschikbaar", "Binnen kort beschikbaar", "Niet beschikbaar"];
//                           0                        1                  2
const merkId = ["ILCA", "Harken", "Allen", "Windesing"];
//                  0        1         2         3
const kleurId = ["Zwart", "Blauw", "Roze", "Rood"];
//                   0        1        2       3
const materiaalId = ["Aluminium", "Carbon", "Inox", "IJzer"];
//                        0           1        2        3

const producten = [
    {
        link: "ILCA_Daggerboard_GRP_Detail.html",
        beschikbaarId: 0,
        merkId: 0,
        kleurId: null,
        materiaalId: null,
        img: "../media/ilca-daggerboard-grp-ilc3910_6044912.jpg",
        naam: "ILCA Daggerboard GRP",
        price: 615.00
    },
    {
        link: "ILCA_Rudder_Blade_GRP_Detail.html",
        beschikbaarId: 0,
        merkId: 0,
        kleurId: null,
        materiaalId: null,
        img: "../media/ilca-rudder-blade-grp-ilc3920_6248465.jpg",
        naam: "ILCA rudder blade GRP",
        price: 370.00
    },
    {
        link: "Gorilla_sailing_laser_hangband_detail.html",
        beschikbaarId: 1,
        merkId: null,
        kleurId: 0,
        materiaalId: null,
        img: "../media/gorilla-sailing-laser-hangband-gs3001_6248964.jpg",
        naam: "Gorilla sailing Laser hangband",
        price: 34.95
    },
    {
        link: null,
        beschikbaarId: 2,
        merkId: [0, 1],
        kleurId: 0,
        materiaalId: null,
        img: "../media/ilca-traveller-block-harken-ilc5964_6249095.jpg",
        naam: "ILCA Traveller block - Harken",
        price: 52.50
    },
    {
        link: null,
        beschikbaarId: 0,
        merkId: [0, 1],
        kleurId: 0,
        materiaalId: null,
        img: "../media/ilca-mainsheet-boom-block-harken-ilc5962_6249289.jpg",
        naam: "ILCA mainsheet boom block - Harken",
        price: 16.50
    },
    {
        link: null,
        beschikbaarId: 1,
        merkId: 0,
        kleurId: 0,
        materiaalId: 1,
        img: "../media/ilca-6-composite-lower-ilc1635_6249401.jpg",
        naam: "ILCA 6 composite lower",
        price: 1110.00
    },
    {
        link: null,
        beschikbaarId: 0,
        merkId: 0,
        kleurId: null,
        materiaalId: null,
        img: "../media/ilca-clew-strap-ilc4934_6249578.jpg",
        naam: "ILCA clew strap",
        price: 17.50
    },
    {
        link: null,
        beschikbaarId: 0,
        merkId: 0,
        kleurId: 0,
        materiaalId: null,
        img: "../media/rwo-screw-bung-r2067_6249692.jpg",
        naam: "RWO screw bung",
        price: 3.95
    },
    {
        link: null,
        beschikbaarId: 2,
        merkId: null,
        kleurId: 3,
        materiaalId: null,
        img: "../media/optiparts-vane-only-red-ex1243v_6250633.jpg",
        naam: "Optiparts vane only - red",
        price: 9.95
    },
    {
        link: null,
        beschikbaarId: 0,
        merkId: null,
        kleurId: null,
        materiaalId: 0,
        img: "../media/trd-magic-optimist-trolley-trd-magic-optimist_6253444.jpg",
        naam: "TRD magic Optimist Trolley",
        price: 265.00
    },
    {
        link: null,
        beschikbaarId: 0,
        merkId: null,
        kleurId: null,
        materiaalId: null,
        img: "../media/optiparts-fluitje-ex1441_6253324.jpg",
        naam: "Optiparts fluitje",
        price: 2.25
    },
    {
        link: null,
        beschikbaarId: 0,
        merkId: null,
        kleurId: null,
        materiaalId: null,
        img: "../media/optiparts-optimist-mastring-grijs-ex1211_6253347.jpg",
        naam: "Optiparts Optimist mastring grijs",
        price: 5.75
    },
    {
        link: null,
        beschikbaarId: 1,
        merkId: null,
        kleurId: null,
        materiaalId: 2,
        img: "../media/winner-maststep-complete-woms_6253566.jpg",
        naam: "Winner maststep complete",
        price: 85.00
    },
    {
        link: null,
        beschikbaarId: 0,
        merkId: 3,
        kleurId: 0,
        materiaalId: null,
        img: "../media/windesign-clinometer-ex3008_6253382.jpg",
        naam: "Windesign Clinometer",
        price: 8.75
    },
    {
        link: null,
        beschikbaarId: 0,
        merkId: 3,
        kleurId: [0, 1, 3],
        materiaalId: null,
        img: "../media/windesign-magnetic-protest-kit-ex2650_6253421.jpg",
        naam: "Windesign magnetic protest kit",
        price: 42.50
    },
    {
        link: null,
        beschikbaarId: 2,
        merkId: null,
        kleurId: 2,
        materiaalId: null,
        img: "../media/universal-trolley-wheel-pink-75380-pi_6253476.png",
        naam: "Universal trolley wheel - Pink",
        price: 29.95
    },
    {
        link: null,
        beschikbaarId: 1,
        merkId: null,
        kleurId: 0,
        materiaalId: 0,
        img: "../media/spinnaker_pole_end.jpg",
        naam: "Selden spinnaker pole end",
        price: 31.00
    },
    {
        link: null,
        beschikbaarId: 0,
        merkId: null,
        kleurId: 0,
        materiaalId: 2,
        img: "../media/Spinnaker_pole.jpg",
        naam: "Caddet Spinnaker pole",
        price: 146.00
    },
    {
        link: null,
        beschikbaarId: 0,
        merkId: null,
        kleurId: 3,
        materiaalId: 0,
        img: "../media/Cadet_trolley.jpg",
        naam: "Practic ALU-trolley for Cadet",
        price: 370.00
    },
    {
        link: null,
        beschikbaarId: 0,
        merkId: 2,
        kleurId: null,
        materiaalId: 2,
        img: "../media/al-a4288_profile_6042252.jpg",
        naam: "Allen standard eyestrap",
        price: 2.04
    },
    {
        link: null,
        beschikbaarId: 1,
        merkId: null,
        kleurId: 3,
        materiaalId: null,
        img: "../media/sb-em-8-re_6042327.jpg",
        naam: "Sailboats Marstrand 16 Plait Sheet",
        price: 2.15
    },
    {
        link: null,
        beschikbaarId: 0,
        merkId: null,
        kleurId: null,
        materiaalId: 3,
        img: "../media/mg-670206_2019_6042401.jpg",
        naam: "Trolley Axle Washer",
        price: 1.25
    },
    {
        link: null,
        beschikbaarId: 2,
        merkId: null,
        kleurId: null,
        materiaalId: null,
        img: "../media/mg-392040_6042547.jpg",
        naam: "Sail Number Glue Remover",
        price: 11.95
    },
    {
        link: null,
        beschikbaarId: 0,
        merkId: 2,
        kleurId: [1, 2, 3],
        materiaalId: 0,
        img: "../media/al-a167_2015_6042631.jpg",
        naam: "Allen Burgee",
        price: 12.60
    }
];

function rangeCheck(index) {
    return !(index < 0 || index >= producten.length);
}

function getLink(index) {
    if (!rangeCheck(index)) {
        return false;
    } else {
        let product = producten[index];
        let ID = product.link;

        if (ID == null){
            return false;
        } else{
            return ID;
        }
    }
}

function getImg(index) {
    if (!rangeCheck(index)) {
        return false;
    } else {
        let product = producten[index];
        return product.img;
    }
}

function getNaam(index) {
    if (!rangeCheck(index)) {
        return false;
    } else {
        let product = producten[index];
        return product.naam;
    }
}

function getPrijs(index) {
    if (!rangeCheck(index)) {
        return false;
    } else {
        let product = producten[index];
        return product.price;
    }
}

function getRange() {
    return producten.length;
}