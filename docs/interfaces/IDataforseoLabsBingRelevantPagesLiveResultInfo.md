**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsBingRelevantPagesLiveResultInfo

# Interface: IDataforseoLabsBingRelevantPagesLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsRelevantPagesLiveItem`](../classes/DataforseoLabsRelevantPagesLiveItem.md)[]

relevant pages and related data

#### Source

main.ts:111327

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:111325

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:111321

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:111318

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:111313

***

### target?

> **`optional`** **target**: `string`

target domain in a POST array

#### Source

main.ts:111315

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Source

main.ts:111323
