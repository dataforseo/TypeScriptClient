[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageDuplicateTagsResultInfo

# Class: OnPageDuplicateTagsResultInfo

## Implements

- [`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageDuplicateTagsResultInfo.md#constructor)

### Properties

- [crawl\_progress](OnPageDuplicateTagsResultInfo.md#crawl_progress)
- [crawl\_status](OnPageDuplicateTagsResultInfo.md#crawl_status)
- [items](OnPageDuplicateTagsResultInfo.md#items)
- [items\_count](OnPageDuplicateTagsResultInfo.md#items_count)
- [pages\_count](OnPageDuplicateTagsResultInfo.md#pages_count)
- [total\_pages\_count](OnPageDuplicateTagsResultInfo.md#total_pages_count)

### Methods

- [init](OnPageDuplicateTagsResultInfo.md#init)
- [toJSON](OnPageDuplicateTagsResultInfo.md#tojson)
- [fromJS](OnPageDuplicateTagsResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageDuplicateTagsResultInfo**(`data?`): [`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageDuplicateTagsResultInfo`](../interfaces/IOnPageDuplicateTagsResultInfo.md) |

#### Returns

[`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

#### Defined in

[main.ts:147244](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147244)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPageDuplicateTagsResultInfo](../interfaces/IOnPageDuplicateTagsResultInfo.md).[crawl_progress](../interfaces/IOnPageDuplicateTagsResultInfo.md#crawl_progress)

#### Defined in

[main.ts:147228](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147228)

___


### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPageDuplicateTagsResultInfo](../interfaces/IOnPageDuplicateTagsResultInfo.md).[crawl_status](../interfaces/IOnPageDuplicateTagsResultInfo.md#crawl_status)

#### Defined in

[main.ts:147230](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147230)

___


### items

• `Optional` **items**: [`OnPageDuplicateTagsItem`](OnPageDuplicateTagsItem.md)[]

items array

#### Implementation of

[IOnPageDuplicateTagsResultInfo](../interfaces/IOnPageDuplicateTagsResultInfo.md).[items](../interfaces/IOnPageDuplicateTagsResultInfo.md#items)

#### Defined in

[main.ts:147240](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147240)

___


### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPageDuplicateTagsResultInfo](../interfaces/IOnPageDuplicateTagsResultInfo.md).[items_count](../interfaces/IOnPageDuplicateTagsResultInfo.md#items_count)

#### Defined in

[main.ts:147238](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147238)

___


### pages\_count

• `Optional` **pages\_count**: `number`

number of pages with duplicate tags in the response
displays the number of pages with duplicate tags returned in the response

#### Implementation of

[IOnPageDuplicateTagsResultInfo](../interfaces/IOnPageDuplicateTagsResultInfo.md).[pages_count](../interfaces/IOnPageDuplicateTagsResultInfo.md#pages_count)

#### Defined in

[main.ts:147236](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147236)

___


### total\_pages\_count

• `Optional` **total\_pages\_count**: `number`

total number of pages with duplicate tags
displays the total number of pages with duplicate tags of the target website

#### Implementation of

[IOnPageDuplicateTagsResultInfo](../interfaces/IOnPageDuplicateTagsResultInfo.md).[total_pages_count](../interfaces/IOnPageDuplicateTagsResultInfo.md#total_pages_count)

#### Defined in

[main.ts:147233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147233)

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

[main.ts:147253](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147253)

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

[main.ts:147279](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147279)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageDuplicateTagsResultInfo`](OnPageDuplicateTagsResultInfo.md)

#### Defined in

[main.ts:147272](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147272)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")