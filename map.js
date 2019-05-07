// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
// var svgns = "http://www.w3.org/2000/svg";
// var data = [
//     { name: 'th-lg', value: 71, color: "red" },
//     // ['th-nn', 27, "#00FF00"],
//     // ['th-nt', 45, "#00FF00"],
// ]

setTimeout(() => {
    const el = document.querySelector('div.pinch-zoom');
    let pz = new PinchZoom.default(el, {});
}, 100)

var data = [
    ['th-ct', 0],
    ['th-4255', 1],
    ['th-pg', 2],
    ['th-st', 3],
    ['th-kr', 4],
    ['th-sa', 5],
    ['th-tg', 6],
    ['th-tt', 7],
    ['th-pl', 8],
    ['th-ps', 9],
    ['th-kp', 10],
    ['th-pc', 11],
    ['th-sh', 12],
    ['th-at', 13],
    ['th-lb', 14],
    ['th-pa', 15],
    ['th-np', 16],
    ['th-sb', 17],
    ['th-cn', 18],
    ['th-bm', 19],
    ['th-pt', 20],
    ['th-no', 21],
    ['th-sp', 22],
    ['th-ss', 23],
    ['th-sm', 24],
    ['th-pe', 25],
    ['th-cc', 26],
    ['th-nn', 27],
    ['th-cb', 28],
    ['th-br', 29],
    ['th-kk', 30],
    ['th-ph', 31],
    ['th-kl', 32],
    ['th-sr', 33],
    ['th-nr', 34],
    ['th-si', 35],
    ['th-re', 36],
    ['th-le', 37],
    ['th-nk', 38],
    ['th-ac', 39],
    ['th-md', 40],
    ['th-sn', 41],
    ['th-nw', 42],
    ['th-pi', 43],
    ['th-rn', 44],
    ['th-nt', 45],
    ['th-sg', 46],
    ['th-pr', 47],
    ['th-py', 48],
    ['th-so', 49],
    ['th-ud', 50],
    ['th-kn', 51],
    ['th-tk', 52],
    ['th-ut', 53],
    ['th-ns', 54],
    ['th-pk', 55],
    ['th-ur', 56],
    ['th-sk', 57],
    ['th-ry', 58],
    ['th-cy', 59],
    ['th-su', 60],
    ['th-nf', 61],
    ['th-bk', 62],
    ['th-mh', 63],
    ['th-pu', 64],
    ['th-cp', 65],
    ['th-yl', 66],
    ['th-cr', 67],
    ['th-cm', 68],
    ['th-ln', 69],
    ['th-na', 70],
    ['th-lg', 71],
    ['th-pb', 72],
    ['th-rt', 73],
    ['th-ys', 74],
    ['th-ms', 75],
    ['th-un', 76],
    ['th-nb', 77]
];
let dataList = [{
        id: "1",
        name: 'th-nn',
        style: { x: 80, y: 50, height: 4.5, width: 20, typeLine: 'oneLine', typePos: 'right' },
        data: [{
            name: "STL",
            detail: [{ name: '5', status: 'online' }, { name: '6', status: 'online' }]
        }]
    },
    {
        id: "2",
        name: 'th-nn',
        style: { x: 87, y: 25, height: 12, width: 22, typeLine: 'twoLine', typePos: 'right' },
        data: [{ name: "SKK", detail: [{ name: '2', status: 'online' }, { name: '3', status: 'online' }, { name: '4', status: 'offline' }, { name: '5', status: 'online' }, { name: '6', status: 'offline' }] }]
    },
    { id: "3", name: 'th-nn', style: { x: 87, y: 15, height: 4.5, width: 22, typeLine: 'twoLineHidden', typePos: 'right' }, data: [{ name: "KCL", detail: [{ name: '1', status: 'online' }] }] },
    { id: "4", name: 'th-lg', style: { x: 140, y: 50, height: 4.5, width: 20, typeLine: 'twoLine', typePos: 'left' }, data: [{ name: "SKW", detail: [{ name: '1', status: 'online' }, { name: '2', status: 'online' }] }] },
    { id: "5", name: 'th-lg', style: { x: 140, y: 56.5, height: 4.5, width: 20, typeLine: 'twoLineHidden', typePos: 'left' }, data: [{ name: "SLP", detail: [{ name: '1', status: 'online' }] }] },
    { id: "6", name: 'th-nt', style: { x: 80, y: 60, height: 8, width: 20, typeLine: 'oneLine', typePos: 'right' }, data: [{ name: "STS", detail: [{ name: '4', status: 'online' }, { name: '5', status: 'online' }, { name: '6', status: 'offline' }] }] },
];
// Create the chart
Highcharts.mapChart('map', {
    chart: {
        map: 'countries/th/th-all',
        backgroundColor: "transparent",
        width: $(window).width() - ($(window).width() * (35 / 100)),
        height: $(window).height(),
        events: {
            load: function(event) {
                console.log(this)
                dataList.forEach((element) => {
                    let selectedData = this.series[0].data.find(value => value["hc-key"] == element.name)
                    selectedData && selectedData.update({
                        color: '#9A9371'
                    })
                })
                dataList.forEach(async(element) => {
                    let x = element.style.x;
                    let y = element.style.y;
                    let height = element.style.height;
                    let width = element.style.width;
                    let name = element.name;
                    let id = element.id;
                    let typeLine = element.style.typeLine;
                    let typePos = element.style.typePos;
                    await createPosition(x, y, height, width, typePos).then((style) => {
                        console.log(style)
                        createElement(id, name, style.x, style.y, style.height, style.width, typeLine, typePos, element.data);
                    })
                })
            }
        }
    },
    legend: {
        enabled: false,
    },
    credits: {
        enabled: false,
    },
    colorAxis: {
        stops: [
            [0, '#70A7D0'],
            [0.5, '#5884A7'],
            [0.9, '#80BDE9']
        ],
    },
    title: {
        text: ''
    },
    exporting: { enabled: false },


    series: [{
        data: data,
        name: 'Random data',
        id: 'dataseries',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: false,
            format: '{point.name}'
        },

    }]
});





