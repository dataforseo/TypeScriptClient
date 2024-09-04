[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAppDataGoogleAppListingsSearchLiveResultInfo

# Interface: IAppDataGoogleAppListingsSearchLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### count?

> `optional` **count**: `number`

the number of items in the results array

#### Defined in

main.ts:196723

***

### items?

> `optional` **items**: [`AppDataGoogleAppListingsSearchLiveItem`](../classes/AppDataGoogleAppListingsSearchLiveItem.md)[]

array of apps and related data

#### Defined in

main.ts:196730

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned apps

#### Defined in

main.ts:196725

***

### offset\_token?

> `optional` **offset\_token**: `string`

token for subsequent requests
you can use this parameter in the POST request to avoid timeouts while trying to obtain over 100,000 results in a single request

#### Defined in

main.ts:196728

***

### total\_count?

> `optional` **total\_count**: `number`

the total number of relevant results in the database

#### Defined in

main.ts:196721
