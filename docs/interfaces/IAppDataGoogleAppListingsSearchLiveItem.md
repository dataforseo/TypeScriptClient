[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleAppListingsSearchLiveItem

# Interface: IAppDataGoogleAppListingsSearchLiveItem

Defined in: main.ts:205021

## Indexable

\[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:205023

ID of the returned app

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:205032

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### item?

> `optional` **item**: [`AppDataGooglePlayInfoOrganicSerpElementItem`](../classes/AppDataGooglePlayInfoOrganicSerpElementItem.md)

Defined in: main.ts:205039

detailed information about the app

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:205029

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:205027

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:205025

search engine domain in a POST array

***

### time\_update?

> `optional` **time\_update**: `string`

Defined in: main.ts:205037

date and time when SERP data was last updated
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2023-05-23 10:16:19 +00:00
