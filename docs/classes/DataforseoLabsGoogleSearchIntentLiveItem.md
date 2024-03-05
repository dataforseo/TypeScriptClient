[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleSearchIntentLiveItem

# Class: DataforseoLabsGoogleSearchIntentLiveItem

## Implements

- [`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleSearchIntentLiveItem.md#constructor)

### Properties

- [keyword](DataforseoLabsGoogleSearchIntentLiveItem.md#keyword)
- [keyword\_intent](DataforseoLabsGoogleSearchIntentLiveItem.md#keyword_intent)
- [secondary\_keyword\_intents](DataforseoLabsGoogleSearchIntentLiveItem.md#secondary_keyword_intents)

### Methods

- [init](DataforseoLabsGoogleSearchIntentLiveItem.md#init)
- [toJSON](DataforseoLabsGoogleSearchIntentLiveItem.md#tojson)
- [fromJS](DataforseoLabsGoogleSearchIntentLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleSearchIntentLiveItem**(`data?`): [`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md) |

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

#### Defined in

[main.ts:82862](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82862)

## Properties

### keyword

• `Optional` **keyword**: `string`

target keyword in a POST array

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveItem](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md).[keyword](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md#keyword)

#### Defined in

[main.ts:82854](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82854)

___

### keyword\_intent

• `Optional` **keyword\_intent**: [`KeywordIntentInfo`](KeywordIntentInfo.md)

search intent data relevant for the specified keyword

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveItem](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md).[keyword_intent](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md#keyword_intent)

#### Defined in

[main.ts:82856](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82856)

___

### secondary\_keyword\_intents

• `Optional` **secondary\_keyword\_intents**: [`KeywordIntentInfo`](KeywordIntentInfo.md)[]

contains objects with other possible search intents for the specified keyword

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveItem](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md).[secondary_keyword_intents](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md#secondary_keyword_intents)

#### Defined in

[main.ts:82858](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82858)

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

[main.ts:82871](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82871)

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

[main.ts:82894](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82894)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

#### Defined in

[main.ts:82887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82887)