// createElement('th-nn', x, y, height, width, 'twoLine');

// x = (highchartsMap.offset().left + highchartsMap.width()) * (90 / 100);
// y = highchartsMap.height() * (65 / 100);
// height = $(window).height() * (5 / 100);
// width = $(window).width() * (20 / 100);
// createElement('th-nn', x, y, height, width, 'twoLine');


// x = (highchartsMap.offset().left * (20 / 100));
// y = highchartsMap.height() * (50 / 100);
// height = $(window).height() * (5 / 100);
// width = $(window).width() * (20 / 100);
// createElement('th-lg', x, y, height, width, 'oneLine');


// createElement('th-nn', 120, 45, 30, 80, 'twoLine');
// createElement('th-nt', 100, -60, 50, 90, 'oneLine');
// createElement('th-lg', -300, 60, 120, 90, 'twoLine');


async function createPosition(rx, ry, rheight, rwidth, typePos) {
    let highchartsMap = $(".highcharts-container");
    let x;
    if (typePos == "right") {
        x = (highchartsMap.offset().left + highchartsMap.width()) * (rx / 100);
    } else if (typePos == "left") {
        x = (highchartsMap.offset().left) * (rx / 100);
    }
    let y = highchartsMap.height() * (ry / 100);
    let height = $(window).height() * (rheight / 100);
    let width = $(window).width() * (rwidth / 100);
    return { x: x, y: y, height: height, width: width }
}

async function createElement(id, name, targetL, targetT, heightBox, widthBox, typeLine, typePos, data) {
    let proviceTarget = $('.highcharts-key-' + name);
    console.log("proviceTarget==>", proviceTarget)
    let x1 = proviceTarget.offset().left + (proviceTarget[0].getBoundingClientRect().width / 2) - 2;
    let y1 = proviceTarget.offset().top + (proviceTarget[0].getBoundingClientRect().height / 2);
    let x2 = targetL;
    let y2 = targetT;
    if (typeLine == "oneLine" || typeLine == "oneLineHidden") {
        await createLine(x1, y1, x2, y2, heightBox, widthBox, id, typeLine).then(() => {
            createBox(x2, y2, heightBox, widthBox, id, data)
        })
    } else if (typeLine == "twoLine" || typeLine == "twoLineHidden") {
        await createLine(x1, y1, x2, y2, 0, 0, id, typeLine).then(() => {
            let targetX;
            let targetY = y2 - (heightBox / 2);
            if (typePos == "right") {
                targetX = x2 + (x2 * (5 / 100))
            } else if (typePos == "left") {
                console.log(x2);
                targetX = x2 - (x2 * (90 / 100))
            }
            createLine(x2, y2, targetX, y2, 0, 0, id, typeLine).then(() => {
                createBox(targetX, targetY, heightBox, widthBox, id, data)
            });
        })
    }

}
async function createLine(x1, y1, x2, y2, heightBox, widthBox, id, typeLine) {
    if (typeLine == "oneLine" || typeLine == "twoLine") {
        let newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        newLine.setAttribute('id', "c_" + id);
        newLine.setAttribute('x1', x1);
        newLine.setAttribute('y1', y1);
        newLine.setAttribute('x2', x2 + (widthBox / 2));
        newLine.setAttribute('y2', y2 + (heightBox / 2));
        newLine.setAttribute('stroke-width', "1px");
        newLine.setAttribute('stroke', "white");
        $("#box-container").append(newLine);
    } else {
        return;
    }

}

