**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / GoogleTrendsMapElementItem

# Class: GoogleTrendsMapElementItem

## Extends

- [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

## Implements

- [`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleTrendsMapElementItem(data)

> **new GoogleTrendsMapElementItem**(`data`?): [`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

#### Parameters

• **data?**: [`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md)

#### Returns

[`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`constructor`](BaseGoogleTrendsItem.md#constructors)

#### Source

main.ts:125758

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`_discriminator`](BaseGoogleTrendsItem.md#_discriminator)

#### Source

main.ts:21061

***

### data?

> **`optional`** **data**: [`TrendsMapDataInfo`](TrendsMapDataInfo.md)[]

Google Trends data from the corresponding item

#### Implementation of

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md).[`data`](../interfaces/IGoogleTrendsMapElementItem.md#data)

#### Source

main.ts:125754

***

### keywords?

> **`optional`** **keywords**: `string`[]

relevant keywords
the data included in the google_trends_map element is based on the keywords listed in this array

#### Implementation of

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md).[`keywords`](../interfaces/IGoogleTrendsMapElementItem.md#keywords)

#### Source

main.ts:125752

***

### position?

> **`optional`** **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md).[`position`](../interfaces/IGoogleTrendsMapElementItem.md#position)

#### Source

main.ts:125747

***

### title?

> **`optional`** **title**: `string`

title of the element in Google Trends

#### Implementation of

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md).[`title`](../interfaces/IGoogleTrendsMapElementItem.md#title)

#### Source

main.ts:125749

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

main.ts:125763

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

main.ts:125792

***

### fromJS()

> **`static`** **fromJS**(`data`): [`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`fromJS`](BaseGoogleTrendsItem.md#fromjs)

#### Source

main.ts:125785
