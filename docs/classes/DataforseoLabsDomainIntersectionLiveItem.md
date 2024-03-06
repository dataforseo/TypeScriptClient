[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsDomainIntersectionLiveItem

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

[main.ts:89046](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89046)

## Properties

### first\_domain\_serp\_element

• `Optional` **first\_domain\_serp\_element**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

contains data on the first domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below

#### Implementation of

[IDataforseoLabsDomainIntersectionLiveItem](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md).[first_domain_serp_element](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md#first_domain_serp_element)

#### Defined in

[main.ts:89039](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89039)

___


### keyword\_data

• `Optional` **keyword\_data**: [`KeywordData`](KeywordData.md)

keyword data for the returned keyword

#### Implementation of

[IDataforseoLabsDomainIntersectionLiveItem](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md).[keyword_data](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md#keyword_data)

#### Defined in

[main.ts:89036](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89036)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsDomainIntersectionLiveItem](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md).[se_type](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md#se_type)

#### Defined in

[main.ts:89034](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89034)

___


### second\_domain\_serp\_element

• `Optional` **second\_domain\_serp\_element**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

contains data on the second domain’s SERP element found for the returned keyword
the list of supported SERP elements can be found below

#### Implementation of

[IDataforseoLabsDomainIntersectionLiveItem](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md).[second_domain_serp_element](../interfaces/IDataforseoLabsDomainIntersectionLiveItem.md#second_domain_serp_element)

#### Defined in

[main.ts:89042](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89042)

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

[main.ts:89055](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89055)

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

[main.ts:89075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89075)

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

[main.ts:89068](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89068)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")