**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new GoogleTrendsQueriesListElementItem(data)

> **new GoogleTrendsQueriesListElementItem**(`data`?): [`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)

#### Parameters

• **data?**: [`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md)

#### Returns

[`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`constructor`](BaseGoogleTrendsItem.md#constructors)

#### Source

main.ts:123757

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`_discriminator`](BaseGoogleTrendsItem.md#_discriminator)

#### Source

main.ts:20966

***

### data?

> **`optional`** **data**: [`QueriesListDataInfo`](QueriesListDataInfo.md)

Google Trends data from the corresponding item

#### Implementation of

[`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md).[`data`](../interfaces/IGoogleTrendsQueriesListElementItem.md#data)

#### Source

main.ts:123753

***

### keywords?

> **`optional`** **keywords**: `string`[]

relevant keywords
the data included in the google_trends_topics_list element is based on the keywords listed in this array

#### Implementation of

[`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md).[`keywords`](../interfaces/IGoogleTrendsQueriesListElementItem.md#keywords)

#### Source

main.ts:123751

***

### position?

> **`optional`** **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md).[`position`](../interfaces/IGoogleTrendsQueriesListElementItem.md#position)

#### Source

main.ts:123746

***

### title?

> **`optional`** **title**: `string`

title of the element in Google Trends

#### Implementation of

[`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md).[`title`](../interfaces/IGoogleTrendsQueriesListElementItem.md#title)

#### Source

main.ts:123748

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`init`](BaseGoogleTrendsItem.md#init)

#### Source

main.ts:123762

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`toJSON`](BaseGoogleTrendsItem.md#tojson)

#### Source

main.ts:123787

***

### fromJS()

> **`static`** **fromJS**(`data`): [`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`fromJS`](BaseGoogleTrendsItem.md#fromjs)

#### Source

main.ts:123780
