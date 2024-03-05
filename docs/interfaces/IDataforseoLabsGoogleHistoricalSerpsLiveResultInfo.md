[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo

# Interface: IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo

## Implemented by

- [`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../classes/DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#items_count)
- [keyword](IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#keyword)
- [language\_code](IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsGoogleHistoricalSerpsLiveItem`](../classes/DataforseoLabsGoogleHistoricalSerpsLiveItem.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:92337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92337)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:92335](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92335)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:92327](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92327)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:92331](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92331)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:92329](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92329)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:92324](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92324)

___

### total\_count

• `Optional` **total\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:92333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92333)