function createBox(x, y, height, width, id, data) {
    let foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    foreignObject.setAttributeNS(null, 'id', "b_" + id);
    foreignObject.setAttributeNS(null, 'height', height);
    foreignObject.setAttributeNS(null, 'width', width);
    foreignObject.setAttributeNS(null, 'x', x);
    foreignObject.setAttributeNS(null, 'y', y);
    let boxData = document.createElement('div');
    boxData.setAttribute('id', "d_" + id)
    boxData.classList.add("box-data-interface");
    foreignObject.appendChild(boxData);
    $("#box-container").append(foreignObject);

    drawData(id, data)

    // var rect = document.createElementNS(svgns, 'rect');
    // rect.setAttributeNS(null, 'id', "b_" + key);
    // rect.setAttributeNS(null, 'x', x);
    // rect.setAttributeNS(null, 'y', y);
    // rect.setAttributeNS(null, 'height', height);
    // rect.setAttributeNS(null, 'width', width);
    // rect.setAttributeNS(null, 'fill', 'red');
    // // rect.setAttributeNS(null, 'preserveAspectRatio', 'none');
    // $("#box-container").append(rect)
    // setTimeout(() => {
    //     drawData(x, y, height, width, key, data)
    // }, 500)

}

function drawData(id, data) {

    // { name: "KCL", detail: [{ name: '1', status: 'online' }] }

    (data || []).forEach((element1) => {
        let boxDataContainer = document.createElement('div');
        boxDataContainer.classList.add("row");
        let subjectContainer = document.createElement('div');
        subjectContainer.classList.add("col");
        subjectContainer.style.width = "20%";
        subjectContainer.style.paddingTop = "1em";
        subjectContainer.classList.add("text-title");
        subjectContainer.textContent = element1.name;
        boxDataContainer.append(subjectContainer);
        let detailContainer = document.createElement('div');
        detailContainer.classList.add("col");
        detailContainer.style.width = "80%";
        detailContainer.style.paddingLeft = "0.6em";
        element1.detail.forEach((element2) => {
            let boxIconContainer = document.createElement('div');
            boxIconContainer.classList.add("col");
            boxIconContainer.style.width = "50%";
            boxIconContainer.classList.add("no-padding");
            let boxIcon = document.createElement('div');
            boxIcon.classList.add("icon-box");
            if (element2.status == "online") {
                boxIcon.style.background = "#00ff00";
            } else if (element2.status == "offline") {
                boxIcon.style.background = "#f2281a";
            }

            let spanText = document.createElement('span');
            spanText.textContent = element2.name;
            spanText.classList.add("text-box");
            boxIcon.append(spanText);
            boxIconContainer.append(boxIcon)
            detailContainer.append(boxIconContainer)
        })
        boxDataContainer.append(detailContainer);
        $("#d_" + id).append(boxDataContainer)
    })

}


// let div1 = $('.highcharts-key-th-nt');
// let x1 = (div1.offset().left + 4);
// let y1 = (div1.offset().top + 20);

// var rect = document.createElementNS(svgns, 'rect');
// rect.setAttributeNS(null, 'id', "box1");
// rect.setAttributeNS(null, 'x', x1 + 100);
// rect.setAttributeNS(null, 'y', y1 - 25);
// rect.setAttributeNS(null, 'height', '20');
// rect.setAttributeNS(null, 'width', '20');
// rect.setAttributeNS(null, 'fill', 'red');
// $("#box-container").append(rect)




// Highcharts.Renderer(
//     $('#container')[0],
//     400,
//     300
// );
// renderer.rect(100, 100, 100, 100, 5)
//     .attr({
//         'stroke-width': 2,
//         stroke: 'red',
//         fill: 'yellow',
//         zIndex: 3
//     })
//     .add();