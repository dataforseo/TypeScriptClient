[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / GoogleTrendsTopicsListElementItem

# Class: GoogleTrendsTopicsListElementItem

## Extends

- [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

## Implements

- [`IGoogleTrendsTopicsListElementItem`](../interfaces/IGoogleTrendsTopicsListElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleTrendsTopicsListElementItem()

> **new GoogleTrendsTopicsListElementItem**(`data`?): [`GoogleTrendsTopicsListElementItem`](GoogleTrendsTopicsListElementItem.md)

#### Parameters

• **data?**: [`IGoogleTrendsTopicsListElementItem`](../interfaces/IGoogleTrendsTopicsListElementItem.md)

#### Returns

[`GoogleTrendsTopicsListElementItem`](GoogleTrendsTopicsListElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`constructor`](BaseGoogleTrendsItem.md#constructors)

#### Defined in

main.ts:127927

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`_discriminator`](BaseGoogleTrendsItem.md#_discriminator)

#### Defined in

main.ts:21570

***

### data?

> `optional` **data**: [`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)

Google Trends data from the corresponding item

#### Implementation of

[`IGoogleTrendsTopicsListElementItem`](../interfaces/IGoogleTrendsTopicsListElementItem.md).[`data`](../interfaces/IGoogleTrendsTopicsListElementItem.md#data)

#### Defined in

main.ts:127923

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_topics_list element is based on the keywords listed in this array

#### Implementation of

[`IGoogleTrendsTopicsListElementItem`](../interfaces/IGoogleTrendsTopicsListElementItem.md).[`keywords`](../interfaces/IGoogleTrendsTopicsListElementItem.md#keywords)

#### Defined in

main.ts:127921

***

### position?

> `optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IGoogleTrendsTopicsListElementItem`](../interfaces/IGoogleTrendsTopicsListElementItem.md).[`position`](../interfaces/IGoogleTrendsTopicsListElementItem.md#position)

#### Defined in

main.ts:127916

***

### title?

> `optional` **title**: `string`

title of the element in Google Trends

#### Implementation of

[`IGoogleTrendsTopicsListElementItem`](../interfaces/IGoogleTrendsTopicsListElementItem.md).[`title`](../interfaces/IGoogleTrendsTopicsListElementItem.md#title)

#### Defined in

main.ts:127918

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

main.ts:127932

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

main.ts:127957

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleTrendsTopicsListElementItem`](GoogleTrendsTopicsListElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleTrendsTopicsListElementItem`](GoogleTrendsTopicsListElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`fromJS`](BaseGoogleTrendsItem.md#fromjs)

#### Defined in

main.ts:127950
