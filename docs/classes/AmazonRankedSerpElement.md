[Documentation](../README.md) / [Exports](../modules.md) / AmazonRankedSerpElement

# Class: AmazonRankedSerpElement

## Implements

- [`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AmazonRankedSerpElement.md#constructor)

### Properties

- [check\_url](AmazonRankedSerpElement.md#check_url)
- [last\_updated\_time](AmazonRankedSerpElement.md#last_updated_time)
- [previous\_updated\_time](AmazonRankedSerpElement.md#previous_updated_time)
- [se\_results\_count](AmazonRankedSerpElement.md#se_results_count)
- [se\_type](AmazonRankedSerpElement.md#se_type)
- [serp\_item](AmazonRankedSerpElement.md#serp_item)
- [serp\_item\_types](AmazonRankedSerpElement.md#serp_item_types)

### Methods

- [init](AmazonRankedSerpElement.md#init)
- [toJSON](AmazonRankedSerpElement.md#tojson)
- [fromJS](AmazonRankedSerpElement.md#fromjs)

## Constructors

### constructor

• **new AmazonRankedSerpElement**(`data?`): [`AmazonRankedSerpElement`](AmazonRankedSerpElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md) |

#### Returns

[`AmazonRankedSerpElement`](AmazonRankedSerpElement.md)

#### Defined in

main.ts:102440

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure that we provided accurate results

#### Implementation of

[IAmazonRankedSerpElement](../interfaces/IAmazonRankedSerpElement.md).[check_url](../interfaces/IAmazonRankedSerpElement.md#check_url)

#### Defined in

main.ts:102419

___

### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when SERP data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAmazonRankedSerpElement](../interfaces/IAmazonRankedSerpElement.md).[last_updated_time](../interfaces/IAmazonRankedSerpElement.md#last_updated_time)

#### Defined in

main.ts:102431

___

### previous\_updated\_time

• `Optional` **previous\_updated\_time**: `string`

previous to the most recent update of SERP data
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2020-09-12T00:07:43.0733218Z

#### Implementation of

[IAmazonRankedSerpElement](../interfaces/IAmazonRankedSerpElement.md).[previous_updated_time](../interfaces/IAmazonRankedSerpElement.md#previous_updated_time)

#### Defined in

main.ts:102436

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in Amazon SERP

#### Implementation of

[IAmazonRankedSerpElement](../interfaces/IAmazonRankedSerpElement.md).[se_results_count](../interfaces/IAmazonRankedSerpElement.md#se_results_count)

#### Defined in

main.ts:102426

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IAmazonRankedSerpElement](../interfaces/IAmazonRankedSerpElement.md).[se_type](../interfaces/IAmazonRankedSerpElement.md#se_type)

#### Defined in

main.ts:102413

___

### serp\_item

• `Optional` **serp\_item**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

contains data on the SERP element
the list of supported SERP elements can be found below

#### Implementation of

[IAmazonRankedSerpElement](../interfaces/IAmazonRankedSerpElement.md).[serp_item](../interfaces/IAmazonRankedSerpElement.md#serp_item)

#### Defined in

main.ts:102416

___

### serp\_item\_types

• `Optional` **serp\_item\_types**: `string`[]

direct URL to Amazon results
contains types of all search results (items) found in the returned SERP;
possible item types:
amazon_serp, amazon_paid, editorial_recommendations, top_rated_from_our_brands, related_searches

#### Implementation of

[IAmazonRankedSerpElement](../interfaces/IAmazonRankedSerpElement.md).[serp_item_types](../interfaces/IAmazonRankedSerpElement.md#serp_item_types)

#### Defined in

main.ts:102424

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:102449

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:102476

___

### fromJS

▸ **fromJS**(`data`): [`AmazonRankedSerpElement`](AmazonRankedSerpElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AmazonRankedSerpElement`](AmazonRankedSerpElement.md)

#### Defined in

main.ts:102469
