[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAppDataAppleAppListingsSearchLiveResultInfo

# Interface: IAppDataAppleAppListingsSearchLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### count?

> `optional` **count**: `number`

the number of items in the results array

#### Defined in

main.ts:201423

***

### items?

> `optional` **items**: [`AppDataAppleAppListingsSearchLiveItem`](../classes/AppDataAppleAppListingsSearchLiveItem.md)[]

array of apps and related data

#### Defined in

main.ts:201430

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned apps

#### Defined in

main.ts:201425

***

### offset\_token?

> `optional` **offset\_token**: `string`

token for subsequent requests
you can use this parameter in the POST request to avoid timeouts while trying to obtain over 100,000 results in a single request

#### Defined in

main.ts:201428

***

### total\_count?

> `optional` **total\_count**: `number`

the total number of relevant results in the database

#### Defined in

main.ts:201421
