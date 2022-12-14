// Problem #1: Merge Sort
// Description: Congratulations! You were just hired to be a junior backend engineer at Hanawilo! As the first task at Hanawilo, your manager has asked you to implement a sorting algorithm using the Merge sort of the payloads coming back from the MongoDB database. The website currently is running a very slow sorting algorithm and it is driving away customers due to the slowness, therefore, as your first task, he has assigned you to rewrite the sorting algorithm for this payload returned from the MongoDB API fetch call.
// He has asked to return the following data in two sorting options:
// 1.Merge sort (ascending order) by the rank
// 2.Merge sort (ascending order) by the ratings AND rank
// Please see below for the data returned from the database
const data = {
    results: {
        payload: [
            {
                profile: {
                    name: 'Tony',
                    rank: 9,
                    favorites: [
                        {
                            title: 'Spider-Man',
                            rating: 5
                        },
                        {
                            title: 'Spongebob',
                            rating: 9
                        }
                    ]
                }
            },
            {
                profile: {
                    name: 'John',
                    rank: 2,
                    favorites: [
                        {
                            title: 'Hulk',
                            rating: 1
                        },
                        {
                            title: 'Top Gun',
                            rating: 8
                        }
                    ]
                }
            }
        ]
    }
}

function rankAscendingOrder(data) {
    if (data.length <= 1) return data;
    let results = []

    for (let i = 0; i < data.length; i++) {
        if (data[i].results[0].payload[0].profile[0].rank < )
    }

    return results
}
