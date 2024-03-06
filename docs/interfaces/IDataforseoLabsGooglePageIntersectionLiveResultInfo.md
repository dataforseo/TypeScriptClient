[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGooglePageIntersectionLiveResultInfo

# Interface: IDataforseoLabsGooglePageIntersectionLiveResultInfo

## Implemented by

- [`DataforseoLabsGooglePageIntersectionLiveResultInfo`](../classes/DataforseoLabsGooglePageIntersectionLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [exclude\_pages](IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#exclude_pages)
- [items](IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#location_code)
- [pages](IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#pages)
- [se\_type](IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#total_count)

## Properties

### exclude\_pages

• `Optional` **exclude\_pages**: `string`[]

URLs you specified in a POST array that will be excluded from the results

#### Defined in

[main.ts:97321](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97321)

___


### items

• `Optional` **items**: [`DataforseoLabsPageIntersectionLiveItem`](../classes/DataforseoLabsPageIntersectionLiveItem.md)[]

contains keywords, relevant SERP elements and related data

#### Defined in

[main.ts:97331](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97331)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:97329](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97329)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:97325](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97325)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:97323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97323)

___


### pages

• `Optional` **pages**: `Object`

URLs you specified a POST array

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[main.ts:97319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97319)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:97317](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97317)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

[main.ts:97327](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97327)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")