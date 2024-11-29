[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataAppleAppListingsSearchLiveItem

# Interface: IAppDataAppleAppListingsSearchLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

ID of the returned app

#### Defined in

main.ts:209095

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:209104

***

### item?

> `optional` **item**: [`AppDataAppStoreInfoOrganicSerpElementItem`](../classes/AppDataAppStoreInfoOrganicSerpElementItem.md)

detailed information about the app

#### Defined in

main.ts:209111

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:209101

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:209099

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:209097

***

### time\_update?

> `optional` **time\_update**: `string`

date and time when SERP data was last updated
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2023-05-23 10:16:19 +00:00

#### Defined in

main.ts:209109
