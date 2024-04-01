[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsDomainIntersectionLiveItem

# Class: DataforseoLabsDomainIntersectionLiveItem

## Implements

- [`IDataforseoLabsDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsDomainIntersectionLiveItem.md#constructor)

### Properties

- [first\_domain\_serp\_element](DataforseoLabsDomainIntersectionLiveItem.md#first_domain_serp_element)
- [keyword\_data](DataforseoLabsDomainIntersectionLiveItem.md#keyword_data)
- [se\_type](DataforseoLabsDomainIntersectionLiveItem.md#se_type)
- [second\_domain\_serp\_element](DataforseoLabsDomainIntersectionLiveItem.md#second_domain_serp_element)

### Methods

- [init](DataforseoLabsDomainIntersectionLiveItem.md#init)
- [toJSON](DataforseoLabsDomainIntersectionLiveItem.md#tojson)
- [fromJS](DataforseoLabsDomainIntersectionLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsDomainIntersectionLiveItem**(`data?`): [`DataforseoLabsDomainIntersectionLiveItem`](DataforseoLabsDomainIntersectionLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsDomainIntersectionLiveItem`](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md) |

#### Returns

[`DataforseoLabsDomainIntersectionLiveItem`](DataforseoLabsDomainIntersectionLiveItem.md)

#### Defined in

main.ts:91423

## Properties

### first\_domain\_serp\_element

• `Optional` **first\_domain\_serp\_element**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

contains data on the first domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below

#### Implementation of

[IDataforseoLabsDomainIntersectionLiveItem](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md).[first_domain_serp_element](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md#first_domain_serp_element)

#### Defined in

main.ts:91416

___

### keyword\_data

• `Optional` **keyword\_data**: [`KeywordData`](KeywordData.md)

keyword data for the returned keyword

#### Implementation of

[IDataforseoLabsDomainIntersectionLiveItem](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md).[keyword_data](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md#keyword_data)

#### Defined in

main.ts:91413

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsDomainIntersectionLiveItem](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md).[se_type](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md#se_type)

#### Defined in

main.ts:91411

___

### second\_domain\_serp\_element

• `Optional` **second\_domain\_serp\_element**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

contains data on the second domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below

#### Implementation of

[IDataforseoLabsDomainIntersectionLiveItem](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md).[second_domain_serp_element](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md#second_domain_serp_element)

#### Defined in

main.ts:91419

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

main.ts:91432

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

main.ts:91452

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsDomainIntersectionLiveItem`](DataforseoLabsDomainIntersectionLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsDomainIntersectionLiveItem`](DataforseoLabsDomainIntersectionLiveItem.md)

#### Defined in

main.ts:91445
