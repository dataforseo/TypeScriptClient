[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataAppleAppListingsSearchLiveResultInfo

# Interface: IAppDataAppleAppListingsSearchLiveResultInfo

Defined in: main.ts:209252

## Indexable

\[`key`: `string`\]: `any`

## Properties

### count?

> `optional` **count**: `number`

Defined in: main.ts:209256

the number of items in the results array

***

### items?

> `optional` **items**: [`AppDataAppleAppListingsSearchLiveItem`](../classes/AppDataAppleAppListingsSearchLiveItem.md)[]

Defined in: main.ts:209263

array of apps and related data

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:209258

offset in the results array of returned apps

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:209261

token for subsequent requests
you can use this parameter in the POST request to avoid timeouts while trying to obtain over 100,000 results in a single request

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:209254

the total number of relevant results in the database
