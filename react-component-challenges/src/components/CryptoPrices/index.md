# Crypto Prices

You're given a CSS file for a component displaying cryptocurrency prices, and you need to implement the component using React.

When the component initially mounts, it should make an API request to the cryptocurrencies API at:

`https://api.frontendexpert.io/api/fe/cryptocurrencies`


This API expects GET requests with one query parameter, the `page`. The page should be a number representing which page of data is being requested, starting at page 0. The API returns a JSON formatted object with two keys: `coins` and `hasNext`. The `hasNext` value will always be `true` unless the page requested includes the last cryptocurrency, in which case `hasNext` will be `false`. The `coins` value will be an array of coin objects, each with a `name`, `price` and `marketCap`, all as strings.

For example, a call to:
`https://api.frontendexpert.io/api/fe/cryptocurrencies?page=3` 
would return page three of data, which might look like this:

```json
{
  "hasNext": true,
  "coins": [
    {
      "name": "Monero",
      "price": "$148.45",
      "marketCap": "$2,690,082,919"
    },
    ...
  ]
}
```

Your component should return a table, with a caption of "Crypto Prices" and three columns with headings of "Coin", "Price", and "Market Cap". Every coin from the most recent call to the API should be given a row in the table. For example, the table might initially look like this:

| Coin      | Price      | Market Cap       |
|-----------|------------|------------------|
| Bitcoin   | $29,970.48 | $571,108,740,782 |
| Ethereum  | $2,064.89  | $249,824,561,307 |
| ...       | ...        | ...              |


Below the table should be two buttons with the text of `Back` and `Next`. The back button should return to the previous page, and the next button should move to the next page. The back button should be disabled on the first page, and the next button should be disabled on the last page.

Your component has already been rendered to the DOM inside of a `#root` div directly in the body with the CSS imported.