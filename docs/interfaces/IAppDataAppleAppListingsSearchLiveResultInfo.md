**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataAppleAppListingsSearchLiveResultInfo

# Interface: IAppDataAppleAppListingsSearchLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### count?

> **`optional`** **count**: `number`

the number of items in the results array

#### Source

main.ts:194341

***

### items?

> **`optional`** **items**: [`AppDataleAppListingsSearchLiveItem`](../classes/AppDataleAppListingsSearchLiveItem.md)[]

array of apps and related data

#### Source

main.ts:194348

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned apps

#### Source

main.ts:194343

***

### offset\_token?

> **`optional`** **offset\_token**: `string`

token for subsequent requests
you can use this parameter in the POST request to avoid timeouts while trying to obtain over 100,000 results in a single request

#### Source

main.ts:194346

***

### total\_count?

> **`optional`** **total\_count**: `number`

the total number of relevant results in the database

#### Source

main.ts:194339
