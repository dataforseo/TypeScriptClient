[Documentation](../README.md) / [Exports](../modules.md) / KeywordIntentInfo

# Class: KeywordIntentInfo

## Implements

- [`IKeywordIntentInfo`](../interfaces/IKeywordIntentInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordIntentInfo.md#constructor)

### Properties

- [label](KeywordIntentInfo.md#label)
- [probability](KeywordIntentInfo.md#probability)

### Methods

- [init](KeywordIntentInfo.md#init)
- [toJSON](KeywordIntentInfo.md#tojson)
- [fromJS](KeywordIntentInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordIntentInfo**(`data?`): [`KeywordIntentInfo`](KeywordIntentInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordIntentInfo`](../interfaces/IKeywordIntentInfo.md) |

#### Returns

[`KeywordIntentInfo`](KeywordIntentInfo.md)

#### Defined in

main.ts:82946

## Properties

### label

• `Optional` **label**: `string`

search intent name
possible values: informational, navigational, commercial, transactional

#### Implementation of

[IKeywordIntentInfo](../interfaces/IKeywordIntentInfo.md).[label](../interfaces/IKeywordIntentInfo.md#label)

#### Defined in

main.ts:82939

___

### probability

• `Optional` **probability**: `number`

search intent probability
1 indicates the highest probability

#### Implementation of

[IKeywordIntentInfo](../interfaces/IKeywordIntentInfo.md).[probability](../interfaces/IKeywordIntentInfo.md#probability)

#### Defined in

main.ts:82942

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

main.ts:82955

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

main.ts:82973

___

### fromJS

▸ **fromJS**(`data`): [`KeywordIntentInfo`](KeywordIntentInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordIntentInfo`](KeywordIntentInfo.md)

#### Defined in

main.ts:82966
