const operations =
[
    {
        "date": "2017-07-31",
        "amount": "5422",
        "links": [
            {
                "name": "link1",
                "href": "http://google.com",
                "method": "GET"
            }
        ]
    },
    {
        "date": "2017-07-31",
        "amount": "34343",
        "links": [
            {
                "name": "link2",
                "href": "http://google.com",
                "method": "GET"
            }
        ]
    },
    {
        "date": "2017-08-31",
        "amount": "5422",
        "links": [
            {
                "name": "link1",
                "href": "https://testsense.alfabank.ru/marathon/ui/#/apps/%2Fplatform%2Fui%2Ftemplates",
                "method": "GET"
            }
        ]
    }
];

const expectedOutput = {
    "2017-08-31": {
        "operations": [
            {
                "date": "2017-08-31",
                "amount": "5422",
                "links": [
                    {
                        "name": "link1",
                        "href": "https://testsense.alfabank.ru/marathon/ui/#/apps/%2Fplatform%2Fui%2Ftemplates",
                        "method": "GET"
                    }
                ]
            }
        ],
        "links": [
            {
                "name": "link1",
                "href": "https://testsense.alfabank.ru/marathon/ui/#/apps/%2Fplatform%2Fui%2Ftemplates",
                "method": "GET"
            }
        ]
    },
    "2017-07-31": {
        "operations": [
            {
                "date": "2017-07-31",
                "amount": "5422",
                "links": [
                    {
                        "name": "link1",
                        "href": "http://google.com",
                        "method": "GET"
                    }
                ]
            },
            {
                "date": "2017-07-31",
                "amount": "34343",
                "links": [
                    {
                        "name": "link2",
                        "href": "https://amazon.com",
                        "method": "GET"
                    }
                ]
            }
        ],
        "links": [
            {
                "name": "link1",
                "href": "http://google.com",
                "method": "GET"
            },
            {
                "name": "link2",
                "href": "https://amazon.com",
                "method": "GET"
            }
        ]
    }
};


function checkVisual() {
    document.getElementById("inputArray").innerHTML = JSON.stringify(operations, undefined, 2);
    document.getElementById("expectedOutput").innerHTML = JSON.stringify(expectedOutput, undefined, 2);
    let result = process(operations);
    document.getElementById("realOutput").innerHTML = JSON.stringify(result, undefined, 2);
}


function process(items){
    let unordered = {};
    // проверяем, есть ли ключ-дата
    // если есть - добавляем соответствующие массивы operations и links новые объекты
    // если нет - по текущему ключу присваиваем объект с полями-массивами
    // operations (записываем операцию как объект целиком) и links (записываем линки текущего объекта если ещё не было с таким же href)
    items.forEach(item => {
        unordered[item.date] = unordered[item.date]
            ? { operations: unordered[item.date].operations.concat(item), links: getUniqueLinks(unordered[item.date].links, item.links)}
            : { operations: [item], links: item.links };
    });
     return unordered;
 }

 function getUniqueLinks(thisLinkArr, newLinkArr) {
    const existingHrefsMap = thisLinkArr.map(item => item.href);
    return thisLinkArr.concat(newLinkArr.filter(item => !existingHrefsMap.includes(item.href)));
 }