[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleRelevantPagesLiveResultInfo

# Interface: IDataforseoLabsGoogleRelevantPagesLiveResultInfo

## Implemented by

- [`DataforseoLabsGoogleRelevantPagesLiveResultInfo`](../classes/DataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#se_type)
- [target](IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#target)
- [total\_count](IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsRelevantPagesLiveItem`](../classes/DataforseoLabsRelevantPagesLiveItem.md)[]

relevant pages and related data

#### Defined in

[main.ts:90367](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90367)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:90365](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90365)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:90361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90361)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:90358](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90358)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:90353](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90353)

___


### target

• `Optional` **target**: `string`

target domain in a POST array

#### Defined in

[main.ts:90355](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90355)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

[main.ts:90363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90363)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")