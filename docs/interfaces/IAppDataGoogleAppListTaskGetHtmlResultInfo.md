**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataGoogleAppListTaskGetHtmlResultInfo

# Interface: IAppDataGoogleAppListTaskGetHtmlResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:191564

***

### items?

> **`optional`** **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

HTML pages and related data

#### Source

main.ts:191568

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:191566

***

### keyword?

> **`optional`** **keyword**: `string`

app collection received in a POST array

#### Source

main.ts:191551

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:191559

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:191557

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Source

main.ts:191555

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:191553
