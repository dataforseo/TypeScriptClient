[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / GoogleTrendsQueriesListElementItem

# Class: GoogleTrendsQueriesListElementItem

## Extends

- [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

## Implements

- [`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleTrendsQueriesListElementItem()

> **new GoogleTrendsQueriesListElementItem**(`data`?): [`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)

#### Parameters

• **data?**: [`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md)

#### Returns

[`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`constructor`](BaseGoogleTrendsItem.md#constructors)

#### Defined in

main.ts:127217

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`_discriminator`](BaseGoogleTrendsItem.md#_discriminator)

#### Defined in

main.ts:21570

***

### data?

> `optional` **data**: [`QueriesListDataInfo`](QueriesListDataInfo.md)

Google Trends data from the corresponding item

#### Implementation of

[`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md).[`data`](../interfaces/IGoogleTrendsQueriesListElementItem.md#data)

#### Defined in

main.ts:127213

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_topics_list element is based on the keywords listed in this array

#### Implementation of

[`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md).[`keywords`](../interfaces/IGoogleTrendsQueriesListElementItem.md#keywords)

#### Defined in

main.ts:127211

***

### position?

> `optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md).[`position`](../interfaces/IGoogleTrendsQueriesListElementItem.md#position)

#### Defined in

main.ts:127206

***

### title?

> `optional` **title**: `string`

title of the element in Google Trends

#### Implementation of

[`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md).[`title`](../interfaces/IGoogleTrendsQueriesListElementItem.md#title)

#### Defined in

main.ts:127208

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`init`](BaseGoogleTrendsItem.md#init)

#### Defined in

main.ts:127222

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`toJSON`](BaseGoogleTrendsItem.md#tojson)

#### Defined in

main.ts:127247

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`fromJS`](BaseGoogleTrendsItem.md#fromjs)

#### Defined in

main.ts:127240
