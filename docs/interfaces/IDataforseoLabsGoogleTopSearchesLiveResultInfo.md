[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleTopSearchesLiveResultInfo

# Interface: IDataforseoLabsGoogleTopSearchesLiveResultInfo

## Implemented by

- [`DataforseoLabsGoogleTopSearchesLiveResultInfo`](../classes/DataforseoLabsGoogleTopSearchesLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#location_code)
- [offset](IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#offset)
- [offset\_token](IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#offset_token)
- [se\_type](IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsGoogleTopSearchesLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

contains keywords and related data

#### Defined in

[main.ts:85363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85363)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:85355](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85355)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:85351](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85351)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:85349](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85349)

___


### offset

• `Optional` **offset**: `number`

current offset value

#### Defined in

[main.ts:85357](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85357)

___


### offset\_token

• `Optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Defined in

[main.ts:85361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85361)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:85347](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85347)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

[main.ts:85353](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85353)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")